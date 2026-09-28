import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { portfolio } from "../data/portfolioData";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section
      id="blog"
      className="relative z-10 mx-auto max-w-7xl px-5 py-32 lg:px-8"
    >
      {/* Header */}

      <div className="flex items-end justify-between gap-5">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.3em] text-violet-400">
            INSIGHTS
          </span>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Thoughts &<span className="text-zinc-600"> ideas.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
            Things I learn while building modern applications, backend systems,
            cloud infrastructure and AI-powered products.
          </p>
        </div>
      </div>

      {/* Articles */}

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.blogs?.map((post, index) => (
          <article
            key={post.id || index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-violet-400/30
              hover:bg-white/[0.04]
            "
          >
            {/* Image */}

            <div
              className="
                relative
                h-52
                overflow-hidden
                bg-gradient-to-br
                from-violet-950
                via-zinc-950
                to-cyan-950
              "
            >
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />
              ) : (
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-violet-600/20
                    via-fuchsia-600/10
                    to-cyan-500/20
                  "
                >
                  <BookOpen
                    className="
                      h-12
                      w-12
                      text-violet-300/50
                      transition
                      duration-500
                      group-hover:scale-125
                      group-hover:text-violet-300
                    "
                  />
                </div>
              )}

              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-transparent
                  to-transparent
                "
              />

              {/* Category */}

              <span
                className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  tracking-wider
                  text-violet-300
                  backdrop-blur-xl
                "
              >
                {post.category}
              </span>
            </div>

            {/* Content */}

            <div className="p-6">
              <div className="flex items-center gap-3 text-[10px] text-zinc-600">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime || "5 min read"}
                </span>

                <span>•</span>

                <span>{post.date}</span>
              </div>

              <h3
                className="
                  mt-4
                  text-xl
                  font-semibold
                  leading-snug
                  transition
                  duration-300
                  group-hover:text-violet-300
                "
              >
                {post.title}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
                {post.description}
              </p>

              {/* Read Article */}

              <button
                onClick={() => navigate(`/blog/${post.id || index + 1}`)}
                className="
                  group/read
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-white
                  transition
                  hover:text-violet-300
                "
              >
                <span>Read Article</span>

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover/read:-translate-y-1
                    group-hover/read:translate-x-1
                  "
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
