import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiMail, HiHeart } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personal, social } = portfolioData;

  const socialLinks = [
    { icon: SiLinkedin, href: social.linkedin, color: "hover:text-blue-600" },
    {
      icon: SiGithub,
      href: social.github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: HiMail,
      href: `mailto:${social.email}`,
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">{personal.name}</h3>
            <p className="text-gray-400">{personal.title}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center">
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <HiHeart className="text-red-500 w-4 h-4" /> by Aswartha
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
