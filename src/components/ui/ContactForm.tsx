"use client";

import { useState } from "react";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { CONTACT_INBOX } from "@/lib/links";
import { sendInquiry } from "@/lib/inquiry";

const inputClasses =
  "w-full rounded-btn bg-paper-warm border border-line px-4 py-3 text-[15px] text-ink-deep placeholder:text-ink-faint transition-colors focus:outline-none focus:border-earn-sage";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: typeof errors = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await sendInquiry("contact", validation.data, honeypot);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot: hidden from people, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          type="text"
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-ink-deep mb-1.5"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-clay text-sm mt-1.5">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-ink-deep mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-clay text-sm mt-1.5">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-ink-deep mb-1.5"
        >
          Issue type
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="text-clay text-sm mt-1.5">{errors.subject}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink-deep mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us what's going on…"
        />
        {errors.message && (
          <p className="text-clay text-sm mt-1.5">{errors.message}</p>
        )}
      </div>

      {submitStatus === "success" && (
        <div role="status" className="rounded-btn bg-earn-sage-lo border border-line px-4 py-3 text-earn-sage text-[15px]">
          Thanks for reaching out 🌱 We&apos;ll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div role="alert" className="rounded-btn bg-clay-lo border border-line px-4 py-3 text-bark text-[15px]">
          Something went wrong. Please try again or email us at{" "}
          <a href={`mailto:${CONTACT_INBOX}`} className="underline">
            {CONTACT_INBOX}
          </a>
          .
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-btn bg-cta-bg text-cta-text font-medium px-6 py-3.5 text-[15px] shadow-soft hover:bg-cta-bg-hi hover:-translate-y-[1px] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
