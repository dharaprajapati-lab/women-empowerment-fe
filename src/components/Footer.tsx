import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const BRAND_NAME = "NAMO Foundation";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms of Service", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-[#101b2a] text-white px-5 py-12 sm:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-heading text-2xl font-bold text-[#c9921a]"
            >
              {BRAND_NAME}
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm italic">
              "Advancing Access to Justice through Research, Law, and Policy"
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="font-semibold text-lg text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9921a] shrink-0" />
                <span>Registered Address At: - B-1/55 Sector-18, Rohini, Delhi – 110089</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9921a] shrink-0" />
                <a href="mailto:namofoundation05@gmail.com" className="hover:text-white transition-colors">
                  namofoundation05@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9921a] shrink-0" />
                <span>+91-88824 66864</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}