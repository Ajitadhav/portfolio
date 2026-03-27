import React from 'react';
import { motion } from 'framer-motion';

// Simple award icon component
const AwardIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2025",
      description: "Comprehensive course covering cloud architecture, deployment models, and services",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${certificate.color} flex items-center justify-center flex-shrink-0`}>
                  <AwardIcon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-200 mb-2">
                    {certificate.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Issued by:</span>
                      <span className="text-blue-400 font-semibold">{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Year:</span>
                      <span className="text-purple-400 font-semibold">{certificate.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {certificate.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      View Certificate
                    </button>
                    <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Add more certificates section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">
                More Certifications Coming Soon
              </h3>
              <p className="text-gray-400 mb-6">
                I'm continuously learning and expanding my skillset. Check back for more certifications!
              </p>
              <div className="flex justify-center gap-4">
                {["AWS", "Google Cloud", "Microsoft Azure", "DevOps"].map((platform) => (
                  <span
                    key={platform}
                    className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg text-sm border border-gray-600"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
