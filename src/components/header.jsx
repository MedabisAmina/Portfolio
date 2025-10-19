import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        {/* Logo */}
        <h1>
          
        </h1>

        {/* Navbar for md+ screens */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar navOpen={true} />
        </div>

        {/* Mobile menu button + dropdown */}
        <div className="md:hidden">
          <button
            className="menu-btn"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded text-white">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {navOpen && (
            <div className="absolute top-20 right-4 z-45">
              <Navbar navOpen={true} />
            </div>
          )}
        </div>

       
      </div>
    </header>
  );
};

export default Header;
