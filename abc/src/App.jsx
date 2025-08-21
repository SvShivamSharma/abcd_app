import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Offers from "./components/Offers";
import Leader from "./components/Leader"; 
import Events from "./components/Events"; // Page 1


import "./App.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Prevent page scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <div className="app-container">
      <Header />
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {isSidebarOpen && (
        <div className="sidebar-overlay">
          <Sidebar />
        </div>
      )}

      <main className="content">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <ImageSlider />
                <Slider />
              </>
            }
          />

          {/* Footer navigation pages */}
          <Route path="/leader" element={<Leader/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/offers" element={<Offers/>} />
         
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
