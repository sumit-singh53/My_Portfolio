import { skills } from '../data/projects';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm Sumit Singh, a passionate full stack developer specializing in fintech, data analytics, 
            and machine learning solutions. I build innovative applications ranging from quantum-secure 
            banking platforms to climate prediction systems and interactive data dashboards.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            My expertise spans across modern web technologies, microservices architecture, and advanced 
            security implementations. I focus on creating scalable, secure applications that solve 
            real-world problems in finance, environment, and data science domains.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-neonGreen text-black px-3 py-1 rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="/sumit-pixelated.svg" 
            alt="Sumit Singh - Tech Enthusiast"
            className="w-64 h-64 rounded-full object-cover object-center border-4 border-neonGreen shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;