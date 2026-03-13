import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { gsap } from "gsap";

// ── Inline TypingText (no external import needed) ──────────────────────────
const TypingText = ({
  text,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
  initialDelay = 0,
  loop = true,
  className = "",
  showCursor = true,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  variableSpeed,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const cursorRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    let timeout;
    const currentText = textArray[currentTextIndex];

    const execute = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
        } else {
          timeout = setTimeout(() => setDisplayedText((p) => p.slice(0, -1)), deletingSpeed);
        }
      } else if (currentCharIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((p) => p + currentText[currentCharIndex]);
          setCurrentCharIndex((p) => p + 1);
        }, variableSpeed ? getRandomSpeed() : typingSpeed);
      } else if (textArray.length > 1) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(execute, initialDelay);
    } else {
      execute();
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, displayedText, isDeleting, typingSpeed, deletingSpeed, pauseDuration,
      textArray, currentTextIndex, loop, initialDelay, variableSpeed, getRandomSpeed]);

  return (
    <span className={`inline-block whitespace-pre-wrap ${className}`}>
      <span className="inline">{displayedText}</span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={`inline-block ${
            cursorCharacter === "|"
              ? `h-5 w-[1px] translate-y-1 bg-cyan-400 ${cursorClassName}`
              : `ml-1 ${cursorClassName}`
          }`}
        >
          {cursorCharacter === "|" ? "" : cursorCharacter}
        </span>
      )}
    </span>
  );
};

// ── Hero ───────────────────────────────────────────────────────────────────
const Hero = () => {
  const [shrinkImage, setShrinkImage] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) setShrinkImage(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roles = [
    "Cyber Security student",
    "Frontend developer",
    "UI/UX designer",
  ];

  return (
    <section id="home" className="pt-20 lg:pt-28 font-[Poppins]">
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

          {/* ── Gradient Title with TypingText ── */}
           
            <h2 className="text-3xl sm:text-4xl font-bold mx-auto lg:mx-0 mt-5 mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r font-mono from-white to-cyan-400 text-transparent bg-clip-text block">
                I'm Amina Medabis,
              </span>
              <span className="block mt-1 font-mono">
                a{" "}
                <TypingText
                  text={roles}
                  typingSpeed={55}
                  deletingSpeed={35}
                  pauseDuration={1800}
                  initialDelay={500}
                  variableSpeed={{ min: 40, max: 90 }}
                  cursorClassName="bg-cyan-400"
                  className="bg-gradient-to-r from-white to-cyan-400 text-transparent bg-clip-text"
                />
              </span>
            </h2>
                      <div className="flex justify-center lg:justify-start items-center gap-3 mb-3">
            <div className="flex font-mono items-center gap-1.5 text-white text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-cyan-400">
                <span className="absolute font-mono inset-0 rounded-full bg-cyan-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Toggleable Description */}
          <div className="flex flex-col items-center lg:items-start gap-0 mx-4 lg:mx-0 text-white">
            <h3
              className={`text-sm font-light text-white/75 font-[Rubik] leading-relaxed text-center lg:text-left max-w-2xl mb-2 lg:mb-4 ${
                showMore ? "" : "line-clamp-3"
              } lg:line-clamp-none`}
            >
              " I am a 2CS Computer Science and Cybersecurity student , deeply passionate
              about UI/UX design, with experience in web development—particularly frontend
              development. I specialize in building intuitive and efficient digital
              solutions, seamlessly integrating aesthetics and functionality to enhance
              user experience. Driven by curiosity and a commitment to continuous
              improvement, I continuously seek to learn, improve, and innovate at the
              intersection of design, development, and cybersecurity. "
            </h3>
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
            <div className="flex gap-4 items-center lg:items-start text-white">
              <h2 className="text-7xl  font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent ml-2">
                +3
              </h2>
              <h3 className="text-sm font-mono text-center lg:text-left tracking-wide font-thin">
                Computer Science <br />Years of Experience
              </h3>
            </div>

  {/* Social Images - Right */}
  <div className="flex gap-5 items-center">
    <a
      href="https://www.linkedin.com/in/medabis-amina-851a5926a/"
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
      href="https://github.com/MedabisAmina"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition" 
    >
      <img 
        src="/amina-portfolio-image/github-sign.png" 
        alt="GitHub"
        className="w-12 h-12 object-contain" 
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
