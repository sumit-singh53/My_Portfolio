import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import { projects, categories } from '../data/projects';

export default function Projects() {
  const router = useRouter();
  const { search } = router.query;
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (search) {
      setSearchTerm(search);
      filterProjects('All', search);
    }
  }, [search]);

  const filterProjects = (category, searchQuery = searchTerm) => {
    let filtered = projects;

    // Filter by category
    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category);
    }

    // Filter by search term
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
    setActiveCategory(category);
  };

  const handleCategoryChange = (category) => {
    filterProjects(category);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProjects(activeCategory, value);
  };

  return (
    <div className="min-h-screen bg-darkBackground">
      <Head>
        <title>Projects - Sumit Singh Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <div className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="py-16 px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my creative journey through various design projects that showcase my skills and passion for visual storytelling.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-3 bg-gray-800 border-2 border-transparent focus:border-neonGreen text-white placeholder-gray-500 transition duration-300 ease-in-out rounded-md w-full md:w-80"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-neonGreen text-black'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                    setFilteredProjects(projects);
                  }}
                  className="mt-4 px-6 py-2 bg-neonGreen text-black font-bold rounded-md hover:bg-green-400 transition-colors"
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </section>

        {/* About Section */}
        <AboutSection />
      </div>
      
      <Footer />
    </div>
  );
}