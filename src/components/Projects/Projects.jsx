import React from "react";
import "../styles/projects.css";

const webProjects = [
  {
    id: 1,
    images: "",
    title: "",
    description: "",
  },
];

const mobileApps = [
  {
    id: 1,
    images: "",
    title: "",
    description: "",
  },
];

export default function Projects() {
  const renderProjects = (projects) =>
    projects.map((project) => (
      <div
        key={project.id}
        className="border rounded-lg p-6 w-full max-w-md text-center shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    ));

  return (
    <div className="projectContainer text-black dark:text-white">
      <section className="w-full">
        <h1 className="projectTitle">Web Projects</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {renderProjects(webProjects)}
        </div>
      </section>
      <section className="w-full">
        <h1 className="projectTitle">
          Mobile Applications
        </h1>
        <div className="projectGrid">
          {renderProjects(mobileApps)}
        </div>
      </section>
    </div>
  );
}
