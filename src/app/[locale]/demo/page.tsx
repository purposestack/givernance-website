import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DemoForm } from "./demo-form";

export default function DemoPage() {
  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
