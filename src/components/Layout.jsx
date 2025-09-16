import { useEffect, useState } from "react";
import React from "react";

import "../output.css";
import "../input.css";

import Moon from "./_icons/Moon";
import Sun from "./_icons/Sun";
import Github from "./_icons/Github";
import Linkedln from "./_icons/Linkedln";

export default function Layout({ children, hideIconsOnMobile = false}) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="fixed bottom-8 right-10 flex items-center space-x-6">
        <div className={`${hideIconsOnMobile ? "flex" : "hidden md:flex"} space-x-4 text-black dark:text-white items-center`}>
          <a
            href="https://github.com/deniizeynep"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/zeynep-deniz-931938209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedln />
          </a>
        </div>
        <button
          className="w-5 h-16 p-2 flex items-center justify-center"
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>

      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
        {children}
      </div>
    </div>
  );
}
