import { motion } from 'framer-motion';
import { HiAcademicCap, HiCalendar, HiBadgeCheck } from 'react-icons/hi';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education, internships, achievements, certificates } = portfolioData;

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey, professional experience, and notable achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
            >
              <HiAcademicCap className="text-primary-600" />
              Education
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                    <HiAcademicCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <HiCalendar className="w-4 h-4" />
                        {edu.duration}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Internships */}
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12"
            >
              <HiBadgeCheck className="text-secondary-600" />
              Internships
            </motion.h3>

            {internships.map((internship, index) => (
              <motion.div 
                key={internship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary-600 to-accent-600 rounded-full flex items-center justify-center">
                    <HiBadgeCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {internship.role}
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-2">
                      {internship.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {internship.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements & Certificates */}
          <div className="space-y-8">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
            >
              <HiBadgeCheck className="text-accent-600" />
              Achievements
            </motion.h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-accent-600 rounded-full mt-2"></div>
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>

            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 mt-12"
            >
              <HiAcademicCap className="text-primary-600" />
              Certificates
            </motion.h3>

            <div className="space-y-4">
              {certificates.map((certificate, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
                      <HiAcademicCap className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{certificate}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;