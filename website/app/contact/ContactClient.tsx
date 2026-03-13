'use client';

import { useState } from 'react';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';
import HandDrawnCircle from '@/components/animations/HandDrawnCircle';
import SectionCard from '@/components/ui/SectionCard';
import ContactIllustration from '@/components/illustrations/ContactIllustration';
import FAQAccordion from '@/components/sections/FAQAccordion';
import { YellowButton } from '@/components/ui/Buttons';
import { Mail, MapPin, Phone } from 'lucide-react';

const subjects = ['General Inquiry', 'Order Support', 'Custom Orders', 'Wholesale', 'Partnership', 'Other'];

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email';
    if (!formData.subject) errs.subject = 'Please select a subject';
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Info + Illustration */}
        <div className="flex-1 lg:max-w-[45%]">
          <AnimateOnScroll variant="fadeInLeft">
            <h1 className="text-3xl md:text-5xl font-black text-dynazur-black mb-4">
              Get in <HandDrawnCircle>Touch</HandDrawnCircle>
            </h1>
            <p className="text-dynazur-text leading-relaxed mb-8">
              Have a question, feedback, or a custom order in mind? We&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-dynazur-text">
                <div className="w-10 h-10 rounded-full bg-dynazur-bg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-dynazur-blue" />
                </div>
                <span>hello@dynazur.com</span>
              </div>
              <div className="flex items-center gap-3 text-dynazur-text">
                <div className="w-10 h-10 rounded-full bg-dynazur-bg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-dynazur-blue" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-dynazur-text">
                <div className="w-10 h-10 rounded-full bg-dynazur-bg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-dynazur-blue" />
                </div>
                <span>Worldwide — We ship to 12+ countries</span>
              </div>
            </div>

            <ContactIllustration className="w-full max-w-sm mx-auto hidden lg:block" />
          </AnimateOnScroll>
        </div>

        {/* Right: Form */}
        <div className="flex-1">
          <AnimateOnScroll variant="fadeInRight">
            <SectionCard>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl">✓</div>
                  <h2 className="text-2xl font-black text-dynazur-black mb-2">Message Sent!</h2>
                  <p className="text-dynazur-text">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-dynazur-black mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-btn border text-sm text-dynazur-black bg-dynazur-bg/50 transition-colors focus:outline-none focus:ring-2 focus:ring-dynazur-blue ${errors.name ? 'border-red-500' : 'border-dynazur-gray/40'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-dynazur-black mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-btn border text-sm text-dynazur-black bg-dynazur-bg/50 transition-colors focus:outline-none focus:ring-2 focus:ring-dynazur-blue ${errors.email ? 'border-red-500' : 'border-dynazur-gray/40'}`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-dynazur-black mb-1.5">Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-btn border text-sm text-dynazur-black bg-dynazur-bg/50 transition-colors focus:outline-none focus:ring-2 focus:ring-dynazur-blue ${errors.subject ? 'border-red-500' : 'border-dynazur-gray/40'}`}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-dynazur-black mb-1.5">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-btn border text-sm text-dynazur-black bg-dynazur-bg/50 transition-colors focus:outline-none focus:ring-2 focus:ring-dynazur-blue resize-none ${errors.message ? 'border-red-500' : 'border-dynazur-gray/40'}`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <YellowButton type="submit" className="w-full">Send Message</YellowButton>
                </form>
              )}
            </SectionCard>
          </AnimateOnScroll>
        </div>
      </div>

      {/* FAQ */}
      <SectionCard>
        <h2 className="text-2xl md:text-4xl font-black text-dynazur-black text-center mb-10">
          Frequently Asked Questions
        </h2>
        <FAQAccordion />
      </SectionCard>
    </div>
  );
}
