import React from "react";
import {
  FiTarget,
  FiCode,
  FiBook,
  FiBriefcase,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? "bg-cyan-500" : "bg-blue-500"
            }`}
          ></div>
          <p
            className={`mt-6 text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A dedicated full-stack developer focused on building efficient web
            applications using modern JavaScript technologies, with strong
            emphasis on clean code and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story & Background */}
          <div className="space-y-8">
            {/* Professional Intro Card */}
            <div
              className={`p-6 rounded-xl shadow-lg animate-fadeInUp ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    darkMode ? "bg-cyan-900/30" : "bg-cyan-50"
                  }`}
                >
                  <FiBook
                    className={`text-xl ${
                      darkMode ? "text-cyan-400" : "text-cyan-600"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  My Journey
                </h3>
              </div>

              <div
                className={`space-y-4 text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p>
                  I am a{" "}
                  <span className="font-semibold text-cyan-500">
                    self-taught developer
                  </span>
                  , who started my journey with the fundamentals of web
                  development. I began with HTML, CSS, and JavaScript, focusing
                  on core concepts and logic building.
                </p>

                <p>
                  After that, I learned React and built multiple frontend
                  projects, working on component-based architecture, state
                  management, and responsive UI. Gradually, I moved towards the
                  backend and developed complete full-stack applications using
                  Node.js, Express, and MongoDB.
                </p>

                <p>
                  My projects have always focused on solving real-world
                  problems, where I implemented practical concepts such as
                  authentication, APIs, database integration, and deployment.
                </p>

                <p>
                  Currently, I am strengthening my skills with{" "}
                  <span className="font-semibold">Next.js</span> modern
                  deployment practices to build production-ready applications.
                </p>

                <p
                  className={`p-4 rounded-lg ${
                    darkMode
                      ? "bg-gray-900/50 border-l-4 border-cyan-500"
                      : "bg-blue-50 border-l-4 border-blue-500"
                  }`}
                >
                  <FiTarget className="inline mr-2 text-cyan-500" />
                  <span className="font-medium">Current Goal:</span> Seeking a
                  <span className="font-semibold text-cyan-500">
                    {" "}
                    junior full-stack developer role or internship
                  </span>{" "}
                  where I can work on real-world projects, learn from
                  experienced developers, and accelerate my professional growth.
                </p>
              </div>
            </div>

            {/* Education */}
            <div
              className={`p-6 rounded-xl animate-fadeInUp animation-delay-200 ${
                darkMode ? "bg-gray-800/50" : "bg-gray-50"
              }`}
            >
              <h4
                className={`text-lg font-semibold mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <FiBriefcase className="inline mr-2 text-cyan-500" />
                Education
              </h4>
              <div
                className={`space-y-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <p>• 12th Pass</p>
                <p>
                  • Currently pursuing practical experience through project
                  development
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Strengths */}
          <div className="space-y-8">
            {/* Strengths Header */}
            <div className="text-center animate-fadeInUp animation-delay-400">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Core <span className="text-cyan-500">Strengths</span>
              </h3>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Focused on delivering quality through proven capabilities
              </p>
            </div>

            {/* Strengths Cards */}
            <div className="space-y-6">
              {/* Problem Solving */}
              <div
                className={`p-6 rounded-xl transition-all transform hover:-translate-y-1 animate-fadeInUp ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
                style={{ animationDelay: "200ms" }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-full ${
                      darkMode ? "bg-cyan-900/30" : "bg-cyan-100"
                    }`}
                  >
                    <FiTrendingUp
                      className={`text-xl ${
                        darkMode ? "text-cyan-400" : "text-cyan-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-semibold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Problem Solving
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                      Strong problem-solving mindset with hands-on experience in
                      breaking down real-world problems into practical
                      solutions. Experienced in debugging full-stack
                      applications, fixing API and logic issues, optimizing
                      frontend flows, and building features from scratch through
                      self-driven learning and projects.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-900 text-cyan-300"
                            : "bg-cyan-100 text-cyan-700"
                        }`}
                      >
                        Logical Thinking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Code */}
              <div
                className={`p-6 rounded-xl transition-all transform hover:-translate-y-1 animate-fadeInUp ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
                style={{ animationDelay: "400ms" }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-full ${
                      darkMode ? "bg-green-900/30" : "bg-green-100"
                    }`}
                  >
                    <FiCheckCircle
                      className={`text-xl ${
                        darkMode ? "text-green-400" : "text-green-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-semibold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Clean Code & Best Practices
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                      Focused on writing clean and readable code with consistent
                      structure. Actively improving my understanding of best
                      practices, component reusability, and maintainable
                      application design through real projects and continuous
                      learning.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-900 text-green-300"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        Proper Folder Structure
                      </span>
                      <span
                        className={`px-3 py 1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-900 text-green-300"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        Reusable Components
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-900 text-green-300"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        Code Readability
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Projects */}
              <div
                className={`p-6 rounded-xl transition-all transform hover:-translate-y-1 animate-fadeInUp ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
                style={{ animationDelay: "600ms" }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-full ${
                      darkMode ? "bg-blue-900/30" : "bg-blue-100"
                    }`}
                  >
                    <FiCode
                      className={`text-xl ${
                        darkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h4
                      className={`text-xl font-semibold mb-2 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Real Project Experience
                    </h4>
                    <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                      Built 2 full-stack projects and several frontend
                      applications involving frontend, backend, and database
                      integration. Worked on complete application flows
                      including authentication, APIs, dashboards, and
                      user-facing features to solve real-world problems.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-900 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        Full-Stack Apps
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-900 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        REST API Development
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? "bg-gray-900 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        Deployment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div
          className={`mt-16 text-center max-w-3xl mx-auto p-8 rounded-xl animate-fadeInUp ${
            darkMode ? "bg-gray-800/50" : "bg-linear-to-r from-gray-50 to-white"
          }`}
        >
          <FiTarget
            className={`text-3xl mx-auto mb-4 ${
              darkMode ? "text-cyan-400" : "text-cyan-500"
            }`}
          />
          <h3
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Professional Approach
          </h3>
          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I approach development with consistency and a strong focus on
            learning by building. Each project helps me improve my
            problem-solving skills, code quality, and understanding of
            real-world application development. I’m motivated to contribute,
            learn from experienced developers, and grow in a professional
            environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
