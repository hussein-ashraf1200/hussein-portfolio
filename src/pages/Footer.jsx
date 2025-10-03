import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const footerDate = [
    {
      id: "1",
      title: "LinkedIn",
      imgurl: linkedin,
      URL: "https://www.linkedin.com/in/hussein-ashraff", // ✅ LinkedIn
    },

    {
      id: "3",
      title: "Github",
      imgurl: github,
      URL: "https://github.com/hussein-ashraf1200", // ✅ GitHub
    },
  ];

  return (
    <footer className="w-full border-t border-gray-700 bg-black/90 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-10 text-gray-300">
        {/* logo */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            loading="lazy"
            className="size-20 rounded-full border-2 border-gray-500 shadow-lg"
            src={logo}
            alt="logo img"
          />
          <h2 className="text-xl font-bold">Hussein Ashref</h2>
          <p className="text-sm text-gray-400">
            Frontend Developer | React Enthusiast
          </p>
        </div>

        {/* connections */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold mb-4 text-white">Connections</h1>
          <div className="flex flex-col gap-3">
            {footerDate.map((items) => (
              <a
                key={items.id}
                href={items.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:scale-110 transition-transform hover:text-cyan-400"
              >
                <img
                  loading="lazy"
                  className="size-6"
                  src={items.imgurl}
                  alt={items.title}
                />
                <p>{items.title}</p>
              </a>
            ))}
          </div>
        </div>

        {/* contact */}
        <div className="text-center md:text-right">
          <h1 className="text-lg font-semibold mb-4 text-white">Contact</h1>
          <p className="hover:text-white cursor-pointer transition-colors">
            hussein061200@gmail.com
          </p>
          <p className="hover:text-white cursor-pointer transition-colors">
            01210238724
          </p>
        </div>
      </div>

      {/* small footer line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Hussein Ashref. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
