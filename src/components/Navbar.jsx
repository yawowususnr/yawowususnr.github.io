import { useState } from "react";
import logo from "../assets/memorial_logo-trans2.png";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarLinks = [
    { name: "Amenities", link: "#amenities" },
    { name: "Reviews", link: "#reviews" },
    { name: "Contact Us", link: "/request" },
  ];

  return (
    <nav className="bg-[#D8BA67] text-white fixed top-0 w-full z-50">
      {/* Main Navbar Container */}
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="pl-1">
          <img src={logo} width={80} alt="Mansa Pavallion" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-1 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {navbarLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.link}
              className={`uppercase text-xl font-medium hover:underline ${
                index < navbarLinks.length - 1
                  ? "border-r-2 border-white pr-4"
                  : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden flex-col bg-neutral-50 w-full py-5 px-4 border-t-2 absolute top-full left-0 z-10`}
      >
        {navbarLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide hover:text-[#D8BA67] hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
