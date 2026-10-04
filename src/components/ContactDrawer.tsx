"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { X, Mail, Send, CheckCircle, Github, Linkedin, Twitter } from "lucide-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const { profile, bottomCards } = portfolioData;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#F1EBEB] rounded-[20px] border border-[#D2CECE] shadow-2xl p-6 text-[#1C2733]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#D2CECE] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#545454]" />
            <h3 className="text-xl font-extrabold tracking-tight font-outfit">
              Get in Touch
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#D2CECE]/50 hover:bg-[#D2CECE] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-[#1C2733]" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-2">
            <CheckCircle className="w-12 h-12 text-[#27C93F] mx-auto animate-bounce" />
            <h4 className="text-lg font-bold">Message Transmitted!</h4>
            <p className="text-xs text-[#555555]">
              Thanks for reaching out! I will respond promptly to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-[#555555] uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jon Doe"
                className="w-full px-3 py-2 rounded-[6px] bg-white border border-[#D2CECE] text-sm text-[#1C2733] focus:outline-none focus:border-[#7F84D0]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-[#555555] uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@domain.com"
                className="w-full px-3 py-2 rounded-[6px] bg-white border border-[#D2CECE] text-sm text-[#1C2733] focus:outline-none focus:border-[#7F84D0]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-[#555555] uppercase tracking-wider mb-1">
                Message / Collaboration Pitch
              </label>
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Let's build something extraordinary..."
                className="w-full px-3 py-2 rounded-[6px] bg-white border border-[#D2CECE] text-sm text-[#1C2733] focus:outline-none focus:border-[#7F84D0]"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={`mailto:${profile.email}`}
                className="text-xs font-semibold text-[#7F84D0] hover:underline flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
              <button
                type="submit"
                className="px-4 py-2 rounded-[6px] bg-[#545454] text-[#CDFFF1] text-xs font-bold hover:bg-[#383838] transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>Send Message</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
          </form>
        )}

        {/* Social Links Footer */}
        <div className="mt-5 pt-3 border-t border-[#D2CECE] flex items-center justify-center gap-4">
          {bottomCards.contact.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#555555] hover:text-[#1C2733] transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
