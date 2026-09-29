// // import React from "react";
// // import { ArrowUpRight, ExternalLink, Sparkles, Layers3 } from "lucide-react";
// // import { FaGithub } from "react-icons/fa";
// // import { portfolio } from "../data/portfolioData";

// // const fallbackProjects = [
// //   {
// //     number: "01",
// //     title: "Employee Management System",
// //     category: "FULL STACK",
// //     description:
// //       "A modern employee management platform with authentication, CRUD operations, search, filtering, pagination and role-based access.",
// //     stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
// //     image:
// //       "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
// //     github: "https://github.com/",
// //     live: "https://example.com",
// //   },

// //   {
// //     number: "02",
// //     title: "E-Commerce Platform",
// //     category: "MERN STACK",
// //     description:
// //       "A scalable e-commerce application with product management, authentication, cart functionality and order workflows.",
// //     stack: ["React", "Node.js", "Express", "MongoDB"],
// //     image:
// //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
// //     github: "https://github.com/",
// //     live: "https://example.com",
// //   },

// //   {
// //     number: "03",
// //     title: "Job Portal",
// //     category: "WEB APPLICATION",
// //     description:
// //       "A job platform where candidates can search and apply for jobs while recruiters can manage job postings and applications.",
// //     stack: ["React", "Express", "MongoDB", "JWT"],
// //     image:
// //       "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
// //     github: "https://github.com/",
// //     live: "https://example.com",
// //   },

// //   {
// //     number: "04",
// //     title: "AI Dashboard",
// //     category: "AI / SAAS",
// //     description:
// //       "A futuristic dashboard interface designed for AI-powered workflows, analytics and intelligent productivity tools.",
// //     stack: ["React", "Node.js", "AI", "REST API"],
// //     image:
// //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
// //     github: "https://github.com/",
// //     live: "https://example.com",
// //   },
// // ];

// // const Projects = () => {
// //   const projects =
// //     Array.isArray(portfolio?.projects) && portfolio.projects.length > 0
// //       ? portfolio.projects
// //       : fallbackProjects;

// //   return (
// //     <section
// //       id="works"
// //       className="
// //         relative
// //         z-10
// //         mx-auto
// //         max-w-7xl
// //         overflow-hidden
// //         px-5
// //         py-24
// //         sm:py-28
// //         lg:px-8
// //         lg:py-32
// //       "
// //     >
// //       {/* Background Glow */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-[10%]
// //           top-[15%]
// //           h-[350px]
// //           w-[350px]
// //           rounded-full
// //           bg-violet-600/10
// //           blur-[140px]
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           bottom-[10%]
// //           right-[5%]
// //           h-[300px]
// //           w-[300px]
// //           rounded-full
// //           bg-cyan-500/10
// //           blur-[130px]
// //         "
// //       />

// //       {/* Header */}

// //       <div className="relative">
// //         <div className="flex items-center gap-3">
// //           <span className="h-px w-8 bg-violet-500" />

// //           <span
// //             className="
// //               text-[10px]
// //               font-semibold
// //               tracking-[0.35em]
// //               text-violet-400
// //             "
// //           >
// //             SELECTED WORK
// //           </span>
// //         </div>

// //         <div
// //           className="
// //             mt-5
// //             flex
// //             flex-col
// //             justify-between
// //             gap-5
// //             lg:flex-row
// //             lg:items-end
// //           "
// //         >
// //           <h2
// //             className="
// //               max-w-3xl
// //               text-4xl
// //               font-semibold
// //               leading-tight
// //               tracking-[-0.05em]
// //               sm:text-5xl
// //               lg:text-6xl
// //             "
// //           >
// //             Building products with{" "}
// //             <span className="text-zinc-600">purpose.</span>
// //           </h2>

// //           <div
// //             className="
// //               flex
// //               items-center
// //               gap-2
// //               text-xs
// //               text-zinc-600
// //             "
// //           >
// //             <Sparkles className="h-4 w-4 text-violet-400" />

// //             <span>Real-world projects</span>
// //           </div>
// //         </div>

// //         <p
// //           className="
// //             mt-5
// //             max-w-2xl
// //             text-sm
// //             leading-7
// //             text-zinc-500
// //             sm:text-base
// //           "
// //         >
// //           A collection of applications I've built using modern frontend,
// //           backend, cloud and AI technologies.
// //         </p>
// //       </div>

// //       {/* Projects */}

// //       <div
// //         className="
// //           relative
// //           mt-12
// //           grid
// //           gap-6
// //           md:grid-cols-2
// //         "
// //       >
// //         {projects.map((project, index) => {
// //           const stack = Array.isArray(project?.stack)
// //             ? project.stack
// //             : typeof project?.stack === "string"
// //               ? project.stack.split(",").map((item) => item.trim())
// //               : [];

// //           return (
// //             <article
// //               key={project?.number || index}
// //               className="
// //                 group
// //                 relative
// //                 overflow-hidden
// //                 rounded-[28px]
// //                 border
// //                 border-white/[0.07]
// //                 bg-white/[0.025]
// //                 shadow-2xl
// //                 transition-all
// //                 duration-500
// //                 hover:-translate-y-2
// //                 hover:border-violet-400/20
// //                 hover:bg-white/[0.04]
// //               "
// //             >
// //               {/* Image */}

// //               <div
// //                 className="
// //                   relative
// //                   h-64
// //                   overflow-hidden
// //                   sm:h-72
// //                 "
// //               >
// //                 {/* Project Image */}

// //                 <img
// //                   src={
// //                     project?.image ||
// //                     fallbackProjects[index % fallbackProjects.length].image
// //                   }
// //                   alt={project?.title || "Project"}
// //                   className="
// //                     h-full
// //                     w-full
// //                     object-cover
// //                     transition-transform
// //                     duration-700
// //                     group-hover:scale-110
// //                   "
// //                   onError={(event) => {
// //                     event.currentTarget.src =
// //                       fallbackProjects[index % fallbackProjects.length].image;
// //                   }}
// //                 />

// //                 {/* Dark Overlay */}

// //                 <div
// //                   className="
// //                     absolute
// //                     inset-0
// //                     bg-gradient-to-t
// //                     from-black
// //                     via-black/30
// //                     to-transparent
// //                   "
// //                 />

// //                 {/* Purple Glow */}

// //                 <div
// //                   className="
// //                     pointer-events-none
// //                     absolute
// //                     -right-20
// //                     -top-20
// //                     h-48
// //                     w-48
// //                     rounded-full
// //                     bg-violet-500/30
// //                     blur-3xl
// //                     transition-all
// //                     duration-700
// //                     group-hover:scale-150
// //                   "
// //                 />

// //                 {/* Number */}

// //                 <div
// //                   className="
// //                     absolute
// //                     left-5
// //                     top-5
// //                     flex
// //                     items-center
// //                     gap-2
// //                     rounded-full
// //                     border
// //                     border-white/10
// //                     bg-black/40
// //                     px-3
// //                     py-1.5
// //                     text-[10px]
// //                     font-semibold
// //                     text-white
// //                     backdrop-blur-xl
// //                   "
// //                 >
// //                   <Layers3 className="h-3 w-3 text-violet-400" />

// //                   {project?.number || String(index + 1).padStart(2, "0")}
// //                 </div>

// //                 {/* Category */}

// //                 <div
// //                   className="
// //                     absolute
// //                     bottom-5
// //                     left-5
// //                     rounded-full
// //                     border
// //                     border-white/10
// //                     bg-black/40
// //                     px-3
// //                     py-1.5
// //                     text-[9px]
// //                     font-semibold
// //                     tracking-[0.2em]
// //                     text-violet-300
// //                     backdrop-blur-xl
// //                   "
// //                 >
// //                   {project?.category || "PROJECT"}
// //                 </div>
// //               </div>

// //               {/* Content */}

// //               <div className="p-6 sm:p-7">
// //                 <div className="flex items-start justify-between gap-4">
// //                   <h3
// //                     className="
// //                       text-2xl
// //                       font-semibold
// //                       tracking-tight
// //                       text-white
// //                       transition-colors
// //                       duration-300
// //                       group-hover:text-violet-200
// //                     "
// //                   >
// //                     {project?.title || "Untitled Project"}
// //                   </h3>

// //                   <div
// //                     className="
// //                       flex
// //                       h-9
// //                       w-9
// //                       shrink-0
// //                       items-center
// //                       justify-center
// //                       rounded-full
// //                       border
// //                       border-white/10
// //                       bg-white/[0.03]
// //                       transition-all
// //                       duration-300
// //                       group-hover:border-violet-400/30
// //                       group-hover:bg-violet-500/10
// //                     "
// //                   >
// //                     <ArrowUpRight
// //                       className="
// //                         h-4
// //                         w-4
// //                         text-zinc-500
// //                         transition-all
// //                         duration-300
// //                         group-hover:-translate-y-0.5
// //                         group-hover:translate-x-0.5
// //                         group-hover:text-violet-300
// //                       "
// //                     />
// //                   </div>
// //                 </div>

// //                 {/* Description */}

// //                 <p
// //                   className="
// //                     mt-3
// //                     text-sm
// //                     leading-7
// //                     text-zinc-500
// //                   "
// //                 >
// //                   {project?.description ||
// //                     "A modern web application built with scalable technologies."}
// //                 </p>

// //                 {/* Tech Stack */}

