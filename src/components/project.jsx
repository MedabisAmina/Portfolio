import React, { useState } from "react";
import { motion } from "framer-motion";


const ProjectCard = ({ title, tools, description, link, image, index }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-start bg-white/10 rounded-xl p-4 shadow-md min-h-[320px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[30%] border border-gray-500/50 cursor-pointer font-[Poppins]"
      >
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={`${title} image`}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text mb-2 text-center">
            {title}
          </h3>
          <p className="text-sm text-cyan-200 mb-1 italic text-center">tools : {tools}</p>
          <p className={`text-gray-300 text-sm transition-all duration-300 mt-2 ${expanded ? "" : "line-clamp-3"}`}>
            {description}
          </p>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-1 inline-block bg-transparent border-none focus:outline-none"
          >
            <span
              className={`material-symbols-rounded text-white text-4xl transform transition-transform duration-300 ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            >
              expand_more
            </span>
          </button>
        </div>
  
        {link && (
          <div className="mt-4 flex justify-end w-full">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-cyan-500 hover:bg-cyan-600 text-sm px-3 py-1 rounded-md transition no-underline"
            >
              Check it
            </a>
          </div>
        )}
      </motion.div>
    );
  };
  

  const ProjectSection = ({ title, projects }) => (
    <div className="mb-12">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text font-[Poppins] font-600">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6  p-6 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
      
    </div>
  );
  

const Project = () => {
  const uiuxProjects = [
    {
      title: "Vironova",
      tools: "Figma",
      description:
        " as a member in the UI/UX departement of the CSE club , i participated in the redesigning of the official website of the club. ",
        link: "/amina-portfolio-image/vironova.png",
      image: "/amina-portfolio-image/homepage.png", 
    },
    {
        title: "Neuron",
        tools: "Figma",
        description:
          "as a member in the UI/UX departement of the CSE club , i participated in the redesigning of the official website of the club.",
          link: "/amina-portfolio-image/neuro.png",
        image: "/amina-portfolio-image/log in doctor.png", 
      },
      {
        title: "Progress (Redesign)",
        tools: "Figma",
        description:
          "as a member in the UI/UX departement of the CSE club , i participated in the redesigning of the official website of the club.",
          link: "/amina-portfolio-image/prog.png",
        image: "/amina-portfolio-image/progress.png", 
      },
      {
        title: "CSE (Redesign)",
        tools: "Figma",
        description:"as a member in the UI/UX departement of the CSE club , i participated in the redesigning of the official website of the club  ",
         
        image: "/amina-portfolio-image/cse.PNG", 
      },
      {
        title: "Lmcs Quest",
        tools: "Figma",
        description:" as a member in the UI/UX departement of the CSE club , i participated in the redesigning of the official website of the club",
         
        image: "/amina-portfolio-image/Sign_up 5 lmcs.png", 
      },
   
  ];

  const webProjects = [
    {
        title: "Portfolio",
        tools: "React , tailwindcss , JS",
        description:
          " A responsive and modern portfolio that showcases my work , projects , skills ...",
        image: "/amina-portfolio-image/port.jpg",
      },
    {
      title: "Lmcs Quest",
      tools: "HTML, CSS, JS ",
      description:
        " developped the front-end of Lmcs Quest , a web application that automates the collection and organization of scientific productions from LMCS laboratory researchers. ",
      image: "/amina-portfolio-image/Sign_up 5 lmcs.png",
    },
    {
        title: "DigitaLens",
        tools: "HTML, CSS, JS , php , mysql",
        description:
          " The project involves the creation of an online store dedicated to the sale of cameras, lenses, and accessories, called 'DigitaLens' ",
        image: "/amina-portfolio-image/DigitaLens.PNG",
      },
  ];

  return (
    <div id="projects"  className="w-full max-w-6xl mx-auto mt-15 px-4">
      <ProjectSection title="UI/UX Projects" projects={uiuxProjects} />
      <ProjectSection title="Web Dev Projects" projects={webProjects} />
      
    </div>
  );
};

export default Project;
