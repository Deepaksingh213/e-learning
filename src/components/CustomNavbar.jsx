import { useState } from "react";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "about" },
    { name: "Courses", to: "courses" },
    { name: "Categories", to: "categories" },
    { name: "Contact", to: "contact" },
    { name: "Services", to: "services" },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <Navbar
      rounded
      fluid
      className="backdrop-blur-lg bg-neutral-300/20 drop-shadow-2xl py-2 sm:py-3 md:px-12 shadow-sm"
    >
      <Navbar.Brand href="#">
        <img
          src={logo}
          className="mr-3 h-6 sm:h-8 md:h-10 bg-transparent mix-blend-multiply"
          alt="K.K. Campus Logo"
        />
        <span className="self-center whitespace-nowrap text-lg sm:text-xl md:text-2xl font-bold text-primary">
          K.K.<span className="text-secondary"> Campus</span>
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-2 sm:gap-3">
        <Button pill gradientDuoTone="greenToBlue" as={Link} to="login">
          Login
        </Button>
        <Button pill gradientDuoTone="greenToBlue" className="px-2 sm:px-3" as={Link} to="register">
          Signup
        </Button>
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            onClick={() => handleLinkClick(link.name)}
            className={`text-gray-700 font-semibold text-xs sm:text-sm md:text-base py-1 px-1 sm:px-2 md:px-3 dark:text-white
              ${
                activeLink === link.name
                  ? "text-primary border-b-4 border-b-secondary dark:text-primary"
                  : "hover:text-primary transition-all duration-300 hover:border-b-4 hover:border-b-secondary"
              }
              ${
                link.name === "Courses"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded px-2 py-1"
                  : ""
              }
              ${
                link.name === "Categories"
                  ? "text-primary"
                  : ""
              }
            `}
          >
            {link.name}
          </Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
