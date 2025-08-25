import React from 'react';
import { Brain, Database, Cloud, Code, Wifi } from 'lucide-react';

const About = () => {
  const specializations = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Computer Vision",
      description: "CycleGAN RGB→NDVI; image preprocessing and evaluation for agriculture."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Time Series & Predictive Maintenance",
      description: "Battery internal resistance forecasting with LSTM/ARIMA and rolling validation."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps (GCP)",
      description: "VPC/IAM, serverless with Cloud Functions, and observability (Bangkit)."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT & Physical-Layer Security",
      description: "LoRa-based Secret Key Generation for secure V2I/V2V (thesis)."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #06b6d4 2px, transparent 2px),
                              radial-gradient(circle at 75% 75%, #a855f7 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Telecommunication Graduate focused on AI/ML, Cloud, and IoT
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a Telecommunication Engineering graduate from PENS (GPA 3.65/4.00) with hands-on experience
              in computer vision, time-series forecasting, NLP summarization, and Google Cloud (Bangkit Academy).
              My thesis implemented secure V2I communication using LoRa-based Secret Key Generation.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Recent work includes CycleGAN RGB→NDVI for agriculture, battery internal resistance forecasting
              (LSTM/ARIMA), and an end-to-end YouTube summarization system at Terra AI. I focus on practical
              pipelines, measurable results, and deployable systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-cyan-900/30 px-4 py-2 rounded-full border border-cyan-500/20">
                <span className="text-cyan-300 font-medium">Computer Vision</span>
              </div>
              <div className="bg-purple-900/30 px-4 py-2 rounded-full border border-purple-500/20">
                <span className="text-purple-300 font-medium">Time Series & NLP</span>
              </div>
              <div className="bg-green-900/30 px-4 py-2 rounded-full border border-green-500/20">
                <span className="text-green-300 font-medium">GCP & IoT (LoRa)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/50 rounded-xl border border-gray-600 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 mb-4">
                  {spec.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">{spec.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
