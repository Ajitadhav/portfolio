import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "ajitadhav.dev@gmail.com",
      href: "mailto:ajitadhav.dev@gmail.com",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+91-7620486926",
      href: "tel:+917620486926",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-400 mb-1">
                      {contact.label}
                    </h3>
                    <p className="text-xl text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6 text-center">
              Send Me a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
