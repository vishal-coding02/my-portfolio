import React from 'react';
// import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  // const socialLinks = [
  //   { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com' },
  //   { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com' },
  //   { icon: <FiTwitter />, label: 'Twitter', href: 'https://twitter.com' },
  //   { icon: <FiMail />, label: 'Email', href: 'mailto:hello@example.com' },
  // ];

  return (
    <footer className={`py-8 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Copyright */}
          <div className={`mb-4 md:mb-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <p className={`text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Built with React, TypeScript & Tailwind CSS • Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;