// //                 {stack.length > 0 && (
// //                   <div className="mt-5 flex flex-wrap gap-2">
// //                     {stack.map((technology, techIndex) => (
// //                       <span
// //                         key={`${technology}-${techIndex}`}
// //                         className="
// //                           rounded-full
// //                           border
// //                           border-white/[0.07]
// //                           bg-white/[0.025]
// //                           px-3
// //                           py-1.5
// //                           text-[9px]
// //                           text-zinc-500
// //                           transition-all
// //                           duration-300
// //                           group-hover:border-violet-400/10
// //                           group-hover:text-zinc-300
// //                         "
// //                       >
// //                         {technology}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 )}

// //                 {/* Buttons */}

// //                 <div className="mt-7 flex flex-wrap gap-3">{/* GitHub */}</div>
// //               </div>

// //               {/* Bottom Glow */}

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   bottom-0
// //                   left-1/2
// //                   h-px
// //                   w-0
// //                   -translate-x-1/2
// //                   bg-gradient-to-r
// //                   from-transparent
// //                   via-violet-400
// //                   to-transparent
// //                   opacity-0
// //                   transition-all
// //                   duration-700
// //                   group-hover:w-3/4
// //                   group-hover:opacity-100
// //                 "
// //               />
// //             </article>
// //           );
// //         })}
// //       </div>

// //       {/* Bottom */}

// //       <div className="relative mt-12 flex justify-center">
// //         <div
// //           className="
// //             flex
// //             items-center
// //             gap-2
// //             rounded-full
// //             border
// //             border-white/[0.07]
// //             bg-white/[0.02]
// //             px-5
// //             py-2.5
// //             text-[10px]
// //             tracking-[0.15em]
// //             text-zinc-600
// //           "
// //         >
// //           <span
// //             className="
// //               h-1.5
// //               w-1.5
// //               animate-pulse
// //               rounded-full
// //               bg-emerald-400
// //             "
// //           />
// //           MORE PROJECTS COMING SOON
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import {
//   ArrowUpRight,
//   ExternalLink,
//   Sparkles,
//   Layers3,
// } from "lucide-react";

// import { Link } from "react-router-dom";
// import { projects } from "../data/projectData";

// const Projects = () => {
//   return (
//     <section
//       id="works"
//       className="
//         relative
//         z-10
//         mx-auto
//         max-w-7xl
//         overflow-hidden
//         px-5
//         py-24
//         sm:py-28
//         lg:px-8
//         lg:py-32
//       "
//     >
//       {/* Background */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[5%]
//           top-[15%]
//           h-[350px]
//           w-[350px]
//           rounded-full
//           bg-violet-600/10
//           blur-[140px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           bottom-[10%]
//           right-[5%]
//           h-[300px]
//           w-[300px]
//           rounded-full
//           bg-cyan-500/10
//           blur-[130px]
//         "
//       />

//       {/* Header */}

//       <div className="relative">
//         <div className="flex items-center gap-3">
//           <span className="h-px w-8 bg-violet-500" />

//           <span
//             className="
//               text-[10px]
//               font-semibold
//               tracking-[0.35em]
//               text-violet-400
//             "
//           >
//             SELECTED WORK
//           </span>
//         </div>

//         <div
//           className="
//             mt-5
//             flex
//             flex-col
//             justify-between
//             gap-5
//             lg:flex-row
//             lg:items-end
//           "
//         >
//           <h2
//             className="
//               max-w-3xl
//               text-4xl
//               font-semibold
//               leading-tight
//               tracking-[-0.05em]
//               sm:text-5xl
//               lg:text-6xl
//             "
//           >
//             Products I've helped
//             <br />

//             <span
//               className="
//                 bg-gradient-to-r
//                 from-violet-300
//                 via-fuchsia-300
//                 to-cyan-300
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               build & ship.
//             </span>
//           </h2>

//           <div className="flex items-center gap-2 text-xs text-zinc-600">
//             <Sparkles className="h-4 w-4 text-violet-400" />
//             <span>Real-world projects</span>
//           </div>
//         </div>

//         <p
//           className="
//             mt-5
//             max-w-2xl
//             text-sm
//             leading-7
//             text-zinc-500
//             sm:text-base
//           "
//         >
//           A selection of production-focused applications I've worked on across
//           CRM, HR, accounting, inventory, education and project management.
//         </p>
//       </div>

//       {/* Projects */}

//       <div
//         className="
//           relative
//           mt-12
//           grid
//           gap-6
//           md:grid-cols-2
//         "
//       >
//         {projects.map((project) => (
//           <article
//             key={project.id}
//             className="
//               group
//               relative
//               overflow-hidden
//               rounded-[28px]
//               border
//               border-white/[0.07]
//               bg-white/[0.025]
//               shadow-2xl
//               transition-all
//               duration-500
//               hover:-translate-y-2
//               hover:border-violet-400/25
//               hover:bg-white/[0.04]
//             "
//           >
//             {/* Image */}

//             <div className="relative h-64 overflow-hidden sm:h-72">
//               <img
//                 src={project.screenshots[0]}
//                 alt={project.title}
//                 className="
//                   h-full
//                   w-full
//                   object-cover
//                   transition-transform
//                   duration-700
//                   group-hover:scale-110
//                 "
//               />

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-black
//                   via-black/30
//                   to-transparent
//                 "
//               />

//               {/* Number */}

//               <div
//                 className="
//                   absolute
//                   left-5
//                   top-5
//                   flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-black/50
//                   px-3
//                   py-1.5
//                   text-[10px]
//                   font-semibold
//                   text-white
//                   backdrop-blur-xl
//                 "
//               >
//                 <Layers3 className="h-3 w-3 text-violet-400" />

//                 {project.number}
//               </div>

//               {/* Category */}

//               <div
//                 className="
//                   absolute
//                   bottom-5
//                   left-5
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-black/50
//                   px-3
//                   py-1.5
//                   text-[9px]
//                   font-semibold
//                   tracking-[0.2em]
//                   text-violet-300
//                   backdrop-blur-xl
//                 "
//               >
//                 {project.category}
//               </div>
//             </div>

//             {/* Content */}

//             <div className="p-6 sm:p-7">
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h3
//                     className="
//                       text-2xl
//                       font-semibold
//                       tracking-tight
//                       text-white
//                       transition-colors
//                       group-hover:text-violet-200
//                     "
//                   >
//                     {project.title}
//                   </h3>

//                   <p className="mt-1 text-[10px] text-zinc-700">
//                     {project.domain}
//                   </p>
//                 </div>

//                 <ArrowUpRight
//                   className="
//                     h-5
//                     w-5
//                     shrink-0
//                     text-zinc-600
//                     transition-all
//                     duration-300
//                     group-hover:-translate-y-1
//                     group-hover:translate-x-1
//                     group-hover:text-violet-300
//                   "
//                 />
//               </div>

//               <p
//                 className="
//                   mt-4
//                   text-sm
//                   leading-7
//                   text-zinc-500
//                 "
//               >
//                 {project.description}
//               </p>

//               {/* Stack */}

//               <div className="mt-5 flex flex-wrap gap-2">
//                 {project.stack.map((tech) => (
//                   <span
//                     key={tech}
//                     className="
//                       rounded-full
//                       border
//                       border-white/[0.07]
//                       bg-white/[0.025]
//                       px-3
//                       py-1.5
//                       text-[9px]
//                       text-zinc-500
//                       transition-all
//                       duration-300
//                       group-hover:border-violet-400/15
//                       group-hover:text-zinc-300
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}

//               <div className="mt-7 flex flex-wrap gap-3">
//                 <Link
//                   to={`/project/${project.id}`}
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     bg-white
//                     px-5
//                     py-2.5
//                     text-[10px]
//                     font-semibold
//                     text-black
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:shadow-[0_15px_35px_rgba(255,255,255,.12)]
//                   "
//                 >
//                   View Case Study

//                   <ArrowUpRight className="h-3.5 w-3.5" />
//                 </Link>

//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/[0.03]
//                     px-5
//                     py-2.5
//                     text-[10px]
//                     font-medium
//                     text-zinc-400
//                     transition-all
//                     duration-300
//                     hover:border-violet-400/30
//                     hover:bg-violet-500/10
//                     hover:text-white
//                   "
//                 >
//                   Live Project

//                   <ExternalLink className="h-3 w-3" />
//                 </a>
//               </div>
//             </div>

//             {/* Bottom glow */}

//             <div
//               className="
//                 absolute
//                 bottom-0
//                 left-1/2
//                 h-px
//                 w-0
//                 -translate-x-1/2
//                 bg-gradient-to-r
//                 from-transparent
//                 via-violet-400
//                 to-transparent
//                 opacity-0
//                 transition-all
//                 duration-700
//                 group-hover:w-3/4
//                 group-hover:opacity-100
//               "
//             />
//           </article>
//         ))}
//       </div>

//       {/* Bottom */}

//       <div className="relative mt-12 flex justify-center">
//         <div
//           className="
//             flex
//             items-center
//             gap-2
//             rounded-full
//             border
//             border-white/[0.07]
//             bg-white/[0.02]
//             px-5
//             py-2.5
//             text-[10px]
//             tracking-[0.15em]
//             text-zinc-600
//           "
//         >
//           <span
//             className="
//               h-1.5
//               w-1.5
//               animate-pulse
//               rounded-full
//               bg-emerald-400
//             "
//           />

//           MORE PROJECTS COMING SOON
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// *********************************************

