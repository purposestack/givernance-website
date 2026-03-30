"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight, CheckCircle } from "lucide-react";

const inputClass =
  "rounded-md border border-border bg-bg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary";

const labelClass = "block text-sm font-medium text-text mb-1.5";

const MATTERS_OPTIONS = [
  "Donor management",
  "Postal campaigns",
  "Online giving",
  "Grant management",
  "GDPR compliance",
  "All of the above",
];

interface FormData {
  firstName: string;
  lastName: string;
  orgName: string;
  role: string;
  email: string;
  orgType: string;
  teamSize: string;
  currentTools: string;
  matters: string[];
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  orgName: "",
  role: "",
  email: "",
  orgType: "",
  teamSize: "",
  currentTools: "",
  matters: [],
};

export default function DemoPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      matters: e.target.checked
        ? [...prev.matters, value]
        : prev.matters.filter((m) => m !== value),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Navigation />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Two-column layout on desktop */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — hero text */}
          <FadeIn className="flex flex-col justify-center">
            <SectionEyebrow>Book a demo</SectionEyebrow>

            <h1 className="mt-6 font-heading text-4xl leading-tight tracking-tight text-text lg:text-5xl">
              See Givernance in&nbsp;action
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              A 30-minute on-screen walkthrough tailored to your organisation —
              no slides, just the product. We'll show you exactly how Givernance
              fits your donor management, postal campaigns, and GDPR workflow.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Live demo of the full product",
                "Tailored to your team size and context",
                "No commitment required",
                "We reply within 1 business day",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle
                    className="h-4 w-4 shrink-0 text-primary"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right — form card */}
          <FadeIn delay={0.1}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-panel border border-border bg-paper p-8 text-center">
                <CheckCircle
                  className="h-12 w-12 text-primary"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h2 className="mt-4 text-xl font-semibold text-text">
                  Thank you — we'll be in touch within 1 business day.
                </h2>
                <p className="mt-3 text-sm text-muted">
                  We've received your request and will reach out to schedule
                  your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-panel border border-border bg-paper p-8"
              >
                <h2 className="text-lg font-semibold text-text">
                  Request your demo
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Fill in the form and we'll reach out to schedule a time.
                </p>

                <div className="mt-6 space-y-5">
                  {/* First / Last name */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>
                        First name <span className="text-red-dark" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={form.firstName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Marie"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>
                        Last name <span className="text-red-dark" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={form.lastName}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  {/* Organisation name */}
                  <div>
                    <label htmlFor="orgName" className={labelClass}>
                      Organisation name <span className="text-red-dark" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="orgName"
                      name="orgName"
                      type="text"
                      required
                      autoComplete="organization"
                      value={form.orgName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Association des amis du lac"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className={labelClass}>
                      Role / job title <span className="text-red-dark" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      required
                      autoComplete="organization-title"
                      value={form.role}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Fundraising Manager"
                    />
                  </div>

                  {/* Work email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Work email <span className="text-red-dark" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="work email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="marie@association.org"
                    />
                  </div>

                  {/* Org type / Team size */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="orgType" className={labelClass}>
                        Organisation type
                      </label>
                      <select
                        id="orgType"
                        name="orgType"
                        value={form.orgType}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select…</option>
                        <option value="Charity">Charity</option>
                        <option value="Foundation">Foundation</option>
                        <option value="Association">Association</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="teamSize" className={labelClass}>
                        Team size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select…</option>
                        <option value="1-5">1–5</option>
                        <option value="6-20">6–20</option>
                        <option value="21-50">21–50</option>
                        <option value="51-200">51–200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>
                  </div>

                  {/* Current tools */}
                  <div>
                    <label htmlFor="currentTools" className={labelClass}>
                      What are you currently using?
                    </label>
                    <textarea
                      id="currentTools"
                      name="currentTools"
                      rows={3}
                      value={form.currentTools}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Salesforce, Excel, nothing yet…"
                    />
                  </div>

                  {/* Matters checkboxes */}
                  <fieldset>
                    <legend className={labelClass}>
                      What matters most to you?
                    </legend>
                    <div className="mt-2 space-y-2.5">
                      {MATTERS_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center gap-3 text-sm text-text"
                        >
                          <input
                            type="checkbox"
                            value={option}
                            checked={form.matters.includes(option)}
                            onChange={handleCheckbox}
                            className="h-4 w-4 rounded border-border accent-primary"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="mt-4 rounded-md border border-red-light-border bg-red-light-bg px-4 py-3 text-sm text-red-dark"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-green transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Request my demo"}
                  {!submitting && (
                    <ArrowRight
                      className="h-4 w-4"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-muted">
                  We'll reply within 1 business day. No spam, ever.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
