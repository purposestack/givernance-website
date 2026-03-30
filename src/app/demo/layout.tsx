import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a demo — Givernance",
  description:
    "See Givernance in action. Book a 30-minute on-screen walkthrough with our team and discover how Givernance can transform your nonprofit's donor management.",
  openGraph: {
    title: "Book a demo — Givernance",
    description:
      "See Givernance in action. Book a 30-minute on-screen walkthrough with our team.",
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
