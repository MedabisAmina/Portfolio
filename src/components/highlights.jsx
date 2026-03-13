import { useState } from "react";
import { motion } from "framer-motion";

const Highlights = () => {
  const [hovered, setHovered] = useState(null);

  const highlights = [
    {
      image: "/amina-portfolio-image/lmcs-high.PNG",
      tag: "dev",
      index: "01",
      title: "LMCS Research Tracker Project",
      text: "During my second year at ESI, I worked on a multidisciplinary project tracking the scientific productions of LMCS lab researchers, under the supervision of Mr. KHELOUAT Boualem and Ms SI TAYEB Fatima.",
      link: "https://www.linkedin.com/posts/medabis-amina-851a5926a_lmcs-multidisciplinaryproject-webdevelopment-activity-7302515299260510208-oAcn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIB7n0Bv_slBRc_OMnQjzMTBcLdpId8fnU",
    },
    {
      image: "/amina-portfolio-image/uiux.jpg",
      tag: "design",
      index: "02",
      title: "Experia Designthon – 3rd Place!",
      text: "Our team JALAZ secured 3rd place out of 39 teams at Experia Designthon — an intense week of design sprints that pushed our problem-solving and creative limits.",
      link: "https://www.linkedin.com/posts/medabis-amina-851a5926a_experiadesignthon-uiux-innovation-activity-7302531667909398528-jIB9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIB7n0Bv_slBRc_OMnQjzMTBcLdpId8fnU",
    },
    {
      image: "/amina-portfolio-image/soai.jpeg",
      tag: "ai / ml",
      index: "03",
      title: "First AI Datathon – SOAI",
      text: "My first step into AI competitions. After exploring fundamentals at SOAI Lab, I participated in the SOAI Datathon and got my first real taste of competitive machine learning.",
      link: "https://www.linkedin.com/posts/medabis-amina-851a5926a_ai-datathon-machinelearning-activity-7302521201862602752-c1R_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIB7n0Bv_slBRc_OMnQjzMTBcLdpId8fnU",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div id="highlights" className="w-full max-w-5xl mx-auto mt-28 px-4 font-[Poppins]">

      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-cyan-400/70 text-[13px] tracking-[0.4em] uppercase mb-3 font-light">
          Featured moments
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text">
          Highlights
        </h2>
        <div className="mt-3 w-8 h-[1px] bg-cyan-400/40" />
      </div>

      {/* Outer shell */}
      <div className="relative rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.03]">

        <div className="p-6 sm:p-8">

          {/* Prompt */}
          <p className="font-mono text-[11px] text-white/35 mb-6 pl-1">
            <span className="text-cyan-400/60">$</span>{" "}
            cat{" "}
            <span className="text-cyan-300/60">highlights.log</span>
          </p>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group flex flex-col rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] transition-all duration-300 overflow-hidden"
              >
                {/* Image — no scanlines */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-55 group-hover:opacity-80 transition-all duration-500"
                    style={{
                      transform: hovered === index ? "scale(1.04)" : "scale(1.09)",
                      transition: "opacity 0.45s, transform 0.75s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                  {/* subtle dark gradient at bottom so text floats cleanly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* index badge */}
                  <span className="absolute top-3 left-3.5 font-mono text-[10px] text-cyan-400/70">
                    {item.index}
                  </span>
                  {/* tag badge */}
                  <span className="absolute top-2.5 right-3 font-mono text-[9px] uppercase tracking-widest text-cyan-300/60 border border-cyan-400/25 bg-black/50 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-mono text-[13px] text-white transition-colors duration-300 mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] text-white/65 group-hover:text-white/85 transition-colors duration-300 leading-relaxed flex-1">
                    {item.text}
                  </p>

                  {/* Divider */}
                  <div className="mt-4 mb-3 h-[1px] bg-white/[0.06] group-hover:bg-cyan-400/20 transition-colors duration-300" />

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-cyan-400/60 hover:text-cyan-300 transition-colors duration-200"
                  >
                    <span className="text-cyan-400/40">{">"}</span>
                    view on linkedin
                    <span className="material-symbols-rounded text-[13px] leading-none">open_in_new</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <p className="font-mono text-[10px] text-white/30 mt-6 pl-1">
            <span className="text-cyan-400/50">{">"}</span>{" "}
            {highlights.length} entries logged
          </p>

        </div>
      </div>
    </div>
  );
};

export default Highlights;