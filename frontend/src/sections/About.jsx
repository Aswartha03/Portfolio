import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="About me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-sm opacity-90">Years Learning</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Electronics & Communication Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {personal.about}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">{personal.location}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">{personal.email}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-lg font-medium">
                Problem Solving
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 px-4 py-2 rounded-lg font-medium">
                Hard Worker
              </div>
              <div className="bg-accent-50 dark:bg-accent-900/20 text-accent-600 dark:text-accent-400 px-4 py-2 rounded-lg font-medium">
                Continuous Learning
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;