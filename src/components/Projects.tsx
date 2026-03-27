import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

// Simple GitHub icon component
const GithubIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Student Mental Health Insights Dashboard",
      problem: "Universities struggling to track student wellbeing and identify at-risk individuals",
      solution: "Built an interactive Power BI dashboard with real-time stress level monitoring, counseling trend analysis, and predictive risk modeling",
      impact: "Enabled data-driven decision making for 10,000+ students, improving counseling resource allocation by 35%",
      tech: ["Power BI", "DAX", "Data Modeling", "Predictive Analytics"],
      github: "https://github.com/ajitadhav/mental-health-dashboard",
      color: "from-blue-500 to-purple-600",
      image: "🧠",
      featured: true,
      metrics: ["10K+ Students", "35% Improvement", "Real-time Analytics"]
    },
    {
      title: "Fundraiser Platform - Full Stack Solution",
      problem: "Non-profits lacking efficient tools to manage fundraising campaigns and track donations",
      solution: "Developed a comprehensive web platform with real-time campaign tracking, secure payment processing, and donor management",
      impact: "Launched 3 successful campaigns raising $50,000+ with 95% user satisfaction rate",
      tech: ["Node.js", "Express", "Firebase", "React", "Stripe API"],
      github: "https://github.com/ajitadhav/fundraiser-planner",
      color: "from-green-500 to-emerald-600",
      image: "💰",
      featured: true,
      metrics: ["$50K+ Raised", "95% Satisfaction", "3 Campaigns"]
    },
    {
      title: "Car Price Prediction System",
      problem: "Buyers struggling to determine fair market value for used cars leading to overpayment",
      solution: "Created a machine learning-powered analysis system using advanced regression models and market trend analysis",
      impact: "Achieved 92% prediction accuracy, helping 500+ users make informed purchasing decisions",
      tech: ["Python", "Machine Learning", "Data Analysis", "Regression Models"],
      github: "https://github.com/ajitadhav/car-price-analysis",
      color: "from-orange-500 to-red-600",
      image: "🚗",
      featured: false,
      metrics: ["92% Accuracy", "500+ Users", "ML Models"]
    },
    {
      title: "Food Waste Reduction Platform",
      problem: "Restaurants wasting 30% of food inventory while local communities face food insecurity",
      solution: "Built a real-time inventory management system connecting surplus food with local charities through automated matching algorithms",
      impact: "Reduced food waste by 40% and distributed 5,000+ meals to communities in need",
      tech: ["React", "Node.js", "MongoDB", "Geolocation API", "Real-time Notifications"],
      github: "https://github.com/ajitadhav/food-waste-platform",
      color: "from-pink-500 to-rose-600",
      image: "🍽️",
      featured: true,
      metrics: ["40% Waste Reduction", "5K+ Meals", "Real-time System"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-3 -right-3 z-10"
                >
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                </motion.div>
              )}
              
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Project header with icon */}
                <div className={`h-3 bg-gradient-to-r ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-4xl bg-gray-900 rounded-full p-3 border-4 border-gray-700 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                </div>
                
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold text-gray-200 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Problem-Solution-Impact Structure */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-red-500/10 border-l-4 border-red-500/50 p-3 rounded">
                      <p className="text-sm font-semibold text-red-400 mb-1">Problem</p>
                      <p className="text-gray-300 text-sm">{project.problem}</p>
                    </div>
                    
                    <div className="bg-blue-500/10 border-l-4 border-blue-500/50 p-3 rounded">
                      <p className="text-sm font-semibold text-blue-400 mb-1">Solution</p>
                      <p className="text-gray-300 text-sm">{project.solution}</p>
                    </div>
                    
                    <div className="bg-green-500/10 border-l-4 border-green-500/50 p-3 rounded">
                      <p className="text-sm font-semibold text-green-400 mb-1">Impact</p>
                      <p className="text-gray-300 text-sm font-medium">{project.impact}</p>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <motion.span
                        key={metric}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + metricIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full text-xs border border-gray-600 font-semibold"
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-200 transform hover:scale-105"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 group"
                    >
                      <GithubIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>GitHub</span>
                    </motion.a>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </motion.button>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ajitadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <GithubIcon className="w-5 h-5" />
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
