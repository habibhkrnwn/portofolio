import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 relative">
      {/* Neural network footer pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 gap-8 h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <div
                className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Habib Hammam Kurniawan | AI/ML Engineer
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Telecommunication Engineering graduate (PENS, GPA 3.65) focused on AI/ML, Computer Vision,
              Time Series, and Google Cloud. Projects include CycleGAN RGB→NDVI, Battery IR forecasting,
              Terra AI YouTube summarization, and a LoRa-based SKG thesis for secure V2I/V2V.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-cyan-400" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:habibhkrnwn@gmail.com"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                habibhkrnwn@gmail.com
              </a>
              <a
                href="tel:+6285156829274"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                +62 851-5682-9274
              </a>
              <p className="text-gray-300">Surabaya, Indonesia</p>
              <a
                href="https://www.linkedin.com/in/habibhkrnwn"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                target="_blank" rel="noreferrer"
              >
                LinkedIn: /in/habibhkrnwn
              </a>
              <a
                href="https://github.com/habibhkrnwn"
                className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                target="_blank" rel="noreferrer"
              >
                GitHub: @habibhkrnwn
              </a>
            </div>

            <div className="mt-6">
              <p className="text-gray-300 text-sm mb-2">Available for:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-900/50 text-cyan-300 rounded text-xs border border-cyan-500/30">
                  AI/ML Roles
                </span>
                <span className="px-2 py-1 bg-purple-900/50 text-purple-300 rounded text-xs border border-purple-500/30">
                  Cloud (GCP)
                </span>
                <span className="px-2 py-1 bg-green-900/50 text-green-300 rounded text-xs border border-green-500/30">
                  Research/Internships
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Habib Hammam Kurniawan. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Easter Egg */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            "The future belongs to those who understand artificial intelligence." 🤖
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
