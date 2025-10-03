import React, { useRef, useEffect, useState } from "react";
import Hero from "./Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();
  const heroRef = useRef();
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    gsap.from(heroRef.current, {
      x: 400,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
  }, []);

  // 🟢 Fetch data from Firestore
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
    <section
      ref={container}
      id="experience"
      className="text-xl flex flex-col justify-center items-center 
                 min-h-screen px-4 md:px-10 lg:px-20 py-16 overflow-x-hidden"
    >
      <div
        className="flex flex-col-reverse md:flex-row justify-between items-center 
                   w-full max-w-6xl gap-10 md:gap-16 lg:gap-32"
      >
        {/* النص */}
        <div className="flex flex-col justify-center items-start text-center md:text-left max-w-xl">
          <h1 className="text-red-400 mt-4 text-4xl md:text-3xl lg:text-4xl">
            Ex <span className="text-white text-2xl">perience</span>
          </h1>

          <div className="mt-6 space-y-6">
            {experiences.map((item, index) => (
              <article
                key={index}
                className="relative border-l-4 border-red-400 pl-4"
              >
                <h2 className="text-xl font-bold text-red-400">
                  {item.position}
                </h2>
                <p className="text-gray-800">{item.company}</p>
                <p className="text-sm text-gray-600 italic">{item.duration}</p>
                <p className="mt-2 text-gray-700">{item.description}</p>
                <p className="mt-2 text-sm text-blue-600">
                  {item.tech?.join(" • ")}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* الموديل جاي من اليمين */}
        <div
          ref={heroRef}
          className="flex justify-center items-center w-full md:w-1/2"
        >
          <Hero />
        </div>
      </div>
    </section>
  );
};

export default About;
