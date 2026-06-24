import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  ArrowRight,
  ClipboardCheck,
  Eye,
  FileCheck2,
  Landmark,
  ReceiptText,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance | WAMMCO",
  description:
    "Learn about WAMMCO's governance, accountability, compliance, and transparency practices.",
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

const registrations = [
  {
    title: "12A Registration",
    desc: "Recognized charitable registration for nonprofit operations.",
  },
  {
    title: "80G Certification",
    desc: "Eligible donations receive applicable tax benefits as per law.",
  },
  {
    title: "FCRA Approved",
    desc: "Authorized to receive eligible foreign contributions.",
  },
  {
    title: "ISO 9001:2015",
    desc: "Quality management standards for organizational systems.",
  },
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
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="Governance"
        subtitle="Our commitment to transparency, ethical practice, statutory compliance, and accountable community development."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Governance" },
        ]}
      />

      {/* Governance Intro */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#9f2f1f] to-[#c97a45]" />

            <h2 className="font-heading text-[36px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Trust is built through accountability.
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#5f514a]">
              WAMMCO follows a governance model designed to protect community
              interest, ensure responsible use of resources, and maintain
              transparency with donors, public institutions, partners, and the
              communities we serve.
            </p>

            <p className="mt-5 text-[16px] leading-8 text-[#5f514a]">
              Our systems include board oversight, statutory compliance,
              financial audits, safeguarding practices, conflict-of-interest
              declarations, and field-level feedback mechanisms.
            </p>
          </div>

          <div className="rounded-[8px] bg-[#c97a45] p-8 text-white shadow-sm sm:p-10">
            <FileCheck2 className="h-9 w-9 text-white/85" />

            <h3 className="mt-10 font-heading text-[34px] font-medium leading-tight tracking-[-0.035em]">
              Responsible systems for meaningful impact.
            </h3>

            <p className="mt-5 text-[15px] leading-7 text-white/80">
              Governance at WAMMCO is not limited to compliance. It is a daily
              practice of stewardship, ethical decision-making, and public trust.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
              Governance Principles
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              How We Stay Accountable
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-7 font-heading text-[22px] font-medium text-[#130a06]">
                  {title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#675953]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mx-auto mb-12 max-w-[740px] text-center">
            <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#9f2f1f] to-[#c97a45]" />

            <h2 className="font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Compliance & Registrations
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#675953]">
              We maintain required registrations, certifications, and reporting
              systems to ensure lawful and transparent operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {registrations.map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/45 p-7 text-center"
              >
                <ShieldCheck className="mx-auto h-7 w-7 text-[#416754]" />

                <h3 className="mt-6 font-heading text-[22px] font-medium text-[#130a06]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#675953]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
              Governance Structure
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Committees that strengthen oversight.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#675953]">
              Our committees support the board and leadership team in reviewing
              risks, monitoring programme quality, and ensuring ethical use of
              funds.
            </p>
          </div>

          <div className="grid gap-5">
            {committees.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-6 sm:flex sm:gap-6"
              >
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f] sm:mb-0">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-heading text-[23px] font-medium text-[#130a06]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-7 text-[#675953]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports CTA */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[950px] rounded-[8px] bg-[#416754] p-10 text-center text-white sm:p-14">
          <FileCheck2 className="mx-auto h-8 w-8 text-white/80" />

          <h2 className="mt-6 font-heading text-[34px] font-medium leading-tight tracking-[-0.035em] sm:text-[44px]">
            Transparency through public reporting.
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-white/80">
            Annual reports, audited statements, policy documents, and programme
            updates help our stakeholders understand how resources are used and
            what impact they create.
          </p>

          <Link
            href="/insights/reports"
            className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-white px-6 py-3 text-[13px] font-bold text-[#315f4b] transition-colors hover:bg-[#f3f3ee]"
          >
            View Reports
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}