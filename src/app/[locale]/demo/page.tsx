import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DemoForm } from "./demo-form";

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("demo");

  const translations = {
    eyebrow: t("eyebrow"),
    heading: t("heading"),
    description: t("description"),
    points: [t("point1"), t("point2"), t("point3"), t("point4")],
    formTitle: t("formTitle"),
    formDescription: t("formDescription"),
    firstName: t("firstName"),
    lastName: t("lastName"),
    orgName: t("orgName"),
    role: t("role"),
    email: t("email"),
    orgType: t("orgType"),
    teamSize: t("teamSize"),
    currentTools: t("currentTools"),
    mattersLegend: t("mattersLegend"),
    required: t("required"),
    selectPlaceholder: t("selectPlaceholder"),
    placeholderFirstName: t("placeholderFirstName"),
    placeholderLastName: t("placeholderLastName"),
    placeholderOrgName: t("placeholderOrgName"),
    placeholderRole: t("placeholderRole"),
    placeholderEmail: t("placeholderEmail"),
    placeholderCurrentTools: t("placeholderCurrentTools"),
    orgTypes: [
      { value: "Charity", label: t("orgTypeCharity") },
      { value: "Foundation", label: t("orgTypeFoundation") },
      { value: "Association", label: t("orgTypeAssociation") },
      { value: "Other", label: t("orgTypeOther") },
    ],
    mattersOptions: [
      { value: "Donor management", label: t("mattersDonor") },
      { value: "Postal campaigns", label: t("mattersPostal") },
      { value: "Online giving", label: t("mattersOnlineGiving") },
      { value: "Grant management", label: t("mattersGrants") },
      { value: "GDPR compliance", label: t("mattersGdpr") },
      { value: "All of the above", label: t("mattersAll") },
    ],
    submitButton: t("submitButton"),
    submitting: t("submitting"),
    footerNote: t("footerNote"),
    successTitle: t("successTitle"),
    successDescription: t("successDescription"),
    errorFallback: t("errorFallback"),
  };

  return (
    <>
      <Navigation />
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <DemoForm translations={translations} />
      </main>
      <Footer />
    </>
  );
}
