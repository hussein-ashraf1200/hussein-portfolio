import HTMLFlipBook from "react-pageflip";
import story1 from "../assets/story/story1.png";
import story2 from "../assets/story/story2.png";
import story3 from "../assets/story/story3.png";
import story4 from "../assets/story/story4.png";
import story5 from "../assets/story/story5.png";
import story6 from "../assets/story/story6.png";
import story7 from "../assets/story/story7.png";
import story8 from "../assets/story/story8.png";
import story9 from "../assets/story/story9.png";
import story10 from "../assets/story/story10.png";
import cover2 from "../assets/cover2.jpg";
import cover from "../assets/cover.png";

const SotryLife = () => {
  const storyPages = [
    {
      image: story1,
      text: "In the bustling city of Alexandria, where history meets modernity, Hussein began his journey. He possessed an insatiable curiosity about how things worked and how the digital world could be shaped and transformed with a touch of a button.",
    },
    {
      image: story2,
      text: "It wasn't long before Hussein discovered his passion for front-end development. He began learning the essential web languages: HTML, which builds the structure; CSS, which gives it beauty; and JavaScript, which brings it to life.",
    },
    {
      image: story3,
      text: "With every line of code, Hussein built something new. From simple registration forms to interactive weather applications, each project marked a step forward in his understanding of the digital world.",
    },
    {
      image: story4,
      text: "Hussein didn't stop at the basics. He knew the world of web development was constantly evolving, and soon he delved into powerful frameworks and libraries like React.js and Vue.js, opening new horizons for creativity.",
    },
    {
      image: story5,
      text: "Armed with his growing skill set, Hussein took the bold step to become a freelance Front-End Developer. This was when he began transforming ideas into digital realities for his clients.",
    },
    {
      image: story6,
      text: "Among his most significant achievements was building e-commerce platforms. Imagine Shoppy where shoppers could browse products with ease, or Book Store, connecting readers with their favorite books.",
    },
    {
      image: story7,
      text: "His skills weren't limited to e-commerce. He also developed applications like Car Rent to simplify bookings and Map Simulator to offer unique interactive experiences.",
    },
    {
      image: story8,
      text: "Hussein's journey wasn't just about technical skills. He honed his ability to solve problems, manage his time effectively, and most importantly, he was always a self-learner, ready to explore new frontiers.",
    },
    {
      image: story9,
      text: "Now, Hussein looks to the future with bright eyes. Every line of code he writes is not just a symbol, but a step towards building a more seamless, interactive, and inspiring digital world.",
    },
    {
      image: story10,
      text: "And so, Hussein's journey continues, a developer who combines passion, precision, and innovation, leaving his mark on the web, page by page, project by project.",
    },
  ];

  return (
    <HTMLFlipBook width={300} height={500} flippingTime={1200}>
      {/* غلاف البداية */}

      <div className="cover h-full bg-[#ECEDEC] rounded-2xl overflow-hidden">
        <img src={cover2} alt="img" className="w-full h-full object-cover" />
      </div>

      {/* الصفحات من المصفوفة */}
      {storyPages.map((items, index) => (
        <div key={index} className="page p-4">
          <h1 className="text-lg font-semibold">Hussein Ashraf</h1>
          <img
            className="w-full h-60 object-cover rounded-md"
            src={items.image}
            alt={`story ${index + 1}`}
          />
          <p className="mt-3 text-sm leading-relaxed">{items.text}</p>
        </div>
      ))}

      {/* غلاف النهاية */}
      <div className="cover h-full bg-[#ECEDEC] rounded-2xl overflow-hidden">
        <img src={cover} alt="img" className="w-full h-full object-cover" />
      </div>
    </HTMLFlipBook>
  );
};

export default SotryLife;
