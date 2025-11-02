import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [showConcepts, setShowConcepts] = useState(false);

  return (
    <div className="project-card-hover bg-gray-900 rounded-xl overflow-hidden border border-gray-800 cursor-pointer group">
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-500">
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          
          {/* Floating particles on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-4 left-4 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-6 right-6 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce"></div>
          </div>
          
          <div className="text-6xl text-gray-600 group-hover:text-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 z-10">
            {project.category === 'Full Stack' && '🚀'}
            {project.category === 'AI/ML' && '🧠'}
            {project.category === 'Fintech' && '🏦'}
            {project.category === 'Frontend' && '💻'}
            {project.category === 'Backend' && '⚙️'}
          </div>
        </div>

      </div>
      
      <div className="p-6 relative">
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-xl"></div>
        
        <div className="mb-4 relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-all duration-300 group-hover:translate-x-1">
              {project.title}
            </h3>
            <span className="text-orange-500 text-sm font-semibold bg-orange-500/10 px-2 py-1 rounded group-hover:bg-orange-500/20 group-hover:scale-105 transition-all duration-300">
              {project.category}
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700 group-hover:border-orange-500/50 group-hover:bg-gray-700 group-hover:text-white transition-all duration-300 hover:scale-110"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CS Concepts Section */}
        {project.concepts && (
          <div className="mb-4 relative z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowConcepts(!showConcepts);
              }}
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-all duration-300 text-sm font-semibold hover:translate-x-1 group-hover:scale-105"
            >
              <svg 
                className={`w-4 h-4 transition-all duration-300 ${showConcepts ? 'rotate-90' : ''} hover:scale-110`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
              CS Concepts Applied
            </button>
            
            {showConcepts && (
              <div className="mt-3 space-y-2">
                {project.concepts.map((concept, index) => (
                  <div key={index} className="text-gray-300 text-xs bg-gray-800 p-3 rounded border-l-2 border-orange-500">
                    <span className="text-orange-500 font-medium">
                      {concept.split(':')[0]}:
                    </span>
                    <span className="ml-1">
                      {concept.split(':')[1]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {(project.github || project.demo) && (
          <div className="flex gap-3 pt-4 border-t border-gray-800 group-hover:border-orange-500/30 transition-colors duration-300 relative z-10">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm hover:scale-110 hover:translate-x-1"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm hover:scale-110 hover:translate-x-1"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"/>
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;