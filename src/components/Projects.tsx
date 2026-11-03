import React, { useState } from 'react';
import { MapPin, Zap, ArrowRight, Eye, Calendar } from 'lucide-react';
import { PROJECTS } from '../data/websiteData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onRequestQuote: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onRequestQuote }) => {
  const [filter, setFilter] = useState<'all' | 'resort' | 'marine' | 'industrial' | 'emergency'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#081226] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-400">
              TRACK RECORD
            </span>
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
          </div>
          <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Generator Projects Delivered Islandwide
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Proven engineering projects delivered across luxury resort private islands, international marine fleets, and critical healthcare facilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'resort', label: 'Resort Powerhouses' },
            { id: 'marine', label: 'Marine Vessels' },
            { id: 'industrial', label: 'Industrial Plants' },
            { id: 'emergency', label: 'Emergency Response' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Projects Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#09152e] border border-slate-800/80 hover:border-orange-500/50 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b17] via-[#050b17]/40 to-transparent opacity-90" />
                
                {/* Capacity badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-orange-500 text-white text-[11px] font-black shadow-md flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-white" />
                  <span>{project.capacity}</span>
                </div>

                {/* Year */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-slate-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-orange-400" />
                  <span>{project.completedYear}</span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-950/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-xl bg-orange-500 text-white font-montserrat font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-4 h-4" />
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-orange-400 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>

                <h3 className="font-montserrat font-bold text-lg text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Scope Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.scope.slice(0, 2).map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-medium text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                  {project.scope.length > 2 && (
                    <span className="px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 text-[10px] font-bold">
                      +{project.scope.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={onRequestQuote}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-white hover:bg-orange-500 font-montserrat font-bold text-sm transition-all duration-300 shadow-lg shadow-orange-500/10"
          >
            <span>Have a Project in Mind? Consult Our Senior Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
