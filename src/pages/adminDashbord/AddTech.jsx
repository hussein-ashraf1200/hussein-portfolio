import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import toast from "react-hot-toast";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const AddTech = () => {
  const [techName, setTechName] = useState("");
  const [duration, setDuration] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [technologies, setTechnologies] = useState([]);

  // رفع الصورة لـ Cloudinary
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        return data.secure_url;
      } else {
        console.error("Cloudinary upload failed:", data);
        toast.error("❌ Cloudinary upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("⚠️     Error uploading image");
      return null;
    }
  };

  // fetch all technologies
  const fetchTechnologies = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "technologies"));
      const data = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setTechnologies(data);
    } catch (error) {
      console.error("Error fetching technologies:", error);
      toast.error("⚠️ Error fetching technologies");
    }
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  // الحفظ في Firestore
  const handleSave = async () => {
    if (!techName || !duration || !imageFile) {
      toast.error("Please fill in all required fields ❌");
      return;
    }

    setLoading(true);

    try {
      const imgUrl = await handleImageUpload(imageFile);
      if (!imgUrl) {
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "technologies"), {
        name: techName,
        imgurl: imgUrl,
        duration: duration,
      });

      toast.success("✅ Experience saved successfully");
      setTechName("");
      setDuration("");
      setImageFile(null);
      fetchTechnologies(); // refresh list
    } catch (error) {
      console.error("Error saving tech:", error);
      toast.error("Error saving tech");
    }

    setLoading(false);
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "technologies", id));
      toast.success(" Experience deleted");
      fetchTechnologies();
    } catch (error) {
      console.error("Error deleting tech:", error);
      toast.error("Error deleting tech");
    }
  };

  return (
    <div id="addtech" className="container w-full max-w-2xl mx-auto">
      <h1 className="text-white text-xl sm:text-2xl font-semibold mb-6">
        Add Technology
      </h1>
      <div className="inputs border border-gray-600 p-6 rounded-lg shadow-md bg-gray-900 mb-10">
        {/* Technology */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-white mb-1" htmlFor="tech">
            Technology
          </label>
          <input
            type="text"
            id="tech"
            value={techName}
            onChange={(e) => setTechName(e.target.value)}
            placeholder="Enter Your Technology"
            className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
          />
        </div>

        {/* Image */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-white mb-1" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
          />
        </div>

        {/* Duration */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-white mb-1" htmlFor="duration">
            Duration Time
          </label>
          <input
            type="text"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter Duration (e.g., 2s)"
            className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md sm:w-full w-[160px] disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save "}
        </button>
      </div>

      {/* List of Technologies */}
      <div className="space-y-4">
        <h1 className="text-white text-xl sm:text-2xl font-semibold mb-6">
          Delete Technology
        </h1>
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={tech.imgurl}
                alt={tech.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <h2 className=" hidden sm:block text-white  font-semibold">
                  {tech.name}
                </h2>
              </div>
            </div>
            <button
              onClick={() => handleDelete(tech.id)}
              className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddTech;
