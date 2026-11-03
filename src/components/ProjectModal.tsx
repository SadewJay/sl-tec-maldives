import React from 'react';
import { X, MapPin, Zap, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#081329] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/10 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-orange-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-orange-500 text-white text-xs font-black shadow-lg flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-white" />
            <span>{project.capacity}</span>
          </div>
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-orange-400" />
            <span>Completed {project.completedYear}</span>
          </div>
        </div>

        {/* Location & Title */}
        <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{project.location}</span>
          <span>&bull;</span>
          <span className="text-slate-400">{project.clientType}</span>
        </div>

        <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white mb-4">
          {project.title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Scope of Work */}
        <div className="mb-6">
          <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-orange-400 mb-3">
            Engineering Scope & Deliverables:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
            {project.scope.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-montserrat font-bold text-xs shadow-lg shadow-orange-500/20 flex items-center gap-2"
          >
            <span>Inquire About Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
