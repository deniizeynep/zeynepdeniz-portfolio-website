import React from "react";
import "../styles/home.css";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ZeynepDenizResume.pdf"; 
    link.setAttribute("download", "ZeynepDenizCV.pdf"); 
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="homeWrapper text-black dark:text-white">
      <div
        className="profilePhoto"
        style={{
          backgroundImage:
            "url('https://avatars.githubusercontent.com/u/109898313?v=4')",
        }}
      ></div>
      <div className="homeContainer ">
        <h1 className="homeTitle">Hi! I'm Zeynep Deniz,</h1>
        <div className="job">Frontend Developer from Turkey</div>
        <div className="description">
          I have been interested in web technologies for 2 years. I use mostly
          JavaScript and frameworks Node.js, React and React Native. I focus on
          creating simple, user-friendly interfaces and enjoy developing my
          skills step by step. I like working with others and aim to build
          useful digital solutions while growing in this field.
        </div>
        <button
          onClick={handleDownload}
          className="resumeBtn text-white dark:text-black bg-[#111827] dark:bg-gray-200 hover:bg-gray-800 dark:hover:bg-gray-300 duration-500"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
