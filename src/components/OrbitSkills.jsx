import {
  Atom,
  Braces,
  BrainCircuit,
  Cloud,
  Container,
  Database,
  Layers3,
  Network,
  Server,
  Zap,
} from "lucide-react";

const skills = [
  {
    name: "React",
    icon: Atom,
    position: "top-[7%] left-[8%]",
    color: "text-cyan-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(34,211,238,.35)]",
  },

  {
    name: "Node.js",
    icon: Server,
    position: "top-[4%] right-[7%]",
    color: "text-emerald-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(52,211,153,.35)]",
  },

  {
    name: "JavaScript",
    icon: Braces,
    position: "top-[29%] left-[1%]",
    color: "text-yellow-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(250,204,21,.35)]",
  },

  {
    name: "Next.js",
    icon: Layers3,
    position: "top-[28%] right-[1%]",
    color: "text-zinc-100",
    glow: "group-hover:shadow-[0_0_35px_rgba(255,255,255,.18)]",
  },

  {
    name: "MongoDB",
    icon: Database,
    position: "bottom-[29%] left-[1%]",
    color: "text-green-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(74,222,128,.35)]",
  },

  {
    name: "AWS",
    icon: Cloud,
    position: "bottom-[28%] right-[1%]",
    color: "text-orange-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(251,146,60,.35)]",
  },

  {
    name: "Docker",
    icon: Container,
    position: "bottom-[5%] left-[8%]",
    color: "text-blue-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(96,165,250,.35)]",
  },

  {
    name: "Gen AI",
    icon: BrainCircuit,
    position: "bottom-[4%] right-[7%]",
    color: "text-fuchsia-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(232,121,249,.35)]",
  },

  {
    name: "Redis",
    icon: Zap,
    position: "top-[52%] left-[0%]",
    color: "text-red-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(248,113,113,.35)]",
  },

  {
    name: "Kafka",
    icon: Network,
    position: "top-[52%] right-[0%]",
    color: "text-violet-300",
    glow: "group-hover:shadow-[0_0_35px_rgba(167,139,250,.35)]",
  },
];

const OrbitSkills = () => {
  return (
    <div
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[560px]
      "
    >
      {/* Main glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[55%]
          w-[55%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/20
          blur-[90px]
        "
      />

      <div
        className="
          absolute
          left-[25%]
          top-[25%]
          h-[40%]
          w-[40%]
          rounded-full
          bg-cyan-500/10
          blur-[80px]
        "
      />

      {/* Rings */}

      <div
        className="
          absolute
          inset-[8%]
          rounded-full
          border
          border-white/[0.045]
        "
      />

      <div
        className="
          absolute
          inset-[18%]
          rounded-full
          border
          border-violet-400/[0.07]
        "
      />

      <div
        className="
          absolute
          inset-[28%]
          rounded-full
          border
          border-cyan-400/[0.06]
        "
      />

      {/* Connecting lines */}

      <div
        className="
          absolute
          left-[15%]
          right-[15%]
          top-1/2
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-400/10
          to-transparent
        "
      />

      <div
        className="
          absolute
          bottom-[15%]
          left-1/2
          top-[15%]
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-400/10
          to-transparent
        "
      />

      {/* Skills */}

      {skills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <div
            key={skill.name}
            className={`
              group
              absolute
              z-20
              ${skill.position}
              animate-float-${(index % 3) + 1}
            `}
          >
            <div
              className={`
                relative
                flex
                cursor-default
                items-center
                gap-2
                rounded-2xl
                border
                border-white/[0.09]
                bg-[#09090b]/85
                px-2.5
                py-2
                shadow-[0_15px_45px_rgba(0,0,0,.35)]
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:-translate-y-2
                group-hover:scale-110
                group-hover:border-white/[0.2]
                ${skill.glow}
                sm:gap-2.5
                sm:px-3
                sm:py-2.5
              `}
            >
              {/* Icon */}

              <div
                className={`
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.04]
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:bg-white/[0.08]
                  ${skill.color}
                  sm:h-8
                  sm:w-8
                `}
              >
                <Icon
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-500
                    group-hover:scale-125
                    sm:h-4
                    sm:w-4
                  "
                />
              </div>

              {/* Text */}

              <div>
                <p
                  className="
                    whitespace-nowrap
                    text-[9px]
                    font-semibold
                    tracking-wide
                    text-zinc-200
                    transition-colors
                    group-hover:text-white
                    sm:text-[10px]
                  "
                >
                  {skill.name}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[6px]
                    uppercase
                    tracking-[0.16em]
                    text-zinc-600
                    sm:text-[7px]
                  "
                >
                  technology
                </p>
              </div>

              {/* Active dot */}

              <span
                className={`
                  ml-0.5
                  h-1
                  w-1
                  rounded-full
                  bg-current
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  ${skill.color}
                `}
              />
            </div>
          </div>
        );
      })}

      {/* ==========================================
          CENTER PHOTO
      =========================================== */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-30
          aspect-square
          w-[38%]
          -translate-x-1/2
          -translate-y-1/2
          sm:w-[40%]
          lg:w-[41%]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-[-18%]
            rounded-full
            bg-gradient-to-r
            from-violet-600/40
            via-fuchsia-500/20
            to-cyan-500/40
            blur-[35px]
          "
        />

        {/* Outer ring */}

        <div
          className="
            absolute
            inset-[-8%]
            rounded-full
            border
            border-violet-400/20
            bg-gradient-to-br
            from-violet-500/10
            to-cyan-500/10
          "
        />

        {/* Image */}

        <div
          className="
            relative
            h-full
            w-full
            rounded-full
            bg-gradient-to-br
            from-violet-400
            via-fuchsia-400
            to-cyan-400
            p-[3px]
            shadow-[0_0_70px_rgba(124,58,237,.35)]
          "
        >
          <div
            className="
              h-full
              w-full
              overflow-hidden
              rounded-full
              bg-zinc-950
            "
          >
            <img
              src="/satendra-kumar.jpeg"
              alt="Satendra Kumar"
              className="
                h-full
                w-full
                object-cover
                object-top
                transition-transform
                duration-700
                hover:scale-105
                scale-110
                object-[center_40%]
              "
            />
          </div>
        </div>

        {/* Status */}

        <div
          className="
            absolute
            bottom-[-9%]
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-1.5
            whitespace-nowrap
            rounded-full
            border
            border-white/[0.1]
            bg-[#09090b]/90
            px-2.5
            py-1.5
            text-[7px]
            text-zinc-400
            shadow-xl
            backdrop-blur-xl
            sm:px-3
            sm:text-[8px]
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
              shadow-[0_0_8px_rgba(52,211,153,.9)]
            "
          />
          Available for opportunities
        </div>
      </div>

      {/* Decorative particles */}

      <span
        className="
          absolute
          left-[29%]
          top-[18%]
          h-1
          w-1
          animate-pulse
          rounded-full
          bg-violet-400
          shadow-[0_0_12px_rgba(167,139,250,.8)]
        "
      />

      <span
        className="
          absolute
          bottom-[20%]
          right-[29%]
          h-1
          w-1
          animate-pulse
          rounded-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,.8)]
        "
      />

      <span
        className="
          absolute
          right-[27%]
          top-[21%]
          h-1
          w-1
          animate-pulse
          rounded-full
          bg-fuchsia-400
          shadow-[0_0_12px_rgba(232,121,249,.8)]
        "
      />
    </div>
  );
};

export default OrbitSkills;
