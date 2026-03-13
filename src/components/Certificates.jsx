import { useState } from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("cyber");
  const [animating, setAnimating] = useState(false);
  const [hovered, setHovered] = useState(null);

  const tabs = [
    { id: "cyber",     label: "Cyber",     prefix: "#"  },
    { id: "dev",       label: "Dev",        prefix: "/>" },
    { id: "ai",        label: "AI / ML",    prefix: "~"  },
    { id: "hackathon", label: "Hackathons", prefix: "!"  },
  ];

  const certificates = {
    cyber: [
      {
        index: "01",
        title: "Cybersecurity Essentials",
        issuer: "Cisco Networking Academy",
        date: "2024",
        image: "/amina-portfolio-image/cert-cyber-essentials.png",
        skills: ["Network Security", "Threat Analysis", "Cryptography"],
        link: "#",
      },
      {
        index: "02",
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "2023",
        image: "/amina-portfolio-image/cert-cyber-intro.png",
        skills: ["Security Fundamentals", "Risk Management"],
        link: "#",
      },
      {
        index: "03",
        title: "Google Cybersecurity Certificate",
        issuer: "Google / Coursera",
        date: "2024",
        image: "/amina-portfolio-image/cert-google-cyber.png",
        skills: ["SIEM", "Python Scripting", "Linux"],
        link: "#",
      },
    ],
    dev: [
      {
        index: "01",
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2023",
        image: "/amina-portfolio-image/cert-web-design.png",
        skills: ["HTML", "CSS", "Flexbox", "Grid"],
        link: "#",
      },
      {
        index: "02",
        title: "JavaScript Algorithms & Data Structures",
        issuer: "freeCodeCamp",
        date: "2023",
        image: "/amina-portfolio-image/cert-js.png",
        skills: ["JavaScript", "Algorithms", "OOP"],
        link: "#",
      },
      {
        index: "03",
        title: "React – The Complete Guide",
        issuer: "Udemy",
        date: "2024",
        image: "/amina-portfolio-image/cert-react.png",
        skills: ["React", "Hooks", "Redux", "Next.js"],
        link: "#",
      },
    ],
    ai: [
      {
        index: "01",
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI / Coursera",
        date: "2024",
        image: "/amina-portfolio-image/cert-ml.png",
        skills: ["Supervised Learning", "Neural Networks", "MLOps"],
        link: "#",
      },
      {
        index: "02",
        title: "Deep Learning Fundamentals",
        issuer: "SOAI Lab",
        date: "2024",
        image: "/amina-portfolio-image/cert-dl.png",
        skills: ["CNNs", "RNNs", "PyTorch"],
        link: "#",
      },
      {
        index: "03",
        title: "AI for Everyone",
        issuer: "DeepLearning.AI / Coursera",
        date: "2023",
        image: "/amina-portfolio-image/cert-ai-everyone.png",
        skills: ["AI Strategy", "Workflow", "Ethics"],
        link: "#",
      },
    ],
    hackathon: [
      {
        index: "01",
        title: "Experia Designthon – 3rd Place",
        issuer: "Experia · Team JALAZ",
        date: "2025",
        image: "/amina-portfolio-image/uiux.jpg",
        skills: ["UI/UX", "Design Sprints", "Prototyping"],
        link: "https://www.linkedin.com/posts/medabis-amina-851a5926a_experiadesignthon-uiux-innovation-activity-7302531667909398528-jIB9",
      },
      {
        index: "02",
        title: "SOAI Datathon – Participant",
        issuer: "SOAI Lab",
        date: "2024",
        image: "/amina-portfolio-image/soai.jpeg",
        skills: ["Data Analysis", "Feature Engineering", "ML"],
        link: "https://www.linkedin.com/posts/medabis-amina-851a5926a_ai-datathon-machinelearning-activity-7302521201862602752-c1R_",
      },
    ],
  };

  const handleTabChange = (id) => {
    if (id === activeTab || animating) return;
    setAnimating(true);
    setHovered(null);
    setTimeout(() => {
      setActiveTab(id);
      setAnimating(false);
    }, 180);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const currentCerts = certificates[activeTab];

  return (
    <div
      id="certificates"
      className="w-full max-w-5xl mx-auto mt-28 px-4 font-[Poppins]"
    >
      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-cyan-400/70 text-[13px] tracking-[0.4em] uppercase mb-3 font-light">
          Credentials & Achievements
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text">
          Certificates
        </h2>
        <div className="mt-3 w-8 h-[1px] bg-cyan-400/40" />
      </div>

      {/* Card shell */}
      <div className="relative rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.03]">

        {/* Tab bar */}
        <div className="flex items-end gap-[2px] px-4 pt-3 border-b border-white/[0.08] bg-white/[0.02] overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative flex items-center gap-1.5 px-5 py-2 text-[12px] font-mono outline-none border-none transition-all duration-200 rounded-t-md cursor-pointer whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "bg-white/[0.05] text-cyan-400/90 border border-white/[0.10] border-b-0 translate-y-[-1.5px]"
                    : "text-white/50 hover:text-white/60 bg-transparent border border-transparent hover:bg-white/[0.02]"
                }`}
              style={{ marginBottom: activeTab === tab.id ? "-1px" : "0" }}
            >
              <span
                className={`text-[9px] transition-colors duration-200 ${
                  activeTab === tab.id ? "text-cyan-400/80" : "text-cyan-400/25"
                }`}
              >
                {tab.prefix}
              </span>
              {tab.label}
              {activeTab === tab.id && (
                <span
                  className="absolute bottom-[-1px] left-0 w-full h-[2px]"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8">
          {/* Prompt */}
          <p className="font-mono text-[11px] text-white/35 mb-6 pl-1">
            <span className="text-cyan-400/60">$</span> ls{" "}
            <span className="text-cyan-300/60">certificates/{activeTab}/</span>
          </p>

          {/* Horizontal scroll */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(6px)" : "translateY(0)",
              transition: "opacity 0.18s ease, transform 0.18s ease",
            }}
          >
            <motion.div
              key={activeTab}
              className="flex flex-row gap-4 overflow-x-auto pb-3"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {currentCerts.map((cert, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={cardVariants}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex flex-col rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300 flex-shrink-0 w-64 overflow-hidden"
                >
                  {/* Certificate image */}
                  <div className="relative h-40 overflow-hidden bg-white/[0.03]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-all duration-500"
                      style={{
                        transform: hovered === index ? "scale(1.04)" : "scale(1.09)",
                        transition: "opacity 0.45s, transform 0.75s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                    {/* Index badge */}
                    <span className="absolute top-3 left-3.5 font-mono text-[10px] text-cyan-400/70">
                      {cert.index}
                    </span>

                    {/* Date badge */}
                    <span className="absolute top-2.5 right-3 font-mono text-[9px] uppercase tracking-widest text-cyan-300/60 border border-cyan-400/25 bg-black/50 px-2 py-0.5 rounded">
                      {cert.date}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 px-4 py-4 gap-2">
                    <h3 className="font-mono text-[12px] text-white/90 group-hover:text-white leading-snug transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-[10.5px] text-white/45 group-hover:text-white/60 transition-colors duration-300">
                      {cert.issuer}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[9px] text-cyan-300/55 group-hover:text-cyan-300/75 border border-cyan-400/15 group-hover:border-cyan-400/25 bg-cyan-400/[0.03] px-2 py-0.5 rounded transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-4 pb-4 pt-2 border-t border-white/[0.06] group-hover:border-cyan-400/10 transition-colors duration-300">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-cyan-400/50 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <span className="text-cyan-400/40">{">"}</span>
                      view certificate
                      <span className="material-symbols-rounded text-[12px] leading-none">
                        open_in_new
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Footer log line */}
          <p className="font-mono text-[10px] text-white/30 mt-5 pl-1">
            <span className="text-cyan-400/50">{">"}</span>{" "}
            {currentCerts.length} certificate
            {currentCerts.length !== 1 ? "s" : ""} found in{" "}
            <span className="text-cyan-400/40">{activeTab}/</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;