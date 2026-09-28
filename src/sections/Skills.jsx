
import React, { useEffect, useState } from "react";
import {
  BrainCircuit,
  Braces,
  Atom,
  Wind,
  Layers3,
  Server,
  Database,
  Container,
  Cloud,
  Zap,
  Radio,
  Workflow,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "Gen AI",
    category: "AI / ML",
    icon: BrainCircuit,
    description: "AI-powered applications & intelligent workflows",
    color: "violet",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: Braces,
    description: "Modern ES6+ development & scalable logic",
    color: "yellow",
  },
  {
    name: "React",
    category: "Frontend",
    icon: Atom,
    description: "Modern component-based UI development",
    color: "cyan",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: Wind,
    description: "Responsive & modern interface systems",
    color: "sky",
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: Layers3,
    description: "Production-ready React applications",
    color: "white",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    description: "High-performance backend applications",
    color: "green",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: Workflow,
    description: "REST APIs & backend architecture",
    color: "emerald",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    description: "Flexible NoSQL data architecture",
    color: "green",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: Database,
    description: "Reliable relational database systems",
    color: "blue",
  },
  {
    name: "Prisma ORM",
    category: "ORM",
    icon: Database,
    description: "Type-safe database access",
    color: "indigo",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: Container,
    description: "Containerized application environments",
    color: "blue",
  },
  {
    name: "AWS Cloud",
    category: "Cloud",
    icon: Cloud,
    description: "Cloud infrastructure & deployment",
    color: "orange",
  },
  {
    name: "Redis",
    category: "Caching",
    icon: Zap,
    description: "Fast caching & real-time data",
    color: "red",
  },
  {
    name: "Kafka",
    category: "Messaging",
    icon: Radio,
    description: "Event-driven distributed systems",
    color: "pink",
  },
  {
    name: "RabbitMQ",
    category: "Messaging",
    icon: Workflow,
    description: "Reliable message-based architecture",
    color: "orange",
  },
  {
    name: "BullMQ",
    category: "Queues",
    icon: ShieldCheck,
    description: "Background jobs & task processing",
    color: "rose",
  },
];

