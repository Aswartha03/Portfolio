import { motion } from 'framer-motion';
import { 
  SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiNodedotjs,
 SiGithub
} from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillIcons = {
    'JavaScript': SiJavascript,
    'Python': SiPython,
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'React.js': SiReact,
    'Node.js': SiNodedotjs,
    'GitHub': SiGithub,
    'MS Office': FaMicrosoft,
    'Data Structures & Algorithms': HiCode
  };

  const skillCategories = [
    { title: 'Programming Languages', skills: skills.programming, color: 'primary' },
    { title: 'Web Technologies', skills: skills.web, color: 'secondary' },
    { title: 'Tools & Technologies', skills: skills.tools, color: 'accent' },
    { title: 'Core Concepts', skills: skills.other, color: 'primary' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400',
      secondary: 'bg-secondary-50 dark:bg-secondary-900/20 border-secondary-200 dark:border-secondary-800 text-secondary-600 dark:text-secondary-400',
      accent: 'bg-accent-50 dark:bg-accent-900/20 border-accent-200 dark:border-accent-800 text-accent-600 dark:text-accent-400'
    };
    return colors[color];
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card h-full"
            >
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-full mb-4 ${getColorClasses(category.color)}`}>
                  <HiCode className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skillIcons[skill] || HiCode;
                  
                  return (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${getColorClasses(category.color)}`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{skill}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;