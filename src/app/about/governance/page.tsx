import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
// import CopyableValue from "./CopyableValue";
import {
  ClipboardCheck,
  FileCheck2,
  Landmark,
  ReceiptText,
  Scale,
  ShieldCheck,
  Eye,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Governance | NAMO Foundation",
  description:
    "Learn about NAMO Foundation's governance, accountability, compliance, and transparency practices.",
};

const principles = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear reporting, open communication, and responsible disclosure to communities, donors, and partners.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    desc: "Strong internal systems, periodic reviews, and board oversight across programmes and finances.",
  },
  {
    icon: Scale,
    title: "Ethics",
    desc: "Zero tolerance for discrimination, exploitation, corruption, abuse, or misuse of resources.",
  },
  {
    icon: Users,
    title: "Community Voice",
    desc: "Community feedback, grievance redressal, and participatory planning are central to our governance.",
  },
];

const corporateRegistrations = [
  { label: "CIN", value: "U88900DL2025NPL448860" },
  { label: "MCA Registration No.", value: "448860" },
  { label: "Section 8 Licence No.", value: "168967" },
  { label: "PAN", value: "AAKCN5013B" },
  { label: "TAN", value: "DELN30583A" },
  { label: "GSTIN", value: "07AAKCN5013B1ZW" },
];

const regulatoryRegistrations = [
  { label: "CSR-1 Registration", value: "CSR00106838" },
  { label: "12A Registration", value: "AAKCN5013BE20251" },
  { label: "80G Registration", value: "AAKCN5013BF20261" },
  { label: "NITI Aayog Darpan", value: "DL/2025/0692219" },
  { label: "Udyam Registration", value: "UDYAM-DL-06-0187204" },
  { label: "Date of Incorporation", value: "22 May 2025" },
  { label: "Type", value: "Section 8 Not-for-Profit" },
];

const committees = [
  {
    icon: Landmark,
    title: "Board Governance Committee",
    desc: "Oversees institutional direction, policy, leadership accountability, and strategic risk.",
  },
  {
    icon: ReceiptText,
    title: "Finance & Audit Committee",
    desc: "Reviews budgets, audits, controls, statutory compliance, and responsible fund utilization.",
  },
  {
    icon: ClipboardCheck,
    title: "Programme Review Committee",
    desc: "Monitors programme quality, impact indicators, safeguarding, and community feedback.",
  },
];

