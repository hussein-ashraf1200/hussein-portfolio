import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-hot-toast";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  // Upload image to Cloudinary
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
        console.log("Image uploaded successfully:", data.secure_url);
        return data.secure_url;
      } else {
        console.error("Cloudinary upload failed:", data);
        toast.error("Image upload failed!");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image!");
      return null;
    }
  };

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setProjects(data);
      console.log("Projects fetched successfully:", data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Error fetching projects!");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Save project
  const handleSave = async () => {
    if (!title || !description || !url || !imageFile) {
      toast.error("Please fill in all fields!");
      return;
    }

    setLoading(true);

    try {
      const imgUrl = await handleImageUpload(imageFile);
      if (!imgUrl) {
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "projects"), {
        title,
        description,
        URL: url,
        imgurl: imgUrl,
      });

      toast.success("Project saved successfully!");
      console.log("Project saved successfully");

      // Reset form
      setTitle("");
      setDescription("");
      setUrl("");
      setImageFile(null);

      fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);
      toast.error("Error saving project!");
    }

    setLoading(false);
  };

  // Delete project
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      toast.success("Project deleted successfully!");
      console.log("Project deleted:", id);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Error deleting project!");
    }
  };

  return (
    <div id="addproject" className="container w-full max-w-2xl mx-auto">
      <h1 className="text-white text-2xl font-semibold mb-6">Add Project</h1>

      {/* Form */}
      <div className="inputs border border-gray-600 p-6 rounded-lg shadow-md bg-gray-900 mb-10">
        {/* Title */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-white mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project Title"
            className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-white mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project Description"
            rows="3"
            className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
          ></textarea>
        </div>

        {/* URL */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-white mb-1" htmlFor="url">
            Project URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
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

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md w-full"
        >
          {loading ? "Saving..." : "Save Project"}
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        <h1 className="text-white text-2xl font-semibold mb-6">
          Delete Project
        </h1>
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={proj.imgurl}
                alt={proj.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <h2 className="text-white font-semibold">{proj.title}</h2>
                <p className=" hidden sm:block text-gray-300 text-sm">
                  {proj.description}
                </p>
                <a
                  href={proj.URL}
                  target="_blank"
                  rel="noreferrer"
                  className=" hidden sm:block text-blue-400 underline text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <button
              onClick={() => handleDelete(proj.id)}
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

export default AddProject;
