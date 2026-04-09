"use client";

import { useState } from "react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight, CheckCircle } from "lucide-react";

const inputClass =
  "rounded-md border border-border bg-bg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary";

const labelClass = "block text-sm font-medium text-text mb-1.5";

interface DemoFormTranslations {
  eyebrow: string;
  heading: string;
  description: string;
  points: string[];
  formTitle: string;
  formDescription: string;
  firstName: string;
  lastName: string;
  orgName: string;
  role: string;
  email: string;
  orgType: string;
  teamSize: string;
  currentTools: string;
  mattersLegend: string;
  required: string;
  selectPlaceholder: string;
  placeholderFirstName: string;
  placeholderLastName: string;
  placeholderOrgName: string;
  placeholderRole: string;
  placeholderEmail: string;
  placeholderCurrentTools: string;
  orgTypes: { value: string; label: string }[];
  mattersOptions: { value: string; label: string }[];
  submitButton: string;
  submitting: string;
  footerNote: string;
  successTitle: string;
  successDescription: string;
  errorFallback: string;
}

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

export function DemoForm({ translations: t }: { translations: DemoFormTranslations }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        throw new Error(data.error ?? t.errorFallback);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.errorFallback);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
      {/* Left: hero text */}
      <FadeIn className="flex flex-col justify-center">
        <SectionEyebrow>{t.eyebrow}</SectionEyebrow>

        <h1 className="mt-6 font-heading text-4xl leading-tight tracking-tight text-text lg:text-5xl">
          {t.heading}
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted">
          {t.description}
        </p>

        <ul className="mt-8 space-y-4">
          {t.points.map((point) => (
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

      {/* Right: form card */}
      <FadeIn delay={0.1}>
        {submitted ? (
          <div className="flex flex-col items-center justify-center rounded-panel border border-border bg-paper p-8 text-center">
            <CheckCircle
              className="h-12 w-12 text-primary"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <h2 className="mt-4 text-xl font-semibold text-text">
              {t.successTitle}
            </h2>
            <p className="mt-3 text-sm text-muted">
              {t.successDescription}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-panel border border-border bg-paper p-8"
          >
            <h2 className="text-lg font-semibold text-text">
              {t.formTitle}
            </h2>
            <p className="mt-1 text-sm text-muted">
              {t.formDescription}
            </p>

            <div className="mt-6 space-y-5">
              {/* First / Last name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    {t.firstName} <span className="text-red-dark" aria-hidden="true">{t.required}</span>
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
                    placeholder={t.placeholderFirstName}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    {t.lastName} <span className="text-red-dark" aria-hidden="true">{t.required}</span>
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
                    placeholder={t.placeholderLastName}
                  />
                </div>
              </div>

              {/* Organisation name */}
              <div>
                <label htmlFor="orgName" className={labelClass}>
                  {t.orgName} <span className="text-red-dark" aria-hidden="true">{t.required}</span>
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
                  placeholder={t.placeholderOrgName}
                />
              </div>

              {/* Role */}
              <div>
                <label htmlFor="role" className={labelClass}>
                  {t.role} <span className="text-red-dark" aria-hidden="true">{t.required}</span>
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
                  placeholder={t.placeholderRole}
                />
              </div>

              {/* Work email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  {t.email} <span className="text-red-dark" aria-hidden="true">{t.required}</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.placeholderEmail}
                />
              </div>

              {/* Org type / Team size */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="orgType" className={labelClass}>
                    {t.orgType}
                  </label>
                  <select
                    id="orgType"
                    name="orgType"
                    value={form.orgType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">{t.selectPlaceholder}</option>
                    {t.orgTypes.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="teamSize" className={labelClass}>
                    {t.teamSize}
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">{t.selectPlaceholder}</option>
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
                  {t.currentTools}
                </label>
                <textarea
                  id="currentTools"
                  name="currentTools"
                  rows={3}
                  value={form.currentTools}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={t.placeholderCurrentTools}
                />
              </div>

              {/* Matters checkboxes */}
              <fieldset>
                <legend className={labelClass}>
                  {t.mattersLegend}
                </legend>
                <div className="mt-2 space-y-2.5">
                  {t.mattersOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex cursor-pointer items-center gap-3 text-sm text-text"
                    >
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={form.matters.includes(option.value)}
                        onChange={handleCheckbox}
                        className="h-4 w-4 rounded border-border accent-primary"
                      />
                      {option.label}
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
              {submitting ? t.submitting : t.submitButton}
              {!submitting && (
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              )}
            </button>

            <p className="mt-4 text-center text-xs text-muted">
              {t.footerNote}
            </p>
          </form>
        )}
      </FadeIn>
    </div>
  );
}
