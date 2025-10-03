import React from "react";
import {
  PanelsTopLeft,
  SquarePlus,
  Layers,
  Folder,
  CircleArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    name: "Overview",
    icon: <PanelsTopLeft />,
    path: "/dashboard/overview",
  },
  {
    id: 2,
    name: "Experience",
    icon: <SquarePlus />,
    path: "/dashboard/experience",
  },
  { id: 3, name: "Technology", icon: <Layers />, path: "/dashboard/tech" },
  { id: 4, name: "Projects", icon: <Folder />, path: "/dashboard/projects" },
];

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-1/4  ">
      {/* header */}
      <div className="head flex justify-start gap-4 ml-0 sm:ml-4 p-2 items-center">
        <button className="text-white" onClick={() => navigate("/#")}>
          <CircleArrowLeft />
        </button>
        <h1 className=" hidden sm:block text-[10px]  text-white sm:text-2xl">
          {" "}
          Dashboard
        </h1>
      </div>
      {/* desktop side bar */}
      <div className="hidden bg-gray-400  rounded-xl h-screen p-4 sm:block">
        {menuItems.map((items) => {
          const isActive = location.pathname === items.path;
          return (
            <button
              key={items.id}
              onClick={() => navigate(items.path)}
              className={`flex items-center gap-3 rounded-xl w-3/4 h-10 p-4 mt-3 transition ${
                isActive
                  ? "bg-cyan-600 text-white font-bold"
                  : "bg-[#182C4C] text-gray-300 hover:bg-[#23456a] hover:text-white"
              }`}
              title={items.name}
            >
              {items.icon}
              {items.name}
            </button>
          );
        })}
      </div>
      {/* mobile side bar */}

      <div className="smallmedia block sm:hidden">
        <div className=" bg-gray-400 rounded-xl flex flex-col gap-2 items-center w-10  h-screen p-4 ">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`transition ${
                  isActive ? "text-cyan-600" : "text-white hover:text-black"
                }`}
                title={item.name}
              >
                {item.icon}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