// import React, { useState } from "react";
// import {
//   ArrowUpRight,
//   ExternalLink,
//   Sparkles,
//   Layers3,
//   X,
//   ChevronDown,
//   ChevronUp,
//   CheckCircle2,
//   Code2,
// } from "lucide-react";
// import { FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     number: "01",
//     title: "CRM",
//     domain: "crm.techsunset.com",
//     category: "CRM PLATFORM",
//     description:
//       "Customer Relationship Management platform used to manage customers, leads, sales activities and customer interactions in one place.",
//     image: "/projects/crm-full.png",
//     live: "https://crm.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
//     workedOn: {
//       frontend: [
//         "Customer list and customer details",
//         "Customer add and edit forms",
//         "Lead management screens",
//         "Search and filtering",
//         "Dashboard and data display",
//         "API integration with backend",
//         "Form validation and error handling",
//       ],
//       backend: [
//         "CRUD APIs for customer data",
//         "Lead management APIs",
//         "Customer and lead search",
//         "Customer status updates",
//         "User authentication and authorization",
//         "Request validation and error handling",
//         "MongoDB database integration",
//       ],
//     },
//   },

//   {
//     number: "02",
//     title: "TechSunset Books",
//     domain: "books.techsunset.com",
//     category: "ACCOUNTING & INVOICING",
//     description:
//       "Accounting and invoicing platform for managing invoices, payments, expenses, customers, vendors, GST and financial reports.",
//     image: "/projects/books-full.png",
//     live: "https://books.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
//     workedOn: {
//       frontend: [
//         "Dashboard and financial summary",
//         "Invoice list and invoice creation",
//         "Customer and vendor management",
//         "Expense tracking screens",
//         "Payment tracking",
//         "GST summary and reports",
//         "API integration and form validation",
//       ],
//       backend: [
//         "Invoice CRUD APIs",
//         "Customer and vendor APIs",
//         "Expense management APIs",
//         "Payment tracking APIs",
//         "GST and financial report APIs",
//         "Request validation and error handling",
//         "MongoDB integration",
//       ],
//     },
//   },

//   {
//     number: "03",
//     title: "TechSunset HR",
//     domain: "hr.techsunset.com",
//     category: "HR MANAGEMENT",
//     description:
//       "Human Resource management platform for employees, attendance, leaves, onboarding, departments, holidays and HR reports.",
//     image: "/projects/hr-full.png",
//     live: "https://hr.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
//     workedOn: {
//       frontend: [
//         "Employee list and employee details",
//         "Employee add and edit forms",
//         "Attendance management screens",
//         "Leave request and approval screens",
//         "Department and holiday management",
//         "Employee onboarding screens",
//         "HR reports and dashboard",
//         "API integration and error handling",
//       ],
//       backend: [
//         "Employee CRUD APIs",
//         "Attendance management APIs",
//         "Leave management APIs",
//         "Department and holiday APIs",
//         "Employee onboarding APIs",
//         "HR report APIs",
//         "Authentication and validation",
//         "MongoDB database integration",
//       ],
//     },
//   },

//   {
//     number: "04",
//     title: "TS Campus",
//     domain: "tscampus.com",
//     category: "SCHOOL MANAGEMENT",
//     description:
//       "School management platform for admissions, students, attendance, fees, exams, staff, communication and school operations.",
//     image: "/projects/tscampus-full.png",
//     live: "https://tscampus.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
//     workedOn: {
//       frontend: [
//         "Student list and student details",
//         "Admission and student forms",
//         "Attendance management",
//         "Fee management and payment screens",
//         "Class, section and subject management",
//         "Exam and report card screens",
//         "Staff and HR management",
//         "Dashboard, reports and notifications",
//       ],
//       backend: [
//         "Student and admission APIs",
//         "Attendance management APIs",
//         "Fee and payment APIs",
//         "Class, section and subject APIs",
//         "Exam and result APIs",
//         "Staff and employee APIs",
//         "Notification and communication APIs",
//         "Authentication and validation",
//       ],
//     },
//   },

//   {
//     number: "05",
//     title: "TechSunset Project",
//     domain: "project.techsunset.com",
//     category: "PROJECT MANAGEMENT",
//     description:
//       "Project and task management platform for projects, tasks, deadlines, milestones, team workload and progress tracking.",
//     image: "/projects/project-full.png",
//     live: "https://project.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
//     workedOn: {
//       frontend: [
//         "Project list and project details",
//         "Task creation and management",
//         "Kanban board",
//         "Task status and priority",
//         "Calendar and deadlines",
//         "Milestone and project progress",
//         "Team workload and reports",
//         "API integration and form validation",
//       ],
//       backend: [
//         "Project CRUD APIs",
//         "Task and subtask APIs",
//         "Task assignment APIs",
//         "Task status and priority APIs",
//         "Milestone and deadline APIs",
//         "Team workload and time tracking",
//         "Request validation and error handling",
//         "MongoDB integration",
//       ],
//     },
//   },

//   {
//     number: "06",
//     title: "TechSunset Inventory",
//     domain: "inventory.techsunset.com",
//     category: "INVENTORY MANAGEMENT",
//     description:
//       "Inventory management platform for products, stock, orders, suppliers, warehouses and fulfillment.",
//     image: "/projects/inventory-full.png",
//     live: "https://inventory.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
//     workedOn: {
//       frontend: [
//         "Product list and product details",
//         "Add and edit product forms",
//         "Inventory and stock management",
//         "Order management screens",
//         "Supplier management",
//         "Warehouse management",
//         "Fulfillment and stock reports",
//         "API integration, search and filtering",
//       ],
//       backend: [
//         "Product CRUD APIs",
//         "Stock and inventory APIs",
//         "Sales order APIs",
//         "Supplier and purchase order APIs",
//         "Warehouse management APIs",
//         "Stock reservation and updates",
//         "Request validation and error handling",
//         "MongoDB integration",
//       ],
//     },
//   },
// ];

// const fallbackImage =
//   "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showWork, setShowWork] = useState(false);

//   const openProject = (project) => {
//     setSelectedProject(project);
//     setShowWork(false);
//     document.body.style.overflow = "hidden";
//   };

//   const closeProject = () => {
//     setSelectedProject(null);
//     setShowWork(false);
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <>
//       <section
//         id="works"
//         className="
//           relative z-10 mx-auto max-w-7xl overflow-hidden
//           px-5 py-24 sm:py-28 lg:px-8 lg:py-32
//         "
//       >
//         {/* Background */}

//         <div
//           className="
//             pointer-events-none absolute left-[10%] top-[15%]
//             h-[350px] w-[350px] rounded-full
//             bg-violet-600/10 blur-[140px]
//           "
//         />

//         <div
//           className="
//             pointer-events-none absolute bottom-[10%] right-[5%]
//             h-[300px] w-[300px] rounded-full
//             bg-cyan-500/10 blur-[130px]
//           "
//         />

//         {/* Header */}

//         <div className="relative">
//           <div className="flex items-center gap-3">
//             <span className="h-px w-8 bg-violet-500" />

//             <span
//               className="
//                 text-[10px] font-semibold tracking-[0.35em]
//                 text-violet-400
//               "
//             >
//               SELECTED WORK
//             </span>

//             <Sparkles className="h-3.5 w-3.5 text-violet-400" />
//           </div>

//           <div
//             className="
//               mt-5 flex flex-col justify-between gap-5
//               lg:flex-row lg:items-end
//             "
//           >
//             <h2
//               className="
//                 max-w-3xl text-4xl font-semibold
//                 leading-tight tracking-[-0.05em]
//                 text-white sm:text-5xl lg:text-6xl
//               "
//             >
//               Building products with{" "}
//               <span className="text-zinc-600">purpose.</span>
//             </h2>

//             <div className="flex items-center gap-2 text-xs text-zinc-600">
//               <Layers3 className="h-4 w-4 text-violet-400" />
//               <span>Real-world projects</span>
//             </div>
//           </div>

//           <p
//             className="
//               mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base
//             "
//           >
//             A collection of real-world applications I've worked on across
//             frontend, backend, database and full-stack development.
//           </p>
//         </div>

//         {/* Projects Grid */}

//         <div className="relative mt-12 grid gap-6 md:grid-cols-2">
//           {projects.map((project) => (
//             <article
//               key={project.number}
//               className="
//                 group relative overflow-hidden rounded-[28px]
//                 border border-white/[0.07]
//                 bg-white/[0.025]
//                 shadow-2xl
//                 transition-all duration-500
//                 hover:-translate-y-2
//                 hover:border-violet-400/20
//               "
//             >
//               {/* Image */}

//               <div className="relative h-64 overflow-hidden sm:h-72">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="
//                     h-full w-full object-cover
//                     object-top
//                     transition-transform duration-700
//                     group-hover:scale-105
//                   "
//                   onError={(e) => {
//                     e.currentTarget.src = fallbackImage;
//                   }}
//                 />

//                 <div
//                   className="
//                     absolute inset-0
//                     bg-gradient-to-t
//                     from-black via-black/30 to-transparent
//                   "
//                 />

//                 {/* Number */}

//                 <div
//                   className="
//                     absolute left-5 top-5 flex items-center gap-2
//                     rounded-full border border-white/10
//                     bg-black/50 px-3 py-1.5
//                     text-[10px] font-semibold text-white
//                     backdrop-blur-xl
//                   "
//                 >
//                   <Layers3 className="h-3 w-3 text-violet-400" />
//                   {project.number}
//                 </div>

//                 {/* Category */}

//                 <div
//                   className="
//                     absolute bottom-5 left-5
//                     rounded-full border border-white/10
//                     bg-black/50 px-3 py-1.5
//                     text-[9px] font-semibold
//                     tracking-[0.2em] text-violet-300
//                     backdrop-blur-xl
//                   "
//                 >
//                   {project.category}
//                 </div>

//                 {/* Preview button */}

