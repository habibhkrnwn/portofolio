import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-60 left-20 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-150"></div>
        <div className="absolute top-80 left-40 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-52 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-72 right-16 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="56" y1="88" x2="128" y2="168" stroke="url(#gradient1)" strokeWidth="0.5" opacity="0.3"/>
          <line x1="128" y1="168" x2="80" y2="248" stroke="url(#gradient1)" strokeWidth="0.5" opacity="0.3"/>
          <line x1="80" y1="248" x2="160" y2="328" stroke="url(#gradient1)" strokeWidth="0.5" opacity="0.3"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/50 to-purple-900/50 text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/20">
              🚀 Available for opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Habib Hammam Kurniawan
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI/ML Engineer & Computer Vision Specialist
              <br />
              <span className="text-lg text-cyan-300">Building Intelligent Computer Vision Systems</span>
            </p>
            
            <p className="text-gray-400 mb-10 text-lg max-w-2xl">
              Fresh graduate with expertise in deep learning, computer vision, and AI system development. 
              Specialized in neural networks, image processing, and intelligent automation solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View My Projects
                <ArrowRight className="ml-2" size={20} />
              </button>
              
              <a
                href="/assets/cv/CV_Habib_Hammam_Kurniawan_AI.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border-2 border-gray-600 hover:border-cyan-400 hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="https://github.com/habibhkrnwn" className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 group border border-gray-600">
                <Github className="w-6 h-6 text-gray-300 group-hover:text-cyan-400" />
              </a>
              <a href="https://www.linkedin.com/in/habibhkrnwn" className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 group border border-gray-600">
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-cyan-400" />
              </a>
              <a href="mailto:habibhkrnwn@gmail.com" className="p-3 bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 group border border-gray-600">
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-2xl opacity-30 scale-110"></div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
                {/* HAPUS/COMMENT placeholder berikut kalau masih ada */}
                {/* <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 ..."> ... </div> */}

                {/* Uncomment and replace with your actual photo */}
                <img 
                  src="/assets/projects/editedfoto.png" 
                  alt="Habib Hammam Kurniawan" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;