import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Rocket,
  Layers3,
  Database,
  Cloud,
  BrainCircuit,
  Zap,
} from "lucide-react";

const journey = [
  {
    year: "Education",
    title: "Diploma in Computer Engineering",
    description:
      "Started my technical journey with a strong foundation in programming, computer systems and software development.",
    icon: GraduationCap,
    tag: "Foundation",
  },
  {
    year: "Education",
    title: "B.Tech",
    description:
      "Expanded my engineering knowledge with a deeper focus on software development, problem solving and modern technologies.",
    icon: GraduationCap,
    tag: "Engineering",
  },
  {
    year: "2021 — 2025",
    title: "TCS",
    description:
      "Worked for 3.7 years in an enterprise technology environment, gaining experience in application support, development workflows and large-scale business systems.",
    icon: BriefcaseBusiness,
    tag: "3.7 Years",
  },
  {
    year: "Aug 2025 — Present",
    title: "Techsunset",
    description:
      "Working as a Full Stack Developer, building modern web applications using React, Node.js, MongoDB and cloud technologies.",
    icon: Code2,
    tag: "Full Stack",
  },
];

const technologies = [
  {
    name: "React",
    icon: Code2,
  },
  {
    name: "Node.js",
    icon: Zap,
  },
  {
    name: "MongoDB",
    icon: Database,
  },
  {
    name: "AWS",
    icon: Cloud,
  },
  {
    name: "Gen AI",
    icon: BrainCircuit,
  },
];

