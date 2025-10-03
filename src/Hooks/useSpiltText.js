import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const useSplitText = (selector, options = {}) => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      // تقسيم النصوص
      const split = new SplitText(selector, {
        type: "words", // أو "chars, words" لو عايز
      });

      // أنيميشن للكلمات
      gsap.from(split.words, {
        opacity: 0,
        yPercent: 120,
        stagger: 0.2, // سرعة ظهور الكلمات وحدة وحدة
        duration: 1,
        scrollTrigger: {
          markers: true,
          trigger: selector, // هنا الافضل نستخدم نفس الـselector بدل ".aboutMe"
          start: "top center",
          end: "80% center",
          scrub: 1,
          snap: 1,
        },
      });
    }, options);
  });
};
