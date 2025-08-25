import React from 'react';
import { Github, ExternalLink, Code, Database } from 'lucide-react';

type Project = {
  title: string;
  blurb: string;
  techStack: string[];
  category: string;
  icon: React.ReactNode;
  gradient: string;
  cover: string;        // main image
  images?: string[];    // optional thumbnails
  github?: string;
  demo?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "RGB → NDVI (CycleGAN)",
      blurb: "Convert RGB drone images to NDVI for crop health—no NIR sensor required.",
      techStack: ["PyTorch", "CycleGAN", "OpenCV"],
      category: "Computer Vision",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      cover: "/assets/projects/ndvi/ndvi_cover.png",
      images: [
        "/assets/projects/ndvi/ndvi_before.jpg",
        "/assets/projects/ndvi/ndvi_after.jpg",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Battery IR Forecasting",
      blurb: "Predict internal resistance trends for preventive maintenance.",
      techStack: ["TensorFlow", "ARIMA", "Pandas"],
      category: "Time Series",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      cover: "/assets/projects/battery/battery_cover.png",
      images: [
        "/assets/projects/battery/ir_timeseries.png",
        "/assets/projects/battery/forecast_plot.png",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80h-80z" fill="none" stroke="#06b6d4" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="2" fill="#a855f7"/>
              <circle cx="90" cy="10" r="2" fill="#06b6d4"/>
              <circle cx="10" cy="90" r="2" fill="#a855f7"/>
              <circle cx="90" cy="90" r="2" fill="#06b6d4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto" />
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Compact snapshots of my AI work with visuals and links.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="group bg-gray-900/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-cyan-400/50 backdrop-blur-sm"
            >
              {/* Accent bar */}
              <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />

              {/* Cover image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <img
                  src={p.cover}
                  alt={`${p.title} cover`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                {/* Chip + icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${p.gradient} bg-opacity-10 text-sm font-medium`}>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${p.gradient} mr-2`}>{p.icon}</span>
                    {p.category}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Short blurb */}
                <p className="text-gray-300 mb-4">{p.blurb}</p>

                {/* Thumbnails */}
                {p.images && p.images.length > 0 && (
                  <div className="flex gap-3 mb-5">
                    {p.images.map((src, i) => (
                      <a key={i} href={src} target="_blank" rel="noreferrer" className="block">
                        <img
                          src={src}
                          alt={`${p.title} preview ${i + 1}`}
                          className="w-24 h-16 object-cover rounded-md border border-gray-700 hover:border-cyan-400 transition-colors duration-200"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                )}

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.techStack.map((t) => (
                    <span key={t} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-600">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
