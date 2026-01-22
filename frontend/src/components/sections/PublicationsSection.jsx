import React, { useState } from 'react';
import { Book, FileText, Lightbulb, PenTool } from 'lucide-react';
import { publications, editorialRoles, achievements } from '../../data/mock';

const PublicationsSection = () => {
  const [activeTab, setActiveTab] = useState('books');

  const tabs = [
    { id: 'books', label: 'Books', icon: Book },
    { id: 'research', label: 'Research Areas', icon: Lightbulb },
    { id: 'editorial', label: 'Editorial Roles', icon: PenTool },
  ];

  return (
    <section id="publications" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Notion style */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">📖</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Publications & Contributions
          </h2>
        </div>
        <p className="text-neutral-500 mb-8 max-w-2xl">
          Author and editor of medical textbooks, research papers, and journal articles advancing headache medicine.
        </p>

        {/* Tabs - Notion style */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-neutral-200 pb-4">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                <IconComponent size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Books Tab */}
          {activeTab === 'books' && (
            <div className="grid md:grid-cols-2 gap-4">
              {publications.books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-16 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-md flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <Book size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            book.status === 'Published'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}
                        >
                          {book.status}
                        </span>
                        <span className="text-xs text-neutral-500">
                          {book.role}
                        </span>
                      </div>
                      <h3 className="font-semibold text-neutral-900 mb-1 leading-snug">
                        {book.title}
                      </h3>
                      {book.coAuthors && (
                        <p className="text-xs text-neutral-500">
                          {book.coAuthors}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Research Areas Tab */}
          {activeTab === 'research' && (
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {publications.researchAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Lightbulb size={16} className="text-blue-600" />
                    </div>
                    <span className="text-neutral-700">{area}</span>
                    {area.includes('Novel') && (
                      <span className="ml-auto text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                        Discovery
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Editorial Roles Tab */}
          {activeTab === 'editorial' && (
            <div className="space-y-4">
              {editorialRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 rounded-lg p-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {role.journal}
                      </h3>
                      <p className="text-sm text-neutral-500">{role.role}</p>
                    </div>
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <FileText size={18} className="text-neutral-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Key Achievements - Notion callout */}
        <div className="mt-12">
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
            <span className="text-lg">✨</span>
            <span className="uppercase tracking-wide font-medium">Key Achievements</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-white border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">
                    {achievement.type === 'discovery'
                      ? '🔬'
                      : achievement.type === 'leadership'
                      ? '🌟'
                      : '🏆'}
                  </span>
                  <div>
                    <h4 className="font-semibold text-neutral-900">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-neutral-500 mt-1">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
