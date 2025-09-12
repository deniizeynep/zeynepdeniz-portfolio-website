/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import RootLayout from "../Layout";
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <RootLayout>
      <div className="w-full top-0 left-0 font-[Poppins]">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="font-500 text-4xl flex items-center text-black dark:text-white duration-500 ml-10">
            Zeynep Deniz
          </div>
          {isMobile ? (
            <div
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden duration-300"
              onClick={() => setIsOpen(true)}
            >
              <FaBars className="text-black dark:text-white mt-4" />
            </div>
          ) : (
            <ul className="md:flex md:items-center absolute md:static md:z-auto z-[-1] md:w-auto transition-all duration-500 ease-in">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="text-3xl md:my-15 my-10 md:mr-16"
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-slate-400 dark:text-slate-500"
                        : "text-black dark:text-white hover:text-slate-400 dark:hover:text-slate-500 duration-500"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="main-content p-4">
          <Outlet />
        </div>

        {isOpen && isMobile && (
          <div
            className="fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white dark:bg-gray-800 p-8 w-80 h-full transform transition-transform duration-300 translate-x-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <FaTimes className="text-black dark:text-white text-3xl hover:text-inherit" />
              </div>
              <ul className="flex flex-col items-start space-y-4 mt-8 text-3xl">
                {Links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        isActive
                          ? "text-slate-400 dark:text-slate-500"
                          : "text-black dark:text-white hover:text-slate-400 dark:hover:text-slate-500 duration-500"
                      }
                      onClick={closeModal}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  );
}
