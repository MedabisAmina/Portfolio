import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const navLinksRef = useRef({});

  const navItems = [
    { label: "Home",       link: "#home"       },
    { label: "Skills",     link: "#skills"     },
    { label: "Highlights", link: "#highlights" },
    { label: "Projects",   link: "#projects"   },
    { label: "Contact",    link: "#contact",   hideOnDesktop: true },
  ];

  const moveActiveBox = (el) => {
    if (!activeBox.current || !el) return;
    const boxHeight = 32;

    if (window.innerWidth >= 768) {
      activeBox.current.style.top    = `${el.offsetTop + (el.offsetHeight - boxHeight) / 2}px`;
      activeBox.current.style.left   = `${el.offsetLeft}px`;
      activeBox.current.style.width  = `${el.offsetWidth}px`;
    } else {
      activeBox.current.style.top    = `${el.offsetTop + (el.offsetHeight - boxHeight) / 2}px`;
      activeBox.current.style.left   = "6px";
      activeBox.current.style.width  = "calc(100% - 12px)";
    }
    activeBox.current.style.height = `${boxHeight}px`;
  };

  const initActiveBox = () => {
    if (lastActiveLink.current) moveActiveBox(lastActiveLink.current);
  };

  const setActiveLink = (linkId) => {
    if (!navLinksRef.current[linkId]) return;
    lastActiveLink.current?.classList.remove("active");
    navLinksRef.current[linkId].classList.add("active");
    lastActiveLink.current = navLinksRef.current[linkId];
    moveActiveBox(navLinksRef.current[linkId]);
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    window.history.replaceState(null, null, " ");
    document.querySelector("#home")?.scrollIntoView({ behavior: "auto" });

    const handleScroll = () => {
      let current = null;
      navItems.forEach(({ link }) => {
        const s = document.querySelector(link);
        if (s && window.scrollY >= s.offsetTop - 10 && window.scrollY < s.offsetTop + s.offsetHeight)
          current = link;
      });
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50)
        current = "#contact";
      if (current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("resize", initActiveBox);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.closest("a").classList.add("active");
    lastActiveLink.current = e.target.closest("a");
    moveActiveBox(e.target.closest("a"));
  };

  if (!navOpen) return null;

  return (
    <>
      <style>{`
        .nav-link {
          display: flex;
          align-items: center;
          padding: 6px 16px;
          border-radius: 6px;
          font-family: 'mono', monospace;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.90);
          text-decoration: none;
          position: relative;
          z-index: 10;
          transition: color 0.2s;
          white-space: nowrap;
          border: none;
          background: transparent;
          cursor: pointer;
        }
        .nav-link:hover {
          color: rgba(255,255,255,0.99);
        }
        .nav-link.active {
          color: #26C6DA;
          font-weight: 600;
        }
      `}</style>

      <nav className="relative flex flex-col md:flex-row gap-0.5 p-1.5 rounded-xl font-[Poppins] md:w-fit w-36"
        style={{
          background: "#1c1c1e",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {navItems.map(({ label, link, hideOnDesktop }) => (
          <a
            href={link}
            key={link}
            ref={(el) => {
              navLinksRef.current[link] = el;
              if (label === "Home" && !lastActiveLink.current) lastActiveLink.current = el;
            }}
            className={`nav-link ${label === "Home" ? "active" : ""} ${hideOnDesktop ? "md:hidden" : ""}`}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))}

        {/* gliding active pill */}
        <div
          ref={activeBox}
          className="absolute rounded-md pointer-events-none transition-all duration-300"
          style={{
            background: "rgba(103,232,249,0.07)",
            border: "1px solid rgba(103,232,249,0.18)",
            zIndex: 0,
            left: "6px",
          }}
        />
      </nav>
    </>
  );
};

Navbar.propTypes = { navOpen: PropTypes.bool.isRequired };

export default Navbar;