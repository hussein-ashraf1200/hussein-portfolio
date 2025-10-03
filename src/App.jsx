import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import { SignIn } from "@clerk/clerk-react";
import HeroFirstPage from "./component/HeroFirstPage";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Welcome from "./component/Welcome";
import Tech from "./pages/Tech";
import MyStory from "./pages/MyStory";
import Footer from "./pages/Footer";
import Overview from "./pages/adminDashbord/Overview";
import AdminExperience from "./pages/adminDashbord/AdminExperience";
import AdminTech from "./pages/adminDashbord/AdminTech";
import AdminProject from "./pages/adminDashbord/AdminProject";
import AddExperience from "./pages/adminDashbord/AddExperience";
import AddTech from "./pages/adminDashbord/AddTech";
import AddProject from "./pages/adminDashbord/AddProject ";
import { Toaster } from "react-hot-toast";

// import SmokeyCursor from "../src/components/lightswind/smokey-cursor";

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
