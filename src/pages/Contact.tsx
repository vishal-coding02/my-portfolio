import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const socialLinks = [
    {
      platform: "GitHub",
      icon: <SiGithub />,
      link: "https://github.com/vishal-coding02/",
      color: darkMode
        ? "text-gray-300 hover:text-white"
        : "text-gray-700 hover:text-gray-900",
      bgColor: darkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-gray-100 hover:bg-gray-200",
    },
    {
      platform: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/vishal-shrivastava-003731326/",
      color: darkMode
        ? "text-blue-400 hover:text-blue-300"
        : "text-blue-600 hover:text-blue-700",
      bgColor: darkMode
        ? "bg-gray-800 hover:bg-gray-700"
        : "bg-blue-50 hover:bg-blue-100",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get In <span className="text-cyan-500">Touch</span>
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
            Feel free to reach out for opportunities, collaborations, or
            questions.
          </p>
        </div>

        {/* Centered Content Container */}
        <div className="max-w-2xl mx-auto">
          {/* Social Links Card */}
          <div
            className={`p-8 rounded-xl mb-8 animate-fadeInUp ${
              darkMode ? "bg-gray-800" : "bg-white shadow-lg"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-8 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Connect With Me
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-xl transition-all transform hover:-translate-y-1 flex flex-col items-center justify-center space-y-3 ${social.bgColor}`}
                >
                  <div className={`text-4xl ${social.color}`}>
                    {social.icon}
                  </div>
                  <span className={`font-semibold text-lg ${social.color}`}>
                    {social.platform}
                  </span>
                </a>
              ))}
            </div>

            {/* Email Direct Link - Centered */}
            <div className="text-center">
              <a
                href="mailto:vshrivastav933@gmail.com"
                className={`inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg transition-all transform hover:-translate-y-0.5 ${
                  darkMode
                    ? "bg-gray-900 hover:bg-gray-700 text-red-400 hover:text-red-300 border border-gray-700"
                    : "bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 border border-red-200"
                }`}
              >
                <SiGmail className="text-2xl" />
                <span className="font-semibold text-lg">Send Direct Email</span>
              </a>
            </div>
          </div>

          {/* Quick Information Card */}
          <div
            className={`p-8 rounded-xl animate-fadeInUp animation-delay-200 ${
              darkMode
                ? "bg-gray-800/50"
                : "bg-liner-to-r from-cyan-50 to-blue-50"
            }`}
          >
            <h4
              className={`text-2xl font-bold mb-6 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiCheckCircle
                  className={`mt-1 shrink-0 ${
                    darkMode ? "text-green-400" : "text-green-500"
                  }`}
                />
                <p
                  className={`text-base ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Open to junior full-time roles and internships
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheckCircle
                  className={`mt-1 shrink-0 ${
                    darkMode ? "text-green-400" : "text-green-500"
                  }`}
                />
                <p
                  className={`text-base ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Available for remote or on-site opportunities
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <FiCheckCircle
                  className={`mt-1 shrink-0 ${
                    darkMode ? "text-green-400" : "text-green-500"
                  }`}
                />
                <p
                  className={`text-base ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Focused on MERN / full-stack development
                </p>
              </div>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div
            className={`mt-8 p-6 rounded-lg text-center ${
              darkMode ? "bg-gray-800/30" : "bg-gray-100"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              📧 Email: vshrivastav933@gmail.com
            </p>
            <p
              className={`text-sm mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              💬 Typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
