import React from "react";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiCheckCircle,
  FiBarChart2,
  FiGitBranch,
} from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills: Skill[] = [
    // Frontend
    {
      name: "HTML5",
      icon: <SiHtml5 />,
      category: "frontend",
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: <SiCss3 />,
      category: "frontend",
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      category: "frontend",
      color: "text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      category: "frontend",
      color: "text-blue-600",
    },
    {
      name: "React.js",
      icon: <SiReact />,
      category: "frontend",
      color: "text-cyan-400",
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      category: "frontend",
      color: "text-purple-500",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      category: "frontend",
      color: "text-teal-400",
    },

    // Backend
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      category: "backend",
      color: "text-green-500",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      category: "backend",
      color: "text-gray-600",
    },

    // Database
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "database",
      color: "text-green-600",
    },

    // Tools
    {
      name: "Git",
      icon: <SiGit />,
      category: "tools",
      color: "text-orange-600",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      category: "tools",
      color: "text-gray-800",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      category: "tools",
      color: "text-orange-500",
    },
  ];

  const getCategorySkills = (category: Skill["category"]) => {
    return skills.filter((skill) => skill.category === category);
  };

  const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div
      className={`p-4 rounded-xl transition-all transform hover:-translate-y-1 ${
        darkMode
          ? "bg-gray-800 hover:bg-gray-700"
          : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg"
      }`}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`p-3 rounded-lg ${
            darkMode ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          <div className={`text-2xl ${skill.color}`}>{skill.icon}</div>
        </div>
        <div>
          <h4
            className={`font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {skill.name}
          </h4>
          <p
            className={`text-xs mt-1 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Technical <span className="text-cyan-500">Skills</span>
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
            A comprehensive overview of my technical capabilities, from frontend
            development to backend systems and essential tools
          </p>
        </div>

        {/* Frontend Skills */}
        <div className="mb-16 animate-fadeInUp">
          <div className="flex items-center space-x-3 mb-8">
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-cyan-900/30" : "bg-cyan-100"
              }`}
            >
              <FiCode
                className={`text-2xl ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}
              />
            </div>
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Frontend Development
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {getCategorySkills("frontend").map((skill, index) => (
              <div
                key={skill.name}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fadeInUp"
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>

          <div
            className={`mt-6 p-4 rounded-lg ${
              darkMode ? "bg-gray-800/50" : "bg-blue-50"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <FiCheckCircle className="inline mr-2 text-green-500" />
              Building responsive UIs with modern frameworks, state management,
              and type-safe development
            </p>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-16 animate-fadeInUp animation-delay-200">
          <div className="flex items-center space-x-3 mb-8">
            <div
              className={`p-3 rounded-lg ${
                darkMode ? "bg-green-900/30" : "bg-green-100"
              }`}
            >
              <FiServer
                className={`text-2xl ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              />
            </div>
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Backend Development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getCategorySkills("backend").map((skill, index) => (
              <div
                key={skill.name}
                style={{ animationDelay: `${index * 150}ms` }}
                className="animate-fadeInUp"
              >
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>

          <div
            className={`mt-6 p-4 rounded-lg ${
              darkMode ? "bg-gray-800/50" : "bg-green-50"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <FiCheckCircle className="inline mr-2 text-green-500" />
              Creating RESTful APIs, handling server-side logic, and managing
              application architecture
            </p>
          </div>
        </div>

        {/* Database & Tools */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Database */}
          <div className="animate-fadeInUp animation-delay-400">
            <div className="flex items-center space-x-3 mb-8">
              <div
                className={`p-3 rounded-lg ${
                  darkMode ? "bg-purple-900/30" : "bg-purple-100"
                }`}
              >
                <FiDatabase
                  className={`text-2xl ${
                    darkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Database
              </h3>
            </div>

            <div className="space-y-4">
              {getCategorySkills("database").map((skill, index) => (
                <div
                  key={skill.name}
                  style={{ animationDelay: `${index * 200}ms` }}
                  className="animate-fadeInUp"
                >
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>

            <div
              className={`mt-6 p-4 rounded-lg ${
                darkMode ? "bg-gray-800/50" : "bg-purple-50"
              }`}
            >
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FiCheckCircle className="inline mr-2 text-green-500" />
                Working with NoSQL databases, data modeling, and database
                optimization
              </p>
            </div>
          </div>

          {/* Tools */}
          <div className="animate-fadeInUp animation-delay-600">
            <div className="flex items-center space-x-3 mb-8">
              <div
                className={`p-3 rounded-lg ${
                  darkMode ? "bg-orange-900/30" : "bg-orange-100"
                }`}
              >
                <FiTool
                  className={`text-2xl ${
                    darkMode ? "text-orange-400" : "text-orange-600"
                  }`}
                />
              </div>
              <h3
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Development Tools
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getCategorySkills("tools").map((skill, index) => (
                <div
                  key={skill.name}
                  style={{ animationDelay: `${index * 150}ms` }}
                  className="animate-fadeInUp"
                >
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>

            <div
              className={`mt-6 p-4 rounded-lg ${
                darkMode ? "bg-gray-800/50" : "bg-orange-50"
              }`}
            >
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <FiCheckCircle className="inline mr-2 text-green-500" />
                Version control, API testing, and development environment setup
              </p>
            </div>
          </div>
        </div>

        {/* Experience Level */}
        <div
          className={`mt-16 p-8 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-linear-to-r from-cyan-50 to-blue-50"
          }`}
        >
          <div className="flex items-center space-x-3 mb-4">
            <FiBarChart2
              className={`text-2xl ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
            />
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Experience Level
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-3 h-3 rounded-full bg-green-500`}></div>
                <h4
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Proficient
                </h4>
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                HTML, CSS, JavaScript,
              </p>
            </div>

            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-3 h-3 rounded-full bg-blue-500`}></div>
                <h4
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Comfortable
                </h4>
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                TypeScript, Node.js, React, Tailwind CSS, Express.js, MongoDB,
                Redux, Postman, Github
              </p>
            </div>

            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-3 h-3 rounded-full bg-yellow-500`}></div>
                <h4
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Learning
                </h4>
              </div>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Next.js
              </p>
            </div>
          </div>
        </div>

        {/* Development Workflow */}
        <div
          className={`mt-12 p-8 rounded-xl ${
            darkMode ? "bg-gray-800/50" : "bg-linear-to-r from-gray-50 to-white"
          }`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <FiGitBranch
              className={`text-2xl ${
                darkMode ? "text-orange-400" : "text-orange-600"
              }`}
            />
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Development Workflow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <h4
                className={`font-bold mb-3 ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                <FiCode className="inline mr-2" />
                Frontend Development
              </h4>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Building responsive and accessible user interfaces using modern
                frontend frameworks and clean component architecture
              </p>
            </div>

            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <h4
                className={`font-bold mb-3 ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                <FiServer className="inline mr-2" />
                Backend Development
              </h4>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Creating secure REST APIs, handling server-side logic, and
                managing scalable application architecture
              </p>
            </div>

            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <h4
                className={`font-bold mb-3 ${
                  darkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                <FiTool className="inline mr-2" />
                Development Tools
              </h4>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Version control with Git, API testing with Postman,
                collaborative development on GitHub, and modern development
                practices
              </p>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-12 p-6 rounded-lg text-center ${
            darkMode ? "bg-gray-800/30" : "bg-gray-100"
          }`}
        >
          <p
            className={`text-sm italic ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <FiCheckCircle className="inline mr-2 text-green-500" />
            Continuously learning and expanding my skill set to build efficient,
            scalable, and maintainable applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
