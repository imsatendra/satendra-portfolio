import { MessageCircle, ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolioData";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Satendra, I saw your portfolio and would like to discuss an opportunity with you."
    );

    window.open(
      `https://wa.me/${portfolio.whatsapp}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      type="button"
      onClick={openWhatsApp}
      aria-label="Hire Satendra on WhatsApp"
      className="
        group

        fixed
        bottom-5
        right-5
        z-[99999]

        flex
        items-center
        gap-2.5

        rounded-full

        border
        border-white/20

        bg-gradient-to-r
        from-violet-600
        via-purple-600
        to-cyan-500

        px-5
        py-3

        text-sm
        font-semibold
        text-white

        shadow-[0_0_30px_rgba(124,58,237,0.45)]

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-[1.03]
        hover:shadow-[0_0_45px_rgba(124,58,237,0.65)]

        active:scale-[0.97]

        sm:bottom-6
        sm:right-6
        sm:px-5
        sm:py-3.5

        md:bottom-7
        md:right-7
        md:px-6
        md:py-3.5

        lg:bottom-8
        lg:right-8
      "
    >
      {/* Outer Glow */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          rounded-full
          bg-gradient-to-r
          from-violet-600
          via-fuchsia-500
          to-cyan-500
          opacity-60
          blur-xl

          transition-all
          duration-500

          group-hover:opacity-90
          group-hover:blur-2xl
        "
      />

      {/* Shine Animation */}
      <span
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          rounded-full
        "
      >
        <span
          className="
            absolute
            top-0
            -left-[100%]
            h-full
            w-[45%]
            skew-x-[-20deg]
            bg-white/20

            transition-all
            duration-700

            group-hover:left-[130%]
          "
        />
      </span>

      {/* WhatsApp Icon */}
      <span
        className="
          relative
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white/15

          ring-1
          ring-white/20

          transition-all
          duration-300

          group-hover:rotate-6
          group-hover:bg-white/25
          group-hover:ring-white/40
        "
      >
        <MessageCircle
          className="
            h-4
            w-4
            text-white

            transition-transform
            duration-300

            group-hover:scale-110
          "
        />

        {/* Online Dot */}
        <span
          className="
            absolute
            -right-0.5
            -top-0.5
            h-2
            w-2
            rounded-full
            bg-emerald-300
            shadow-[0_0_8px_rgba(110,231,183,0.9)]

            animate-pulse
          "
        />
      </span>

      {/* Text */}
      <span className="relative whitespace-nowrap">
        Hire Me
      </span>

      {/* Arrow */}
      <ArrowUpRight
        className="
          relative
          h-4
          w-4

          transition-all
          duration-300

          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </button>
  );
};

export default WhatsAppButton;