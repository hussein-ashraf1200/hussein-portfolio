import React, { useState } from "react";
import { Briefcase, FolderDot, HomeIcon, Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import LightLamp from "./LightLamp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const closeTab = () => setOpenMenu(false);
  const openTab = () => setOpenMenu(true);
  const [activeTab, setActiveTab] = useState("home");

  const handleSetActive = (tapName) => {
    setActiveTab(tapName);
  };
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate("/dashboard/overview");
  };

  return (
    <div>
      <nav
        className="fixed w-full  top-0 left-0 flex z-50
         sm:justify-around justify-between 
       items-center p-2"
      >
        {/* logo */}
        <Link to="/">
          <img
            className="w-12 h-12 rounded-full "
            loading="lazy"
            src={logo}
            alt="Website logo"
          />
        </Link>

        {/* desktop nav */}

        <ul
          className=" w-[500px] bg-black  
           rounded-3xl pr-9 pl-9 p-2 md:text-[17px]
           text-gray-400 sm:flex sm:gap-6 gap-2 
        justify-center items-center hidden"
        >
          <a href="#" onClick={() => handleSetActive("home")}>
            {activeTab === "home" ? <HomeIcon width={40} /> : "Home"}
            {activeTab === "home" && <LightLamp />}
          </a>

          <a href="#about" onClick={() => handleSetActive("about")}>
            {activeTab === "about" ? <HomeIcon width={40} /> : "About"}
            {activeTab === "about" && <LightLamp />}
          </a>
          <a href="#experience" onClick={() => handleSetActive("experience")}>
            {activeTab === "experience" ? <HomeIcon width={40} /> : "Experince"}
            {activeTab === "experience" && <LightLamp />}
          </a>

          <a href="#tech" onClick={() => handleSetActive("tech")}>
            {activeTab === "tech" ? <Briefcase width={40} /> : "Skills"}
            {activeTab === "tech" && <LightLamp />}
          </a>
          <a href="#project" onClick={() => handleSetActive("project")}>
            {activeTab === "project" ? <FolderDot /> : "Project"}
            {activeTab === "project" && <LightLamp />}
          </a>
          <a href="#contact" onClick={() => handleSetActive("contact")}>
            {activeTab === "contact" ? <Phone /> : "Contact"}
            {activeTab === "contact" && <LightLamp />}
          </a>
        </ul>

        {/* login and mobile menu */}
        <div className="flex justify-center items-center gap-2">
          <button onClick={openTab} className="sm:hidden">
            <Menu />
          </button>
          <div className=" hidden sm:block">
            <button
              onClick={handleDashboardClick}
              className="bg-black text-gray-400   p-2 rounded-3xl"
            >
              Dashboard
            </button>
          </div>
        </div>
      </nav>

      {/* mobile sidebar menu */}
      <div
        className={`fixed  top-0 left-0 w-full h-lvh z-50  
            backdrop-blur-sm transition-transform duration-500
             ease-in-out sm:hidden flex justify-center items-center transform ${
               openMenu ? "translate-x-0" : "-translate-x-full"
             }`}
      >
        <button onClick={closeTab} className="fixed top-4 right-4">
          <X />
        </button>
        <ul className="flex flex-col items-center text-white justify-center gap-3.5  text-lg">
          <a href="#" onClick={closeTab}>
            Home
          </a>
          <a href="#about" onClick={closeTab}>
            About
          </a>
          <a href="#experience" onClick={closeTab}>
            Experince
          </a>
          <a href="#tech" onClick={closeTab}>
            Skills
          </a>
          <a href="#project" onClick={closeTab}>
            Projects
          </a>
          <a href="#contact" onClick={closeTab}>
            Contact
          </a>
          <div className=" sm:hidden block">
            <button
              onClick={handleDashboardClick}
              className="bg-black text-gray-400   p-2 rounded-3xl"
            >
              Dashboard
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
