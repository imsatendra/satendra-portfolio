import React, { useEffect, useState } from "react";
import {
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
  Download,
} from "lucide-react";

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

    const speed = isDeleting ? 40 : text === currentRole ? 1500 : 65;

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
        max-w-[1450px]
        items-center
        px-5
        py-6
        sm:px-8
        sm:py-8
        lg:px-10
        lg:py-5
        xl:px-14
      "
    >
      <div
        className="
          grid
          w-full
          items-center
          gap-5
          lg:grid-cols-[1.35fr_0.65fr]
          xl:gap-8
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-30
            flex
            flex-col
            justify-center
            text-center
            lg:text-left
          "
        >
          {/* ==========================================
              AVAILABILITY
          ========================================== */}

          <div
            className="
              mb-4
              inline-flex
              w-fit
              self-center
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
              lg:self-start
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

          {/* ==========================================
              ENGINEER LABEL
          ========================================== */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
              lg:justify-start
            "
          >
            <span className="h-px w-8 bg-violet-500/50" />

            <span
              className="
                text-[10px]
                font-semibold
                tracking-[0.3em]
                text-violet-300
                sm:text-[11px]
              "
            >
              FULL STACK ENGINEER
            </span>
          </div>

          {/* ==========================================
              TYPEWRITER
          ========================================== */}

          <div className="mb-5 min-h-[30px]">
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

          {/* ==========================================
              MAIN HEADING
          ========================================== */}

          <h1
            className="
              font-['Space_Grotesk']
              text-[37px]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              sm:text-[43px]
              md:text-[48px]
              lg:text-[48px]
              xl:text-[55px]
            "
          >
            I build{" "}
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

          {/* ==========================================
              DESCRIPTION
          ========================================== */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[600px]
              text-[12px]
              leading-6
              text-zinc-400
              sm:text-[13px]
              lg:mx-0
              lg:text-[13px]
            "
          >
            Full Stack Developer with{" "}
            <span className="font-semibold text-white">
              4.5+ years of experience
            </span>{" "}
            building scalable, production-ready web applications.
          </p>

          {/* ==========================================
              TECHNOLOGIES
          ========================================== */}

          <div
            className="
              mx-auto
              mt-5
              max-w-[720px]
              lg:mx-0
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
                lg:justify-start
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
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/[0.08]
                      bg-white/[0.035]
                      px-3
                      py-1.5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-violet-400/30
                      hover:bg-violet-500/[0.08]
                      hover:shadow-[0_0_18px_rgba(139,92,246,.15)]
                    "
                  >
                    <Icon
                      className={`
                        h-3.5
                        w-3.5
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
                        text-[9px]
                        font-medium
                        text-zinc-400
                        transition-colors
                        group-hover:text-white
                        sm:text-[10px]
                      "
                    >
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==========================================
              CTA BUTTONS
          ========================================== */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              lg:justify-start
            "
          >
            {/* Explore My Work */}

            <a
              href="#works"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-violet-400/25
                bg-violet-500/[0.08]
                px-5
                py-2.5
                text-[11px]
                font-medium
                text-violet-200
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-violet-400/40
                hover:bg-violet-500/[0.14]
                hover:shadow-[0_0_25px_rgba(139,92,246,.2)]
              "
            >
              Explore My Work
            </a>

            {/* Download Resume */}

            <a
              href="/Satendra-Kumar-Resume.pdf"
              download="Satendra-Kumar-Resume.pdf"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.04]
                px-5
                py-2.5
                text-[11px]
                font-medium
                text-zinc-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/[0.20]
                hover:bg-white/[0.08]
                hover:text-white
                hover:shadow-[0_0_25px_rgba(255,255,255,.08)]
              "
            >
              <Download
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-y-0.5
                "
              />
              Download Resume
            </a>
          </div>

          {/* ==========================================
              STATS
          ========================================== */}

          <div
            className="
              mx-auto
              mt-6
              grid
              w-full
              max-w-[420px]
              grid-cols-3
              divide-x
              divide-white/[0.08]
              border-y
              border-white/[0.06]
              py-3
              lg:mx-0
            "
          >
            {/* EXPERIENCE */}

            <div className="text-center lg:text-left">
              <strong
                className="
                  block
                  text-lg
                  font-semibold
                  leading-none
                  text-white
                  sm:text-xl
                "
              >
                4.5+
              </strong>

              <span
                className="
                  mt-1.5
                  block
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

            {/* PROJECTS */}

            <div className="text-center lg:pl-5 lg:text-left">
              <strong
                className="
                  block
                  text-lg
                  font-semibold
                  leading-none
                  text-white
                  sm:text-xl
                "
              >
                10+
              </strong>

              <span
                className="
                  mt-1.5
                  block
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

            {/* TECHNOLOGIES */}

            <div className="text-center lg:pl-5 lg:text-left">
              <strong
                className="
                  block
                  text-lg
                  font-semibold
                  leading-none
                  text-white
                  sm:text-xl
                "
              >
                15+
              </strong>

              <span
                className="
                  mt-1.5
                  block
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

        {/* =====================================================
            RIGHT — PHOTO ONLY
        ===================================================== */}

        <div
          className="
            relative
            hidden
            items-center
            justify-center
            lg:flex
          "
        >
          {/* Background Glow */}

          <div
            className="
              absolute
              h-[65%]
              w-[65%]
              rounded-full
              bg-violet-600/20
              blur-[90px]
            "
          />

          <div
            className="
              absolute
              h-[45%]
              w-[45%]
              rounded-full
              bg-cyan-500/10
              blur-[70px]
            "
          />

          {/* ==========================================
              PHOTO
          ========================================== */}

          <div
            className="
              relative
              z-20
              w-[270px]
              sm:w-[290px]
              lg:w-[300px]
              xl:w-[330px]
            "
          >
            {/* Outer Glow */}

            <div
              className="
                absolute
                inset-[-10%]
                rounded-full
                bg-gradient-to-r
                from-violet-600/30
                via-fuchsia-500/15
                to-cyan-500/30
                blur-[35px]
              "
            />

            {/* Outer Ring */}

            <div
              className="
                absolute
                inset-[-4%]
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
                aspect-square
                overflow-hidden
                rounded-full
                bg-gradient-to-br
                from-violet-400
                via-fuchsia-400
                to-cyan-400
                p-[3px]
                shadow-[0_0_60px_rgba(124,58,237,.3)]
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
                    object-[center_25%]
                  "
                />
              </div>
            </div>

            {/* Available Badge */}

            <div
              className="
                absolute
                bottom-[2%]
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
                px-3
                py-1.5
                text-[8px]
                text-zinc-400
                shadow-xl
                backdrop-blur-xl
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

          {/* ==========================================
              CLEAN CODE
          ========================================== */}

          <div
            className="
              absolute
              left-[2%]
              top-[27%]
              z-30
              rounded-xl
              border
              border-white/[0.08]
              bg-black/60
              p-2.5
              shadow-xl
              backdrop-blur-xl
            "
          >
            <Code2 className="h-3.5 w-3.5 text-violet-400" />

            <p className="mt-1 text-[7px] text-zinc-500">Clean Code</p>
          </div>

          {/* ==========================================
              CLOUD
          ========================================== */}

          <div
            className="
              absolute
              right-[2%]
              top-[30%]
              z-30
              rounded-xl
              border
              border-white/[0.08]
              bg-black/60
              p-2.5
              shadow-xl
              backdrop-blur-xl
            "
          >
            <Cloud className="h-3.5 w-3.5 text-cyan-400" />

            <p className="mt-1 text-[7px] text-zinc-500">Cloud Ready</p>
          </div>

          {/* ==========================================
              PERFORMANCE
          ========================================== */}

          <div
            className="
              absolute
              bottom-[18%]
              left-[8%]
              z-30
              rounded-xl
              border
              border-white/[0.08]
              bg-black/60
              p-2.5
              shadow-xl
              backdrop-blur-xl
            "
          >
            <Zap className="h-3.5 w-3.5 text-yellow-400" />

            <p className="mt-1 text-[7px] text-zinc-500">Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
