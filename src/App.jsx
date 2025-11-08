import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ArrowUp, Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-16 xl:px-20">
        <div onClick={() => handleScrollTo('home')} className="cursor-pointer text-lg font-semibold text-gray-900">
          YourName<span className="text-teal-600">.</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Work' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="text-sm text-gray-700 transition hover:text-black"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo('contact')}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-black"
          >
            Hire Me
          </button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((s) => !s)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="mx-auto block max-w-7xl px-6 pb-4 md:hidden">
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Work' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  const handleTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer className="border-t border-gray-200 bg-gray-900 py-10 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12 lg:px-16 xl:px-20">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <button
          onClick={handleTop}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
        >
          <ArrowUp className="h-4 w-4" /> Back to top
        </button>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
