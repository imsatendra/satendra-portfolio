import React from "react";
import { ArrowUpRight, ExternalLink, Sparkles, Layers3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolio } from "../data/portfolioData";

const fallbackProjects = [
  {
    number: "01",
    title: "Employee Management System",
    category: "FULL STACK",
    description:
      "A modern employee management platform with authentication, CRUD operations, search, filtering, pagination and role-based access.",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    live: "https://example.com",
  },

  {
    number: "02",
    title: "E-Commerce Platform",
    category: "MERN STACK",
    description:
      "A scalable e-commerce application with product management, authentication, cart functionality and order workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    live: "https://example.com",
  },

  {
    number: "03",
    title: "Job Portal",
    category: "WEB APPLICATION",
    description:
      "A job platform where candidates can search and apply for jobs while recruiters can manage job postings and applications.",
    stack: ["React", "Express", "MongoDB", "JWT"],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    live: "https://example.com",
  },

  {
    number: "04",
    title: "AI Dashboard",
    category: "AI / SAAS",
    description:
      "A futuristic dashboard interface designed for AI-powered workflows, analytics and intelligent productivity tools.",
    stack: ["React", "Node.js", "AI", "REST API"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/",
    live: "https://example.com",
  },
];

const Projects = () => {
  const projects =
    Array.isArray(portfolio?.projects) && portfolio.projects.length > 0
      ? portfolio.projects
      : fallbackProjects;

  return (
    <section
      id="works"
      className="
        relative
        z-10
        mx-auto
        max-w-7xl
        overflow-hidden
        px-5
        py-24
        sm:py-28
        lg:px-8
        lg:py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[15%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[5%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/10
          blur-[130px]
        "
      />

      {/* Header */}

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-violet-500" />

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.35em]
              text-violet-400
            "
          >
            SELECTED WORK
          </span>
        </div>

        <div
          className="
            mt-5
            flex
            flex-col
            justify-between
            gap-5
            lg:flex-row
            lg:items-end
          "
        >
          <h2
            className="
              max-w-3xl
              text-4xl
              font-semibold
              leading-tight
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Building products with{" "}
            <span className="text-zinc-600">purpose.</span>
          </h2>

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-zinc-600
            "
          >
            <Sparkles className="h-4 w-4 text-violet-400" />

            <span>Real-world projects</span>
          </div>
        </div>

        <p
          className="
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-zinc-500
            sm:text-base
          "
        >
          A collection of applications I've built using modern frontend,
          backend, cloud and AI technologies.
        </p>
      </div>

      {/* Projects */}

      <div
        className="
          relative
          mt-12
          grid
          gap-6
          md:grid-cols-2
        "
      >
        {projects.map((project, index) => {
          const stack = Array.isArray(project?.stack)
            ? project.stack
            : typeof project?.stack === "string"
              ? project.stack.split(",").map((item) => item.trim())
              : [];

          return (
            <article
              key={project?.number || index}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.07]
                bg-white/[0.025]
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-violet-400/20
                hover:bg-white/[0.04]
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  h-64
                  overflow-hidden
                  sm:h-72
                "
              >
                {/* Project Image */}

                <img
                  src={
                    project?.image ||
                    fallbackProjects[index % fallbackProjects.length].image
                  }
                  alt={project?.title || "Project"}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                  onError={(event) => {
                    event.currentTarget.src =
                      fallbackProjects[index % fallbackProjects.length].image;
                  }}
                />

                {/* Dark Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/30
                    to-transparent
                  "
                />

                {/* Purple Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-violet-500/30
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:scale-150
                  "
                />

                {/* Number */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-black/40
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-white
                    backdrop-blur-xl
                  "
                >
                  <Layers3 className="h-3 w-3 text-violet-400" />

                  {project?.number || String(index + 1).padStart(2, "0")}
                </div>

                {/* Category */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    rounded-full
                    border
                    border-white/10
                    bg-black/40
                    px-3
                    py-1.5
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-violet-300
                    backdrop-blur-xl
                  "
                >
                  {project?.category || "PROJECT"}
                </div>
              </div>

              {/* Content */}

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-violet-200
                    "
                  >
                    {project?.title || "Untitled Project"}
                  </h3>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      transition-all
                      duration-300
                      group-hover:border-violet-400/30
                      group-hover:bg-violet-500/10
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-zinc-500
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-violet-300
                      "
                    />
                  </div>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-zinc-500
                  "
                >
                  {project?.description ||
                    "A modern web application built with scalable technologies."}
                </p>

                {/* Tech Stack */}

                {stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {stack.map((technology, techIndex) => (
                      <span
                        key={`${technology}-${techIndex}`}
                        className="
                          rounded-full
                          border
                          border-white/[0.07]
                          bg-white/[0.025]
                          px-3
                          py-1.5
                          text-[9px]
                          text-zinc-500
                          transition-all
                          duration-300
                          group-hover:border-violet-400/10
                          group-hover:text-zinc-300
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}

                <div className="mt-7 flex flex-wrap gap-3">{/* GitHub */}</div>
              </div>

              {/* Bottom Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-violet-400
                  to-transparent
                  opacity-0
                  transition-all
                  duration-700
                  group-hover:w-3/4
                  group-hover:opacity-100
                "
              />
            </article>
          );
        })}
      </div>

      {/* Bottom */}

      <div className="relative mt-12 flex justify-center">
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.07]
            bg-white/[0.02]
            px-5
            py-2.5
            text-[10px]
            tracking-[0.15em]
            text-zinc-600
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              animate-pulse
              rounded-full
              bg-emerald-400
            "
          />
          MORE PROJECTS COMING SOON
        </div>
      </div>
    </section>
  );
};

export default Projects;
