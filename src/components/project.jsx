import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectCard = ({ title, tools, description, link, image, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300 overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-14px)]"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-55 group-hover:opacity-80 transition-all duration-500"
          style={{
            transform: hovered ? "scale(1.04)" : "scale(1.09)",
            transition: "opacity 0.45s, transform 0.75s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* index */}
        <span className="absolute top-3 left-3.5 font-mono text-[10px] text-cyan-400/70">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* tools badge */}
        <span className="absolute top-2.5 right-3 font-mono text-[9px] uppercase tracking-widest text-cyan-300/60 border border-cyan-400/25 bg-black/50 px-2 py-0.5 rounded">
          {tools}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-mono text-[13px] text-white mb-2.5 leading-snug">
          {title}
        </h3>

        <p
          className={`text-[11.5px] text-white/65 group-hover:text-white/85 transition-colors duration-300 leading-relaxed ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>

        {/* expand toggle */}
        <button
          onClick={() => setExpanded((p) => !p)}
          className="mt-1 self-start bg-transparent border-none outline-none cursor-pointer"
        >
          <span
            className={`material-symbols-rounded text-white/40 group-hover:text-cyan-400/60 text-[22px] transition-all duration-300 ${
              expanded ? "rotate-180" : "rotate-0"
            }`}
          >
            expand_more
          </span>
        </button>

        {/* Divider */}
        <div className="mt-auto pt-3">
          <div className="mb-3 h-[1px] bg-white/[0.06] group-hover:bg-cyan-400/20 transition-colors duration-300" />

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cyan-400/60 hover:text-cyan-300 transition-colors duration-200"
            >
              <span className="text-cyan-400/40">{">"}</span>
              view project
              <span className="material-symbols-rounded text-[13px] leading-none">open_in_new</span>
            </a>
          ) : (
            <span className="font-mono text-[10px] text-white/20 italic">no link available</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = ({ title, projects, cmd }) => (
  <div className="mb-14">
    {/* Section header */}
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text font-[Poppins]">
        {title}
      </h2>
      <div className="mt-2 w-6 h-[1px] bg-cyan-400/40" />
    </div>

    {/* Terminal card */}
    <div className="relative rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.03]">

      <div className="p-6 sm:p-8">
        {/* Prompt */}
        <p className="font-mono text-[11px] text-white/35 mb-6 pl-1">
          <span className="text-cyan-400/60">$</span>{" "}
          ls{" "}
          <span className="text-cyan-300/60">{cmd}/</span>
        </p>

        {/* Cards grid */}
        <motion.div
          className="flex flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </motion.div>

        {/* Footer */}
        <p className="font-mono text-[10px] text-white/30 mt-6 pl-1">
          <span className="text-cyan-400/50">{">"}</span>{" "}
          {projects.length} items found
        </p>
      </div>
    </div>
  </div>
);

const Project = () => {
  const uiuxProjects = [
    {
      title: "Vironova",
      tools: "Figma",
      description:
        "Vironova is an innovative VR application designed to provide users with an immersive space exploration experience — transporting them beyond Earth's atmosphere to explore celestial bodies and astronomical phenomena. Done alongside team JALAZ in a designthon.",
      link: "/amina-portfolio-image/vironova.png",
      image: "/amina-portfolio-image/homepage.png",
    },
    {
      title: "Neuron",
      tools: "Figma",
      description:
        "Neuron is a medical office management platform designed to streamline patient visit management, medical record-keeping, and financial tracking for healthcare professionals. Done alongside team JALAZ in a designthon.",
      link: "/amina-portfolio-image/neuro.png",
      image: "/amina-portfolio-image/log in doctor.png",
    },
    {
      title: "Progress (Redesign)",
      tools: "Figma",
      description:
        "Progress is a smart app designed to help higher education students manage their academic life efficiently, track their progress, and stay organized with schedules, tasks, and goals. Done alongside team JALAZ in a designthon.",
      link: "/amina-portfolio-image/prog.png",
      image: "/amina-portfolio-image/progress.png",
    },
    {
      title: "CSE (Redesign)",
      tools: "Figma",
      description:
        "As a member of the UI/UX department of the CSE club, I participated in redesigning the official website of the club.",
      image: "/amina-portfolio-image/cse.PNG",
    },
    {
      title: "Lmcs Quest",
      tools: "Figma",
      description:
        "During my second year at ESI, I contributed to designing an intuitive UI for the LMCS scientific tracker project, using Figma for design and HTML/CSS/JS for implementation.",
      image: "/amina-portfolio-image/Sign_up 5 lmcs.png",
    },
    {
  title: "Math Platform",
  tools: "Figma",
  description:
    "Collaborated with my team to design the UI/UX of a math learning platform. The project included both a mobile application and a web interface. We worked on creating intuitive user flows, clean layouts, and a consistent design system to make the platform easy to use for students and educators.",
  image: "/amina-portfolio-image/m.png",
},
  ];

  const webProjects = [
    {
      title: "Lmcs Quest",
      tools: "HTML · CSS · JS",
      description:
        "Developed the front-end of Lmcs Quest — a web application that automates the collection and organization of scientific productions from LMCS laboratory researchers.",
      image: "/amina-portfolio-image/Sign_up 5 lmcs.png",
    },
{
  title: "Math Platform",
  tools: "React · Tailwind · JS",
  description:
    "Developed the full frontend of the math platform using React and Tailwind, and handled the integration with the backend APIs to ensure a responsive and functional web interface.",
  image: "/amina-portfolio-image/m2.png",
},
{
  title: "SOAI official website",
  tools: "Next.js · Tailwind · JS",
  description:
    "Selected to be part of the team developing the official website of the Scientific Club School of AI (SOAI). Contributing to building responsive and modern interfaces using Next.js .",
  image: "/amina-portfolio-image/m3.png",
},
    {
      title: "Portfolio",
      tools: "React · Tailwind · JS",
      description:
        "A responsive and modern portfolio that showcases my work, projects, and skills.",
      image: "/amina-portfolio-image/port.jpg",
    },
  ];

  return (
    <div id="projects" className="w-full max-w-5xl mx-auto mt-20 px-4 font-[Poppins]">
      {/* Page header */}
      <div className="flex flex-col items-center mb-6">
        <p className="text-cyan-400/70 text-[13px] tracking-[0.4em] uppercase mb-3 font-light">
          Things I've built
        </p>
      </div>

      <ProjectSection title="UI/UX Projects" projects={uiuxProjects} cmd="uiux" />
      <ProjectSection title="Web Dev Projects" projects={webProjects} cmd="webdev" />
    </div>
  );
};

export default Project;