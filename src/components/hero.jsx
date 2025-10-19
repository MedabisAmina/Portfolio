import { useEffect, useState } from "react";

const Hero = () => {
  const [shrinkImage, setShrinkImage] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setShrinkImage(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="pt-28 lg:pt-36 font-[Poppins]">
      <div className="container flex flex-col items-center gap-5 lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Image for small screens */}
        <div className="lg:hidden">
          <figure
            className={`mx-auto transition-all duration-300 overflow-hidden rounded-full ${
              shrinkImage ? "w-32 h-32" : "w-48 h-48"
            }`}
          >
            <img
              src="/amina-portfolio-image/profil pic.jpg"
              alt="Medabis Amina"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* Text section */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-3 mb-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-cyan-400">
                <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Gradient Title */}
          <h2 className="text-3xl sm:text-4xl font-bold max-w-[20ch] mx-auto lg:mx-0 mt-5 mb-4 lg:mb-6 bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text">
            I'm jake, a computer science student
          </h2>

          {/* Toggleable Description with icon under h3 */}
        <div className="flex flex-col items-center lg:items-start gap-0 mx-4 lg:mx-0 text-white">
          <h3
            className={`text-sm font-light font-[Rubik] leading-relaxed text-center lg:text-left max-w-2xl mb-2 lg:mb-4 ${
                showMore ? "" : "line-clamp-3"
            } lg:line-clamp-none`}
            >
           " I am a 1CS Computer Science and Cybersecurity student, deeply passionate
            about UI/UX design, with experience in web development—particularly frontend
            development. I specialize in building intuitive and efficient digital
            solutions, seamlessly integrating aesthetics and functionality to enhance
            user experience. Driven by curiosity and a commitment to continuous
            improvement, I actively seek challenges that foster learning, growth, and
            innovation. "
            </h3>
                        {/* Read more icon under h3 */}
            <button
                onClick={() => setShowMore((prev) => !prev)}
                className="mt-1 inline-block bg-transparent border-none focus:outline-none lg:hidden"
                >
                <span
                    className={`material-symbols-rounded text-white text-4xl transform transition-transform duration-300 ${
                    showMore ? "rotate-180" : "rotate-0"
                    }`}
                >
                    expand_more
                </span>
            </button>

          </div>

          {/* Buttons */}
          <div className="flex mt-8 justify-between items-center gap-0 w-full">
  {/* Experience Info - Left */}
  <div className="flex gap-4 items-center lg:items-start text-white">
  <h2 className="text-7xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent ml-2">
  +5
</h2>

    <h3 className="text-sm text-center lg:text-left tracking-wide font-thin">
      Computer Science :<br />Years of Experience
    </h3>
  </div>

  {/* Social Images - Right */}
  <div className="flex gap-5 items-center">
    <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition"
    >
      <img
        src="/amina-portfolio-image/linkedin.png"
        alt="LinkedIn"
        className="w-12 h-12 object-contain"
      />
    </a>
    <a
    /*  
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition" */
    >
      <img /*
        src="/amina-portfolio-image/github-sign.png" 
        alt="GitHub"
        className="w-12 h-12 object-contain" */
      />
    </a>
  </div>
</div>


        </div>

        {/* Image on large screens */}
        <div className="hidden lg:block">
          <figure className="w-full h-full max-w-[480px] ml-auto rounded-[20px] overflow-hidden bg-gradient-to-t">
            <img
              src="/amina-portfolio-image/profil pic.jpg"
              width={200}
              height={420}
              alt="Medabis Amina"
              className="w-full object-cover "
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
