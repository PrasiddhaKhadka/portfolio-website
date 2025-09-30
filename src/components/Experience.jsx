import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "OctopusX",
      period: "August 2024 - Present",
      responsibilities: [
        "Infrastructure provisioning and configuration management",
        "Ensuring infrastructure and application security",
        "Monitoring system performance and application health",
        "Setting up and maintaining CI/CD pipelines",
        "Managing code repositories and version control"
      ]
    },
    {
      title: "Software Engineer",
      company: "OctopusX",
      period: "April 2024 - July 2024",
      responsibilities: [
        "Frontend development with JavaScript and React",
        "Testing with Jest, Vitest, and Cypress",
        "Backend development with TypeScript and MongoDB",
        "Full Stack Development with Remix"
      ]
    },
    {
      title: "Web Developer",
      company: "Monster Studio",
      period: "February 2024 - March 2024",
      responsibilities: [
        "Frontend Development with React, JavaScript",
        "Backend Development with TypeScript, MongoDB"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-secondary to-secondary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-900/30 rounded-lg mb-6 border border-teal-800/50">
            <Briefcase className="w-7 h-7 text-teal-400" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">Experience</h1>
          <p className="text-primary opacity-60 text-lg max-w-2xl mx-auto leading-relaxed">
            I write clean code, automate tasks, and build apps that don't break. Learning, growing, and making the web better.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-accent backdrop-blur-sm border border-teal-900/30 rounded-xl p-8 hover:border-teal-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/20"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.company}</span>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {exp.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-800/60 transition-colors duration-200"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default Experience;