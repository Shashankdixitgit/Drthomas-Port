import React from 'react';
import { ArrowDown, Award, Globe, BookOpen, Users } from 'lucide-react';
import { personalInfo, highlights } from '../../data/mock';

const iconMap = {
  Award: Award,
  Globe: Globe,
  BookOpen: BookOpen,
  Users: Users,
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Main Content */}
        <div className="mb-16">
          {/* Notion-style breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
            <span className="w-5 h-5 bg-neutral-100 rounded flex items-center justify-center text-xs">
              👨‍⚕️
            </span>
            <span>Portfolio</span>
            <span>/</span>
            <span className="text-neutral-600">Dr. Pravin Thomas</span>
          </div>

          {/* Name with Notion-style avatar */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg md:text-xl text-neutral-500 mt-2">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl leading-relaxed mb-8">
            {personalInfo.tagline}
          </p>

          {/* Notion-style callout */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg max-w-3xl">
            <p className="text-neutral-700 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </div>

        {/* Highlights Grid - Notion-style cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md cursor-default"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm group-hover:shadow transition-shadow">
                    <IconComponent size={18} className="text-neutral-700" />
                  </div>
                  <span className="font-semibold text-neutral-900">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors group"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown
              size={20}
              className="animate-bounce group-hover:animate-none"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
