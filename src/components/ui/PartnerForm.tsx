"use client";

import { useState } from "react";
import {
  partnerFormSchema,
  PARTNER_TRACKS,
  PARTNER_MESSAGE_MAX,
  type PartnerFormData,
} from "@/lib/validation";
import { CONTACT_INBOX } from "@/lib/links";

const inputClasses =
  "w-full rounded-btn bg-paper-warm border border-line px-4 py-3 text-[15px] text-ink-deep placeholder:text-ink-faint transition-colors focus:outline-none focus:border-earn-sage";
const labelClasses = "block text-sm font-medium text-ink-deep mb-1.5";
const errorClasses = "text-clay text-sm mt-1.5";

type FormState = {
  name: string;
  email: string;
  organization: string;
  track: PartnerFormData["track"];
  size: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  track: PARTNER_TRACKS[0],
  size: "",
  message: "",
};

const PartnerForm = () => {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const validation = partnerFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: typeof errors = {};
      validation.error.errors.forEach((error) => {
        const key = error.path[0] as keyof FormState | undefined;
        if (key && !fieldErrors[key]) {
          fieldErrors[key] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Static-hosting friendly: open the visitor's email client with the
    // inquiry prefilled. No backend required.
    try {
      const { name, email, organization, track, size, message } =
        validation.data;
      const sizeText = size?.trim() ? size.trim() : "—";
      const subject = encodeURIComponent(
        `[Drift Partners] ${track} — ${organization}`
      );
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\nTrack: ${track}\nSize: ${sizeText}\n\n${message}`
      );
      window.location.href = `mailto:${CONTACT_INBOX}?subject=${subject}&body=${body}`;
      setSubmitStatus("success");
      setFormData(initialState);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="partner-name" className={labelClasses}>
          Name
        </label>
        <input
          type="text"
          id="partner-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="Your name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "partner-name-error" : undefined}
        />
        {errors.name && (
          <p id="partner-name-error" className={errorClasses}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="partner-email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="partner-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="you@example.com"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "partner-email-error" : undefined}
        />
        {errors.email && (
          <p id="partner-email-error" className={errorClasses}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="partner-organization" className={labelClasses}>
          Organization or handle
        </label>
        <input
          type="text"
          id="partner-organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="Your school, team, or @handle"
          aria-invalid={errors.organization ? true : undefined}
          aria-describedby={
            errors.organization ? "partner-organization-error" : undefined
          }
        />
        {errors.organization && (
          <p id="partner-organization-error" className={errorClasses}>
            {errors.organization}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="partner-track" className={labelClasses}>
          Track
        </label>
        <select
          id="partner-track"
          name="track"
          value={formData.track}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          aria-invalid={errors.track ? true : undefined}
          aria-describedby={errors.track ? "partner-track-error" : undefined}
        >
          {PARTNER_TRACKS.map((track) => (
            <option key={track} value={track}>
              {track}
            </option>
          ))}
        </select>
        {errors.track && (
          <p id="partner-track-error" className={errorClasses}>
            {errors.track}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="partner-size" className={labelClasses}>
          Approx. number of people (optional)
        </label>
        <input
          type="text"
          id="partner-size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          disabled={isSubmitting}
          className={inputClasses}
          placeholder="e.g. about 200"
          aria-invalid={errors.size ? true : undefined}
          aria-describedby={errors.size ? "partner-size-error" : undefined}
        />
        {errors.size && (
          <p id="partner-size-error" className={errorClasses}>
            {errors.size}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="partner-message" className={labelClasses}>
          How would you share Drift, or what do you need?
        </label>
        <textarea
          id="partner-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          rows={5}
          maxLength={PARTNER_MESSAGE_MAX}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us a bit about your audience or needs…"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            errors.message
              ? "partner-message-error partner-message-count"
              : "partner-message-count"
          }
        />
        <div className="flex items-start justify-between gap-3">
          {errors.message ? (
            <p id="partner-message-error" className={errorClasses}>
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <p
            id="partner-message-count"
            className={`text-sm mt-1.5 shrink-0 ${
              formData.message.length > PARTNER_MESSAGE_MAX
                ? "text-clay"
                : "text-ink-faint"
            }`}
          >
            {formData.message.length}/{PARTNER_MESSAGE_MAX}
          </p>
        </div>
      </div>

      {submitStatus === "success" && (
        <div
          role="status"
          className="rounded-btn bg-earn-sage-lo border border-line px-4 py-3 text-earn-sage text-[15px]"
        >
          Your email app should open with your message ready to send. If it
          doesn&apos;t, email us at{" "}
          <a href={`mailto:${CONTACT_INBOX}`} className="underline">
            {CONTACT_INBOX}
          </a>
          .
        </div>
      )}
      {submitStatus === "error" && (
        <div
          role="alert"
          className="rounded-btn bg-clay-lo border border-line px-4 py-3 text-bark text-[15px]"
        >
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
        {isSubmitting ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
};

export default PartnerForm;
