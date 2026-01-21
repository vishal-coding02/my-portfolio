import React from "react";
import {
  FiDownload,
  FiEye,
  FiCode,
  FiServer,
  FiDatabase,
} from "react-icons/fi";
import { DiReact, DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  const techStack = [
    { icon: <DiReact size={40} />, name: "React", color: "text-cyan-400" },
    {
      icon: <DiJavascript1 size={40} />,
      name: "JavaScript",
      color: "text-yellow-400",
    },
    { icon: <DiNodejs size={40} />, name: "Node.js", color: "text-green-500" },
    { icon: <DiMongodb size={40} />, name: "MongoDB", color: "text-green-400" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Name and Role */}
            <div className="space-y-4 animate-fadeInUp">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Vishal Shrivastava
              </h1>
              <div className="flex items-center space-x-4">
                <span
                  className={`text-xl sm:text-2xl font-semibold ${
                    darkMode ? "text-cyan-400" : "text-blue-600"
                  }`}
                >
                  Junior MERN Stack Developer
                </span>
                <div
                  className={`w-16 h-1 rounded-full ${
                    darkMode ? "bg-cyan-500" : "bg-blue-500"
                  }`}
                ></div>
              </div>
            </div>

            {/* Strong Line */}
            <div className="animate-fadeInUp animation-delay-200">
              <div
                className={`inline-flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-blue-50"
                }`}
              >
                <FiCode
                  className={`${darkMode ? "text-cyan-400" : "text-blue-500"}`}
                />
                <p
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  I build full-stack web applications using MongoDB, Express,
                  React, and Node.js.
                </p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-400">
              <a
                href="#projects"
                className={`group inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <FiEye className="mr-2" />
                View Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <a
                href="/resume.pdf"
                download
                className={`group inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all transform hover:-translate-y-1 border-2 ${
                  darkMode
                    ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                    : "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <FiDownload className="mr-2" />
                Download Resume
              </a>
            </div>

            {/* Short Intro */}
            <div
              className={`max-w-xl animate-fadeInUp animation-delay-600 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <p className="text-lg leading-relaxed">
                Passionate junior MERN stack developer building full-stack web
                applications with React, Node.js, Express.js, and MongoDB,
                following clean code and best practices.
              </p>
            </div>
          </div>

          {/* Right Column - Tech Stack & Visual Elements */}
          <div className="relative">
            {/* Tech Stack Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group flex flex-col items-center p-6 rounded-xl transition-all transform hover:-translate-y-2 animate-fadeInUp ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`mb-3 transform group-hover:scale-110 transition-transform ${tech.color}`}
                  >
                    {tech.icon}
                  </div>
                  <span
                    className={`font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating Elements (Decoration) */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 opacity-20 animate-float blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-linear-to-r from-purple-500 to-pink-500 opacity-20 animate-float blur-xl animation-delay-2000"></div>

            {/* Stats Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FiServer
                    className={darkMode ? "text-cyan-400" : "text-blue-500"}
                  />
                  <div>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Backend
                    </p>
                    <p
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Node.js
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FiDatabase
                    className={darkMode ? "text-green-400" : "text-green-500"}
                  />
                  <div>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Database
                    </p>
                    <p
                      className={`text-xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
