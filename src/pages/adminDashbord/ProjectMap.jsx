import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
gsap.registerPlugin(ScrollTrigger);
const ProjectMap = () => {
  const [myproject, setMyproject] = useState([]);

  // to send massage to whatsapp
  const demoHandel = (url) => {
    window.open(url, "_blank");
  };
  // gsap animation
  // 🟢 GSAP Animation بعد ما الداتا تتجاب
  useEffect(() => {
    if (myproject.length > 0) {
      gsap.utils.toArray(".clipCard").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            end: "bottom 60%",
          },
        });
      });

      gsap.utils.toArray(".texts").forEach((text) => {
        gsap.from(text, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 70%",
            end: "bottom 60%",
          },
        });
      });

      gsap.utils.toArray(".livedemo").forEach((demo) => {
        gsap.from(demo, {
          opacity: 0,
          y: 60,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: demo,
            start: "top 70%",
            end: "bottom 60%",
          },
        });
      });
    }
  }, [myproject]); // 🟢 كل مرة المشاريع تتغير شغل الأنيميشين
  // 🟢 Fetch data from Firestore
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMyproject(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchExperiences();
  }, []);
  return (
    <div>
      {myproject.map((card) => (
        <div
          key={card.id}
          className="test flex flex-col mt-10 sm:flex-row items-center justify-around w-full"
        >
          <div className="relative ">
            <div className="clipCard w-[250px]  h-[300px]">
              <img
                loading="lazy"
                src={card.imgurl}
                alt={card.id}
                className="w-full h-full object-cover"
              />
              <div className="text ml-6 w-[200px]">
                <p className="text-red-700">{card.description}</p>
              </div>
            </div>
            <div
              className="texts text-center absolute  top-0 w-[145px] h-[45px] rounded-sm bg-gradient-to-br from-neutral-900
                         to-neutral-700 text-white  border-4 border-neutral-800  title flex items-center justify-center"
            >
              {card.id}
            </div>
            <div
              onClick={() => demoHandel(card.URL)}
              className="livedemo absolute right-0 bottom-0 w-[145px] h-[35px] text-white rounded-sm flex 
    items-center border-4 border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-700 justify-center cursor-pointer active:scale-125 active:bg-gradient-to-br active:from-neutral-800 active:to-neutral-600 transition-all duration-700 ease-in-out"
            >
              Live Demo
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectMap;
