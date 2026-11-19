"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_SUBJECTS } from "@/constants";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Please write at least a brief message"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass = cn(
  "w-full font-body text-sm text-[#174D3A] bg-transparent border-b-2 border-[#174D3A]/20 py-3 px-0",
  "focus:outline-none focus:border-[#174D3A] transition-colors placeholder:text-[#174D3A]/40"
);

const errorClass = "font-body text-xs text-[#F06442] mt-1";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="size-16 rounded-full bg-[#174D3A] flex items-center justify-center mb-6">
          <CheckCircle className="text-[#A8C77D]" size={32} />
        </div>
        <h3 className="font-display font-700 text-2xl text-[#174D3A] uppercase mb-3">
          Message Received
        </h3>
        <p className="font-body text-sm text-[#174D3A]/70 max-w-sm leading-relaxed">
          Thank you for reaching out to De Future Audacious. Your message has been received and we will be in touch.
        </p>
        <p className="font-body text-xs text-[#174D3A]/40 mt-4 max-w-xs leading-relaxed">
          Note: form submission integration is pending. For immediate correspondence, please use the email address above.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-8"
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="fullName"
            className="font-body text-xs font-semibold uppercase tracking-widest text-[#174D3A]/60 block mb-2"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className={errorClass} role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-body text-xs font-semibold uppercase tracking-widest text-[#174D3A]/60 block mb-2"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="your@email.com"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="font-body text-xs font-semibold uppercase tracking-widest text-[#174D3A]/60 block mb-2"
        >
          Subject *
        </label>
        <select
          id="subject"
          className={cn(inputClass, "cursor-pointer bg-transparent")}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject}
          {...register("subject")}
        >
          <option value="">Select a subject</option>
          {CONTACT_SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="subject-error" className={errorClass} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-body text-xs font-semibold uppercase tracking-widest text-[#174D3A]/60 block mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClass, "resize-none")}
          placeholder="Tell us how we can help or how you would like to connect…"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          size="xl"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
