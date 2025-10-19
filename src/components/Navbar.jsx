import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const navLinksRef = useRef({});

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "Skills", link: "#skills" },
    { label: "Highlights", link: "#highlights" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact", hideOnDesktop: true },
  ];

  const moveActiveBox = (el) => {
    if (!activeBox.current || !el) return;

    const boxHeight = 34;

    if (window.innerWidth >= 768) {
      const offsetTop = el.offsetTop + (el.offsetHeight - boxHeight) / 2;
      activeBox.current.style.position = "absolute";
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `${el.offsetLeft}px`;
      activeBox.current.style.width = `${el.offsetWidth}px`;
    } else {
      const offsetTop = el.offsetTop + (el.offsetHeight - boxHeight) / 2;
      activeBox.current.style.position = "absolute";
      activeBox.current.style.top = `${offsetTop}px`;
      activeBox.current.style.left = `8px`;
      activeBox.current.style.width = `calc(100% - 16px)`;
    }

    activeBox.current.style.height = `${boxHeight}px`;
  };

  const initActiveBox = () => {
    if (lastActiveLink.current) {
      moveActiveBox(lastActiveLink.current);
    }
  };

  const setActiveLink = (linkId) => {
    if (!navLinksRef.current[linkId]) return;
    
    // Remove active class from previous active link
    lastActiveLink.current?.classList.remove('active');
    
    // Add active class to new active link
    navLinksRef.current[linkId].classList.add('active');
    
    // Update lastActiveLink reference
    lastActiveLink.current = navLinksRef.current[linkId];
    
    // Move the active box
    moveActiveBox(navLinksRef.current[linkId]);
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

    window.history.replaceState(null, null, " ");
    const homeSection = document.querySelector("#home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "auto" });
    }

    const handleScroll = () => {
      let currentSectionId = null;

      navItems.forEach(({ link }) => {
        const section = document.querySelector(link);
        if (section) {
          const sectionTop = section.offsetTop - 10;
          const sectionHeight = section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            currentSectionId = link;
          }
        }
      });

      const scrollBottomThreshold = 50;
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - scrollBottomThreshold;

      if (isBottom) {
        currentSectionId = "#contact";
      }

      // Update active link if we have a current section
      if (currentSectionId) {
        setActiveLink(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page loads with scroll already positioned
    setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener("resize", initActiveBox);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;
    moveActiveBox(event.target);
  };

  if (!navOpen) return null;

  return (
    <nav className="relative flex flex-col md:flex-row gap-2 p-2 rounded-xl bg-zinc-800 text-white shadow-md md:w-fit w-30 font-[Poppins] text-base font-normal border border-gray-500/50 min-h-fit">
      {navItems.map(({ label, link, hideOnDesktop }, key) => (
        <a
          href={link}
          key={key}
          ref={(el) => {
            // Store references to all nav links
            navLinksRef.current[link] = el;
            // Set home as initial active link
            if (label === "Home" && !lastActiveLink.current) {
              lastActiveLink.current = el;
            }
          }}
          className={`nav-link no-underline relative z-10 ${
            label === "Home" ? "active" : ""
          } ${hideOnDesktop ? "md:hidden" : ""}`}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div
        ref={activeBox}
        className="absolute bg-white h-10 rounded-md -z-0 transition-all duration-300 pointer-events-none left-2 md:left-0"
      />
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;