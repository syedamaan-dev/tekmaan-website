import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Full name cannot exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid work or personal email address." }),
  company: z
    .string()
    .max(100, { message: "Company name cannot exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, { message: "Please select a service or area of interest." }),
  budget: z
    .string()
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Please provide at least a brief summary (minimum 10 characters)." })
    .max(2500, { message: "Message is too long. Please keep under 2500 characters." }),
  // Honeypot spam trap: must be empty
  honeypot: z.string().max(0, { message: "Bot submission detected." }).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
