import { HiDownload, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import aswarthImage from "../assets/aswarth.jpg";

const Hero = () => {
  const { personal } = portfolioData;
  const resumeUrl = "/AswarthaReddy_Resume.pdf";

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
    const tempLink = document.createElement("a");
    tempLink.href = resumeUrl;
    tempLink.download = "AswarthaReddy_Resume.pdf";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-max">
        {/* Use flex to control spacing precisely */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left max-w-lg"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Aswartha
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-semibold"
              >
                {personal.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {personal.intro}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <HiMail className="w-5 h-5" />
                Hire Me
              </button>
              <motion.a
                href={resumeUrl}
                download
                onClick={handleResumeClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <HiDownload className="w-5 h-5" />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src={aswarthImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-white font-bold text-sm">Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
