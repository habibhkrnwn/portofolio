import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "AI/ML",
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"]
    },
    {
      category: "Computer Vision",
      skills: ["OpenCV", "CycleGAN", "Image Processing", "Object Detection"]
    },
    {
      category: "Programming",
      skills: ["Python", "C++", "MATLAB", "SQL"]
    },
    {
      category: "Tools",
      skills: ["Jupyter", "Google Colab", "Git & GitHub", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400">Technologies and tools I frequently use</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
