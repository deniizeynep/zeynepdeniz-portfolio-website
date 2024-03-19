import { useEffect, useState } from "react";
import React from "react";

import "../output.css";
import "../input.css";

import Moon from "./_icons/Moon.jsx";
import Sun from "./_icons/Sun.jsx";

export default function RootLayout() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="">
        <button
          className="w-16 h-16 bottom-8 right-10 p-4 rounded-3xl  "
          onClick={toggleTheme}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>
    </div>
  );
}
