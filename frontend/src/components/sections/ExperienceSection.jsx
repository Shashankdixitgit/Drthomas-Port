import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { experience } from '../../data/mock';

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'current':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'academic':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-neutral-50 text-neutral-600 border-neutral-200';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Notion style */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">💼</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Professional Experience
          </h2>
        </div>
        <p className="text-neutral-500 mb-12 max-w-2xl">
          A journey spanning over two decades across prestigious institutions in India, UK, and USA.
        </p>

        {/* Experience Cards - Notion database style */}
        <div className="space-y-4">
          {experience.map((item) => (
            <div
              key={item.id}
              className="group border border-neutral-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Card Header */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full p-5 flex flex-col md:flex-row md:items-center gap-4 text-left bg-white hover:bg-neutral-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-neutral-900 text-lg">
                      {item.role}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(
                        item.type
                      )}`}
                    >
                      {item.type === 'current'
                        ? 'Current'
                        : item.type === 'academic'
                        ? 'Academic'
                        : 'Past'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Building2 size={14} />
                      {item.organization}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {item.period}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {expandedId === item.id ? (
                    <ChevronUp size={20} className="text-neutral-400" />
                  ) : (
                    <ChevronDown size={20} className="text-neutral-400" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expandedId === item.id && (
                <div className="px-5 pb-5 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-600 mt-4 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-white text-neutral-700 px-3 py-1.5 rounded-full border border-neutral-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Summary - Notion callout style */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Countries', value: '3', sublabel: 'India, UK, USA' },
            { label: 'Teaching', value: '20+', sublabel: 'Years Experience' },
            { label: 'NHS', value: '2+', sublabel: 'Years in UK NHS' },
            { label: 'Positions', value: '10+', sublabel: 'Leadership Roles' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 text-center hover:bg-neutral-100 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-neutral-900">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-neutral-700">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
