import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Download, Menu, X } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "ERP System",
      description: "Scalable Enterprise Resource Planning system for small businesses",
      tech: ["Next.js", "PostgreSQL", "Express", "Redis"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["React", "Socket.io", "MySQL", "Docker"],
      github: "#",
      live: "#"
    },
    {
      title: "Open Source Library",
      description: "NPM package for data validation with 10k+ downloads",
      tech: ["TypeScript", "Jest", "Webpack", "NPM"],
      github: "#",
      live: "#"
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    "Backend": ["Node.js", "Express", "Python", "Django", "REST APIs"],
    "Database": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
    "Tools": ["Git", "Docker", "AWS", "Vercel", "Postman"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sujal Raj
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-6 py-4 space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block capitalize hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className={`text-center z-10 transform transition-all duration-1000 ${
          isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code size={48} className="text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold pb-4 mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Sujal Raj
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-2">Full Stack Developer</p>
            <p className="text-lg text-slate-400 mb-8">Web Developer from India</p>
            <p className="text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              A passionate full-stack developer with 1 year of experience in building websites and scalable ERP systems. 
              Also an active open-source contributor, constantly learning and creating innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-green-500/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-400">My Journey</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Based in India, I'm a dedicated full-stack developer with 1 year of hands-on experience 
                    in creating robust web applications and scalable ERP systems. My journey began with a 
                    curiosity for solving complex problems through code.
                  </p>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    I specialize in building end-to-end solutions using modern technologies like React, Node.js, 
                    and various databases. My experience ranges from crafting intuitive user interfaces to 
                    designing efficient backend architectures.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    As an active open-source contributor, I believe in giving back to the community and 
                    continuously learning from fellow developers around the world.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Globe className="text-blue-400" size={24} />
                    <span className="text-slate-300">Location: India</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Code className="text-purple-400" size={24} />
                    <span className="text-slate-300">Experience: 1+ Years</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Database className="text-green-400" size={24} />
                    <span className="text-slate-300">Focus: Full-Stack Development</span>
                  </div>
                  <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    <Download size={20} />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, techs], index) => (
                <div 
                  key={category} 
                  className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
                  <div className="space-y-3">
                    {techs.map((tech, techIndex) => (
                      <div key={tech} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-slate-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="bg-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center space-x-2 text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out!
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="mailto:sujalraj@example.com"
                  className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="https://github.com/sujalraj"
                  className="flex items-center justify-center w-12 h-12 bg-gray-500/20 rounded-full hover:bg-gray-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/sujalraj"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <p className="text-slate-400">
                © 2025 Sujal Raj. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}