//                 <button
//                   onClick={() => openProject(project)}
//                   className="
//                     absolute bottom-5 right-5
//                     flex items-center gap-2
//                     rounded-full border border-white/10
//                     bg-black/60 px-4 py-2
//                     text-[10px] font-medium text-white
//                     opacity-0 backdrop-blur-xl
//                     transition-all duration-300
//                     group-hover:opacity-100
//                     hover:border-violet-400/40
//                     hover:bg-violet-500/20
//                   "
//                 >
//                   View Full Project
//                   <ArrowUpRight className="h-3.5 w-3.5" />
//                 </button>
//               </div>

//               {/* Content */}

//               <div className="p-6 sm:p-7">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h3
//                       className="
//                         text-2xl font-semibold tracking-tight text-white
//                         transition-colors group-hover:text-violet-200
//                       "
//                     >
//                       {project.title}
//                     </h3>

//                     <p className="mt-1 text-[9px] text-zinc-700">
//                       {project.domain}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => openProject(project)}
//                     className="
//                       flex h-9 w-9 shrink-0 items-center justify-center
//                       rounded-full border border-white/10
//                       bg-white/[0.03]
//                       transition-all
//                       hover:border-violet-400/30
//                       hover:bg-violet-500/10
//                     "
//                   >
//                     <ArrowUpRight className="h-4 w-4 text-zinc-500" />
//                   </button>
//                 </div>

//                 <p className="mt-3 text-sm leading-7 text-zinc-500">
//                   {project.description}
//                 </p>

//                 {/* Skills */}

//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {project.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="
//                         rounded-full border border-white/[0.07]
//                         bg-white/[0.025] px-3 py-1.5
//                         text-[9px] text-zinc-500
//                         transition-all
//                         group-hover:border-violet-400/10
//                         group-hover:text-zinc-300
//                       "
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Open */}

//                 <button
//                   onClick={() => openProject(project)}
//                   className="
//                     mt-6 inline-flex items-center gap-2
//                     text-xs font-medium text-violet-300
//                     transition-colors hover:text-white
//                   "
//                 >
//                   Explore Project
//                   <ArrowUpRight className="h-3.5 w-3.5" />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Bottom */}

//         <div className="relative mt-12 flex justify-center">
//           <div
//             className="
//               flex items-center gap-2 rounded-full
//               border border-white/[0.07]
//               bg-white/[0.02] px-5 py-2.5
//               text-[10px] tracking-[0.15em] text-zinc-600
//             "
//           >
//             <span
//               className="
//                 h-1.5 w-1.5 animate-pulse rounded-full
//                 bg-emerald-400
//               "
//             />
//             MORE PROJECTS COMING SOON
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROJECT MODAL
//       ====================================================== */}

//       {selectedProject && (
//         <div
//           className="
//             fixed inset-0 z-[999]
//             flex items-center justify-center
//             bg-black/85 p-3
//             backdrop-blur-md
//             sm:p-6
//           "
//         >
//           <div
//             className="
//               relative flex h-[96vh] w-full max-w-6xl
//               flex-col overflow-hidden
//               rounded-3xl
//               border border-white/[0.1]
//               bg-[#08080b]
//               shadow-[0_0_100px_rgba(139,92,246,.15)]
//             "
//           >
//             {/* Modal Header */}

//             <div
//               className="
//                 relative z-20 flex shrink-0
//                 items-center justify-between
//                 border-b border-white/[0.07]
//                 bg-[#08080b]/95
//                 px-4 py-3
//                 backdrop-blur-xl
//                 sm:px-6
//               "
//             >
//               <div className="flex min-w-0 items-center gap-3">
//                 <div
//                   className="
//                     flex h-9 w-9 shrink-0 items-center justify-center
//                     rounded-xl border border-violet-400/20
//                     bg-violet-500/10
//                   "
//                 >
//                   <Code2 className="h-4 w-4 text-violet-300" />
//                 </div>

//                 <div className="min-w-0">
//                   <h3 className="truncate text-sm font-semibold text-white">
//                     {selectedProject.title}
//                   </h3>

//                   <p className="truncate text-[9px] text-zinc-600">
//                     {selectedProject.domain}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 {/* Live Website */}

//                 <a
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     hidden items-center gap-2
//                     rounded-full border border-white/10
//                     bg-white/[0.04]
//                     px-4 py-2
//                     text-[10px] text-zinc-300
//                     transition hover:border-violet-400/30
//                     hover:bg-violet-500/10
//                     sm:flex
//                   "
//                 >
//                   Live Website
//                   <ExternalLink className="h-3 w-3" />
//                 </a>

//                 {/* Close */}

//                 <button
//                   onClick={closeProject}
//                   className="
//                     flex h-9 w-9 items-center justify-center
//                     rounded-full border border-white/10
//                     bg-white/[0.04]
//                     text-zinc-400
//                     transition hover:border-red-400/30
//                     hover:bg-red-500/10 hover:text-white
//                   "
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* =================================================
//                 SCREENSHOT SCROLL AREA
//             ================================================== */}

//             <div className="relative flex-1 overflow-y-auto bg-[#050505]">
//               {/* Hint */}

//               <div
//                 className="
//                   pointer-events-none sticky top-4 z-10
//                   mx-auto mt-4 flex w-fit
//                   items-center gap-2
//                   rounded-full border border-white/10
//                   bg-black/70 px-4 py-2
//                   text-[9px] text-zinc-400
//                   backdrop-blur-xl
//                 "
//               >
//                 <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
//                 Scroll to explore the complete page
//               </div>

//               {/* FULL PAGE IMAGE */}

//               <div className="mx-auto w-full max-w-5xl px-3 pb-12 pt-2 sm:px-6">
//                 <img
//                   src={selectedProject.image}
//                   alt={`${selectedProject.title} full page preview`}
//                   className="
//                     block w-full rounded-xl
//                     border border-white/[0.08]
//                     shadow-2xl
//                   "
//                   onError={(e) => {
//                     e.currentTarget.src = fallbackImage;
//                   }}
//                 />
//               </div>

//               {/* What I Worked On */}

//               <div className="mx-auto max-w-5xl px-3 pb-10 sm:px-6">
//                 <div
//                   className="
//                     overflow-hidden rounded-2xl
//                     border border-white/[0.08]
//                     bg-white/[0.025]
//                   "
//                 >
//                   <button
//                     onClick={() => setShowWork(!showWork)}
//                     className="
//                       flex w-full items-center justify-between
//                       px-5 py-4 text-left
//                       transition hover:bg-white/[0.03]
//                     "
//                   >
//                     <div className="flex items-center gap-3">
//                       <div
//                         className="
//                           flex h-8 w-8 items-center justify-center
//                           rounded-lg bg-violet-500/10
//                         "
//                       >
//                         <Code2 className="h-4 w-4 text-violet-300" />
//                       </div>

//                       <div>
//                         <p className="text-sm font-semibold text-white">
//                           What I Worked On
//                         </p>

//                         <p className="mt-0.5 text-[9px] text-zinc-600">
//                           Frontend & Backend responsibilities
//                         </p>
//                       </div>
//                     </div>

//                     {showWork ? (
//                       <ChevronUp className="h-4 w-4 text-zinc-500" />
//                     ) : (
//                       <ChevronDown className="h-4 w-4 text-zinc-500" />
//                     )}
//                   </button>

//                   {showWork && (
//                     <div
//                       className="
//                         grid gap-6 border-t border-white/[0.06]
//                         p-5 md:grid-cols-2
//                       "
//                     >
//                       {/* Frontend */}

//                       <div>
//                         <div className="mb-4 flex items-center gap-2">
//                           <div className="h-2 w-2 rounded-full bg-violet-400" />

//                           <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-300">
//                             Frontend
//                           </h4>
//                         </div>

//                         <div className="space-y-2.5">
//                           {selectedProject.workedOn.frontend.map(
//                             (item, index) => (
//                               <div
//                                 key={index}
//                                 className="flex gap-2.5 text-xs leading-5 text-zinc-500"
//                               >
//                                 <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-400/70" />
//                                 {item}
//                               </div>
//                             ),
//                           )}
//                         </div>
//                       </div>

//                       {/* Backend */}

//                       <div>
//                         <div className="mb-4 flex items-center gap-2">
//                           <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                           <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
//                             Backend
//                           </h4>
//                         </div>

//                         <div className="space-y-2.5">
//                           {selectedProject.workedOn.backend.map(
//                             (item, index) => (
//                               <div
//                                 key={index}
//                                 className="flex gap-2.5 text-xs leading-5 text-zinc-500"
//                               >
//                                 <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400/70" />
//                                 {item}
//                               </div>
//                             ),
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Live Button */}

//             <div
//               className="
//                 border-t border-white/[0.07]
//                 bg-[#08080b] p-3
//                 sm:hidden
//               "
//             >
//               <a
//                 href={selectedProject.live}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="
//                   flex w-full items-center justify-center gap-2
//                   rounded-full bg-white px-4 py-2.5
//                   text-xs font-semibold text-black
//                 "
//               >
//                 Open Live Website
//                 <ExternalLink className="h-3.5 w-3.5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Projects;


// *============================================================




