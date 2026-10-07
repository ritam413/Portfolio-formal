"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Zap,
  Code2,
  Check,
  Copy,
  Mail,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export type PersonaType = "recruiter" | "freelance" | "collab" | null;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPersona?: PersonaType;
}

interface FormData {
  // Recruiter
  engagementType: string;
  company: string;
  role: string;
  jobIdOrUrl: string;
  jobDesc: string;
  recruiterEmail: string;

  // Freelance
  projectType: string;
  timeframe: string;
  budget: string;
  freelanceScope: string;
  freelanceEmail: string;

  // Collab
  collabName: string;
  collabRepo: string;
  collabPaid: string;
  collabStack: string;
  collabPitch: string;
  collabEmail: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialPersona = null,
}) => {
  const [step, setStep] = useState<number>(0);
  const [persona, setPersona] = useState<PersonaType>(initialPersona);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    engagementType: "Full-time",
    company: "",
    role: "",
    jobIdOrUrl: "",
    jobDesc: "",
    recruiterEmail: "",

    projectType: "Full-Stack Web App",
    timeframe: "1 Month",
    budget: "$1,000 – $3,000",
    freelanceScope: "",
    freelanceEmail: "",

    collabName: "",
    collabRepo: "",
    collabPaid: "Paid / Bounty",
    collabStack: "AI / ML Pipeline",
    collabPitch: "",
    collabEmail: "",
  });

  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => {
    if (isOpen) handleClose();
  });

  // Handle Initial Persona and Reset
  useEffect(() => {
    if (isOpen) {
      if (initialPersona) {
        setPersona(initialPersona);
        setStep(1);
      } else {
        setPersona(null);
        setStep(0);
      }
      setIsSent(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialPersona]);

  // Lock Body Scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard Navigation: Esc to close, Enter to continue
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "Enter" && step > 0 && step < 4) {
        if ((e.target as HTMLElement).tagName !== "TEXTAREA") {
          e.preventDefault();
          handleNext();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, step, persona]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(0);
      setPersona(null);
      setIsSent(false);
    }, 200);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      if (step === 1) {
        setStep(0);
        setPersona(null);
      } else {
        setStep((prev) => prev - 1);
      }
    }
  };

  const selectPersona = (p: PersonaType) => {
    setPersona(p);
    setStep(1);
  };

  // Compile Formatted Markdown Brief
  const compileBrief = (): string => {
    if (persona === "recruiter") {
      return `[RECRUITMENT OPPORTUNITY]\n• Company: ${formData.company || "Our Team"}\n• Position: ${formData.role || "Software Engineer"} (${formData.engagementType})\n• Job Spec / Link: ${formData.jobIdOrUrl || "N/A"}\n• Details: ${formData.jobDesc || "Engineering role opening"}\n• Recruiter Contact: ${formData.recruiterEmail || "N/A"}`;
    } else if (persona === "freelance") {
      return `[FREELANCE COMMISSION]\n• Deliverable: ${formData.projectType}\n• Delivery Timeline: ${formData.timeframe}\n• Budget Range: ${formData.budget}\n• Project Details: ${formData.freelanceScope || "Custom project build"}\n• Client Contact: ${formData.freelanceEmail || "N/A"}`;
    } else {
      return `[COLLABORATION INVITATION]\n• Collaborator: ${formData.collabName || "Fellow Builder"}\n• Repo / Link: ${formData.collabRepo || "N/A"}\n• Compensation: ${formData.collabPaid}\n• Desired Stack: ${formData.collabStack}\n• Vision & Pitch: ${formData.collabPitch || "Let's build something great together"}\n• Contact: ${formData.collabEmail || "N/A"}`;
    }
  };

  const handleCopy = () => {
    const text = compileBrief();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendViaResend = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ persona, data: formData }),
      });
      const data = await res.json();
      if (data.success) {
        setIsSent(true);
      } else {
        // Fallback to mailto if API fails
        handleMailtoFallback();
      }
    } catch (err) {
      console.error("Failed to send email:", err);
      handleMailtoFallback();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const toEmail = "ritam413@gmail.com";
    let subject = "";
    let body = "";

    if (persona === "recruiter") {
      subject = `[Recruitment] ${formData.role || "Engineering"} Opportunity at ${formData.company || "Company"} (${formData.engagementType})`;
      body = `Hi Ritam,\n\nI'm reaching out regarding a ${formData.engagementType} role as ${formData.role || "Software Engineer"} at ${formData.company || "our company"}.\n\nJob Link: ${formData.jobIdOrUrl || "N/A"}\n\nDetails:\n${formData.jobDesc || ""}\n\nBest regards,\n${formData.recruiterEmail || ""}`;
    } else if (persona === "freelance") {
      subject = `[Freelance Project] ${formData.projectType} — ${formData.budget}`;
      body = `Hi Ritam,\n\nWe would like to commission a ${formData.projectType}.\n• Target Timeline: ${formData.timeframe}\n• Estimated Budget: ${formData.budget}\n\nScope:\n${formData.freelanceScope || ""}\n\nContact: ${formData.freelanceEmail || ""}`;
    } else {
      subject = `[Collaboration] Project with ${formData.collabName || "Builder"} — ${formData.collabPaid}`;
      body = `Hey Ritam,\n\nI'd love to collaborate on a project (${formData.collabPaid}).\n• Repo / Link: ${formData.collabRepo || "N/A"}\n• Stack: ${formData.collabStack}\n\nPitch:\n${formData.collabPitch || ""}\n\nContact: ${formData.collabEmail || ""}`;
    }

    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const progressPercent = step === 0 ? 0 : (step / 4) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2e2c2c]/50 backdrop-blur-md"
        >
          {/* TOAST PILL */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 px-4 py-2 bg-[#2e2c2c] text-white text-xs font-semibold rounded-full shadow-2xl pointer-events-none"
              >
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Brief copied to clipboard!</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* MODAL DIALOG CONTAINER */}
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.96, opacity: 0, y: 8 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 8 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-[580px] bg-white border border-[#cfc6c7] rounded-2xl shadow-typewolf-lg overflow-hidden flex flex-col font-sans"
          >
            {/* TOP PROGRESS BAR & HEADER */}
            <div className="relative flex items-center justify-between px-6 py-4 border-b border-[#cfc6c7]/50 bg-[#faf7f7]">
              <div className="absolute top-0 inset-x-0 h-[3px] bg-[#eee6e6]">
                <div
                  className="h-full bg-[#916a70] transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {step > 0 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#654a4e] bg-white hover:bg-[#f4efef] border border-[#cfc6c7] rounded-md transition-all active:scale-95 cursor-pointer shadow-typewolf-subtle"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
              ) : (
                <span className="font-dia text-[11px] font-extrabold uppercase tracking-wider text-[#654a4e]">
                  Connect With Ritam
                </span>
              )}

              <span className="font-mono text-[11px] font-semibold text-[#654a4e] uppercase tracking-wider">
                {step === 0 ? "CHOOSE TRACK" : `STEP ${step} OF 4`}
              </span>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="w-7 h-7 flex items-center justify-center rounded-md border border-[#cfc6c7] bg-white text-[#654a4e] hover:text-[#443235] hover:bg-[#f0eaea] transition-all active:scale-95 cursor-pointer shadow-typewolf-subtle"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* STEP BODY */}
            <div className="px-6 py-6 min-h-[310px] flex flex-col justify-center">
              {/* STEP 0: PERSONA SELECTOR (21ST.DEV CARD-26 LINKCARD STYLE) */}
              {step === 0 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="font-serif text-2xl font-bold text-[#443235]">
                      How would you like to connect?
                    </h2>
                    <p className="text-xs text-[#654a4e]">
                      Select a track below for an interactive, tailored walkthrough.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {/* RECRUITER CARD */}
                    <div
                      onClick={() => selectPersona("recruiter")}
                      className="group relative flex flex-col bg-white border border-[#cfc6c7] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:border-[#443235] hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                    >
                      <div className="relative w-full h-24 bg-gradient-to-br from-[#f0e6e7] to-[#e3d2d4] flex items-center justify-center border-b border-[#cfc6c7]/50">
                        <Briefcase className="w-8 h-8 text-[#443235] group-hover:scale-110 transition-transform duration-300" />
                        <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border border-[#cfc6c7] flex items-center justify-center text-[10px] text-[#443235] group-hover:bg-[#443235] group-hover:text-white transition-colors">
                          ↗
                        </span>
                      </div>
                      <div className="p-3 flex flex-col flex-1 justify-between space-y-1">
                        <div className="font-bold text-xs text-[#443235]">
                          💼 Recruiter
                        </div>
                        <p className="text-[11px] text-[#654a4e] leading-tight">
                          Full-time, internship, or contract engineering roles.
                        </p>
                      </div>
                    </div>

                    {/* FREELANCE CARD */}
                    <div
                      onClick={() => selectPersona("freelance")}
                      className="group relative flex flex-col bg-white border border-[#cfc6c7] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:border-[#443235] hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                    >
                      <div className="relative w-full h-24 bg-gradient-to-br from-[#e8ede7] to-[#d5dfd4] flex items-center justify-center border-b border-[#cfc6c7]/50">
                        <Zap className="w-8 h-8 text-[#2d4a3e] group-hover:scale-110 transition-transform duration-300" />
                        <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border border-[#cfc6c7] flex items-center justify-center text-[10px] text-[#443235] group-hover:bg-[#443235] group-hover:text-white transition-colors">
                          ↗
                        </span>
                      </div>
                      <div className="p-3 flex flex-col flex-1 justify-between space-y-1">
                        <div className="font-bold text-xs text-[#443235]">
                          ⚡ Freelance
                        </div>
                        <p className="text-[11px] text-[#654a4e] leading-tight">
                          Commission custom web apps, MVPs, or AI pipelines.
                        </p>
                      </div>
                    </div>

                    {/* COLLABORATOR CARD */}
                    <div
                      onClick={() => selectPersona("collab")}
                      className="group relative flex flex-col bg-white border border-[#cfc6c7] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:border-[#443235] hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                    >
                      <div className="relative w-full h-24 bg-gradient-to-br from-[#e6edf5] to-[#d3dfeb] flex items-center justify-center border-b border-[#cfc6c7]/50">
                        <Code2 className="w-8 h-8 text-[#2c3e50] group-hover:scale-110 transition-transform duration-300" />
                        <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border border-[#cfc6c7] flex items-center justify-center text-[10px] text-[#443235] group-hover:bg-[#443235] group-hover:text-white transition-colors">
                          ↗
                        </span>
                      </div>
                      <div className="p-3 flex flex-col flex-1 justify-between space-y-1">
                        <div className="font-bold text-xs text-[#443235]">
                          🤝 Collaborator
                        </div>
                        <p className="text-[11px] text-[#654a4e] leading-tight">
                          Hackathons, bounties, and open-source tools.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* RECRUITER QUESTIONNAIRE */}
              {persona === "recruiter" && (
                <div className="space-y-4">
                  {step === 1 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          Company Name & Role Title
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          What team and position are you reaching out for?
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {["Full-time", "Internship", "Contract / Part-time"].map(
                          (t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  engagementType: t,
                                }))
                              }
                              className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                                formData.engagementType === t
                                  ? "bg-[#443235] border-[#443235] text-white"
                                  : "bg-white border-[#cfc6c7] text-[#654a4e] hover:bg-[#f8f5f5]"
                              }`}
                            >
                              {t}
                            </button>
                          )
                        )}
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Company Name (e.g. Stripe, Acme, Stealth AI)"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              company: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                          autoFocus
                        />
                        <input
                          type="text"
                          placeholder="Role Title (e.g. AI / Full-Stack Engineer)"
                          value={formData.role}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              role: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          Job ID, Spec & Description
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Provide a job link or brief role details.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Job ID or Listing URL (optional)"
                          value={formData.jobIdOrUrl}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              jobIdOrUrl: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                          autoFocus
                        />
                        <textarea
                          placeholder="Brief notes on stack, team, or location (Remote / Hybrid)..."
                          value={formData.jobDesc}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              jobDesc: e.target.value,
                            }))
                          }
                          rows={3}
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          Your Work Email
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Where should I send my portfolio & resume follow-up?
                        </p>
                      </div>
                      <input
                        type="email"
                        placeholder="recruiter@company.com"
                        value={formData.recruiterEmail}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            recruiterEmail: e.target.value,
                          }))
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              )}

              {/* FREELANCE QUESTIONNAIRE */}
              {persona === "freelance" && (
                <div className="space-y-4">
                  {step === 1 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          What do you want to build?
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Select the deliverable type and key features.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {[
                          "Full-Stack Web App",
                          "AI / LLM Pipeline",
                          "MVP / Prototype",
                          "API / Backend",
                        ].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                projectType: t,
                              }))
                            }
                            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                              formData.projectType === t
                                ? "bg-[#443235] border-[#443235] text-white"
                                : "bg-white border-[#cfc6c7] text-[#654a4e] hover:bg-[#f8f5f5]"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <textarea
                        placeholder="Brief summary of requirements or features needed..."
                        value={formData.freelanceScope}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            freelanceScope: e.target.value,
                          }))
                        }
                        rows={3}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all resize-none"
                        autoFocus
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          Delivery Timeframe & Budget
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Help me understand your target deadline and budget tier.
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-dia text-[10px] font-extrabold uppercase tracking-wider text-[#654a4e]">
                          Target Delivery
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            "Urgent (< 2 weeks)",
                            "1 Month",
                            "2-3 Months",
                            "Flexible",
                          ].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  timeframe: t,
                                }))
                              }
                              className={`px-3 py-1 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                                formData.timeframe === t
                                  ? "bg-[#443235] border-[#443235] text-white"
                                  : "bg-white border-[#cfc6c7] text-[#654a4e] hover:bg-[#f8f5f5]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <label className="font-dia text-[10px] font-extrabold uppercase tracking-wider text-[#654a4e]">
                          Budget Range
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            "< $1,000",
                            "$1,000 – $3,000",
                            "$3,000 – $5,000",
                            "$5,000+",
                          ].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, budget: b }))
                              }
                              className={`px-3 py-1 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                                formData.budget === b
                                  ? "bg-[#443235] border-[#443235] text-white"
                                  : "bg-white border-[#cfc6c7] text-[#654a4e] hover:bg-[#f8f5f5]"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          Your Email Address
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Where should I send the proposal and timeline estimate?
                        </p>
                      </div>
                      <input
                        type="email"
                        placeholder="client@company.com"
                        value={formData.freelanceEmail}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            freelanceEmail: e.target.value,
                          }))
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              )}

              {/* COLLABORATOR QUESTIONNAIRE */}
              {persona === "collab" && (
                <div className="space-y-4">
                  {step === 1 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          Your Name & Repo Link
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Who is building and where is the project repository?
                        </p>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Your Name or Team Handle"
                          value={formData.collabName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              collabName: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                          autoFocus
                        />
                        <input
                          type="text"
                          placeholder="GitHub / GitLab Repo or Demo URL"
                          value={formData.collabRepo}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              collabRepo: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          Compensation & Stack Needed
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          What is the compensation model and technical focus?
                        </p>
                      </div>
                      <div className="space-y-1.5">
                        <label className="font-dia text-[10px] font-extrabold uppercase tracking-wider text-[#654a4e]">
                          Compensation Model
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            "Paid / Bounty",
                            "Unpaid / Hackathon",
                            "Rev-Share / Equity",
                          ].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  collabPaid: t,
                                }))
                              }
                              className={`px-3 py-1 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                                formData.collabPaid === t
                                  ? "bg-[#443235] border-[#443235] text-white"
                                  : "bg-white border-[#cfc6c7] text-[#654a4e] hover:bg-[#f8f5f5]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <label className="font-dia text-[10px] font-extrabold uppercase tracking-wider text-[#654a4e]">
                          Skillset Needed
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {[
                            "AI / ML Pipeline",
                            "Next.js Frontend",
                            "FastAPI Backend",
                            "Architecture",
                          ].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  collabStack: s,
                                }))
                              }
                              className={`px-3 py-1 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                                formData.collabStack === s
                                  ? "bg-[#443235] border-[#443235] text-white"
                                  : "bg-white border-[#cfc6c7] text-[#654a4e] hover:bg-[#f8f5f5]"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235]">
                          The Vision & Contact
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Tell me why this is exciting and how to reach you.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="text"
                          placeholder="Your Email / Discord / Telegram Handle"
                          value={formData.collabEmail}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              collabEmail: e.target.value,
                            }))
                          }
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all"
                          autoFocus
                        />
                        <textarea
                          placeholder="What problem are we solving together?..."
                          value={formData.collabPitch}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              collabPitch: e.target.value,
                            }))
                          }
                          rows={3}
                          className="w-full px-3.5 py-2.5 bg-white border border-[#cfc6c7] rounded-lg text-sm text-[#443235] focus:outline-none focus:border-[#443235] focus:ring-2 focus:ring-[#443235]/10 transition-all resize-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: FINAL SUMMARY & DUAL DISPATCH */}
              {step === 4 && (
                <div className="space-y-3.5">
                  {isSent ? (
                    <div className="py-6 text-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[#443235]">
                        Inquiry Received!
                      </h3>
                      <p className="text-xs text-[#654a4e] max-w-sm mx-auto">
                        Thank you for reaching out. Your tailored brief has been dispatched directly to Ritam's inbox.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#443235] flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-[#916a70]" />
                          <span>Ready to Dispatch!</span>
                        </h3>
                        <p className="text-xs text-[#654a4e]">
                          Your brief is pre-formatted. Choose how you'd like to send it:
                        </p>
                      </div>

                      <div className="p-3.5 bg-[#faf7f7] border border-[#cfc6c7] rounded-xl font-mono text-xs text-[#443235] whitespace-pre-wrap leading-relaxed max-h-[160px] overflow-y-auto">
                        {compileBrief()}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* STEP FOOTER */}
            {step > 0 && (
              <div className="px-6 py-4 bg-[#faf7f7] border-t border-[#cfc6c7]/50 flex items-center justify-between gap-3">
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#443235] hover:bg-[#2e2c2c] text-white font-bold text-xs rounded-lg transition-all active:scale-[0.98] cursor-pointer shadow-typewolf-subtle"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : isSent ? (
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full py-2.5 px-4 bg-[#443235] hover:bg-[#2e2c2c] text-white font-bold text-xs rounded-lg transition-all active:scale-[0.98] cursor-pointer shadow-typewolf-subtle"
                  >
                    Done & Close
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white hover:bg-[#f4efef] border border-[#cfc6c7] text-[#443235] font-bold text-xs rounded-lg transition-all active:scale-[0.98] cursor-pointer shadow-typewolf-subtle"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Brief</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaResend}
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#443235] hover:bg-[#2e2c2c] text-white font-bold text-xs rounded-lg transition-all active:scale-[0.98] cursor-pointer shadow-typewolf-subtle disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-3.5 h-3.5" />
                          <span>Send Directly</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
