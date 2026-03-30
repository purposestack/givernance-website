import { LogoMark } from "./logo-mark";
import { PrimaryButton } from "./primary-button";

const productLinks = [
  { label: "Features", href: "#product" },
  { label: "Why switch", href: "#why-switch" },
  { label: "Fundraising", href: "#fundraising" },
  { label: "Security", href: "#security" },
];

const resourceLinks = [
  { label: "Interactive mockups", href: "/mockups" },
  { label: "Documentation", href: "/docs" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Mentions légales", href: "/legal" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-soft" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8" />
              <span className="text-base font-semibold tracking-tight">
                Givernance
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              The GDPR-native CRM for European nonprofits. Calm,
              capable, affordable.
            </p>
            <p className="mt-3 max-w-xs text-sm italic leading-6 text-muted">
              Built by people who believe nonprofits deserve better software.
            </p>
            <div className="mt-6">
              <PrimaryButton label="Book a demo" href="/demo" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-text">Product</h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text">Resources</h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted">
            &copy; {year} Givernance. All rights reserved.
          </p>
          <p className="text-sm text-muted">Designed and hosted in Europe</p>
        </div>
      </div>
    </footer>
  );
}
