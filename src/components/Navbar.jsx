import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolio } from "../data/portfolioData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        relative
        z-50
        mx-auto
        w-full
        max-w-[1450px]
        px-5
        sm:px-8
        lg:px-10
        xl:px-14
      "
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div
        className="
          flex
          h-20
          items-center
          justify-between
          border-b
          border-white/[0.05]
        "
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <a
          href="#home"
          onClick={closeMenu}
          className="
            group
            flex
            items-center
            gap-1
            text-lg
            font-bold
            tracking-tight
            transition
            duration-300
            sm:text-xl
          "
        >
          <span
            className="
              text-violet-400
              transition
              duration-300
              group-hover:text-fuchsia-300
            "
          >
            Hi!
          </span>

          <span className="text-white">{portfolio.name}</span>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden items-center gap-7 md:flex lg:gap-8">
          <a
            href="#home"
            className="
              relative
              text-[13px]
              font-medium
              text-zinc-500
              transition
              duration-300
              hover:text-white
            "
          >
            Home
          </a>

          <a
            href="#works"
            className="
              text-[13px]
              font-medium
              text-zinc-500
              transition
              duration-300
              hover:text-white
            "
          >
            Works
          </a>

          <a
            href="#skills"
            className="
              text-[13px]
              font-medium
              text-zinc-500
              transition
              duration-300
              hover:text-white
            "
          >
            Skills
          </a>

          <a
            href="#about"
            className="
              text-[13px]
              font-medium
              text-zinc-500
              transition
              duration-300
              hover:text-white
            "
          >
            About
          </a>

          <a
            href="#contact"
            className="
              text-[13px]
              font-medium
              text-zinc-500
              transition
              duration-300
              hover:text-white
            "
          >
            Contact
          </a>
        </nav>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="flex items-center gap-3">
          {/* Hire Me */}

          <button
            type="button"
            onClick={openWhatsApp}
            className="
              hidden
              items-center
              rounded-full
              border
              border-violet-400/20
              bg-violet-500/[0.06]
              px-4
              py-2
              text-[12px]
              font-medium
              text-violet-200
              backdrop-blur-xl
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-violet-400/40
              hover:bg-violet-500/[0.12]
              hover:text-white
              hover:shadow-[0_0_25px_rgba(139,92,246,.18)]
              md:flex
            "
          >
            Hire Me
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.03]
              text-zinc-400
              transition
              duration-300
              hover:border-violet-400/30
              hover:bg-violet-500/[0.08]
              hover:text-white
              md:hidden
            "
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (
        <div
          className="
            absolute
            left-5
            right-5
            top-[76px]
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-[#09090b]/95
            p-3
            shadow-2xl
            backdrop-blur-2xl
            sm:left-8
            sm:right-8
            md:hidden
          "
        >
          <nav className="flex flex-col">
            <a
              href="#home"
              onClick={closeMenu}
              className="
                rounded-xl
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              Home
            </a>

            <a
              href="#works"
              onClick={closeMenu}
              className="
                rounded-xl
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              Works
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="
                rounded-xl
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              Skills
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="
                rounded-xl
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="
                rounded-xl
                px-4
                py-3
                text-sm
                text-zinc-400
                transition
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              Contact
            </a>

            {/* Mobile Hire Me */}

            <button
              type="button"
              onClick={() => {
                closeMenu();
                openWhatsApp();
              }}
              className="
                mt-2
                flex
                items-center
                justify-center
                rounded-xl
                border
                border-violet-400/20
                bg-violet-500/[0.08]
                px-4
                py-3
                text-sm
                font-medium
                text-violet-200
                transition
                hover:bg-violet-500/[0.15]
                hover:text-white
              "
            >
              Hire Me
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