import React, { useEffect, useState } from "react";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers3,
  X,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Code2,
  Monitor,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "CRM",
    domain: "crm.techsunset.com",
    category: "CRM PLATFORM",

    description:
      "Customer Relationship Management platform used to manage customers, leads, sales activities and customer interactions in one place.",

    image: "/projects/crm-full.png",

    live: "https://crm.techsunset.com/",

    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    workedOn: {
      frontend: [
        "Customer list and customer details",
        "Customer add and edit forms",
        "Lead management screens",
        "Search and filtering",
        "Dashboard and data display",
        "API integration with backend",
        "Form validation and error handling",
      ],

      backend: [
        "CRUD APIs for customer data",
        "Lead management APIs",
        "Customer and lead search",
        "Customer status updates",
        "User authentication and authorization",
        "Request validation and error handling",
        "MongoDB database integration",
      ],
    },
  },

  {
    number: "02",
    title: "TechSunset Books",
    domain: "books.techsunset.com",
    category: "ACCOUNTING & INVOICING",

    description:
      "Accounting and invoicing platform for managing invoices, payments, expenses, customers, vendors, GST and financial reports.",

    image: "/projects/books-full.png",

    live: "https://books.techsunset.com/",

    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    workedOn: {
      frontend: [
        "Dashboard and financial summary",
        "Invoice list and invoice creation",
        "Customer and vendor management",
        "Expense tracking screens",
        "Payment tracking",
        "GST summary and reports",
        "API integration and form validation",
      ],

      backend: [
        "Invoice CRUD APIs",
        "Customer and vendor APIs",
        "Expense management APIs",
        "Payment tracking APIs",
        "GST and financial report APIs",
        "Request validation and error handling",
        "MongoDB integration",
      ],
    },
  },

  {
    number: "03",
    title: "TechSunset HR",
    domain: "hr.techsunset.com",
    category: "HR MANAGEMENT",

    description:
      "Human Resource management platform for employees, attendance, leaves, onboarding, departments, holidays and HR reports.",

    image: "/projects/hr-full.png",

    live: "https://hr.techsunset.com/",

    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    workedOn: {
      frontend: [
        "Employee list and employee details",
        "Employee add and edit forms",
        "Attendance management screens",
        "Leave request and approval screens",
        "Department and holiday management",
        "Employee onboarding screens",
        "HR reports and dashboard",
        "API integration and error handling",
      ],

      backend: [
        "Employee CRUD APIs",
        "Attendance management APIs",
        "Leave management APIs",
        "Department and holiday APIs",
        "Employee onboarding APIs",
        "HR report APIs",
        "Authentication and validation",
        "MongoDB database integration",
      ],
    },
  },

  {
    number: "04",
    title: "TS Campus",
    domain: "tscampus.com",
    category: "SCHOOL MANAGEMENT",

    description:
      "School management platform for admissions, students, attendance, fees, exams, staff, communication and school operations.",

    image: "/projects/tscampus-full.png",

    live: "https://tscampus.com/",

    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    workedOn: {
      frontend: [
        "Student list and student details",
        "Admission and student forms",
        "Attendance management",
        "Fee management and payment screens",
        "Class, section and subject management",
        "Exam and report card screens",
        "Staff and HR management",
        "Dashboard, reports and notifications",
      ],

      backend: [
        "Student and admission APIs",
        "Attendance management APIs",
        "Fee and payment APIs",
        "Class, section and subject APIs",
        "Exam and result APIs",
        "Staff and employee APIs",
        "Notification and communication APIs",
        "Authentication and validation",
      ],
    },
  },

  {
    number: "05",
    title: "TechSunset Project",
    domain: "project.techsunset.com",
    category: "PROJECT MANAGEMENT",

    description:
      "Project and task management platform for projects, tasks, deadlines, milestones, team workload and progress tracking.",

    image: "/projects/project-full.png",

    live: "https://project.techsunset.com/",

    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    workedOn: {
      frontend: [
        "Project list and project details",
        "Task creation and management",
        "Kanban board",
        "Task status and priority",
        "Calendar and deadlines",
        "Milestone and project progress",
        "Team workload and reports",
        "API integration and form validation",
      ],

      backend: [
        "Project CRUD APIs",
        "Task and subtask APIs",
        "Task assignment APIs",
        "Task status and priority APIs",
        "Milestone and deadline APIs",
        "Team workload and time tracking",
        "Request validation and error handling",
        "MongoDB integration",
      ],
    },
  },

  {
    number: "06",
    title: "TechSunset Inventory",
    domain: "inventory.techsunset.com",
    category: "INVENTORY MANAGEMENT",

    description:
      "Inventory management platform for products, stock, orders, suppliers, warehouses and fulfillment.",

    image: "/projects/inventory-full.png",

    live: "https://inventory.techsunset.com/",

    skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

    workedOn: {
      frontend: [
        "Product list and product details",
        "Add and edit product forms",
        "Inventory and stock management",
        "Order management screens",
        "Supplier management",
        "Warehouse management",
        "Fulfillment and stock reports",
        "API integration, search and filtering",
      ],

      backend: [
        "Product CRUD APIs",
        "Stock and inventory APIs",
        "Sales order APIs",
        "Supplier and purchase order APIs",
        "Warehouse management APIs",
        "Stock reservation and updates",
        "Request validation and error handling",
        "MongoDB integration",
      ],
    },
  },
];

