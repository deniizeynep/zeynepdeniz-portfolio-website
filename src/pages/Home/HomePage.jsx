/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Home from "../../components/Home/Home";

export default function Homepage() {
  return (
    <>
      <Home
        className={({ isActive }) =>
          isActive
            ? "text-slate-400 dark:text-slate-500"
            : "text-black dark:text-white hover:text-slate-400 dark:hover:text-slate-500 duration-500"
        }
      />
    </>
  );
}
