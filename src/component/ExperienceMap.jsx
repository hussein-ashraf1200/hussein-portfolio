import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ExperienceMap = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "experience"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchExperiences();
  }, []);
  return (
    <div>
      {experiences.map((item) => (
        <div
          key={item.id}
          className="mb-6 p-4 border border-gray-300 rounded-lg"
        >
          <h1 className="text-xl font-bold text-red-400">{item.position}</h1>
          <p className="text-gray-800">{item.company}</p>
          <p className="text-sm text-gray-600">{item.duration}</p>
          <p className="mt-2 text-gray-700">{item.description}</p>
          <p className="mt-2 text-sm text-red-400">
            {Array.isArray(item.tech) ? item.tech.join(" | ") : item.tech}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceMap;
