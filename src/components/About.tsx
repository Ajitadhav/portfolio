import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
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
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 backdrop-blur-sm bg-opacity-90">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
              Full Stack Developer and Data Analyst passionate about <span className="text-blue-400 font-semibold">transforming complex problems</span> into elegant, scalable solutions. 
              I build <span className="text-purple-400 font-semibold">production-ready applications</span> and derive <span className="text-green-400 font-semibold">actionable insights</span> from data to drive business impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CodeBracketIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Clean Code</h3>
                <p className="text-gray-400 text-sm">
                  Writing maintainable, scalable code with best practices and modern architectures
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Data Insights</h3>
                <p className="text-gray-400 text-sm">
                  Transforming raw data into actionable insights and compelling visualizations
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-600 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 mb-2">Problem Solving</h3>
                <p className="text-gray-400 text-sm">
                  Analytical approach to identify bottlenecks and implement efficient solutions
                </p>
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Currently seeking opportunities to apply my skills in <span className="text-blue-400 font-medium">full-stack development</span> and <span className="text-purple-400 font-medium">data analytics</span> to create meaningful impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
