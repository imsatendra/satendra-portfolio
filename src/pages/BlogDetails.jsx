// import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   ArrowLeft,
//   ArrowUpRight,
//   CalendarDays,
//   Clock3,
//   Code2,
//   Sparkles,
// } from "lucide-react";

// const articles = {
//   "building-scalable-react-applications": {
//     category: "REACT",
//     title: "Building Scalable React Applications",
//     date: "Sep 24, 2026",
//     readTime: "6 min read",
//     tags: ["React", "JavaScript", "Architecture"],

//     intro:
//       "A scalable React application is not just about writing components. It is about creating a structure that remains easy to understand, test and maintain as the application grows.",

//     sections: [
//       {
//         title: "Start with a clear structure",
//         content:
//           "A good project structure separates responsibilities. Components should focus on UI, while hooks, utilities and API logic should have their own responsibilities.",
//       },

//       {
//         title: "Keep components reusable",
//         content:
//           "Instead of creating large components that handle everything, break the interface into smaller reusable components. This makes the application easier to maintain and improves development speed.",
//       },

//       {
//         title: "Manage state intentionally",
//         content:
//           "Not every piece of state needs to live globally. Local UI state can remain inside components while shared application state can be managed with Context API or Redux Toolkit when appropriate.",
//       },

//       {
//         title: "Think about scalability early",
//         content:
//           "As your application grows, predictable naming, reusable patterns and separation of concerns become increasingly important. Good architecture reduces future complexity.",
//       },
//     ],
//   },

//   "designing-clean-nodejs-apis": {
//     category: "BACKEND",
//     title: "Designing Clean Node.js APIs",
//     date: "Sep 18, 2026",
//     readTime: "8 min read",
//     tags: ["Node.js", "Express", "MongoDB"],

//     intro:
//       "A backend becomes much easier to maintain when routing, business logic, validation and database operations are separated into clear layers.",

//     sections: [
//       {
//         title: "Routes should stay simple",
//         content:
//           "Routes should primarily define the endpoint and connect it to the appropriate controller. Business logic should not be placed directly inside route definitions.",
//       },

//       {
//         title: "Controllers handle requests",
//         content:
//           "Controllers receive request data, validate the input and coordinate the required business operations before sending the response.",
//       },

//       {
//         title: "Use middleware for shared logic",
//         content:
//           "Authentication, authorization, logging and request validation are common examples of responsibilities that can be handled using Express middleware.",
//       },

//       {
//         title: "Keep database logic organized",
//         content:
//           "Database operations should be predictable and separated from unrelated application logic. This makes debugging and future changes much easier.",
//       },
//     ],
//   },

//   "ai-powered-web-experiences": {
//     category: "AI",
//     title: "Building AI-Powered Web Experiences",
//     date: "Sep 10, 2026",
//     readTime: "7 min read",
//     tags: ["AI", "APIs", "React"],

//     intro:
//       "AI can add powerful capabilities to web applications, but the best experiences come from solving a real user problem rather than adding AI simply because it is available.",

//     sections: [
//       {
//         title: "Start with the user problem",
//         content:
//           "Before integrating an AI API, identify the problem you are trying to solve. AI should improve the workflow instead of making an otherwise simple experience unnecessarily complicated.",
//       },

//       {
//         title: "Keep API keys secure",
//         content:
//           "Sensitive API credentials should never be exposed directly in frontend code. Requests involving secret credentials should normally be handled by a secure backend.",
//       },

//       {
//         title: "Design for imperfect responses",
//         content:
//           "AI responses can vary. Applications should handle loading states, errors, unexpected output and network failures gracefully.",
//       },

//       {
//         title: "Make AI feel native",
//         content:
//           "The best AI interfaces integrate naturally into the product. Streaming responses, clear feedback and useful controls can make the experience feel significantly more polished.",
//       },
//     ],
//   },

//   "frontend-backend-architecture": {
//     category: "FULL STACK",
//     title: "Connecting Frontend & Backend",
//     date: "Aug 28, 2026",
//     readTime: "9 min read",
//     tags: ["MERN", "API", "Full Stack"],

//     intro:
//       "Modern full-stack applications depend on clear communication between the frontend and backend. Understanding that flow is essential for building reliable products.",

//     sections: [
//       {
//         title: "Frontend responsibilities",
//         content:
//           "The frontend manages user interaction, UI state, forms, navigation and communication with backend APIs.",
//       },

//       {
//         title: "Backend responsibilities",
//         content:
//           "The backend handles authentication, business rules, validation, database operations and API responses.",
//       },

//       {
//         title: "API communication",
//         content:
//           "The frontend can communicate with the backend using HTTP methods such as GET, POST, PUT and DELETE. Axios or fetch can be used to make these requests.",
//       },

//       {
//         title: "Database layer",
//         content:
//           "MongoDB can store application data while Mongoose provides models, schemas and useful database abstractions for Node.js applications.",
//       },
//     ],
//   },
// };

// const BlogDetails = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const article = articles[slug];

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, [slug]);

