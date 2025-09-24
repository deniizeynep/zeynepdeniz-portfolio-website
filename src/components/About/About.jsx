import React from "react";
import "../styles/about.css";
import CodeIcon from "../_icons/Code";
import TimeIcon from "../_icons/Time";
import HomeIcon from "../_icons/Home";
import EmailIcon from "../_icons/Email";
export default function About() {
  return (
    <div className="aboutContainer text-black dark:text-white duration-500">
      <div>
        <h1 className="aboutTitle">About Me</h1>
        <div className="propertiesContainer flex">
          <div className="ticketContainer">
            <span className="ticket">
              <CodeIcon /> Job
            </span>
            <span className="ticketDescription">Frontend Developer</span>
          </div>
          <div className="ticketContainer">
            <span className="ticket">
              <TimeIcon /> Age
            </span>
            <span className="ticketDescription">22</span>
          </div>
          <div className="ticketContainer">
            <span className="ticket">
              <HomeIcon /> Residence
            </span>
            <span className="ticketDescription">İzmir, Türkiye</span>
          </div>
          <div className="ticketContainer">
            <span className="ticket">
              <EmailIcon /> E-mail
            </span>
            <span className="ticketDescription ">dnzzeynep7@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="aboutTitle">Skills</h1>
        <div className="skillsWrapper flex">
          <div>
            <ul className="skillsTitle">Client Side</ul>
            <div className="skillsContainer">
              <li className="skills">HTML</li>
              <li className="skills">CSS</li>
              <li className="skills">JavaScript</li>
              <li className="skills">React</li>
              <li className="skills">Bootstrap</li>
              <li className="skills">React Native</li>
            </div>
          </div>
          <div>
            <ul className="skillsTitle">Server Side</ul>
            <div className="skillsContainer">
              <li className="skills">Node.js</li>
              <li className="skills">MongoDB</li>
              <li className="skills">MySQL</li>
            </div>
          </div>
          <div>
            <ul className="skillsTitle">Development & Operations</ul>
            <div className="skillsContainer">
              <li className="skills">GIT</li>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <div>
          <h1 className="aboutTitle">Experience</h1>
          <div className="mt-10">
            <div className="timePeriod">July 2023 - August 2023</div>

            <div className="company">Intern Frontend Developer - NovaDSA</div>
          </div>
        </div>
        <div>
          <h1 className="aboutTitle">Education</h1>
          <div className="mt-10">
            <div className="timePeriod">Oct 2022 - Jul 2024</div>
            <div className="company">
              Afyon Kocatepe University - Computer Programming
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
