import React from 'react';
import { FlaskConical, Target, Clock, Users } from 'lucide-react';
import { research } from '../../data/mock';

const ResearchSection = () => {
  const getStatusColor = (status) => {
    if (status === 'Ongoing') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (status === 'Completed') return 'bg-blue-50 text-blue-700 border-blue-200';
    return 'bg-neutral-50 text-neutral-600 border-neutral-200';
  };

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Notion style */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔬</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Research & Clinical Trials
          </h2>
        </div>
        <p className="text-neutral-500 mb-12 max-w-2xl">
          Leading groundbreaking research in headache medicine and serving as principal investigator on multiple clinical trials.
        </p>

        {/* Research Projects - Notion database view */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-neutral-100 border-b border-neutral-200 text-sm font-medium text-neutral-600">
            <div className="col-span-6 flex items-center gap-2">
              <Target size={14} />
              Project Title
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <Users size={14} />
              Role
            </div>
            <div className="col-span-3 flex items-center gap-2">
              <Clock size={14} />
              Status
            </div>
          </div>

          {/* Table Rows */}
          {research.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-12 gap-4 px-6 py-4 hover:bg-white transition-colors ${
                index !== research.length - 1 ? 'border-b border-neutral-200' : ''
              }`}
            >
              <div className="md:col-span-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white border border-neutral-200 rounded-lg flex items-center justify-center mt-0.5">
                    <FlaskConical size={16} className="text-neutral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">
                      {project.title}
                    </h3>
                    {project.sponsor && (
                      <p className="text-xs text-neutral-500 mt-1">
                        Sponsor: {project.sponsor}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <span className="text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full md:bg-transparent md:p-0">
                  {project.role}
                </span>
              </div>
              <div className="md:col-span-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Research Focus Areas - Visual highlight */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">
              Headache Disorders
            </h3>
            <p className="text-sm text-neutral-600">
              Investigating novel treatments for migraine, cluster headaches, and other primary headache disorders.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <span className="text-2xl">💉</span>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">
              CGRP Therapies
            </h3>
            <p className="text-sm text-neutral-600">
              Evaluating anti-CGRP monoclonal antibodies and their effectiveness in treatment-resistant cases.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">
              Neurostimulation
            </h3>
            <p className="text-sm text-neutral-600">
              Exploring vagal nerve stimulation and remote neurostimulation devices for acute migraine treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
