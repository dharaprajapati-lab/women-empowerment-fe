import Link from "next/link";

const BRAND_NAME = "Women";
// Change to "WAMMCO" if needed.

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms of Service", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#dcc5bd] bg-[#eadad5] px-5 py-9 sm:px-8">
      <div className="mx-auto flex max-w-[1220px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="font-heading text-[18px] font-semibold text-[#9f2f1f]"
          >
            {BRAND_NAME}
          </Link>

          <p className="mt-2 text-[11px] text-[#6b5c55]">
            © {new Date().getFullYear()} Community Development. All rights
            reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] font-medium text-[#2a1a12] transition-colors hover:text-[#9f2f1f]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}