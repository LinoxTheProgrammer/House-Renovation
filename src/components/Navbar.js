import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo/LogoTwo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full top-0 z-[2]  border-b-blue-500 border bg-gray-100">
      <nav className="grey mx-auto   w-[92%] flex justify-between items-center text-black ">
        <div className="self-center">
          <NavLink to="/">
            <img
              className="w-16 bg-transparent rounded-md cursor-pointer "
              alt="logo"
              src={Logo}
            />
          </NavLink>
        </div>
        <div className="md:flex hidden nav-links duration-500 md:static md:z-0  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full  items-center px-5 ">
          <ul className="flex md:flex-row  text-white md:text-black mt-[-15rem] md:mt-[0rem] flex-col md:items-center md:gap-[4vw] gab-8">
            <li>
              <NavLink className="link  font-poppins" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink className="link font-poppins" to="/about">
                ABOUT US
              </NavLink>
            </li>
            <li data-to-scrollspy-id="services">
              <NavLink className="link font-poppins" to="/result">
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink className="link font-poppins  " to="/projects">
                PROJECTS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 ">
          <button className="text-white px-5 border p-2 rounded-full font-poppins border-blue-300 bg-blue-300  hover:bg-blue-500 hover:border-blue-500 active:bg-blue-700 active:border-blue-800 duration-500">
            Sign In
          </button>
          <div className="text-center align-center flex  text-[1.5rem] md:hidden text-black cursor-pointer">
            <ion-icon
               name={isMenuOpen ? "close-outline" : "menu-outline"}
              className="text-3xl md:hidden cursor-pointer "
              onClick={onToggleMenu}
            ></ion-icon>
          </div>
        </div>
        <div
          className={`absolute text-black z-[2] list-style-none xl:hidden top-20 mt-[-1rem] left-0 w-full bg-gray-100 flex  flex-col items-center gap-6 font-semibold  text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
            <li className="list-none z-[2]">
              <NavLink className="link  font-poppins" to="/">
                HOME
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink className="link font-poppins" to="/about">
                ABOUT US
              </NavLink>
            </li>
            <li data-to-scrollspy-id="services" className="list-none">
              <NavLink className="link font-poppins" to="/result">
                SERVICES
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink className="link font-poppins  " to="/projects">
                PROJECTS
              </NavLink>
            </li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


