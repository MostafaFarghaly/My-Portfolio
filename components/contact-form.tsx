"use client";

import { useState, useId } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  Send,
  Sparkles,
  Loader2,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = (fieldValues: FormState): FormErrors => {
    const errs: FormErrors = {};
    if (!fieldValues.name.trim()) {
      errs.name = "Please enter your name.";
    } else if (fieldValues.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!fieldValues.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!fieldValues.message.trim()) {
      errs.message = "Please write a message.";
    } else if (fieldValues.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    return errs;
  };

  const errors = validate(values);
  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyMessage = () => {
    const formatted = `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${
      values.subject || "Portfolio Inquiry"
    }\n\nMessage:\n${values.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!isFormValid) return;

    setStatus("submitting");

    // Simulate network latency for authentic interactive feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    const emailSubject = encodeURIComponent(
      values.subject.trim() || `Inquiry from ${values.name || "Portfolio Visitor"}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${emailSubject}&body=${emailBody}`;

    window.open(gmailUrl, "_blank");
    setStatus("success");
  };

  const resetForm = () => {
    setValues({ name: "", email: "", subject: "", message: "" });
    setTouched({});
    setStatus("idle");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Quick Email & Gmail Helper Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 text-primary flex items-center justify-center shrink-0">
            <Mail size={19} />
          </div>
          <div className="overflow-hidden">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              DIRECT RECIPIENT
            </span>
            <span className="text-sm font-semibold text-white truncate block">
              {profile.email}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
            aria-label="Copy email address to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>

          {/* Open in Gmail Button */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
              profile.email
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-primary/20 border border-primary/40 text-white hover:bg-primary/30 transition-all active:scale-95"
          >
            <span>Open in Gmail</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Success State */}
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-banner"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Message Prepared &amp; Dispatched!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your email client or Gmail has opened with your message. I typically respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/15 transition-all"
              >
                {copiedMessage ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedMessage ? "Copied Message!" : "Copy Formatted Text"}</span>
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="button button-outline text-xs"
              >
                <RefreshCw size={13} />
                <span>Send Another Message</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Interactive Contact Form */
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Name field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={nameId}
                    className="text-xs font-mono uppercase tracking-wider text-slate-400"
                  >
                    Your Name *
                  </label>
                  {touched.name && !errors.name && (
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <Check size={11} /> Valid
                    </span>
                  )}
                </div>
                <input
                  id={nameId}
                  name="name"
                  type="text"
                  required
                  placeholder="Mostafa Farghaly"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                    touched.name && errors.name
                      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                      : "border-white/10 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
                  }`}
                />
                {touched.name && errors.name && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={emailId}
                    className="text-xs font-mono uppercase tracking-wider text-slate-400"
                  >
                    Email Address *
                  </label>
                  {touched.email && !errors.email && (
                    <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                      <Check size={11} /> Valid
                    </span>
                  )}
                </div>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                    touched.email && errors.email
                      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                      : "border-white/10 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
                  }`}
                />
                {touched.email && errors.email && (
                  <span className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Subject field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={subjectId}
                className="text-xs font-mono uppercase tracking-wider text-slate-400"
              >
                Subject / Role Title
              </label>
              <input
                id={subjectId}
                name="subject"
                type="text"
                placeholder="Software Engineer Role / Project Consultation"
                value={values.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
              />
            </div>

            {/* Message field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={messageId}
                  className="text-xs font-mono uppercase tracking-wider text-slate-400"
                >
                  Message *
                </label>
                {touched.message && !errors.message && (
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <Check size={11} /> Valid
                  </span>
                )}
              </div>
              <textarea
                id={messageId}
                name="message"
                required
                rows={4}
                placeholder="Hello Mostafa, I came across your portfolio and would like to discuss..."
                value={values.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-y min-h-[110px] ${
                  touched.message && errors.message
                    ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                    : "border-white/10 focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30"
                }`}
              />
              {touched.message && errors.message && (
                <span className="text-[11px] text-red-400 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-500 font-mono">
                * Required fields
              </span>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="button button-acid text-sm font-semibold flex items-center gap-2 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Preparing Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      size={15}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
