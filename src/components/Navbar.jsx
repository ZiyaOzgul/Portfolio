import React, { useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  return (
    <nav
      className={`${styles.paddingX} w-full bg-primary py-5 fixed top-0 z-20 opacity-80`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 hover:scale-x-110 duration-500 ease-in-out"
        >
          <img src={logo} alt="" className="w-14 h-9 object-contain" />
          <p className="text-white px-1 text-[18px] font-bold cursor-pointer ">
            Ziya
          </p>
          <span className=" border-l-2 borer-l-white px-1 sm:block hidden">
            React Developer
          </span>
        </Link>
        <div className="hidden  sm:flex items-center justify-evenly space-x-4 ">
          {navLinks.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              className="cursor-pointer text-lg font-light text-white hover:text-violet-600 duration-500 ease-in-out"
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* <div className="flex sm:hidden fixed right-2 top-4 items-center justify-start flex-col space-y-2">
          {navLinks.map((item) => (
            <p key={item.id} className="">
              {item.title}
            </p>
          ))}
        </div> */}
        <div className="sm:hidden">
          <img
            src={toggle ? menu : close}
            alt="menu"
            className=" w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } absolute right-5 top-15 flex-col items-center justify-start space-y-2 rounded-lg bg-gradient-to-br from-slate-800 to-gray-800 `}
          >
            {navLinks.map((item) => (
              <a href={`#${item.id}`} key={item.id} className="px-2 py-1">
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
