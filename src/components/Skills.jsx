import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX', level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Skills</h2>
        <p className="mt-2 text-gray-600">A snapshot of the tools and technologies I work with.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-800">
                  <CheckCircle2 className="h-5 w-5 text-teal-600" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-teal-600 transition-all"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
