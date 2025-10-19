import { useState } from "react";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("webdev");


  const uiuxSkills = [
    { name: "Figma", icon: "/amina-portfolio-image/figma.png" },
  ];

  const webDevSkills = [
    { name: "React", icon: "/amina-portfolio-image/physics.png" },
    { name: "Html", icon: "/amina-portfolio-image/html-5.png" },
    { name: "CSS", icon: "/amina-portfolio-image/css-3.png" },
    { name: "Python", icon: "/amina-portfolio-image/python.png" },
    { name: "Mysql", icon: "/amina-portfolio-image/mysql.png" },
    { name: "Js", icon: "/amina-portfolio-image/js.png" },
    { name: "Tailwindcss", icon: "/amina-portfolio-image/tailwindcss.svg" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center w-28 min-w-[7rem] h-32 bg-white/10 text-white rounded-xl p-3 shadow-md font-[Poppins] font-600"
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-12 h-12 object-contain mb-2"
        />
        <span className="text-sm font-medium font-poppins">{skill.name}</span>
      </div>
    ));

  return (
    <div id="skills" className="w-full max-w-4xl mx-auto mt-20 px-4">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text font-[Poppins] font-600">
        Skills
      </h2>

      <div className="flex justify-center">
        <div className="border border-gray-500/50 rounded-xl p-6 font-poppins  max-w-2xl  w-[70%] sm:w-[60%] md:w-[70%] lg:w-[90%] ">
          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-6 border-b border-gray-500/50 pb-4">
            <button
              onClick={() => setActiveTab("uiux")}
              className={`text-xl font-bold transition border-b-2 pb-1 ${
                activeTab === "uiux"
                  ? "text-cyan-400 border-none outline-none bg-transparent"
                  : "border-transparent text-white hover:text-cyan-400 border-none outline-none bg-transparent font-poppins"
              }`}
            >
              UI/UX
            </button>
            <button
              onClick={() => setActiveTab("webdev")}
              className={`text-xl font-bold transition border-b-2 pb-1 ${
                activeTab === "webdev"
                  ? "text-cyan-400 border-none outline-none bg-transparent"
                  : "border-transparent text-white hover:text-cyan-400 border-none outline-none bg-transparent font-poppins"
              }`}
            >
              Web Dev
            </button>
          </div>

          {/* Horizontal scrollable skills */}
          <div className="overflow-x-auto relative">
            <div className="flex gap-4 w-max px-2 py-2 animate-scroll-smooth">
              {activeTab === "uiux"
                ? renderSkills(uiuxSkills)
                : renderSkills(webDevSkills)}
            </div>

            {/* Custom Scrollbar Styling */}
            <style jsx>{`
              .overflow-x-auto::-webkit-scrollbar {
                height: 6px;
                background-color: transparent;
              }
              .overflow-x-auto::-webkit-scrollbar-thumb {
                background-color: #22d3ee; /* emerald color */
                border-radius: 5px;
              }
              .overflow-x-auto::-webkit-scrollbar-thumb:hover {
                background-color: #0891b2; /* darker emerald */
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
