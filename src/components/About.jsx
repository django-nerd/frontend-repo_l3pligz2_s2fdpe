import React from 'react';
import { Download, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm md:h-80 md:w-80">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800&auto=format&fit=crop"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
              <User className="mr-1 h-3.5 w-3.5" /> About Me
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">Designer & Developer</h2>
            <p className="mt-4 text-gray-600">
              I’m a multidisciplinary web developer with a passion for crafting minimal, high-performance, and accessible experiences. I partner with startups and teams to build products that are fast, elegant, and user-first.
            </p>
            <p className="mt-3 text-gray-600">
              My expertise spans React, TypeScript, CSS architectures, design systems, and UX best practices. I love transforming ideas into polished, production-ready interfaces.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-white shadow-sm transition hover:bg-black"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
