import React from "react";
import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Zeynep Deniz Portfolio",
      description:
        "This project is my personal website. It was written in React.",
      image: "/images/ZeynepDenizPortfolio.png",
      demoUrl: "https://zeynepdeniz-portfolio-website.vercel.app/",
      githubRepo:
        "https://github.com/deniizeynep/zeynepdeniz-portfolio-website",
    },
    {
      name: "Login Screen App",
      description:
        "This project is a sample login screen mobile application. It was written with React Native and CSS.",
      image: "/images/LoginScreenApp.png",
      demoUrl: "",
      githubRepo: "https://github.com/deniizeynep/login-screen-app",
    },
    {
      name: "Inventory Ease App",
      description:
        "This application is designed to ensure stock control of grocery stores. This app was made using React Native and CSS.",
      image: "/images/InventoryEaseApp.png",
      demoUrl: "",
      githubRepo: "https://github.com/deniizeynep/inventory-ease-app",
    },
    {
      name: "Books Listing App",
      description:
        "This app lists the top 10 most read books in the world and provides information about them. It was made using React Native and CSS.",
      image: "/images/BooksListingApp.png",
      demoUrl: "",
      githubRepo:
        "https://github.com/deniizeynep/books-listing-app?tab=readme-ov-file",
    },
  ];
  return (
    <div className="projectsContainer text-black dark:text-white">
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <div className="projectCard">
            <img
              src={project.image}
              alt={project.name}
              className="projectImage"
            />
            <div className="projectContent">
              <h2 className="projectName">{project.name}</h2>
              <p className="projectDescription">{project.description}</p>
              <div className="projectButtons">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="btn bg-blue-500 hover:bg-blue-600 duration-500"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubRepo}
                  target="_blank"
                  className="btn bg-gray-500 hover:bg-gray-600 duration-500"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