const fallbackImage =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showWork, setShowWork] = useState(false);

  /*
   * Open project modal
   */
  const openProject = (project) => {
    setSelectedProject(project);
    setShowWork(false);
    document.body.style.overflow = "hidden";
  };

  /*
   * Close project modal
   */
  const closeProject = () => {
    setSelectedProject(null);
    setShowWork(false);
    document.body.style.overflow = "auto";
  };

  /*
   * Restore body scroll when component unmounts
   */
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /*
   * ESC key support
   */
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeProject();
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <>
      {/* =====================================================
          PROJECTS SECTION
      ====================================================== */}

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

        {/* =====================================================
            HEADER
        ====================================================== */}

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

            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
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
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Building products with{" "}
              <span className="text-zinc-600">purpose.</span>
            </h2>

            <div className="flex items-center gap-2 text-xs text-zinc-600">
              <Layers3 className="h-4 w-4 text-violet-400" />

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
            A collection of real-world applications I've worked on across
            frontend, backend, database and full-stack development.
          </p>
        </div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <div className="relative mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
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
              "
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  onError={(event) => {
                    event.currentTarget.src = fallbackImage;
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
                    bg-black/50
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-white
                    backdrop-blur-xl
                  "
                >
                  <Layers3 className="h-3 w-3 text-violet-400" />

                  {project.number}
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
                    bg-black/50
                    px-3
                    py-1.5
                    text-[9px]
                    font-semibold
                    tracking-[0.2em]
                    text-violet-300
                    backdrop-blur-xl
                  "
                >
                  {project.category}
                </div>

                {/* Preview Button */}

                <button
                  onClick={() => openProject(project)}
                  className="
                    absolute
                    bottom-5
                    right-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-black/60
                    px-4
                    py-2
                    text-[10px]
                    font-medium
                    text-white
                    opacity-0
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    hover:border-violet-400/40
                    hover:bg-violet-500/20
                  "
                >
                  View Full Project

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Content */}

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3
                      className="
                        text-2xl
                        font-semibold
                        tracking-tight
                        text-white
                        transition-colors
                        group-hover:text-violet-200
                      "
                    >
                      {project.title}
                    </h3>

                    <p className="mt-1 text-[9px] text-zinc-700">
                      {project.domain}
                    </p>
                  </div>

                  <button
                    onClick={() => openProject(project)}
                    aria-label={`Open ${project.title}`}
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
                      hover:border-violet-400/30
                      hover:bg-violet-500/10
                    "
                  >
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                  </button>
                </div>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {project.description}
                </p>

                {/* Skills */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
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
                        group-hover:border-violet-400/10
                        group-hover:text-zinc-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Explore */}

                <button
                  onClick={() => openProject(project)}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-violet-300
                    transition-colors
                    hover:text-white
                  "
                >
                  Explore Project

                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
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
          ))}
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

      {/* =====================================================
          PROJECT MODAL
      ====================================================== */}

      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/85
            p-3
            backdrop-blur-md
            sm:p-6
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeProject();
            }
          }}
        >
          <div
            className="
              relative
              flex
              h-[96vh]
              w-full
              max-w-6xl
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-white/[0.1]
              bg-[#08080b]
              shadow-[0_0_100px_rgba(139,92,246,.15)]
            "
          >
            {/* =================================================
                MODAL HEADER
            ================================================== */}

            <div
              className="
                relative
                z-20
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-white/[0.07]
                bg-[#08080b]/95
                px-4
                py-3
                backdrop-blur-xl
                sm:px-6
              "
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-violet-400/20
                    bg-violet-500/10
                  "
                >
                  <Code2 className="h-4 w-4 text-violet-300" />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="truncate text-[9px] text-zinc-600">
                    {selectedProject.domain}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Live Website */}

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    hidden
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-[10px]
                    text-zinc-300
                    transition
                    hover:border-violet-400/30
                    hover:bg-violet-500/10
                    sm:flex
                  "
                >
                  Live Website

                  <ExternalLink className="h-3 w-3" />
                </a>

                {/* Close */}

                <button
                  onClick={closeProject}
                  aria-label="Close project"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-zinc-400
                    transition
                    hover:border-red-400/30
                    hover:bg-red-500/10
                    hover:text-white
                  "
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* =================================================
                MAIN MODAL SCROLL
            ================================================== */}

            <div className="relative flex-1 overflow-y-auto bg-[#050505]">
              {/* Scroll Hint */}

              <div
                className="
                  pointer-events-none
                  sticky
                  top-4
                  z-30
                  mx-auto
                  mt-4
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-black/70
                  px-4
                  py-2
                  text-[9px]
                  text-zinc-400
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-violet-400
                  "
                />

                Scroll to explore
              </div>

              {/* =================================================
                  LIVE PROJECT PREVIEW
              ================================================== */}

              <div className="mx-auto w-full max-w-5xl px-3 pt-2 sm:px-6">
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-[#08080b]
                    shadow-2xl
                  "
                >
                  {/* Preview Header */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/[0.07]
                      bg-white/[0.02]
                      px-4
                      py-3
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
                          shadow-[0_0_10px_rgba(52,211,153,.8)]
                        "
                      />

                      <div className="flex items-center gap-2">
                        <Monitor className="h-3.5 w-3.5 text-violet-400" />

                        <span className="text-[10px] font-medium text-zinc-400">
                          LIVE PROJECT PREVIEW
                        </span>
                      </div>
                    </div>

                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-[9px]
                        text-violet-300
                        transition
                        hover:text-white
                      "
                    >
                      Open in New Tab

                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Actual Website */}

                  <div className="h-[650px] w-full bg-white sm:h-[750px]">
                    <iframe
                      src={selectedProject.live}
                      title={`${selectedProject.title} live preview`}
                      className="h-full w-full border-0"
                      loading="lazy"
                      allow="fullscreen"
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  FULL PAGE SCREENSHOT
              ================================================== */}

              <div className="mx-auto w-full max-w-5xl px-3 pb-12 pt-8 sm:px-6">
                <div className="mb-3 flex items-center gap-2">
                  <Layers3 className="h-3.5 w-3.5 text-violet-400" />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                    "
                  >
                    Full Page Screenshot
                  </span>
                </div>

                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black
                    shadow-2xl
                  "
                >
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.title} full page preview`}
                    className="
                      block
                      w-full
                      object-contain
                    "
                    onError={(event) => {
                      event.currentTarget.src = fallbackImage;
                    }}
                  />
                </div>
              </div>

              {/* =================================================
                  WHAT I WORKED ON
              ================================================== */}

              <div className="mx-auto max-w-5xl px-3 pb-10 sm:px-6">
                <div
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                  "
                >
                  <button
                    onClick={() => setShowWork(!showWork)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-5
                      py-4
                      text-left
                      transition
                      hover:bg-white/[0.03]
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-lg
                          bg-violet-500/10
                        "
                      >
                        <Code2 className="h-4 w-4 text-violet-300" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          What I Worked On
                        </p>

                        <p className="mt-0.5 text-[9px] text-zinc-600">
                          Frontend & Backend responsibilities
                        </p>
                      </div>
                    </div>

                    {showWork ? (
                      <ChevronUp className="h-4 w-4 text-zinc-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-zinc-500" />
                    )}
                  </button>

                  {showWork && (
                    <div
                      className="
                        grid
                        gap-6
                        border-t
                        border-white/[0.06]
                        p-5
                        md:grid-cols-2
                      "
                    >
                      {/* Frontend */}

                      <div>
                        <div className="mb-4 flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-violet-400" />

                          <h4
                            className="
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wider
                              text-violet-300
                            "
                          >
                            Frontend
                          </h4>
                        </div>

                        <div className="space-y-2.5">
                          {selectedProject.workedOn.frontend.map(
                            (item, index) => (
                              <div
                                key={index}
                                className="
                                  flex
                                  gap-2.5
                                  text-xs
                                  leading-5
                                  text-zinc-500
                                "
                              >
                                <CheckCircle2
                                  className="
                                    mt-0.5
                                    h-3.5
                                    w-3.5
                                    shrink-0
                                    text-violet-400/70
                                  "
                                />

                                {item}
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Backend */}

                      <div>
                        <div className="mb-4 flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-cyan-400" />

                          <h4
                            className="
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wider
                              text-cyan-300
                            "
                          >
                            Backend
                          </h4>
                        </div>

                        <div className="space-y-2.5">
                          {selectedProject.workedOn.backend.map(
                            (item, index) => (
                              <div
                                key={index}
                                className="
                                  flex
                                  gap-2.5
                                  text-xs
                                  leading-5
                                  text-zinc-500
                                "
                              >
                                <CheckCircle2
                                  className="
                                    mt-0.5
                                    h-3.5
                                    w-3.5
                                    shrink-0
                                    text-cyan-400/70
                                  "
                                />

                                {item}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE LIVE BUTTON
            ================================================== */}

            <div
              className="
                border-t
                border-white/[0.07]
                bg-[#08080b]
                p-3
                sm:hidden
              "
            >
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-black
                "
              >
                Open Live Website

                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;



// *=====================================================

// import React, { useState, useEffect } from "react";
// import {
//   ArrowUpRight,
//   ExternalLink,
//   Sparkles,
//   Layers3,
//   X,
//   ChevronDown,
//   ChevronUp,
//   CheckCircle2,
//   Code2,
//   ArrowLeft,
//   Globe,
// } from "lucide-react";

// const projects = [
//   {
//     number: "01",
//     title: "CRM",
//     domain: "crm.techsunset.com",
//     category: "CRM PLATFORM",
//     description:
//       "Customer Relationship Management platform used to manage customers, leads, sales activities and customer interactions in one place.",
//     image: "/projects/crm-full.png",
//     live: "https://crm.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

//     workedOn: {
//       frontend: [
//         "Customer list and customer details",
//         "Customer add and edit forms",
//         "Lead management screens",
//         "Search and filtering",
//         "Dashboard and data display",
//         "API integration with backend",
//         "Form validation and error handling",
//       ],

//       backend: [
//         "CRUD APIs for customer data",
//         "Lead management APIs",
//         "Customer and lead search",
//         "Customer status updates",
//         "User authentication and authorization",
//         "Request validation and error handling",
//         "MongoDB database integration",
//       ],
//     },
//   },

//   {
//     number: "02",
//     title: "TechSunset Books",
//     domain: "books.techsunset.com",
//     category: "ACCOUNTING & INVOICING",
//     description:
//       "Accounting and invoicing platform for managing invoices, payments, expenses, customers, vendors, GST and financial reports.",
//     image: "/projects/books-full.png",
//     live: "https://books.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

//     workedOn: {
//       frontend: [
//         "Dashboard and financial summary",
//         "Invoice list and invoice creation",
//         "Customer and vendor management",
//         "Expense tracking screens",
//         "Payment tracking",
//         "GST summary and reports",
//         "API integration and form validation",
//       ],

//       backend: [
//         "Invoice CRUD APIs",
//         "Customer and vendor APIs",
//         "Expense management APIs",
//         "Payment tracking APIs",
//         "GST and financial report APIs",
//         "Request validation and error handling",
//         "MongoDB integration",
//       ],
//     },
//   },

//   {
//     number: "03",
//     title: "TechSunset HR",
//     domain: "hr.techsunset.com",
//     category: "HR MANAGEMENT",
//     description:
//       "Human Resource management platform for employees, attendance, leaves, onboarding, departments, holidays and HR reports.",
//     image: "/projects/hr-full.png",
//     live: "https://hr.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

//     workedOn: {
//       frontend: [
//         "Employee list and employee details",
//         "Employee add and edit forms",
//         "Attendance management screens",
//         "Leave request and approval screens",
//         "Department and holiday management",
//         "Employee onboarding screens",
//         "HR reports and dashboard",
//         "API integration and error handling",
//       ],

//       backend: [
//         "Employee CRUD APIs",
//         "Attendance management APIs",
//         "Leave management APIs",
//         "Department and holiday APIs",
//         "Employee onboarding APIs",
//         "HR report APIs",
//         "Authentication and validation",
//         "MongoDB database integration",
//       ],
//     },
//   },

//   {
//     number: "04",
//     title: "TS Campus",
//     domain: "tscampus.com",
//     category: "SCHOOL MANAGEMENT",
//     description:
//       "School management platform for admissions, students, attendance, fees, exams, staff, communication and school operations.",
//     image: "/projects/tscampus-full.png",
//     live: "https://tscampus.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

//     workedOn: {
//       frontend: [
//         "Student list and student details",
//         "Admission and student forms",
//         "Attendance management",
//         "Fee management and payment screens",
//         "Class, section and subject management",
//         "Exam and report card screens",
//         "Staff and HR management",
//         "Dashboard, reports and notifications",
//       ],

//       backend: [
//         "Student and admission APIs",
//         "Attendance management APIs",
//         "Fee and payment APIs",
//         "Class, section and subject APIs",
//         "Exam and result APIs",
//         "Staff and employee APIs",
//         "Notification and communication APIs",
//         "Authentication and validation",
//       ],
//     },
//   },

//   {
//     number: "05",
//     title: "TechSunset Project",
//     domain: "project.techsunset.com",
//     category: "PROJECT MANAGEMENT",
//     description:
//       "Project and task management platform for projects, tasks, deadlines, milestones, team workload and progress tracking.",
//     image: "/projects/project-full.png",
//     live: "https://project.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

//     workedOn: {
//       frontend: [
//         "Project list and project details",
//         "Task creation and management",
//         "Kanban board",
//         "Task status and priority",
//         "Calendar and deadlines",
//         "Milestone and project progress",
//         "Team workload and reports",
//         "API integration and form validation",
//       ],

//       backend: [
//         "Project CRUD APIs",
//         "Task and subtask APIs",
//         "Task assignment APIs",
//         "Task status and priority APIs",
//         "Milestone and deadline APIs",
//         "Team workload and time tracking",
//         "Request validation and error handling",
//         "MongoDB integration",
//       ],
//     },
//   },

//   {
//     number: "06",
//     title: "TechSunset Inventory",
//     domain: "inventory.techsunset.com",
//     category: "INVENTORY MANAGEMENT",
//     description:
//       "Inventory management platform for products, stock, orders, suppliers, warehouses and fulfillment.",
//     image: "/projects/inventory-full.png",
//     live: "https://inventory.techsunset.com/",
//     skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],

//     workedOn: {
//       frontend: [
//         "Product list and product details",
//         "Add and edit product forms",
//         "Inventory and stock management",
//         "Order management screens",
//         "Supplier management",
//         "Warehouse management",
//         "Fulfillment and stock reports",
//         "API integration, search and filtering",
//       ],

//       backend: [
//         "Product CRUD APIs",
//         "Stock and inventory APIs",
//         "Sales order APIs",
//         "Supplier and purchase order APIs",
//         "Warehouse management APIs",
//         "Stock reservation and updates",
//         "Request validation and error handling",
//         "MongoDB integration",
//       ],
//     },
//   },
// ];

// const fallbackImage =
//   "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80";

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showWork, setShowWork] = useState(false);

//   const openProject = (project) => {
//     setSelectedProject(project);
//     setShowWork(false);

//     document.body.style.overflow = "hidden";
//   };

//   const closeProject = () => {
//     setSelectedProject(null);
//     setShowWork(false);

//     document.body.style.overflow = "auto";
//   };

//   // ESC key se modal close
//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         closeProject();
//       }
//     };

//     if (selectedProject) {
//       window.addEventListener("keydown", handleEscape);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, [selectedProject]);

//   return (
//     <>
//       {/* =====================================================
//           PROJECT SECTION
//       ====================================================== */}

//       <section
//         id="works"
//         className="
//           relative
//           z-10
//           mx-auto
//           max-w-7xl
//           overflow-hidden
//           px-5
//           py-24
//           sm:py-28
//           lg:px-8
//           lg:py-32
//         "
//       >
//         {/* Background */}

//         <div
//           className="
//             pointer-events-none
//             absolute
//             left-[10%]
//             top-[15%]
//             h-[350px]
//             w-[350px]
//             rounded-full
//             bg-violet-600/10
//             blur-[140px]
//           "
//         />

//         <div
//           className="
//             pointer-events-none
//             absolute
//             bottom-[10%]
//             right-[5%]
//             h-[300px]
//             w-[300px]
//             rounded-full
//             bg-cyan-500/10
//             blur-[130px]
//           "
//         />

//         {/* Header */}

//         <div className="relative">
//           <div className="flex items-center gap-3">
//             <span className="h-px w-8 bg-violet-500" />

//             <span
//               className="
//                 text-[10px]
//                 font-semibold
//                 tracking-[0.35em]
//                 text-violet-400
//               "
//             >
//               SELECTED WORK
//             </span>

//             <Sparkles className="h-3.5 w-3.5 text-violet-400" />
//           </div>

//           <div
//             className="
//               mt-5
//               flex
//               flex-col
//               justify-between
//               gap-5
//               lg:flex-row
//               lg:items-end
//             "
//           >
//             <h2
//               className="
//                 max-w-3xl
//                 text-4xl
//                 font-semibold
//                 leading-tight
//                 tracking-[-0.05em]
//                 text-white
//                 sm:text-5xl
//                 lg:text-6xl
//               "
//             >
//               Building products with{" "}
//               <span className="text-zinc-600">purpose.</span>
//             </h2>

//             <div className="flex items-center gap-2 text-xs text-zinc-600">
//               <Layers3 className="h-4 w-4 text-violet-400" />
//               <span>Real-world projects</span>
//             </div>
//           </div>

//           <p
//             className="
//               mt-5
//               max-w-2xl
//               text-sm
//               leading-7
//               text-zinc-500
//               sm:text-base
//             "
//           >
//             A collection of real-world applications I've worked on across
//             frontend, backend, database and full-stack development.
//           </p>
//         </div>

//         {/* =====================================================
//             PROJECT GRID
//         ====================================================== */}

//         <div className="relative mt-12 grid gap-6 md:grid-cols-2">
//           {projects.map((project) => (
//             <article
//               key={project.number}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[28px]
//                 border
//                 border-white/[0.07]
//                 bg-white/[0.025]
//                 shadow-2xl
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:border-violet-400/20
//               "
//             >
//               {/* Image */}

//               <div className="relative h-64 overflow-hidden sm:h-72">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                     object-top
//                     transition-transform
//                     duration-700
//                     group-hover:scale-105
//                   "
//                   onError={(e) => {
//                     e.currentTarget.src = fallbackImage;
//                   }}
//                 />

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-black
//                     via-black/30
//                     to-transparent
//                   "
//                 />

//                 {/* Number */}

//                 <div
//                   className="
//                     absolute
//                     left-5
//                     top-5
//                     flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-black/50
//                     px-3
//                     py-1.5
//                     text-[10px]
//                     font-semibold
//                     text-white
//                     backdrop-blur-xl
//                   "
//                 >
//                   <Layers3 className="h-3 w-3 text-violet-400" />
//                   {project.number}
//                 </div>

//                 {/* Category */}

//                 <div
//                   className="
//                     absolute
//                     bottom-5
//                     left-5
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-black/50
//                     px-3
//                     py-1.5
//                     text-[9px]
//                     font-semibold
//                     tracking-[0.2em]
//                     text-violet-300
//                     backdrop-blur-xl
//                   "
//                 >
//                   {project.category}
//                 </div>

//                 {/* Preview */}

//                 <button
//                   onClick={() => openProject(project)}
//                   className="
//                     absolute
//                     bottom-5
//                     right-5
//                     flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-black/60
//                     px-4
//                     py-2
//                     text-[10px]
//                     font-medium
//                     text-white
//                     opacity-0
//                     backdrop-blur-xl
//                     transition-all
//                     duration-300
//                     group-hover:opacity-100
//                     hover:border-violet-400/40
//                     hover:bg-violet-500/20
//                   "
//                 >
//                   View Full Project
//                   <ArrowUpRight className="h-3.5 w-3.5" />
//                 </button>
//               </div>

//               {/* Content */}

//               <div className="p-6 sm:p-7">
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <h3
//                       className="
//                         text-2xl
//                         font-semibold
//                         tracking-tight
//                         text-white
//                         transition-colors
//                         group-hover:text-violet-200
//                       "
//                     >
//                       {project.title}
//                     </h3>

//                     <p className="mt-1 text-[9px] text-zinc-700">
//                       {project.domain}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => openProject(project)}
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-white/10
//                       bg-white/[0.03]
//                       transition-all
//                       hover:border-violet-400/30
//                       hover:bg-violet-500/10
//                     "
//                   >
//                     <ArrowUpRight className="h-4 w-4 text-zinc-500" />
//                   </button>
//                 </div>

//                 <p className="mt-3 text-sm leading-7 text-zinc-500">
//                   {project.description}
//                 </p>

//                 {/* Skills */}

//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {project.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="
//                         rounded-full
//                         border
//                         border-white/[0.07]
//                         bg-white/[0.025]
//                         px-3
//                         py-1.5
//                         text-[9px]
//                         text-zinc-500
//                         transition-all
//                         duration-300
//                         group-hover:border-violet-400/10
//                         group-hover:text-zinc-300
//                       "
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Explore */}

//                 <button
//                   onClick={() => openProject(project)}
//                   className="
//                     mt-6
//                     inline-flex
//                     items-center
//                     gap-2
//                     text-xs
//                     font-medium
//                     text-violet-300
//                     transition-colors
//                     hover:text-white
//                   "
//                 >
//                   Explore Project
//                   <ArrowUpRight className="h-3.5 w-3.5" />
//                 </button>
//               </div>

//               {/* Bottom Glow */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   bottom-0
//                   left-1/2
//                   h-px
//                   w-0
//                   -translate-x-1/2
//                   bg-gradient-to-r
//                   from-transparent
//                   via-violet-400
//                   to-transparent
//                   opacity-0
//                   transition-all
//                   duration-700
//                   group-hover:w-3/4
//                   group-hover:opacity-100
//                 "
//               />
//             </article>
//           ))}
//         </div>

//         {/* Bottom */}

//         <div className="relative mt-12 flex justify-center">
//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-white/[0.07]
//               bg-white/[0.02]
//               px-5
//               py-2.5
//               text-[10px]
//               tracking-[0.15em]
//               text-zinc-600
//             "
//           >
//             <span
//               className="
//                 h-1.5
//                 w-1.5
//                 animate-pulse
//                 rounded-full
//                 bg-emerald-400
//               "
//             />
//             MORE PROJECTS COMING SOON
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           PROJECT MODAL
//       ====================================================== */}

//       {selectedProject && (
//         <div
//           className="
//             fixed
//             inset-0
//             z-[999]
//             flex
//             items-center
//             justify-center
//             bg-black/85
//             p-3
//             backdrop-blur-md
//             sm:p-6
//           "
//         >
//           <div
//             className="
//               relative
//               flex
//               h-[96vh]
//               w-full
//               max-w-6xl
//               flex-col
//               overflow-hidden
//               rounded-3xl
//               border
//               border-white/[0.1]
//               bg-[#08080b]
//               shadow-[0_0_100px_rgba(139,92,246,.15)]
//             "
//           >
//             {/* =================================================
//                 MODAL HEADER
//             ================================================== */}

//             <div
//               className="
//                 relative
//                 z-20
//                 flex
//                 shrink-0
//                 items-center
//                 justify-between
//                 border-b
//                 border-white/[0.07]
//                 bg-[#08080b]/95
//                 px-4
//                 py-3
//                 backdrop-blur-xl
//                 sm:px-6
//               "
//             >
//               <div className="flex min-w-0 items-center gap-3">
//                 <div
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-xl
//                     border
//                     border-violet-400/20
//                     bg-violet-500/10
//                   "
//                 >
//                   <Code2 className="h-4 w-4 text-violet-300" />
//                 </div>

//                 <div className="min-w-0">
//                   <h3 className="truncate text-sm font-semibold text-white">
//                     {selectedProject.title}
//                   </h3>

//                   <p className="truncate text-[9px] text-zinc-600">
//                     {selectedProject.domain}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 {/* Back to Projects */}

//                 <button
//                   onClick={closeProject}
//                   className="
//                     hidden
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/[0.04]
//                     px-4
//                     py-2
//                     text-[10px]
//                     text-zinc-300
//                     transition
//                     hover:border-violet-400/30
//                     hover:bg-violet-500/10
//                     sm:flex
//                   "
//                 >
//                   <ArrowLeft className="h-3 w-3" />
//                   Back to Projects
//                 </button>

//                 {/* Live Website */}

//                 <a
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     hidden
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/[0.04]
//                     px-4
//                     py-2
//                     text-[10px]
//                     text-zinc-300
//                     transition
//                     hover:border-violet-400/30
//                     hover:bg-violet-500/10
//                     sm:flex
//                   "
//                 >
//                   <Globe className="h-3 w-3" />
//                   Live Website
//                   <ExternalLink className="h-3 w-3" />
//                 </a>

//                 {/* Close */}

//                 <button
//                   onClick={closeProject}
//                   aria-label="Close project"
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/[0.04]
//                     text-zinc-400
//                     transition
//                     hover:border-red-400/30
//                     hover:bg-red-500/10
//                     hover:text-white
//                   "
//                 >
//                   <X className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             {/* =================================================
//                 PROJECT SCROLL AREA
//             ================================================== */}

//             <div
//               className="
//                 relative
//                 flex-1
//                 overflow-y-auto
//                 bg-[#050505]
//                 scroll-smooth
//               "
//             >
//               {/* Scroll Hint */}

//               <div
//                 className="
//                   pointer-events-none
//                   sticky
//                   top-4
//                   z-10
//                   mx-auto
//                   mt-4
//                   flex
//                   w-fit
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-black/70
//                   px-4
//                   py-2
//                   text-[9px]
//                   text-zinc-400
//                   backdrop-blur-xl
//                 "
//               >
//                 <span
//                   className="
//                     h-1.5
//                     w-1.5
//                     animate-pulse
//                     rounded-full
//                     bg-violet-400
//                   "
//                 />

//                 Scroll to explore the complete page
//               </div>

//               {/* =================================================
//                   FULL PAGE PROJECT IMAGE
//               ================================================== */}

//               <div className="mx-auto w-full max-w-5xl px-3 pb-12 pt-2 sm:px-6">
//                 <div
//                   className="
//                     overflow-hidden
//                     rounded-xl
//                     border
//                     border-white/[0.08]
//                     bg-black
//                     shadow-2xl
//                   "
//                 >
//                   <img
//                     src={selectedProject.image}
//                     alt={`${selectedProject.title} full page preview`}
//                     className="
//                       block
//                       h-auto
//                       w-full
//                       object-contain
//                     "
//                     onError={(e) => {
//                       e.currentTarget.src = fallbackImage;
//                     }}
//                   />
//                 </div>

//                 {/* Image scroll indicator */}

//                 <div className="mt-4 flex justify-center">
//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-2
//                       rounded-full
//                       border
//                       border-white/[0.07]
//                       bg-white/[0.02]
//                       px-4
//                       py-2
//                       text-[9px]
//                       text-zinc-600
//                     "
//                   >
//                     <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

//                     Full-page screenshot • Scroll vertically
//                   </div>
//                 </div>
//               </div>

//               {/* =================================================
//                   WHAT I WORKED ON
//               ================================================== */}

//               <div className="mx-auto max-w-5xl px-3 pb-10 sm:px-6">
//                 <div
//                   className="
//                     overflow-hidden
//                     rounded-2xl
//                     border
//                     border-white/[0.08]
//                     bg-white/[0.025]
//                   "
//                 >
//                   <button
//                     onClick={() => setShowWork(!showWork)}
//                     className="
//                       flex
//                       w-full
//                       items-center
//                       justify-between
//                       px-5
//                       py-4
//                       text-left
//                       transition
//                       hover:bg-white/[0.03]
//                     "
//                   >
//                     <div className="flex items-center gap-3">
//                       <div
//                         className="
//                           flex
//                           h-8
//                           w-8
//                           items-center
//                           justify-center
//                           rounded-lg
//                           bg-violet-500/10
//                         "
//                       >
//                         <Code2 className="h-4 w-4 text-violet-300" />
//                       </div>

//                       <div>
//                         <p className="text-sm font-semibold text-white">
//                           What I Worked On
//                         </p>

//                         <p className="mt-0.5 text-[9px] text-zinc-600">
//                           Frontend & Backend responsibilities
//                         </p>
//                       </div>
//                     </div>

//                     {showWork ? (
//                       <ChevronUp className="h-4 w-4 text-zinc-500" />
//                     ) : (
//                       <ChevronDown className="h-4 w-4 text-zinc-500" />
//                     )}
//                   </button>

//                   {showWork && (
//                     <div
//                       className="
//                         grid
//                         gap-6
//                         border-t
//                         border-white/[0.06]
//                         p-5
//                         md:grid-cols-2
//                       "
//                     >
//                       {/* Frontend */}

//                       <div>
//                         <div className="mb-4 flex items-center gap-2">
//                           <div className="h-2 w-2 rounded-full bg-violet-400" />

//                           <h4
//                             className="
//                               text-xs
//                               font-semibold
//                               uppercase
//                               tracking-wider
//                               text-violet-300
//                             "
//                           >
//                             Frontend
//                           </h4>
//                         </div>

//                         <div className="space-y-2.5">
//                           {selectedProject.workedOn.frontend.map(
//                             (item, index) => (
//                               <div
//                                 key={index}
//                                 className="
//                                   flex
//                                   gap-2.5
//                                   text-xs
//                                   leading-5
//                                   text-zinc-500
//                                 "
//                               >
//                                 <CheckCircle2
//                                   className="
//                                     mt-0.5
//                                     h-3.5
//                                     w-3.5
//                                     shrink-0
//                                     text-violet-400/70
//                                   "
//                                 />

//                                 {item}
//                               </div>
//                             ),
//                           )}
//                         </div>
//                       </div>

//                       {/* Backend */}

//                       <div>
//                         <div className="mb-4 flex items-center gap-2">
//                           <div className="h-2 w-2 rounded-full bg-cyan-400" />

//                           <h4
//                             className="
//                               text-xs
//                               font-semibold
//                               uppercase
//                               tracking-wider
//                               text-cyan-300
//                             "
//                           >
//                             Backend
//                           </h4>
//                         </div>

//                         <div className="space-y-2.5">
//                           {selectedProject.workedOn.backend.map(
//                             (item, index) => (
//                               <div
//                                 key={index}
//                                 className="
//                                   flex
//                                   gap-2.5
//                                   text-xs
//                                   leading-5
//                                   text-zinc-500
//                                 "
//                               >
//                                 <CheckCircle2
//                                   className="
//                                     mt-0.5
//                                     h-3.5
//                                     w-3.5
//                                     shrink-0
//                                     text-cyan-400/70
//                                   "
//                                 />

//                                 {item}
//                               </div>
//                             ),
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* =================================================
//                   BOTTOM PROJECT NAVIGATION
//               ================================================== */}

//               <div
//                 className="
//                   mx-auto
//                   flex
//                   max-w-5xl
//                   flex-col
//                   gap-3
//                   px-3
//                   pb-10
//                   sm:flex-row
//                   sm:px-6
//                 "
//               >
//                 {/* Back */}

//                 <button
//                   onClick={closeProject}
//                   className="
//                     flex
//                     flex-1
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/[0.03]
//                     px-5
//                     py-3
//                     text-xs
//                     font-medium
//                     text-zinc-300
//                     transition
//                     hover:border-violet-400/30
//                     hover:bg-violet-500/10
//                     hover:text-white
//                   "
//                 >
//                   <ArrowLeft className="h-3.5 w-3.5" />

//                   Back to All Projects
//                 </button>

//                 {/* Live */}

//                 <a
//                   href={selectedProject.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     flex
//                     flex-1
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-full
//                     bg-white
//                     px-5
//                     py-3
//                     text-xs
//                     font-semibold
//                     text-black
//                     transition
//                     hover:bg-violet-200
//                   "
//                 >
//                   Open Live Website

//                   <ExternalLink className="h-3.5 w-3.5" />
//                 </a>
//               </div>
//             </div>

//             {/* =================================================
//                 MOBILE FOOTER
//             ================================================== */}

//             <div
//               className="
//                 flex
//                 shrink-0
//                 gap-2
//                 border-t
//                 border-white/[0.07]
//                 bg-[#08080b]
//                 p-3
//                 sm:hidden
//               "
//             >
//               <button
//                 onClick={closeProject}
//                 className="
//                   flex
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-white/[0.04]
//                   px-4
//                   py-2.5
//                   text-xs
//                   text-zinc-300
//                 "
//               >
//                 <ArrowLeft className="h-3.5 w-3.5" />

//                 Back
//               </button>

//               <a
//                 href={selectedProject.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   flex
//                   flex-1
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-full
//                   bg-white
//                   px-4
//                   py-2.5
//                   text-xs
//                   font-semibold
//                   text-black
//                 "
//               >
//                 Live Website

//                 <ExternalLink className="h-3.5 w-3.5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Projects;