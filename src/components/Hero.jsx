import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-16 md:px-12 lg:px-16 xl:px-20">
        <span className="inline-flex items-center rounded-full border border-teal-200 bg-white/70 px-3 py-1 text-xs font-medium text-teal-700 shadow-sm backdrop-blur">
          <Sparkles className="mr-1 h-3.5 w-3.5" /> Available for freelance work
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
          Hi, I’m <span className="text-teal-600">Your Name</span>.<br />
          I build modern web experiences.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
          Web developer and designer focused on crafting clean, performant, and accessible products with a modern aesthetic.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => handleScrollTo('contact')}
            className="group inline-flex items-center rounded-full bg-teal-600 px-6 py-3 text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
          >
            Hire Me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => handleScrollTo('projects')}
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-800 transition hover:border-gray-400"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
