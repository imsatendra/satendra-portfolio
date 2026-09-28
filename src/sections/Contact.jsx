import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  Send,
  User,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import { useState } from "react";
import { portfolio } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ==========================================
  // DIRECT WHATSAPP
  // ==========================================

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Satendra, I visited your portfolio and would like to discuss a project or job opportunity with you."
    );

    window.open(
      `https://wa.me/${portfolio.whatsapp}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ==========================================
  // FORM INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.message) {
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hi Satendra,

Name: ${formData.name}

Contact: ${formData.contact}

Message:
${formData.message}`
    );

    window.open(
      `https://wa.me/${portfolio.whatsapp}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);

    setFormData({
      name: "",
      contact: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="
        relative
        z-10
        overflow-hidden
        px-5
        pb-32
        pt-24
        sm:px-6
        sm:pb-36
        sm:pt-28
        lg:px-8
      "
    >
      {/* ==========================================
          BACKGROUND GLOW
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-600/10
          blur-[150px]
          sm:h-[600px]
          sm:w-[600px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[20%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/[0.06]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ==========================================
            TOP LABEL
        ========================================== */}

        <div className="flex items-center justify-center gap-3">

          <span
            className="
              h-px
              w-8
              bg-gradient-to-r
              from-transparent
              to-violet-400
              sm:w-10
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.3em]
              text-violet-400
              sm:text-[10px]
              sm:tracking-[0.35em]
            "
          >
            HAVE A PROJECT IN MIND?
          </span>

          <span
            className="
              h-px
              w-8
              bg-gradient-to-l
              from-transparent
              to-cyan-400
              sm:w-10
            "
          />

        </div>

        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="mt-7 text-center">

          <h2
            className="
              text-4xl
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Let's build
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
              something great.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-zinc-500
              sm:text-base
            "
          >
            Software architecture, cloud infrastructure, backend systems,
            scalable products and AI-powered experiences.
          </p>

        </div>

        {/* ==========================================
            CONTACT OPTIONS
        ========================================== */}

        <div
          className="
            mt-12
            grid
            gap-5
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-6
          "
        >

          {/* ========================================
              OPTION 1 — WHATSAPP
          ======================================== */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-violet-400/20
              hover:bg-white/[0.04]
              sm:p-8
            "
          >

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-violet-600/10
                blur-3xl
                transition
                duration-700
                group-hover:scale-150
              "
            />

            {/* Icon */}

            <div
              className="
                relative
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-400/20
                bg-violet-500/10
                text-violet-300
                shadow-[0_0_30px_rgba(139,92,246,.12)]
              "
            >
              <MessageCircle className="h-6 w-6" />
            </div>

            <p
              className="
                mt-7
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-violet-400
              "
            >
              QUICK CONTACT
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-white">
              Start a conversation
            </h3>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-zinc-500
              "
            >
              Have a project, job opportunity or collaboration in mind?
              Let's talk directly on WhatsApp.
            </p>

            <button
              type="button"
              onClick={openWhatsApp}
              className="
                group/button
                relative
                mt-7
                flex
                w-full
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-2xl
                bg-white
                px-6
                py-4
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(139,92,246,.25)]
                active:scale-[0.98]
              "
            >

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-violet-200
                  to-transparent
                  opacity-70
                  transition-transform
                  duration-700
                  group-hover/button:translate-x-full
                "
              />

              <MessageCircle className="relative h-4 w-4" />

              <span className="relative">
                Start a conversation
              </span>

              <ArrowUpRight
                className="
                  relative
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />

            </button>

          </div>

          {/* ========================================
              OPTION 2 — CONTACT FORM
          ======================================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >

            {/* Top Glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-32
                w-64
                -translate-x-1/2
                rounded-full
                bg-violet-600/10
                blur-3xl
              "
            />

            <div className="relative">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-cyan-500/10
                  "
                >
                  <Send className="h-4 w-4 text-cyan-300" />
                </div>

                <div>

                  <p
                    className="
                      text-[9px]
                      font-semibold
                      tracking-[0.25em]
                      text-cyan-400
                    "
                  >
                    SEND A MESSAGE
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Tell me about your project
                  </h3>

                </div>

              </div>

              {/* ==================================
                  FORM
              ================================== */}

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-4"
              >

                {/* Name */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-zinc-400
                    "
                  >
                    <User className="h-3.5 w-3.5" />

                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition
                      focus:border-violet-400/40
                      focus:bg-white/[0.04]
                      focus:ring-1
                      focus:ring-violet-400/20
                    "
                  />

                </div>

                {/* Contact */}

                <div>

                  <label
                    htmlFor="contact"
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-zinc-400
                    "
                  >
                    <Mail className="h-3.5 w-3.5" />

                    Email or Phone
                  </label>

                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Email or phone number"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition
                      focus:border-violet-400/40
                      focus:bg-white/[0.04]
                      focus:ring-1
                      focus:ring-violet-400/20
                    "
                  />

                </div>

                {/* Message */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-zinc-400
                    "
                  >
                    <FileText className="h-3.5 w-3.5" />

                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me what you want to build..."
                    required
                    rows={4}
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/30
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-white
                      outline-none
                      placeholder:text-zinc-700
                      transition
                      focus:border-violet-400/40
                      focus:bg-white/[0.04]
                      focus:ring-1
                      focus:ring-violet-400/20
                    "
                  />

                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    via-purple-600
                    to-cyan-500
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_0_25px_rgba(124,58,237,.2)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_0_40px_rgba(124,58,237,.4)]
                    active:scale-[0.98]
                  "
                >

                  <Send
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  Send via WhatsApp

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />

                </button>

                {/* Success */}

                {submitted && (
                  <div
                    className="
                      rounded-xl
                      border
                      border-emerald-400/20
                      bg-emerald-400/[0.06]
                      px-4
                      py-3
                      text-center
                      text-xs
                      text-emerald-300
                    "
                  >
                    Your message is ready in WhatsApp.
                  </div>
                )}

              </form>

            </div>

          </div>

        </div>

        {/* ==========================================
            BOTTOM INFO
        ========================================== */}

        <div
          className="
            mx-auto
            mt-16
            flex
            max-w-3xl
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-white/[0.06]
            pt-7
            sm:flex-row
          "
        >

          <div className="flex items-center gap-2">

            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-emerald-400
                shadow-[0_0_12px_rgba(52,211,153,.8)]
              "
            />

            <span className="text-xs text-zinc-500">
              Available for new opportunities
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Sparkles className="h-3.5 w-3.5 text-violet-400" />

            <span
              className="
                text-[10px]
                tracking-[0.2em]
                text-zinc-600
              "
            >
              BUILD • LEARN • SHIP
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;