//   if (!article) {
//     return (
//       <section className="flex min-h-screen items-center justify-center bg-[#050505] px-5 text-white">
//         <div className="text-center">

//           <h1 className="text-4xl font-semibold">
//             Article not found
//           </h1>

//           <button
//             onClick={() => navigate("/")}
//             className="
//               mt-6
//               rounded-full
//               bg-white
//               px-6
//               py-3
//               text-sm
//               font-semibold
//               text-black
//             "
//           >
//             Back Home
//           </button>

//         </div>
//       </section>
//     );
//   }

//   return (
//     <main
//       className="
//         relative
//         min-h-screen
//         overflow-hidden
//         bg-[#050505]
//         text-white
//       "
//     >

//       {/* Background */}

//       <div
//         className="
//           pointer-events-none
//           fixed
//           left-1/2
//           top-0
//           h-[600px]
//           w-[600px]
//           -translate-x-1/2
//           rounded-full
//           bg-violet-600/10
//           blur-[180px]
//         "
//       />

//       {/* Content */}

//       <div className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-32">

//         {/* Back */}

//         <button
//           onClick={() => navigate("/#blog")}
//           className="
//             group
//             flex
//             items-center
//             gap-2
//             text-sm
//             text-zinc-500
//             transition-colors
//             hover:text-white
//           "
//         >

//           <ArrowLeft
//             className="
//               h-4
//               w-4
//               transition-transform
//               group-hover:-translate-x-1
//             "
//           />

//           Back to Articles

//         </button>

//         {/* Header */}

//         <div className="mt-12">

//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               gap-3
//             "
//           >

//             <span
//               className="
//                 rounded-full
//                 border
//                 border-violet-400/20
//                 bg-violet-500/10
//                 px-3
//                 py-1.5
//                 text-[9px]
//                 font-semibold
//                 tracking-[0.2em]
//                 text-violet-300
//               "
//             >
//               {article.category}
//             </span>

//             <span
//               className="
//                 flex
//                 items-center
//                 gap-1.5
//                 text-[10px]
//                 text-zinc-600
//               "
//             >
//               <Clock3 className="h-3 w-3" />

//               {article.readTime}
//             </span>

//             <span
//               className="
//                 flex
//                 items-center
//                 gap-1.5
//                 text-[10px]
//                 text-zinc-600
//               "
//             >
//               <CalendarDays className="h-3 w-3" />

//               {article.date}
//             </span>

//           </div>

//           <h1
//             className="
//               mt-7
//               text-4xl
//               font-semibold
//               leading-[0.95]
//               tracking-[-0.05em]
//               sm:text-5xl
//               lg:text-7xl
//             "
//           >
//             {article.title}
//           </h1>

//           <p
//             className="
//               mt-7
//               max-w-3xl
//               text-base
//               leading-8
//               text-zinc-500
//               sm:text-lg
//             "
//           >
//             {article.intro}
//           </p>

//           {/* Tags */}

//           <div className="mt-7 flex flex-wrap gap-2">

//             {article.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="
//                   rounded-full
//                   border
//                   border-white/[0.07]
//                   bg-white/[0.025]
//                   px-3
//                   py-1.5
//                   text-[9px]
//                   text-zinc-500
//                 "
//               >
//                 {tag}
//               </span>
//             ))}

//           </div>

//         </div>

//         {/* Divider */}

//         <div
//           className="
//             my-14
//             h-px
//             bg-gradient-to-r
//             from-transparent
//             via-white/[0.08]
//             to-transparent
//           "
//         />

//         {/* Article */}

//         <article className="space-y-12">

//           {article.sections.map((section, index) => (
//             <section key={section.title}>

//               <div className="flex gap-5">

//                 <span
//                   className="
//                     hidden
//                     h-8
//                     w-8
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-violet-400/20
//                     bg-violet-500/10
//                     text-[10px]
//                     font-semibold
//                     text-violet-300
//                     sm:flex
//                   "
//                 >
//                   0{index + 1}
//                 </span>

//                 <div>

//                   <h2
//                     className="
//                       text-2xl
//                       font-semibold
//                       tracking-tight
//                       sm:text-3xl
//                     "
//                   >
//                     {section.title}
//                   </h2>

//                   <p
//                     className="
//                       mt-4
//                       text-sm
//                       leading-8
//                       text-zinc-500
//                       sm:text-base
//                     "
//                   >
//                     {section.content}
//                   </p>

//                 </div>

//               </div>

//             </section>
//           ))}

//         </article>

//         {/* Bottom CTA */}

//         <div
//           className="
//             mt-20
//             overflow-hidden
//             rounded-3xl
//             border
//             border-white/[0.07]
//             bg-white/[0.025]
//             p-7
//             sm:p-10
//           "
//         >

//           <div className="flex items-start gap-4">

//             <div
//               className="
//                 flex
//                 h-11
//                 w-11
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-xl
//                 bg-violet-500/10
//               "
//             >
//               <Sparkles className="h-5 w-5 text-violet-400" />
//             </div>

