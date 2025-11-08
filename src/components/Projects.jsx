import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Minimal Portfolio',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    url: '#',
    tag: 'Web',
  },
  {
    title: 'E-commerce UI',
    image:
      'https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1200&auto=format&fit=crop',
    url: '#',
    tag: 'Design',
  },
  {
    title: 'Dashboard Concept',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    url: '#',
    tag: 'App',
  },
  {
    title: 'Landing Page',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    url: '#',
    tag: 'Web',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Selected Work</h2>
        <p className="mt-2 text-gray-600">A curated selection of recent projects.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              className="group relative block overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/80">{project.tag}</p>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <ExternalLink className="h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