const colorMap = {
  violet: {
    icon: "text-violet-300",
    glow: "bg-violet-500",
    border: "hover:border-violet-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(139,92,246,.25)]",
  },

  yellow: {
    icon: "text-yellow-300",
    glow: "bg-yellow-400",
    border: "hover:border-yellow-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(250,204,21,.20)]",
  },

  cyan: {
    icon: "text-cyan-300",
    glow: "bg-cyan-400",
    border: "hover:border-cyan-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(34,211,238,.25)]",
  },

  sky: {
    icon: "text-sky-300",
    glow: "bg-sky-400",
    border: "hover:border-sky-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(56,189,248,.22)]",
  },

  white: {
    icon: "text-white",
    glow: "bg-white",
    border: "hover:border-white/30",
    shadow: "hover:shadow-[0_0_50px_rgba(255,255,255,.15)]",
  },

  green: {
    icon: "text-green-300",
    glow: "bg-green-400",
    border: "hover:border-green-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(74,222,128,.22)]",
  },

  emerald: {
    icon: "text-emerald-300",
    glow: "bg-emerald-400",
    border: "hover:border-emerald-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(52,211,153,.22)]",
  },

  blue: {
    icon: "text-blue-300",
    glow: "bg-blue-400",
    border: "hover:border-blue-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(96,165,250,.22)]",
  },

  indigo: {
    icon: "text-indigo-300",
    glow: "bg-indigo-400",
    border: "hover:border-indigo-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(129,140,248,.22)]",
  },

  orange: {
    icon: "text-orange-300",
    glow: "bg-orange-400",
    border: "hover:border-orange-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(251,146,60,.22)]",
  },

  red: {
    icon: "text-red-300",
    glow: "bg-red-400",
    border: "hover:border-red-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(248,113,113,.22)]",
  },

  pink: {
    icon: "text-pink-300",
    glow: "bg-pink-400",
    border: "hover:border-pink-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(244,114,182,.22)]",
  },

  rose: {
    icon: "text-rose-300",
    glow: "bg-rose-400",
    border: "hover:border-rose-400/40",
    shadow: "hover:shadow-[0_0_50px_rgba(251,113,133,.22)]",
  },
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-28 sm:py-32 lg:px-8"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[15%]
          h-80
          w-80
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          right-[5%]
          h-80
          w-80
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================
            HEADER
        ========================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-transparent
                to-violet-400
              "
            />

            <span
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                tracking-[0.35em]
                text-violet-300
              "
            >
              <Sparkles className="h-3 w-3" />
              TECH STACK
            </span>

            <span
              className="
                h-px
                w-10
                bg-gradient-to-l
                from-transparent
                to-cyan-400
              "
            />
          </div>

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.04em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Technologies I{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-300
                via-fuchsia-300
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              build with.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-zinc-500
            "
          >
            A modern technology stack focused on scalable applications,
            high-performance systems, cloud infrastructure and AI-powered
            experiences.
          </p>
        </div>

        {/* =========================================
            SKILLS GRID
        ========================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            md:gap-5
            lg:grid-cols-4
          "
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            const colors = colorMap[skill.color];

            const isActive = activeSkill === index;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setActiveSkill(index)}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  sm:p-6
                  ${colors.border}
                  ${colors.shadow}
                  ${
                    isActive
                      ? "border-violet-400/30 shadow-[0_0_40px_rgba(139,92,246,.18)]"
                      : ""
                  }
                `}
              >
                {/* =================================
                    ROTATING GRADIENT BORDER
                ================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -inset-[1px]
                    -z-10
                    rounded-3xl
                    bg-gradient-to-r
                    from-violet-500
                    via-fuchsia-500
                    to-cyan-500
                    blur-sm
                    transition-opacity
                    duration-500
                    ${
                      isActive
                        ? "opacity-30"
                        : "opacity-0 group-hover:opacity-50"
                    }
                  `}
                />

                {/* =================================
                    TOP SHINE
                ================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[100%]
                    top-0
                    h-px
                    w-[70%]
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                    group-hover:opacity-70
                  "
                />

                {/* =================================
                    ICON AREA
                ================================= */}

                <div
                  className="
                    relative
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                  "
                >
                  {/* Outer rotating glow */}

                  <div
                    className={`
                      absolute
                      inset-[-6px]
                      rounded-2xl
                      bg-gradient-to-r
                      from-violet-500
                      via-fuchsia-500
                      to-cyan-400
                      opacity-0
                      blur-[3px]
                      transition-all
                      duration-500
                      group-hover:opacity-70
                      ${
                        isActive
                          ? "animate-[spin_4s_linear_infinite] opacity-50"
                          : ""
                      }
                    `}
                  />

                  {/* Pulse ring */}

                  <div
                    className={`
                      absolute
                      inset-[-7px]
                      rounded-2xl
                      border
                      border-violet-400/20
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-violet-400/40
                      ${isActive ? "animate-pulse border-violet-400/40" : ""}
                    `}
                  />

                  {/* Icon glow */}

                  <div
                    className={`
                      absolute
                      h-14
                      w-14
                      rounded-2xl
                      ${colors.glow}
                      opacity-10
                      blur-xl
                      transition-all
                      duration-500
                      group-hover:scale-125
                      group-hover:opacity-40
                      ${isActive ? "scale-125 opacity-30" : ""}
                    `}
                  />

                  {/* Main icon container */}

                  <div
                    className={`
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-white/[0.10]
                      bg-[#0b0b0f]
                      shadow-[inset_0_0_25px_rgba(255,255,255,.025)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:-rotate-3
                      ${
                        isActive
                          ? "scale-105 shadow-[0_0_35px_rgba(139,92,246,.25)]"
                          : ""
                      }
                    `}
                  >
                    {/* Inner gradient */}

                    <span
                      className="
                        absolute
                        inset-0
                        rounded-2xl
                        bg-gradient-to-br
                        from-white/[0.07]
                        via-transparent
                        to-violet-500/[0.08]
                      "
                    />

                    {/* Moving shine */}

                    <span
                      className="
                        absolute
                        -left-full
                        top-0
                        h-full
                        w-1/2
                        rotate-12
                        bg-gradient-to-r
                        from-transparent
                        via-white/25
                        to-transparent
                        transition-all
                        duration-700
                        group-hover:left-[130%]
                      "
                    />

                    {/* BIG ICON */}

                    <Icon
                      className={`
                        relative
                        z-10
                        h-9
                        w-9
                        transition-all
                        duration-500
                        ${colors.icon}
                        group-hover:scale-125
                        ${
                          isActive
                            ? "scale-110 drop-shadow-[0_0_14px_currentColor]"
                            : ""
                        }
                      `}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* =================================
                    SKILL CONTENT
                ================================= */}

                <div>
                  <div
                    className="
                      mb-1
                      flex
                      items-center
                      justify-between
                      gap-2
                    "
                  >
                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-zinc-200
                        transition-colors
                        duration-300
                        group-hover:text-white
                        sm:text-base
                      "
                    >
                      {skill.name}
                    </h3>

                    {/* Active dot */}

                    <span
                      className={`
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        ${colors.glow}
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "animate-pulse opacity-100 shadow-[0_0_12px_currentColor]"
                            : "opacity-30"
                        }
                      `}
                    />
                  </div>

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-violet-400/70
                    "
                  >
                    {skill.category}
                  </span>

                  <p
                    className="
                      mt-3
                      text-[10px]
                      leading-5
                      text-zinc-600
                      transition-colors
                      duration-300
                      group-hover:text-zinc-400
                      sm:text-[11px]
                    "
                  >
                    {skill.description}
                  </p>
                </div>

                {/* =================================
                    ACTIVE BOTTOM LINE
                ================================= */}

                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-gradient-to-r
                    from-violet-500
                    via-fuchsia-500
                    to-cyan-400
                    transition-all
                    duration-700
                    ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM STATUS
        ========================================== */}

        <div className="mt-12 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-5
              py-3
              shadow-[0_0_30px_rgba(139,92,246,.06)]
              backdrop-blur-xl
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            <span className="text-[10px] text-zinc-500">
              Always learning. Always building.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
