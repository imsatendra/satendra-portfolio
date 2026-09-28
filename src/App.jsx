import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

import BlogDetails from "./pages/BlogDetails";
import { useEffect } from "react";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Blog />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const link = document.createElement("a");

      link.href = "/Satendra-Kumar-Resume.pdf";
      link.download = "Satendra-Kumar-Resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
        {/* =========================================
            GLOBAL BACKGROUND
        ========================================= */}

        <div className="pointer-events-none fixed inset-0 z-0">
          {/* Violet Glow */}

          <div
            className="
              absolute
              left-[45%]
              top-[5%]
              h-[500px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-violet-600/20
              blur-[150px]
            "
          />

          {/* Cyan Glow */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[400px]
              w-[400px]
              rounded-full
              bg-cyan-500/10
              blur-[150px]
            "
          />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.5) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        {/* =========================================
            NAVBAR
        ========================================= */}

        <Navbar />

        {/* =========================================
            ROUTES
        ========================================= */}

        <main className="relative z-10">
          <Routes>
            {/* Home */}

            <Route path="/" element={<Home />} />

            {/* Blog Details */}

            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>

        {/* =========================================
            GLOBAL WHATSAPP BUTTON

            One button only
            Mobile + Tablet + Desktop
            Fixed
        ========================================= */}

        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
