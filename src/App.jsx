import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import { SignIn } from "@clerk/clerk-react";
import React, { Suspense, lazy } from "react";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Projects = lazy(() => import("./pages/Projects"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const HeroFirstPage = lazy(() => import("./component/HeroFirstPage"));
const About = lazy(() => import("./pages/About"));
const Hero = lazy(() => import("./pages/Hero"));
const Tech = lazy(() => import("./pages/Tech"));
const Footer = lazy(() => import("./pages/Footer"));
const Overview = lazy(() => import("./pages/adminDashbord/Overview"));
const AdminExperience = lazy(() =>
  import("./pages/adminDashbord/AdminExperience")
);
const AdminTech = lazy(() => import("./pages/adminDashbord/AdminTech"));
const AdminProject = lazy(() => import("./pages/adminDashbord/AdminProject"));
const AddExperience = lazy(() => import("./pages/adminDashbord/AddExperience"));
const AddTech = lazy(() => import("./pages/adminDashbord/AddTech"));
const AddProject = lazy(() => import("./pages/adminDashbord/AddProject"));
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroFirstPage />
              <Home />
              <About />
              <Tech />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* dashbord layout */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="experience" element={<AdminExperience />} />
          <Route path="tech" element={<AdminTech />} />
          <Route path="projects" element={<AdminProject />} />
          <Route path="addexperience" element={<AddExperience />} />
          <Route path="addtech" element={<AddTech />} />
          <Route path="addproject" element={<AddProject />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;
