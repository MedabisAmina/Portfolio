import { useState, useRef } from "react";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("webdev");
  const [animating, setAnimating] = useState(false);
  const skillsRef = useRef(null);

  const uiuxSkills = [
    { name: "Figma", icon: "/amina-portfolio-image/figma.png" },
  ];

  const webDevSkills = [
    { name: "React", icon: "/amina-portfolio-image/physics.png" },
    { name: "Tailwind CSS", icon: "/amina-portfolio-image/tailwindcss.svg" },
    { name: "JavaScript", icon: "/amina-portfolio-image/js.png" },
    { name: "HTML", icon: "/amina-portfolio-image/html-5.png" },
    { name: "CSS", icon: "/amina-portfolio-image/css-3.png" },
    { name: "Python", icon: "/amina-portfolio-image/python.png" },
    { name: "MySQL", icon: "/amina-portfolio-image/mysql.png" },
  ];

  const cyberSkills = [
    { name: "Kali Linux", icon: "https://cdn.simpleicons.org/kalilinux/ffffff" },
    { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/ffffff" },
    { name: "VMware", icon: "https://cdn.simpleicons.org/vmware/ffffff" },
  ];

  const tabs = [
    { id: "uiux",   label: "UI/UX",   prefix: "~"  },
    { id: "webdev", label: "Web Dev", prefix: "/>" },
    { id: "cyber",  label: "Cyber",   prefix: "#"  },
  ];

  const skillsMap = { uiux: uiuxSkills, webdev: webDevSkills, cyber: cyberSkills };

  const handleTabChange = (id) => {
    if (id === activeTab || animating) return;
    setAnimating(true);
    setTimeout(() => { setActiveTab(id); setAnimating(false); }, 180);
  };

  return (
    <div id="skills" className="w-full max-w-3xl mx-auto mt-28 px-4 font-[Poppins]">

      {/* Header */}
      <div className="flex flex-col items-center mb-10">
        <p className="text-cyan-400/70 text-[13px] tracking-[0.4em] uppercase mb-3 font-light">
          What I work with
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text">
          Skills
        </h2>
        <div className="mt-3 w-8 h-[1px] bg-cyan-400/40" />
      </div>

      {/* Card */}
      <div className="relative rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.03]">

        {/* Browser-style tabs row */}
        <div className="flex items-end gap-[2px] px-4 pt-3 border-b border-white/[0.08] bg-white/[0.02]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative flex items-center gap-1.5 px-5 py-2 text-[12px] font-mono outline-none border-none transition-all duration-200 rounded-t-md cursor-pointer
                ${activeTab === tab.id
                  ? "bg-white/[0.05] text-cyan-400/90 border border-white/[0.10] border-b-0 translate-y-[-1.5px]"
                  : "text-white/50 hover:text-white/60 bg-transparent border border-transparent hover:bg-white/[0.02]"
                }`}
              style={{ marginBottom: activeTab === tab.id ? "-1px" : "0" }}
            >
              <span className={`text-[9px] transition-colors duration-200 ${activeTab === tab.id ? "text-cyan-400/80" : "text-cyan-400/25"}`}>
                {tab.prefix}
              </span>
              {tab.label}
              {/* active tab bottom cover — hides the border-b */}
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
          <p className="font-mono text-[11px] text-white/35 mb-5 pl-1">
            <span className="text-cyan-400/60">$</span>{" "}
            ls{" "}
            <span className="text-cyan-300/60">{activeTab}/</span>
          </p>

          {/* Skills */}
          <div
            ref={skillsRef}
            className="transition-all duration-200"
            style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(5px)" : "translateY(0)" }}
          >
            <div className="flex flex-wrap gap-2.5">
              {skillsMap[activeTab].map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-cyan-400/25 hover:bg-cyan-400/[0.04] transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="font-mono text-xs text-white/90 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <p className="font-mono text-[10px] text-white/30 mt-6 pl-1">
              <span className="text-cyan-400/50">{">"}</span>{" "}
              {skillsMap[activeTab].length} items found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;