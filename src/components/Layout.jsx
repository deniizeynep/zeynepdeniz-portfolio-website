import { useEffect, useState } from "react";
import React from "react";

import "../output.css";
import "../input.css";

import Moon from "./_icons/Moon";
import Sun from "./_icons/Sun";

export default function RootLayout({ children }) {
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
      <div className="fixed bottom-8 right-10">
        <button className="w-16 h-16 p-4 rounded-3xl" onClick={toggleTheme}>
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>

      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-500">
        {children}
      </div>
    </div>
  );
}