export default function GovernancePage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="Governance"
        subtitle="Our commitment to transparency, ethical practice, statutory compliance, and accountable community development."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Governance" },
        ]}
      />

      {/* Intro */}
      <section className="px-5 py-24 sm:px-8 border-b border-[#e2c8bf]/30 bg-white">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
              Our Philosophy
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[#120a06] sm:text-[42px]">
              Trust is built
              <br />
              through accountability.
            </h2>

            <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-[#5e514a]">
              <p>
                NAMO Foundation follows a governance model designed to protect
                community interest, ensure responsible use of resources, and
                maintain transparency with donors, public institutions,
                partners, and the communities we serve.
              </p>
              <p>
                Our systems include board oversight, statutory compliance,
                financial audits, safeguarding practices, conflict-of-interest
                declarations, and field-level feedback mechanisms.
              </p>
            </div>
          </div>

          {/* Signature element: an engraved seal, literal to the idea of
              certification rather than a generic icon-in-a-circle. */}
          <div className="relative overflow-hidden rounded-[8px] bg-[#8b2635] p-10 text-white shadow-xl">
            <svg
              viewBox="0 0 200 200"
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 opacity-[0.08]"
            >
              <circle cx="100" cy="100" r="92" fill="none" stroke="white" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="78" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
              <circle cx="100" cy="100" r="64" fill="none" stroke="white" strokeWidth="1.5" />
            </svg>

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/25 mb-8">
              <FileCheck2 className="h-4 w-4 text-white/85" />
            </div>

            <h3 className="relative font-heading text-[26px] font-medium leading-tight tracking-[-0.02em]">
              Responsible systems for meaningful impact.
            </h3>

            <p className="relative mt-6 text-[15px] leading-[1.75] text-white/80">
              Governance at NAMO Foundation is not limited to compliance. It is a
              daily practice of stewardship, ethical decision-making, and public
              trust.
            </p>

            <div className="relative mt-8 flex items-center gap-2 border-t border-white/15 pt-6 text-[12px] uppercase tracking-[0.15em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Registered Section 8 entity
            </div>
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mx-auto mb-16 max-w-[740px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
              Statutory Details
            </p>
            <h2 className="mt-3 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#120a06] sm:text-[42px]">
              Compliance & Registrations
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#5e514a]">
              We maintain required registrations, certifications, and reporting
              systems to ensure lawful and transparent operations. Tap any value
              to copy it.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[8px] bg-[#e2c8bf]/40 lg:grid-cols-2">
            {[
              { title: "Corporate & Tax Registration", icon: Landmark, items: corporateRegistrations },
              { title: "Regulatory Registrations", icon: ShieldCheck, items: regulatoryRegistrations },
            ].map((group) => (
              <div key={group.title} className="bg-[#faf9f6] p-8 md:p-10">
                <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#e2c8bf]/40 pb-4">
                  <h3 className="flex items-center gap-2.5 text-[16px] font-bold text-[#120a06]">
                    <group.icon className="h-4 w-4 text-[#8b2635]" aria-hidden="true" />
                    {group.title}
                  </h3>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#7a6d65]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    Active
                  </span>
                </div>

                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 py-2.5 border-b border-[#e2c8bf]/25 last:border-0"
                    >
                      <span className="text-[13px] text-[#7a6d65] shrink-0">{item.label}</span>
                      {/* <CopyableValue value={item.value} /> */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white px-5 py-24 sm:px-8 border-t border-[#e2c8bf]/30">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
              Governance Principles
            </p>
            <h2 className="mt-3 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#120a06] sm:text-[42px]">
              How We Stay Accountable
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[8px] bg-[#e2c8bf]/40 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white p-8 md:p-10 transition-colors motion-safe:duration-300 hover:bg-[#faf9f6]"
              >
                <div className="relative mx-auto flex h-12 w-12 items-center justify-center transition-transform motion-safe:duration-300 group-hover:-translate-y-0.5">
                  <div className="absolute inset-0 rounded-full bg-[#8b2635]/[0.06] transition-colors group-hover:bg-[#8b2635]/[0.1]" />
                  <Icon className="relative w-5 h-5 text-[#8b2635]" />
                </div>

                <h3 className="mt-7 text-center text-[18px] font-bold text-[#120a06]">
                  {title}
                </h3>

                <p className="mt-3 text-center text-[14px] leading-relaxed text-[#5e514a]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees — presented as a chain of oversight, since the content
          itself is a hierarchy (board -> finance -> programme), not a flat list. */}
      <section className="bg-[#faf9f6] px-5 py-24 sm:px-8 border-t border-[#e2c8bf]/30">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
              Governance Structure
            </p>
            <h2 className="mt-4 font-heading text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[#120a06] sm:text-[42px]">
              Committees that
              <br />
              strengthen oversight.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-[#5e514a]">
              Our committees support the board and leadership team in reviewing
              risks, monitoring programme quality, and ensuring ethical use of
              funds.
            </p>
          </div>

          <ol className="relative">
            {committees.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="relative flex gap-6 pb-10 last:pb-0">
                {/* connecting spine */}
                {i < committees.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-6 top-12 h-[calc(100%-2.75rem)] w-px bg-[#e2c8bf]"
                  />
                )}

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e2c8bf] bg-white">
                  <Icon className="w-5 h-5 text-[#8b2635]" aria-hidden="true" />
                </div>

                <div className="rounded-[8px] border border-[#e2c8bf]/50 bg-white p-6 sm:p-7 transition-shadow motion-safe:duration-300 hover:shadow-md">
                  <h3 className="text-[18px] font-bold text-[#120a06]">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5e514a]">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}