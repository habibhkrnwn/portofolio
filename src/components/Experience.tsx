import React from 'react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Cloud Computing (Backend, DevOps, Cloud Architecture)',
      company: 'Bangkit Academy by Google, GoTo (MSIB)',
      period: 'Aug 2024 – Dec 2024',
      location: 'Surabaya, Indonesia',
      description:
        'Hands-on training in Google Cloud Platform (GCP), including Compute Engine, Cloud Storage, Cloud Functions, and IAM. Designed and deployed secure, scalable cloud architectures with best practices in security and cost optimization.',
      achievements: [
        'Implemented firewall rules, VPC segmentation, and IAM policies for secure deployment',
        'Built workflows with Cloud Functions and Cloud Storage',
        'Practiced incident detection and alert handling simulations',
        'Gained familiarity with containerization and cloud networking (Docker, basic Kubernetes)'
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'cyan'
    },
    {
      type: 'work',
      title: 'AI Engineer Intern',
      company: 'Terra AI',
      period: 'Aug 2023 – Jan 2024',
      location: 'Remote, Singapore',
      description:
        'Developed AI solutions for multiple applications, with a primary project focused on building an AI system for summarizing YouTube content.',
      achievements: [
        'Learned the proprietary programming language SMOJO',
        'Developed and deployed AI models into real applications',
        'Built an AI-based summarization system for YouTube videos',
        'Collaborated cross-functionally to improve data collection and model evaluation'
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'purple'
    },
    {
      type: 'volunteer',
      title: 'Research Assistant – Mobile Communication & Security',
      company: 'Group Research Collaboration (LoRa & Physical Layer Security)',
      period: 'May 2024 – Recent',
      location: 'Surabaya, Indonesia',
      description:
        'Research on LoRa-based physical layer security and mobile communication systems, contributing to multi-university collaborations.',
      achievements: [
        'Developed the concept of early warning systems for rice pest disease detection',
        'Collaborated with Universiti Teknologi MARA (Malaysia)',
        'Contributed to “5D world map” concept research with Musashino University (Japan)',
        'Conducted LoRa experiments for secure key generation (SKG)'
      ],
      icon: <Award className="w-6 h-6" />,
      color: 'emerald'
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Telecommunication Engineering',
      institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
      period: '2021 – 2025',
      gpa: '3.65 / 4.00',
      description:
        'Focused on IoT, wireless communications, and physical layer security. Thesis: “Implemented secure V2I communication using Secret Key Generation based on LoRa technology.”',
      achievements: [
        'Conducted field experiments on LoRa for V2I/V2V SKG',
        'Developed adaptive multibit quantization for secure keys',
        'Analyzed performance metrics such as BMR, KGR, and entropy'
      ],
      relevant_courses: [
        'Wireless & Mobile Communications',
        'Internet of Things (IoT)',
        'Network Security Fundamentals',
        'Digital Signal Processing',
        'Embedded Systems',
        'Data Analysis & Visualization'
      ]
    }
  ];

  // ⬇️ Updated: added Dicoding & Google certs + optional "note"
  const certifications = [
    { name: 'CompTIA Security+', issuer: 'CompTIA', date: '2020 – 2023', icon: '🛡️' },
    { name: 'BNSP – Jaringan Akses & Coverage', issuer: 'BNSP', date: 'Valid until 2027', icon: '📡' },
    { name: 'Google Cloud Security Badges', issuer: 'Google Cloud', date: '2024', icon: '☁️' },

    {
      name: 'Belajar Penerapan Machine Learning dengan Google Cloud',
      issuer: 'Dicoding Indonesia',
      date: 'Issued Dec 2024 • Expires Dec 2027',
      icon: '🎓',
      note: 'Skills: Google Cloud Platform (GCP), Cloud Computing, Back-End Web Development, Machine Learning'
    },
    {
      name: 'Belajar Dasar AI',
      issuer: 'Dicoding Indonesia',
      date: 'Issued Nov 2024 • Expires Nov 2027',
      icon: '🤖',
      note: 'Skills: Artificial Intelligence (AI), Machine Learning'
    },
    {
      name: 'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud',
      issuer: 'Google',
      date: 'Issued Sep 2024',
      icon: '🌥️'
    },
    {
      name: 'Prepare Data for ML APIs on Google Cloud',
      issuer: 'Google',
      date: 'Issued Oct 2024',
      icon: '🧰'
    }
  ];

  const projects = [
    {
      title: 'RGB to NDVI Conversion using CycleGAN',
      context: 'Computer Vision • Agriculture',
      description:
        'Developed a CycleGAN-based deep learning model to convert RGB drone images into NDVI for vegetation health monitoring, eliminating the need for costly NIR sensors.',
      highlights: [
        'Designed preprocessing and augmentation pipeline for aerial imagery',
        'Validated NDVI results with ground truth samples',
        'Improved cost efficiency for agricultural monitoring systems'
      ]
    },
    {
      title: 'Battery Internal Resistance Forecasting',
      context: 'Time Series • Predictive Maintenance',
      description:
        'Built time-series forecasting models (LSTM and ARIMA) to predict battery internal resistance degradation, aiding preventive maintenance strategies.',
      highlights: [
        'Compared performance across LSTM, ARIMA, and Prophet',
        'Implemented rolling-window validation and feature engineering',
        'Visualized degradation trends for better maintenance scheduling'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-20 gap-1 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
              style={{ animationDelay: `${i * 0.05}s`, animationDuration: '3s' }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-${exp.color}-900/50 rounded-full flex items-center justify-center mr-4 border border-${exp.color}-500/30`}
                    >
                      <div className={`text-${exp.color}-400`}>{exp.icon}</div>
                    </div>

                    <div className="flex-1 bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                        <div className="flex items-center text-sm text-gray-400 mt-1 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-cyan-400 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-3">{exp.location}</p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>

                      <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achieve, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3" />
                            {achieve}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-600" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="bg-gray-800/50 p-6 rounded-lg shadow-md border border-gray-700 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <div className="flex items-center text-sm text-gray-400 mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>
                <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-400 text-sm mb-3">GPA: {edu.gpa}</p>
                <p className="text-gray-300 mb-4">{edu.description}</p>

                <h5 className="font-semibold text-white mb-2">Highlights:</h5>
                <ul className="space-y-1 mb-4">
                  {edu.achievements.map((achieve, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3" />
                      {achieve}
                    </li>
                  ))}
                </ul>

                <h5 className="font-semibold text-white mb-2">Relevant Coursework:</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.relevant_courses.map((course, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs border border-gray-600">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-12">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-green-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Certifications</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-4 rounded-lg shadow-md border-l-4 border-cyan-400">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{cert.icon}</span>
                      <div>
                        <h5 className="font-semibold text-white text-sm">{cert.name}</h5>
                        <p className="text-gray-300 text-xs">{cert.issuer}</p>
                        <p className="text-gray-400 text-xs">{cert.date}</p>
                        {/* Optional skills/notes */}
                        {('note' in cert) && cert.note && (
                          <p className="text-gray-400 text-xs mt-1">{cert.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
