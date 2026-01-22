import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-3">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {personalInfo.title}
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-neutral-900 mb-3 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {['About', 'Experience', 'Publications', 'Research', 'Contact'].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors text-left"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-neutral-900 mb-3 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Mail size={16} />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Phone size={16} />
                {personalInfo.phone}
              </a>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MapPin size={16} />
                {personalInfo.location}
              </div>
              <a
                href={personalInfo.linkedinUrl || `https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {currentYear} Dr. Pravin Thomas. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">
            Consultant Neurologist | Headache Medicine Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
