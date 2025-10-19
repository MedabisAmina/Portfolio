import { motion } from "framer-motion";

const Highlights = () => {
  const highlights = [
    {
      image: "/amina-portfolio-image/lmcs-high.jpg",
      title: "LMCS Research Tracker Project",
      text: "During my second year at Ecole Nationale Supérieure d'Informatique , I had the opportunity to work on a multidisciplinary project titled 'Suivi des productions scientifiques et encadrements des chercheurs du laboratoire LMCS' alongside AMIRA REZZOUG, MEROUANE MERIEM, TAILEB LYNA, Rofieda Maamar and Khadidja Foudili under the supervision of Mr. KHELOUAT Boualem and Ms SI TAYEB Fatima.",
      link: "", 
    },
    {
      image: "/amina-portfolio-image/uiux.jpg",
      title: "Experia Designthon – 3rd Place!",
      text: "🏆 Third Place at Experia Designthon ! 🏆 After an intense week full of hard work and creativity, I am proud to share that our team JALAZ secured 3rd place out of 39 teams in the Experia Designthon! Each challenge pushed our problem-solving, design, and teamwork skills to the limit, testing our ability to think critically and adapt under pressure.",
      link: "", 
    },
    {
      image: "/amina-portfolio-image/soai.jpg",
      title: "First AI Datathon – SOAI",
      text: "My First Step in AI Competitions ! SOAI Mini Datathon 🌟 After starting my AI journey with SOAI Lab, where I explored the fundamentals and worked on beginner-friendly challenges, I recently took my first step into AI competitions by participating in the SOAI Datathon.",
      link: "", 
    },
  ];

  return (
    <div  className=" w-full max-w-6xl mx-auto mt-15 px-0">
      <h2 id="highlights" className="text-center text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text font-[Poppins] font-600">
        Highlights
      </h2>

      <div className="rounded-xl p-6 font-[Poppins] w-full overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {highlights.map((item, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-start bg-white/10 rounded-xl p-4 shadow-md min-h-[320px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[26%] border border-gray-500/50 cursor-pointer"
          >
          
              <img
                src={item.image}
                alt={`Highlight ${index + 1}`}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text font-[Poppins] mb-2 mt-6">
                {item.title}
              </h3>
              <div className="flex justify-between items-center w-full mt-auto">
                <p className="italic text-gray-300 text-sm line-clamp-3 max-w-[80%] mt-1">
                  {item.text}
                </p>
                <div className="relative group">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-300 mr-2 text-xl bg-transparent border-none outline-none ring-0 font-light font-[Rubik]"
                  >
                    <span className="material-symbols-rounded">open_in_new</span>
                  </a>
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    Post in LinkedIn
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
