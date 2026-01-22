import React from 'react';
import { GraduationCap, Award, Languages, Stethoscope } from 'lucide-react';
import { education, certifications, skills } from '../../data/mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Notion style */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-2xl">📚</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Education & Qualifications
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
            <GraduationCap size={16} />
            <span className="uppercase tracking-wide font-medium">Academic Journey</span>
          </div>
          
          <div className="space-y-4">
            {education.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white border border-neutral-200 rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:border-neutral-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-neutral-900">
                        {item.degree}
                      </h3>
                      {item.highlight && (
                        <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">
                          {item.highlight}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-500">
                      {item.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-400 bg-neutral-50 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white border border-neutral-200 rounded-lg p-6">
            <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
              <Award size={16} />
              <span className="uppercase tracking-wide font-medium">Fellowships & Certifications</span>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg"
                >
                  <span className="w-10 h-10 bg-neutral-200 rounded-md flex items-center justify-center text-xs font-bold text-neutral-600">
                    {cert.abbr}
                  </span>
                  <span className="text-sm text-neutral-700 flex-1">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {/* Clinical Skills */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                <Stethoscope size={16} />
                <span className="uppercase tracking-wide font-medium">Interventional Procedures</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.clinical.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                <Languages size={16} />
                <span className="uppercase tracking-wide font-medium">Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
