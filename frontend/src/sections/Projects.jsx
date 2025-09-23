import { motion } from "framer-motion";
import { HiExternalLink, HiCode, HiStar } from "react-icons/hi";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcase of my recent work and personal projects that demonstrate my
            skills and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <HiExternalLink className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <HiCode className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <HiStar className="w-4 h-4" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 px-2 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 py-1.5 px-3 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center gap-1.5"
                  >
                    <HiCode className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
