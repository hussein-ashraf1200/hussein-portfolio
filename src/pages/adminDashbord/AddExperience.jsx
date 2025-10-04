import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";

const AddExperience = () => {
  const { user } = useUser();

  const allowedEmail = "hussein061200@gmail.com";
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const [formData, setFormData] = useState({
    company: "",
    position: "",
    description: "",
    duration: "",
    tech: "",
  });

  const [experiences, setExperiences] = useState([]);

  // fetch all experiences
  const fetchExperiences = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "experience"));
      const data = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setExperiences(data);
    } catch (error) {
      console.error("Error saving experience:", error);

      toast.error("Failed to load experiences ");
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // handle save to Firestore
  const handleSave = async () => {
    if (!user) {
      toast.error("You must be signed in ");
      return;
    }

    if (userEmail !== allowedEmail) {
      toast.error("You are not authorized to add experience ");
      return;
    }
    if (!formData.company || !formData.position || !formData.duration) {
      toast.error("Please fill in all required fields ");
      return;
    }

    try {
      await addDoc(collection(db, "experience"), {
        ...formData,
        tech: formData.tech
          ? formData.tech.split(",").map((t) => t.trim())
          : [],
      });
      toast.success("✅ Experience saved successfully");
      setFormData({
        company: "",
        position: "",
        description: "",
        duration: "",
        tech: "",
      });
      fetchExperiences();
    } catch (error) {
      console.error("Error saving experience:", error);
      toast.error("Error saving experience ❌");
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (userEmail !== allowedEmail) {
      toast.error("You are not authorized to Delete experience ");
      return;
    }
    try {
      await deleteDoc(doc(db, "experience", id));
      toast.success(" Experience deleted");
      setExperiences((prev) => prev.filter((exp) => exp.id !== id)); // Optimistic update
    } catch (error) {
      console.error("Error deleting experience:", error);
      toast.error("Error deleting ");
    }
  };

  return (
    <div id="addexperience" className="container w-full max-w-2xl mx-auto">
      <h1 className="text-white text-xl sm:text-2xl font-semibold mb-6">
        Add Experience
      </h1>

      {/* Inputs */}
      <div className="inputs border border-gray-600 p-6 rounded-lg shadow-md bg-gray-900 mb-10">
        {["company", "position", "duration"].map((field) => (
          <div className="flex flex-col w-full mb-4" key={field}>
            <label className="text-white mb-1 capitalize" htmlFor={field}>
              {field}
            </label>
            <input
              type="text"
              id={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
            />
          </div>
        ))}

        {/* Description */}
        <div className="flex flex-col w-full mb-4">
          <label className="text-white mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Your Description"
            rows="3"
            className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
          ></textarea>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-col w-full mb-6">
          <label className="text-white mb-1" htmlFor="tech">
            Tech Tags
          </label>
          <input
            type="text"
            id="tech"
            value={formData.tech}
            onChange={handleChange}
            placeholder="e.g., React, Tailwind"
            className="border border-gray-400 bg-transparent rounded-md p-2 w-full text-white"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md 
          sm:w-full w-[160px]"
        >
          Save Experience
        </button>
      </div>

      {/* List of experiences */}
      <h1 className="text-white text-xl sm:text-2xl font-semibold mb-6">
        Saved Experiences
      </h1>
      <div className="space-y-4">
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-md"
            >
              <div>
                <h2 className="text-white font-semibold">{exp.company}</h2>
                <p className="text-gray-300">{exp.position}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                {exp.tech && (
                  <p className="text-sm text-cyan-400">{exp.tech.join(", ")}</p>
                )}
              </div>
              <button
                onClick={() => handleDelete(exp.id)}
                className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No experiences added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AddExperience;
