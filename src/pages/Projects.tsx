import React from "react";
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiStar,
  FiDatabase,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: { name: string; icon: React.ReactNode; color: string }[];
  features: string[];
  liveLink: string;
  githubLink: string;
  category: "main" | "mini";
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects: Project[] = [
    // MAIN PROJECT 1 - Day To Day Service Provider
    {
      id: 1,
      title: "Day To Day Service Provider",
      description:
        "A reliable platform connecting customers with trusted local service providers like carpenters, plumbers, and electricians for everyday home tasks.",
      problem:
        "In today's fast-paced life, people often struggle to find reliable carpenters, plumbers, electricians, and other home service providers. Many providers deliver subpar work, charge exorbitant fees, arrive late, or lack transparency in pricing and quality. This leads to frustration, wasted time, and unnecessary expenses for homeowners who need quick, affordable, and high-quality services without the hassle of unreliable recommendations or overcharging.",
      solution:
        "To address these issues, I built 'Day To Day Service Provider' — a user-friendly web platform that empowers customers to easily search and connect with verified local service providers based on their specific needs (e.g., plumbing repairs, electrical wiring, or carpentry work). Providers get a dedicated dashboard to manage jobs, while customers can create custom requests. The platform ensures fair pricing, quality assurance through reviews, and a seamless experience for both sides. Currently, it includes a fake coin system for transactions, which can be upgraded to real payments in the future.",
      techStack: [
        { name: "React", icon: <SiReact />, color: "text-cyan-400" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
      ],
      features: [
        "Admin Panel: For managing users, verifying providers, monitoring platform activity, and handling disputes.",
        "Find Provider: Search tool for customers to filter providers by service type (e.g., carpenter, plumber) price, ratings, and availability.",
        "Provider Dashboard: Providers can view job requests, update profiles, manage schedules, track earnings, and communicate with customers.",
        "User Authentication: Secure login/signup system with email verification, and role-based access (customer vs provider).",
        "Request Creation: Customers can post detailed service requests, including descriptions, timelines, budgets, and attachments, which providers can bid on or accept.",
        "Coin System: A virtual currency system (currently simulated with fake coins) for transactions between customers and providers — customers buy coins to book services, providers earn them for completed jobs. (Can integrate real payments like UPI or Stripe later.)",
      ],
      liveLink: "https://day-to-day-frontend.vercel.app/",
      githubLink: "https://github.com/vishal-coding02/day-to-day-frontend",
      category: "main",
    },

    // MAIN PROJECT 2 - Chat App (No problem/solution)
    {
      id: 2,
      title: "Chat Application",
      description:
        "A feature-rich real-time messaging platform with one-to-one chat, online status, typing indicators, and message requests.",
      problem: "",
      solution: "",
      techStack: [
        { name: "React", icon: <SiReact />, color: "text-cyan-400" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
        { name: "WebSocket", icon: <SiSocketdotio />, color: "text-gray-700" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-400" },
      ],
      features: [
        "User Authentication with secure login/signup and email verification",
        "One-to-One Chat with real-time message delivery",
        "Online/Offline Status indicators for users",
        "Typing Indicator showing when someone is typing",
        "Create Chat functionality to start new conversations",
        "Message Requests for privacy control (accept/decline messages)",
        "Basic Profile Info with avatars and status updates",
        "Fully Responsive design for mobile, tablet, and desktop",
      ],
      liveLink: "https://chat-app-frontend-mauve-pi.vercel.app/",
      githubLink: "https://github.com/vishal-coding02/chatApp-frontend",
      category: "main",
    },

    // MINI PROJECT 1 - Weather Dashboard
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts",
      problem:
        "Users need quick access to accurate weather information with an intuitive interface and multiple location support.",
      solution:
        "Created a responsive weather app that fetches real-time data from OpenWeather API with 5-day forecasts and location search.",
      techStack: [
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "text-yellow-400",
        },
        { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "API", icon: <FiDatabase />, color: "text-purple-500" },
      ],
      features: [
        "Real-time weather data for any city",
        "5-day forecast display",
        "Temperature unit conversion (Celsius/Fahrenheit)",
        "Location search with auto-complete",
        "Responsive design for all devices",
        "Weather condition icons",
      ],
      liveLink: "https://weather-app-ten-ashy-34.vercel.app/",
      githubLink: "https://github.com/vishal-coding02/Weather-App",
      category: "mini",
    },

    // MINI PROJECT 2 - Alarm Clock App
    {
      id: 4,
      title: "Alarm Clock App",
      description:
        "A simple digital clock application with alarm functionality built using pure JavaScript.",
      problem:
        "Users need a lightweight and easy-to-use clock application to view current time and set alarms without installing heavy applications.",
      solution:
        "Developed a digital clock with real-time updates, alarm setting, alarm stop functionality, and a clean user interface using HTML, CSS, and JavaScript.",
      techStack: [
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "text-yellow-400",
        },
        { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
      ],
      features: [
        "Real-time digital clock display",
        "Set alarm with custom time",
        "Alarm sound notification",
        "Start and stop alarm functionality",
        "Simple and responsive UI",
        "Lightweight and fast performance",
      ],
      liveLink: "https://clock-nine-rho.vercel.app/",
      githubLink: "https://github.com/vishal-coding02/Clock",
      category: "mini",
    },
  ];

  const getCategoryColor = (category: Project["category"]) => {
    switch (category) {
      case "main":
        return darkMode
          ? "bg-cyan-900/30 text-cyan-400"
          : "bg-cyan-100 text-cyan-700";
      case "mini":
        return darkMode
          ? "bg-purple-900/30 text-purple-400"
          : "bg-purple-100 text-purple-700";
    }
  };

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div
      className={`group rounded-xl overflow-hidden transition-all transform hover:-translate-y-1 ${
        darkMode
          ? "bg-gray-800 hover:bg-gray-700"
          : "bg-white hover:bg-gray-50 shadow-md hover:shadow-lg"
      }`}
    >
      {/* Project Header - LARGER TEXT */}
      <div className="p-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <h3
              className={`text-2xl font-bold mb-3 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`text-base leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.description}
            </p>
          </div>
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${getCategoryColor(
              project.category,
            )}`}
          >
            {project.category.charAt(0).toUpperCase() +
              project.category.slice(1)}
          </span>
        </div>

        {/* Problem & Solution - Only for Day To Day project - LARGER TEXT */}
        {project.id === 1 && (
          <div className="space-y-4 mb-6">
            <div>
              <h4
                className={`text-base font-semibold mb-2 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <span className="text-red-500">Problem:</span>
              </h4>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {project.problem}
              </p>
            </div>
            <div>
              <h4
                className={`text-base font-semibold mb-2 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <span className="text-green-500">Solution:</span>
              </h4>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {project.solution}
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack - LARGER TEXT */}
        <div className="mb-6">
          <h4
            className={`text-base font-semibold mb-3 flex items-center gap-2 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <FiCode size={18} />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                <span className={`text-base ${tech.color}`}>{tech.icon}</span>
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features & Buttons - LARGER TEXT */}
      <div className="p-8">
        {/* Features List */}
        <div className="mb-6">
          <h4
            className={`text-base font-semibold mb-3 flex items-center gap-2 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <FiStar size={18} />
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span
                  className={`mt-1 ${
                    darkMode ? "text-green-400" : "text-green-500"
                  }`}
                >
                  <FiStar size={14} />
                </span>
                <span
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              project.liveLink === "#"
                ? "cursor-not-allowed opacity-50"
                : "hover:-translate-y-0.5"
            } ${
              darkMode
                ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                : "bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            }`}
            onClick={(e) => project.liveLink === "#" && e.preventDefault()}
          >
            <FiExternalLink size={14} />
            Live Demo
            {project.liveLink !== "#" && (
              <span className="group-hover/btn:translate-x-0.5 transition-transform">
                →
              </span>
            )}
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all border ${
              project.githubLink === "#"
                ? "cursor-not-allowed opacity-50"
                : "hover:-translate-y-0.5"
            } ${
              darkMode
                ? "border-gray-600 hover:bg-gray-700 text-gray-300 hover:text-white"
                : "border-gray-300 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
            }`}
            onClick={(e) => project.githubLink === "#" && e.preventDefault()}
          >
            <FiGithub size={14} />
            View Code
          </a>
        </div>
      </div>
    </div>
  );

  // Separate main and mini projects
  const mainProjects = projects.filter(
    (project) => project.category === "main",
  );
  const miniProjects = projects.filter(
    (project) => project.category === "mini",
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - LARGER TEXT */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured <span className="text-cyan-500">Projects</span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? "bg-cyan-500" : "bg-blue-500"
            }`}
          ></div>
          <p
            className={`mt-6 text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Showcasing practical applications of my skills through real-world
            projects with complete functionality
          </p>
        </div>

        {/* Main Projects Section - Grid layout (2 columns side by side) */}
        <div className="mb-16">
          <h3
            className={`text-3xl font-bold mb-8 flex items-center gap-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <FiStar className="text-cyan-500" />
            Main Projects
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {mainProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fadeInUp"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Mini Projects Section - Grid layout */}
        <div>
          <h3
            className={`text-3xl font-bold mb-8 flex items-center gap-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <FiCode className="text-purple-500" />
            Mini Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fadeInUp"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Project Statistics - LARGER TEXT */}
        <div
          className={`rounded-xl p-8 mt-16 mb-12 ${
            darkMode ? "bg-gray-800" : "bg-linear-to-r from-cyan-50 to-blue-50"
          }`}
        >
          <h3
            className={`text-3xl font-bold mb-6 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Project Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className={`text-center p-4 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                {projects.length}
              </div>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Total Projects
              </p>
            </div>

            <div
              className={`text-center p-4 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                {mainProjects.length}
              </div>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full-Stack Apps
              </p>
            </div>

            <div
              className={`text-center p-4 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {miniProjects.length}
              </div>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Mini Projects
              </p>
            </div>

            <div
              className={`text-center p-4 rounded-lg ${
                darkMode ? "bg-gray-900" : "bg-white shadow-sm"
              }`}
            >
              <div
                className={`text-4xl font-bold mb-2 ${
                  darkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                12+
              </div>
              <p
                className={`text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Technologies Used
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action - LARGER TEXT */}
        <div className="text-center mt-16">
          <p
            className={`text-xl mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Interested in seeing more projects or collaborating?
          </p>
          <a
            href="https://github.com/vishal-coding02"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                : "bg-gray-900 hover:bg-gray-800 text-white"
            }`}
          >
            <FiGithub size={20} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