//             <div>

//               <h3 className="text-xl font-semibold">
//                 Enjoyed this article?
//               </h3>

//               <p
//                 className="
//                   mt-2
//                   text-sm
//                   leading-7
//                   text-zinc-500
//                 "
//               >
//                 More articles about frontend, backend, cloud and AI
//                 are coming soon.
//               </p>

//             </div>

//           </div>

//           <button
//             onClick={() => navigate("/#contact")}
//             className="
//               mt-7
//               flex
//               items-center
//               gap-2
//               rounded-full
//               bg-white
//               px-5
//               py-3
//               text-xs
//               font-semibold
//               text-black
//               transition-all
//               hover:-translate-y-1
//               hover:bg-violet-200
//             "
//           >
//             Let's Build Something

//             <ArrowUpRight className="h-4 w-4" />
//           </button>

//         </div>

//       </div>
//     </main>
//   );
// };

// export default BlogDetails;


import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  BookOpen,
} from "lucide-react";

import { portfolio } from "../data/portfolioData";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = portfolio.blogs?.find(
    (post) => String(post.id) === String(id)
  );

  if (!article) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <BookOpen className="mx-auto h-12 w-12 text-violet-400" />

          <h1 className="mt-5 text-3xl font-semibold">
            Article not found
          </h1>

          <button
            onClick={() => navigate("/#blog")}
            className="
              mt-6
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-black
            "
          >
            Back to Blog
          </button>
        </div>
      </section>
    );
  }

  return (
    <article className="relative z-10 px-5 pb-32 pt-10 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Back */}

        <button
          onClick={() => navigate("/#blog")}
          className="
            group
            mb-10
            flex
            items-center
            gap-2
            text-sm
            text-zinc-500
            transition
            hover:text-white
          "
        >
          <ArrowLeft
            className="
              h-4
              w-4
              transition
              group-hover:-translate-x-1
            "
          />

          Back to articles
        </button>

        {/* Category */}

        <div className="flex items-center gap-3">
          <span
            className="
              rounded-full
              border
              border-violet-400/20
              bg-violet-500/10
              px-3
              py-1.5
              text-[9px]
              font-semibold
              tracking-wider
              text-violet-300
            "
          >
            {article.category}
          </span>

          <span className="text-xs text-zinc-600">
            Article
          </span>
        </div>

        {/* Title */}

        <h1
          className="
            mt-6
            text-4xl
            font-semibold
            leading-tight
            tracking-tight
            sm:text-6xl
            lg:text-7xl
          "
        >
          {article.title}
        </h1>

        {/* Description */}

        <p
          className="
            mt-6
            max-w-3xl
            text-base
            leading-8
            text-zinc-500
            sm:text-lg
          "
        >
          {article.description}
        </p>

        {/* Meta */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-5
            border-y
            border-white/[0.06]
            py-5
            text-xs
            text-zinc-600
          "
        >
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-violet-400" />
            {article.date}
          </span>

          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-cyan-400" />
            {article.readTime || "5 min read"}
          </span>
        </div>

        {/* Hero Image */}

        <div
          className="
            relative
            mt-10
            h-[260px]
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.07]
            bg-gradient-to-br
            from-violet-950
            via-zinc-950
            to-cyan-950
            sm:h-[420px]
          "
        >
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <BookOpen className="h-20 w-20 text-violet-300/30" />
            </div>
          )}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* Article */}

        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
            text-[15px]
            leading-8
            text-zinc-400
            sm:text-base
          "
        >
          {article.content ? (
            article.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-7">
                {paragraph}
              </p>
            ))
          ) : (
            <>
              <p className="mb-7">
                {article.description}
              </p>

              <p className="mb-7">
                Modern software development is not only about writing code.
                It is about understanding the problem, designing a scalable
                architecture and creating an experience that users can
                actually enjoy.
              </p>

              <p className="mb-7">
                When building applications, I focus on clean architecture,
                reusable components, performance and maintainability.
                These principles make it easier to scale a product as the
                requirements grow.
              </p>

              <h2 className="mb-5 mt-12 text-2xl font-semibold text-white sm:text-3xl">
                Building for scale
              </h2>

              <p className="mb-7">
                A good application should be designed with the future in
                mind. Frontend architecture, backend APIs, database design,
                caching and cloud infrastructure all play an important role
                in building reliable systems.
              </p>

              <p className="mb-7">
                The goal is simple: build something useful, keep the code
                maintainable and continuously improve it based on real-world
                feedback.
              </p>
            </>
          )}
        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            p-7
            sm:p-10
          "
        >
          <p className="text-[10px] font-semibold tracking-[0.3em] text-violet-400">
            KEEP EXPLORING
          </p>

          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Interested in working together?
          </h2>

          <button
            onClick={() => navigate("/#contact")}
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              transition
              hover:-translate-y-1
            "
          >
            Let's Talk

            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </article>
  );
};

export default BlogDetails;