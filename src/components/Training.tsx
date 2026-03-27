import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

// Simple award icon component
const AwardIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const Training: React.FC = () => {
  return (
    <section id="training" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Training & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Professional development and skill enhancement through specialized training programs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700">
            {/* Certificate Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <AwardIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-200 mb-2">
                Certificate of Merit
              </h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <AcademicCapIcon className="w-5 h-5 text-blue-400" />
                <span className="text-lg text-blue-400 font-semibold">Lovely Professional University</span>
              </div>
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30">
                Grade A
              </span>
            </div>

            {/* Course Details */}
            <div className="space-y-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-200 mb-4">
                  Data Analytics Essentials: SQL, Python, Power BI, Tableau and Excel
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 mb-2">
                      <span className="font-semibold text-gray-300">Student:</span> Ajit Adhav
                    </p>
                    <p className="text-gray-400 mb-2">
                      <span className="font-semibold text-gray-300">Program:</span> Bachelor of Technology (Computer Science and Engineering)
                    </p>
                    <p className="text-gray-400 mb-2">
                      <span className="font-semibold text-gray-300">School:</span> School of Computer Science and Engineering
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 mb-2">
                      <span className="font-semibold text-gray-300">Duration:</span> 10 June 2025 - 15 July 2025
                    </p>
                    <p className="text-gray-400 mb-2">
                      <span className="font-semibold text-gray-300">Certificate No:</span> 406321
                    </p>
                    <p className="text-gray-400 mb-2">
                      <span className="font-semibold text-gray-300">Registration No:</span> 12309060
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Covered */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h5 className="text-lg font-semibold text-gray-200 mb-4">Skills Covered</h5>
                <div className="flex flex-wrap gap-3">
                  {['SQL', 'Python', 'Power BI', 'Tableau', 'Excel'].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-lg border border-blue-500/30 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Organization Details */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h5 className="text-lg font-semibold text-gray-200 mb-4">Organized By</h5>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Centre for Professional Enhancement</p>
                    <p className="text-gray-400">Lovely Professional University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6 border-t border-gray-700">
              <p className="text-gray-400">
                <span className="font-semibold text-gray-300">Date of Issue:</span> 13 August 2025
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Phagwara, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
