import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolioData";

const Navbar = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Satendra, I saw your portfolio and would like to discuss an opportunity with you.",
    );

    window.open(
      `https://wa.me/${portfolio.whatsapp}?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <header className="relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      {/* Logo */}
      <a href="#home" className="text-xl font-bold tracking-tight">
        <span className="text-violet-400">Hi!</span> {portfolio.name}
      </a>

      {/* Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        <a
          href="#home"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          Home
        </a>

        <a
          href="#works"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          Works
        </a>

        <a
          href="#skills"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          Skills
        </a>

        <a
          href="#about"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          About
        </a>

        <a
          href="#contact"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          Contact
        </a>
      </nav>

      {/* ONLY HIRE ME BUTTON */}
      <button
        type="button"
        onClick={openWhatsApp}
        className="
          hidden
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-5
          py-2.5
          text-sm
          transition
          duration-300
          hover:-translate-y-0.5
          hover:bg-white
          hover:text-black
          md:flex
        "
      >
        Hire Me
        <ArrowUpRight className="ml-1 h-4 w-4" />
      </button>
    </header>
  );
};

export default Navbar;
