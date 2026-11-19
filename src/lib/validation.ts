import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const PARTNER_TRACKS = [
  "Marketing partner (free)",
  "Paid team / organization",
  "Not sure yet",
] as const;

export const PARTNER_MESSAGE_MAX = 1000;

export const partnerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  organization: z
    .string()
    .min(2, "Tell us your organization or handle")
    .max(120),
  track: z.enum(PARTNER_TRACKS),
  size: z.string().max(40, "Keep this under 40 characters").optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(
      PARTNER_MESSAGE_MAX,
      `Message must be ${PARTNER_MESSAGE_MAX} characters or fewer`
    ),
});

export type PartnerFormData = z.infer<typeof partnerFormSchema>;
