import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillsCategories = [
    {
      title: "Core Expertise",
      skills: [
        { name: "Python", level: 90, icon: "🐍", category: "primary" },
        { name: "JavaScript", level: 85, icon: "⚡", category: "primary" },
        { name: "React", level: 80, icon: "⚛️", category: "primary" },
        { name: "Node.js", level: 75, icon: "🟢", category: "primary" }
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 90, icon: "�", category: "secondary" },
        { name: "Django", level: 80, icon: "�", category: "secondary" },
        { name: "REST APIs", level: 85, icon: "🔗", category: "secondary" },
        { name: "Tailwind CSS", level: 85, icon: "🎯", category: "secondary" }
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "SQL", level: 85, icon: "🗄️", category: "primary" },
        { name: "Power BI", level: 90, icon: "📊", category: "primary" },
        { name: "Data Analysis", level: 85, icon: "📈", category: "secondary" },
        { name: "Excel", level: 80, icon: "�", category: "secondary" }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Firebase", level: 75, icon: "�", category: "secondary" },
        { name: "Git/GitHub", level: 85, icon: "📝", category: "primary" },
        { name: "Hadoop", level: 70, icon: "⚙️", category: "secondary" },
        { name: "Docker", level: 65, icon: "�", category: "secondary" }
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <span className="text-white font-bold text-lg">
                  {category.title.charAt(0)}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-200 mb-4 group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                {category.title}
              </h3>
              
              <div className="space-y-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                        skill.category === 'primary' 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                          : 'bg-gray-700 text-gray-300'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                          {skill.name}
                        </span>
                        {skill.category === 'primary' && (
                          <span className="ml-2 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                            Core
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                      <span className="text-xs text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill bars visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700"
        >
          <h3 className="text-2xl font-semibold text-gray-200 mb-6 text-center">
            Proficiency Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Python", level: 85 },
              { name: "Web Development", level: 80 },
              { name: "Data Analytics", level: 75 },
              { name: "Database Management", level: 70 }
            ].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
