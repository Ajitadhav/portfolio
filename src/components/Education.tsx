import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-6">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-1">
                  Lovely Professional University
                </h3>
                <p className="text-lg text-gray-400">
                  B.Tech Computer Science and Engineering
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Academic Performance</h4>
                <p className="text-2xl font-bold text-blue-400">CGPA: 6.46</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Duration</h4>
                <p className="text-2xl font-bold text-purple-400">Since August 2023</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Key Focus Areas</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Web Development",
                  "Database Systems",
                  "Machine Learning",
                  "Data Analytics",
                  "Software Engineering",
                  "Cloud Computing"
                ].map((subject, index) => (
                  <motion.div
                    key={subject}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="text-gray-300 text-sm">{subject}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
