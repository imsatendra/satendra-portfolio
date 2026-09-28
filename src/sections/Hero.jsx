import React, { useEffect, useState } from "react";
import {
  Sparkles,
  Code2,
  Cloud,
  Zap,
  Atom,
  Braces,
  Server,
  Database,
  Layers3,
  Container,
  BrainCircuit,
  GitBranch,
  Wind,
  Network,
  Radio,
  Workflow,
  Boxes,
} from "lucide-react";

import OrbitSkills from "../components/OrbitSkills";

const roles = [
  "FULL STACK DEVELOPER",
  "REACT & NODE.JS ENGINEER",
  "SCALABLE SOFTWARE BUILDER",
  "AI-POWERED DEVELOPER",
];

const technologies = [
  {
    name: "Gen AI",
    icon: BrainCircuit,
    color: "text-fuchsia-300",
  },
  {
    name: "JavaScript",
    icon: Braces,
    color: "text-yellow-300",
  },
  {
    name: "React",
    icon: Atom,
    color: "text-cyan-300",
  },
  {
    name: "Tailwind",
    icon: Wind,
    color: "text-sky-300",
  },
  {
    name: "Next.js",
    icon: Layers3,
    color: "text-white",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "text-emerald-300",
  },
  {
    name: "Express",
    icon: Server,
    color: "text-zinc-200",
  },
  {
    name: "CI/CD",
    icon: GitBranch,
    color: "text-orange-300",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-300",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "text-blue-300",
  },
  {
    name: "Prisma",
    icon: Boxes,
    color: "text-indigo-300",
  },
  {
    name: "Docker",
    icon: Container,
    color: "text-sky-300",
  },
  {
    name: "AWS Cloud",
    icon: Cloud,
    color: "text-orange-300",
  },
  {
    name: "Redis",
    icon: Zap,
    color: "text-red-300",
  },
  {
    name: "Kafka",
    icon: Network,
    color: "text-violet-300",
  },
  {
    name: "RabbitMQ",
    icon: Radio,
    color: "text-orange-200",
  },
  {
    name: "BullMQ",
    icon: Workflow,
    color: "text-pink-300",
  },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ==========================================
  // TYPEWRITER
  // ==========================================

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let speed = isDeleting ? 45 : 75;

    if (!isDeleting && text === currentRole) {
      speed = 1700;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setIsDeleting(true);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="
        relative
        z-10
        mx-auto
        flex
        min-h-[calc(100vh-80px)]
        max-w-[1500px]
        items-center
        px-5
        py-6
        sm:px-8
        sm:py-8
        lg:px-10
        lg:py-4
        xl:px-14
      "
    >
      <div
        className="
          grid
          w-full
          items-center
          gap-5
          lg:grid-cols-[0.95fr_1.05fr]
          xl:gap-2
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-30
            text-center
            lg:text-left
          "
        >
          {/* Availability */}

          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/20
              bg-violet-500/[0.06]
              px-3
              py-1.5
              text-[9px]
              text-zinc-400
              sm:text-[10px]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,.8)]
              "
            />
            Available for new opportunities
          </div>

          {/* Small Label */}

          <div
            className="
              mb-2
              flex
              items-center
              justify-center
              gap-3
              lg:justify-start
            "
          >
            <span className="h-px w-7 bg-violet-500/50" />

            <span
              className="
                text-[8px]
                font-semibold
                tracking-[0.3em]
                text-violet-300
                sm:text-[15px]
              "
            >
              FULL STACK ENGINEER
            </span>
          </div>

          {/* Typing Role */}

          <div className="mb-3 min-h-[29px]">
            <div
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-white/[0.07]
                bg-white/[0.025]
                px-3
                py-1.5
                backdrop-blur-xl
              "
            >
              <span
                className="
                  mr-2
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_10px_rgba(167,139,250,.8)]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  font-semibold
                  tracking-wide
                  text-violet-200
                  sm:text-[10px]
                "
              >
                {text}
              </span>

              <span
                className="
                  ml-1
                  h-3.5
                  w-[2px]
                  animate-pulse
                  bg-violet-400
                "
              />
            </div>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className="
              font-['Space_Grotesk']
              text-[35px]
              font-semibold
              leading-[0.9]
              tracking-[-0.055em]
              sm:text-[43px]
              md:text-[48px]
              lg:text-[46px]
              xl:text-[54px]
              2xl:text-[60px]
            "
          >
            I build
            <br />
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
              scalable
            </span>
            <br />
            digital products.
          </h1>

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          <div
            className="
              mx-auto
              mt-4
              max-w-[590px]
              lg:mx-0
            "
          >
            <p
              className="
                text-[12px]
                leading-5
                text-zinc-400
                sm:text-[13px]
                lg:text-sm
              "
            >
              Full Stack Developer with{" "}
              <span className="font-bold text-white">
                4.5+ years of experience
              </span>{" "}
              building scalable, production-ready web applications.
            </p>
          </div>

          {/* =================================================
              COMPLETE TECH STACK
          ================================================= */}

          <div
            className="
              mx-auto
              mt-4
              max-w-[620px]
              lg:mx-0
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-1.5
                lg:justify-start
                xl:gap-2
              "
            >
              {technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    title={tech.name}
                    className="
                      group
                      flex
                      cursor-default
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-2.5
                      py-1.5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-400/30
                      hover:bg-violet-500/[0.08]
                      hover:shadow-[0_0_20px_rgba(139,92,246,.18)]
                    "
                  >
                    <Icon
                      className={`
                        h-3
                        w-3
                        shrink-0
                        ${tech.color}
                        transition-transform
                        duration-300
                        group-hover:scale-125
                      `}
                    />

                    <span
                      className="
                        whitespace-nowrap
                        text-[8px]
                        font-medium
                        text-zinc-400
                        transition-colors
                        group-hover:text-white
                        sm:text-[9px]
                      "
                    >
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              EXPLORE BUTTON
          ================================================= */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-center
              lg:justify-start
            "
          >
            <a
              href="#works"
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.025]
                px-5
                py-2.5
                text-[11px]
                text-zinc-400
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-violet-400/30
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              Explore My Work
            </a>
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div
            className="
              mx-auto
              mt-4
              grid
              max-w-[390px]
              grid-cols-3
              divide-x
              divide-white/[0.08]
              border-y
              border-white/[0.06]
              py-2.5
              lg:mx-0
            "
          >
            <div className="px-2 text-center lg:text-left">
              <strong
                className="
                  block
                  text-base
                  font-semibold
                  text-white
                  sm:text-lg
                "
              >
                4.5+
              </strong>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-wider
                  text-zinc-600
                  sm:text-[8px]
                "
              >
                Years Exp.
              </span>
            </div>

            <div className="px-2 text-center lg:text-left">
              <strong
                className="
                  block
                  text-base
                  font-semibold
                  text-white
                  sm:text-lg
                "
              >
                10+
              </strong>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-wider
                  text-zinc-600
                  sm:text-[8px]
                "
              >
                Projects
              </span>
            </div>

            <div className="px-2 text-center lg:text-left">
              <strong
                className="
                  block
                  text-base
                  font-semibold
                  text-white
                  sm:text-lg
                "
              >
                15+
              </strong>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-wider
                  text-zinc-600
                  sm:text-[8px]
                "
              >
                Technologies
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <div
          className="
            relative
            mx-auto
            flex
            w-full
            items-center
            justify-center
          "
        >
          {/* Top Label */}

          <div
            className="
              absolute
              right-[8%]
              top-[0%]
              z-40
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.08]
              bg-black/60
              px-3
              py-1.5
              text-[8px]
              text-zinc-500
              backdrop-blur-xl
              lg:flex
            "
          >
            <Sparkles className="h-3 w-3 text-violet-400" />
            Building digital products
          </div>

          {/* Orbit */}

          <div
            className="
              relative
              -mt-2
              w-full
              max-w-[520px]
              scale-[0.72]
              sm:scale-[0.78]
              lg:scale-[0.78]
              xl:scale-[0.84]
              2xl:scale-[0.92]
            "
          >
            <OrbitSkills />
          </div>

          {/* Clean Code */}

          <div
            className="
              absolute
              left-[3%]
              top-[31%]
              z-40
              hidden
              rounded-xl
              border
              border-white/[0.08]
              bg-black/60
              p-2.5
              shadow-xl
              backdrop-blur-xl
              lg:block
            "
          >
            <Code2 className="h-3.5 w-3.5 text-violet-400" />

            <p className="mt-1.5 text-[7px] text-zinc-600">Clean Code</p>
          </div>

          {/* Cloud */}

          <div
            className="
              absolute
              bottom-[24%]
              right-[2%]
              z-40
              hidden
              rounded-xl
              border
              border-white/[0.08]
              bg-black/60
              p-2.5
              shadow-xl
              backdrop-blur-xl
              lg:block
            "
          >
            <Cloud className="h-3.5 w-3.5 text-cyan-400" />

            <p className="mt-1.5 text-[7px] text-zinc-600">Cloud Ready</p>
          </div>

          {/* Performance */}

          <div
            className="
              absolute
              bottom-[11%]
              left-[14%]
              z-40
              hidden
              rounded-xl
              border
              border-white/[0.08]
              bg-black/60
              p-2.5
              shadow-xl
              backdrop-blur-xl
              lg:block
            "
          >
            <Zap className="h-3.5 w-3.5 text-yellow-400" />

            <p className="mt-1.5 text-[7px] text-zinc-600">High Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
