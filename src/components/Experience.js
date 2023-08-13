import React from 'react';
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/JavaScript-logo.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import eslint from "../assets/images/ESLint.png";
import webpack from "../assets/images/Webpack.png";
import react from "../assets/images/react.png";
import node from "../assets/images/590px-Node.js_logo.svg.png";
import github from "../assets/images/Git_icon.svg.png";
import express from "../assets/images/express.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      name: "HTML",
      image: html,
      shadow: "shadow-orange-700"
    },
    {
      id: 2,
      name: "CSS",
      image: css,
      shadow: "shadow-blue-700"
    },
    {
      id: 3,
      name: "JavaScript",
      image: javascript,
      shadow: "shadow-yellow-700"
    },
    {
      id: 4,
      name: "Bootstrap",
      image: bootstrap,
      shadow: "shadow-purple-700"
    },
    {
      id: 5,
      name: "Tailwind",
      image: tailwind,
      shadow: "shadow-emerald-700"
    },
    {
      id: 6,
      name: "ESLint",
      image: eslint,
      shadow: "shadow-purple-700"
    },
    {
      id: 7,
      name: "Webpack",
      image: webpack,
      shadow: "shadow-gray-100"
    },
    {
      id: 8,
      name: "React",
      image: react,
      shadow: "shadow-cyan-700"
    },
    {
      id: 9,
      name: "Node.js",
      image: node,
      shadow: "shadow-green-700"
    },
    {
      id: 10,
      name: "GitHub",
      image: github,
      shadow: "shadow-gray-100"
    },
    {
      id: 11,
      name: "Express.js",
      image: express,
      shadow: "shadow-gray-700"
    },
  ];

  return (
    <div name="Experience" className="bg-gradient-to-b from-slate-500 to-black w-full min-h-screen pt-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="border-4 border-emerald-400 rounded-xl p-2">
          <div className="py-4 text-center  rounded-md">
            <p className="text-white">Technologies I've worked with</p>
          </div>
        </div>
  
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center py-8 px-6 md:px-0">
          {technologies.map((tech) => (
            <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.shadow}`}>
              <img src={tech.image} alt={tech.name} className="w-16 h-16 mx-auto object-cover" />
              <p className="pt-4">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Experience;
