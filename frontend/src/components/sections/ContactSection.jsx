import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Check } from 'lucide-react';
import { personalInfo } from '../../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Notion style */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">📬</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Get in Touch
          </h2>
        </div>
        <p className="text-neutral-500 mb-12 max-w-2xl">
          For professional inquiries, collaboration opportunities, or speaking engagements, please reach out through any of the following channels.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-md hover:border-neutral-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <Mail size={20} className="text-neutral-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="font-medium text-neutral-900">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-md hover:border-neutral-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <Phone size={20} className="text-neutral-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Phone</p>
                  <p className="font-medium text-neutral-900">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg hover:shadow-md hover:border-neutral-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                  <Linkedin size={20} className="text-neutral-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">LinkedIn</p>
                  <p className="font-medium text-neutral-900">Connect on LinkedIn</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-lg">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-neutral-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Location</p>
                  <p className="font-medium text-neutral-900">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Affiliations */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">World Headache Society:</span>{' '}
                drpravinthomas@worldheadachesociety.org
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-semibold text-neutral-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <p className="text-xs text-neutral-500 mt-4 text-center">
              *This is a demo form. Messages are not actually sent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