const stats = [
  {
    number: "4+",
    label: "Years Experience",
  },
  {
    number: "20+",
    label: "Projects",
  },
  {
    number: "15+",
    label: "Technologies",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        about-section
        relative
        overflow-hidden
        px-5
        py-24
        sm:py-28
        lg:px-8
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="about-grid absolute inset-0 opacity-[0.035]" />

      <div className="about-orb about-orb-one" />
      <div className="about-orb about-orb-two" />
      <div className="about-orb about-orb-three" />

      {/* Floating particles */}

      <span className="about-particle particle-1" />
      <span className="about-particle particle-2" />
      <span className="about-particle particle-3" />
      <span className="about-particle particle-4" />
      <span className="about-particle particle-5" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="about-reveal mb-14 max-w-3xl sm:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <div className="about-line" />

            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.4em]
                text-violet-300
                sm:text-[10px]
              "
            >
              ABOUT ME
            </span>

            <Sparkles
              className="
                h-3.5
                w-3.5
                animate-pulse
                text-violet-400
              "
            />
          </div>

          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.02]
              tracking-[-0.05em]
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            From engineering fundamentals
            <br />
            <span
              className="
                about-gradient-text
                bg-gradient-to-r
                from-violet-300
                via-fuchsia-300
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              to building digital products.
            </span>
          </h2>

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
            A journey from computer engineering fundamentals to building modern,
            scalable and production-ready digital experiences.
          </p>
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-12
          "
        >
          {/* ===================================================
              LEFT PROFILE CARD
          ==================================================== */}

          <div className="about-reveal relative">
            {/* Outer gradient */}

            <div className="profile-gradient absolute -inset-[1px] rounded-[28px]" />

            <div
              className="
                profile-card
                group
                relative
                overflow-hidden
                rounded-[27px]
                border
                border-white/[0.08]
                bg-[#08080b]/90
                p-7
                backdrop-blur-2xl
                sm:p-9
              "
            >
              {/* Moving shine */}

              <div className="profile-shine" />

              {/* Top glow */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-violet-500/10
                  blur-[70px]
                  transition-all
                  duration-700
                  group-hover:bg-violet-500/20
                "
              />

              {/* Icon */}

              <div className="relative">
                <div
                  className="
                    profile-icon
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-violet-400/20
                    bg-gradient-to-br
                    from-violet-500/15
                    to-cyan-500/10
                    text-violet-300
                  "
                >
                  <Code2 className="h-6 w-6" />
                </div>

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                    shadow-[0_0_15px_rgba(52,211,153,.9)]
                  "
                />
              </div>

              {/* Heading */}

              <h3
                className="
                  mt-7
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                Hi, I'm Satendra.
              </h3>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-violet-400
                "
              >
                <span className="h-px w-5 bg-violet-400/50" />
                Full Stack Developer
              </div>

              {/* Paragraph */}

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                I'm a Full Stack Developer passionate about creating modern,
                scalable and user-focused web applications. My journey began
                with a Diploma in Computer Engineering and continued through
                B.Tech, enterprise experience and full-stack development.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-zinc-500
                "
              >
                Today, I work across the frontend, backend and cloud ecosystem,
                turning ideas into reliable digital products using React,
                Node.js, MongoDB, AWS and modern development practices.
              </p>

              {/* Technologies */}

              <div className="mt-7 flex flex-wrap gap-2">
                {technologies.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className="
                        tech-pill
                        group/pill
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-white/[0.07]
                        bg-white/[0.025]
                        px-3
                        py-1.5
                        text-[9px]
                        text-zinc-500
                      "
                    >
                      <Icon
                        className="
                          h-3
                          w-3
                          text-violet-400
                          transition-transform
                          duration-300
                          group-hover/pill:scale-125
                        "
                      />

                      {tech.name}
                    </div>
                  );
                })}
              </div>

              {/* Divider */}

              <div className="my-7 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent" />

              {/* Location */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  text-zinc-600
                "
              >
                <MapPin className="h-3.5 w-3.5 text-violet-400" />
                Open to remote & on-site opportunities
              </div>

              {/* Stats */}

              <div
                className="
                  mt-7
                  grid
                  grid-cols-3
                  divide-x
                  divide-white/[0.07]
                  rounded-2xl
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  py-4
                "
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="group/stat px-2 text-center">
                    <div
                      className="
                        text-xl
                        font-semibold
                        tracking-tight
                        text-white
                        transition-all
                        duration-300
                        group-hover/stat:text-violet-300
                        group-hover/stat:drop-shadow-[0_0_12px_rgba(167,139,250,.5)]
                      "
                    >
                      {stat.number}
                    </div>

                    <div
                      className="
                        mt-1
                        text-[7px]
                        uppercase
                        tracking-wider
                        text-zinc-600
                        sm:text-[8px]
                      "
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT — JOURNEY
          ==================================================== */}

          <div className="about-reveal about-delay-2">
            {/* Header */}

            <div className="mb-7 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Layers3 className="h-4 w-4 text-cyan-400" />

                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-zinc-300
                    "
                  >
                    Career Journey
                  </p>
                </div>

                <p className="mt-2 text-[10px] text-zinc-700">
                  Education → Enterprise → Full Stack Development
                </p>
              </div>

              <span
                className="
                  hidden
                  font-mono
                  text-[9px]
                  text-zinc-700
                  sm:block
                "
              >
                01 — 04
              </span>
            </div>

            {/* Timeline */}

            <div className="relative">
              {/* Timeline background */}

              <div
                className="
                  absolute
                  bottom-5
                  left-[20px]
                  top-5
                  w-px
                  bg-white/[0.06]
                "
              />

              {/* Animated timeline */}

              <div
                className="
                  timeline-glow
                  absolute
                  left-[20px]
                  top-5
                  z-[1]
                  w-px
                  bg-gradient-to-b
                  from-violet-500
                  via-fuchsia-400
                  to-cyan-400
                "
              />

              <div className="space-y-5">
                {journey.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                        timeline-item
                        group
                        relative
                        flex
                        gap-5
                      "
                    >
                      {/* Timeline Icon */}

                      <div
                        className="
                          timeline-icon
                          relative
                          z-10
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-[#09090b]
                          text-zinc-500
                        "
                      >
                        <Icon className="h-4 w-4" />

                        {/* Ring */}

                        <span className="timeline-ring absolute inset-[-5px] rounded-full border border-transparent" />
                      </div>

                      {/* Card */}

                      <div
                        className="
                          journey-card
                          relative
                          flex-1
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/[0.06]
                          bg-white/[0.02]
                          p-5
                        "
                      >
                        {/* Card shine */}

                        <div className="card-shine" />

                        {/* Top gradient */}

                        <div
                          className="
                            absolute
                            left-0
                            right-0
                            top-0
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-violet-400/30
                            to-transparent
                            opacity-0
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                          "
                        />

                        <div
                          className="
                            relative
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-2
                          "
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="
                                rounded-full
                                border
                                border-violet-400/10
                                bg-violet-500/[0.07]
                                px-2.5
                                py-1
                                text-[8px]
                                font-medium
                                text-violet-300
                              "
                            >
                              {item.year}
                            </span>

                            <span
                              className="
                                rounded-full
                                border
                                border-white/[0.05]
                                px-2
                                py-1
                                text-[7px]
                                text-zinc-600
                              "
                            >
                              {item.tag}
                            </span>
                          </div>

                          <span
                            className="
                              font-mono
                              text-[8px]
                              text-zinc-700
                            "
                          >
                            0{index + 1}
                          </span>
                        </div>

                        <h3
                          className="
                            relative
                            mt-4
                            text-base
                            font-semibold
                            text-zinc-200
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            relative
                            mt-2
                            text-xs
                            leading-6
                            text-zinc-600
                            transition-colors
                            duration-300
                            group-hover:text-zinc-500
                          "
                        >
                          {item.description}
                        </p>

                        {/* Bottom line */}

                        <div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[2px]
                            w-0
                            bg-gradient-to-r
                            from-violet-500
                            via-fuchsia-400
                            to-cyan-400
                            transition-all
                            duration-700
                            group-hover:w-full
                          "
                        />

                        <ArrowUpRight
                          className="
                            absolute
                            right-5
                            top-5
                            h-3.5
                            w-3.5
                            text-zinc-800
                            transition-all
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:translate-x-1
                            group-hover:text-violet-400
                          "
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            cta-card
            group
            relative
            mt-10
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.07]
            bg-gradient-to-r
            from-violet-500/[0.06]
            via-white/[0.015]
            to-cyan-500/[0.05]
            p-6
            sm:p-7
          "
        >
          <div className="cta-orb" />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-5
              sm:flex-row
              sm:items-center
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-violet-400/20
                  bg-violet-500/10
                  text-violet-300
                  sm:flex
                "
              >
                <Rocket className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-300">
                  Looking for someone who can build beyond the UI?
                </p>

                <p className="mt-1 text-[10px] text-zinc-600">
                  Let's discuss your next product or engineering challenge.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="
                cta-button
                group/button
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-5
                py-3
                text-xs
                font-semibold
                text-black
              "
            >
              Let's Talk
              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
