/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import RootLayout from "../Layout";
import { Outlet } from "react-router-dom";

export default function Nav() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div>
      <div className=" w-full top-0 left-0  bg-white dark:bg-slate-900 duration-500">
        <div className="md:flex items-center justify-between   py-4 md:px-10 px-7">
          <div
            className="font-bold text-4xl flex items-center font-[Poppins]
          text-black dark:text-white duration-500  "
          >
            Zeynep Deniz
          </div>
          <ul
            className={`md:flex md:items-center  md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-20 pl-9 md:ml-20 ml-9 transition-all duration-500 ease-in `}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-10 text-3xl md:my-15 my-7 ">
                <a
                  href={link.link}
                  className="text-black dark:text-white hover:text-slate-400 dark:hover:text-slate-500 duration-500 "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <RootLayout />
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
