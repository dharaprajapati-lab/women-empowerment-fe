import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Mail, Quote, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership | WAMMCO",
  description:
    "Meet WAMMCO's leadership team, board members, and advisors guiding our community development work.",
};

const leaders = [
  {
    name: "Dr. Priya Sharma",
    role: "Founder & Executive Director",
    initials: "PS",
    bio: "A social development practitioner with over 25 years of experience in gender justice, livelihoods, and community-led governance.",
  },
  {
    name: "Anjali Mehra",
    role: "Director, Programmes",
    initials: "AM",
    bio: "Leads integrated programmes across public health, education, women’s leadership, and rural livelihoods.",
  },
  {
    name: "Farah Khan",
    role: "Director, Policy & Advocacy",
    initials: "FK",
    bio: "Works with civil society networks and public institutions to strengthen rights-based policy implementation.",
  },
  {
    name: "Rajiv Menon",
    role: "Head, Finance & Compliance",
    initials: "RM",
    bio: "Oversees financial stewardship, statutory compliance, risk management, and donor accountability.",
  },
];

const board = [
  "Justice Asha Rao — Chairperson",
  "Dr. Meera Nair — Public Health Advisor",
  "Prof. S. Krishnan — Education & Research",
  "Nandita Bose — Governance & Compliance",
];

export default function LeadershipPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="Leadership"
        subtitle="Guided by experienced professionals, grassroots wisdom, and a shared commitment to dignity-led development."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Leadership" },
        ]}
      />

      {/* Intro */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#9f2f1f] to-[#c97a45]" />

            <h2 className="font-heading text-[36px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Leadership rooted in service.
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#5f514a]">
              WAMMCO’s leadership brings together development practitioners,
              researchers, community organizers, financial experts, and policy
              advocates. Our role is to support communities with integrity,
              humility, and long-term commitment.
            </p>
          </div>

          <div className="rounded-[8px] bg-[#416754] p-9 text-white sm:p-12">
            <Quote className="h-8 w-8 text-white/75" />

            <p className="mt-8 font-heading text-[30px] font-medium leading-tight tracking-[-0.035em] sm:text-[38px]">
              We lead by listening first. Communities are not beneficiaries of
              change; they are the makers of change.
            </p>

            <p className="mt-7 text-[13px] font-bold uppercase tracking-[0.22em] text-white/70">
              Leadership Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
              Our Team
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Executive Leadership
            </h2>

            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#675953]">
              A multidisciplinary team working across strategy, field
              implementation, partnerships, compliance, and advocacy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((person) => (
              <div
                key={person.name}
                className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#9f2f1f] to-[#c97a45] text-white shadow-sm">
                  <span className="font-heading text-[26px] font-medium">
                    {person.initials}
                  </span>
                </div>

                <h3 className="mt-7 font-heading text-[23px] font-medium leading-tight text-[#130a06]">
                  {person.name}
                </h3>

                <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#9f2f1f]">
                  {person.role}
                </p>

                <p className="mt-5 text-[14px] leading-7 text-[#675953]">
                  {person.bio}
                </p>

                <a
                  href="mailto:info@wammco.org"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-[#9f2f1f] hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
              Oversight & Guidance
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Board and Advisors
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#675953]">
              Our board provides strategic guidance, governance oversight, and
              accountability to ensure that WAMMCO remains mission-led and
              transparent.
            </p>

            <Link
              href="/about/governance"
              className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-[#9f2f1f] px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#842719]"
            >
              View Governance
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-7 sm:p-8">
            <Users className="h-7 w-7 text-[#416754]" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {board.map((member) => (
                <div
                  key={member}
                  className="rounded-[6px] border border-[#ead4cc] bg-[#fbf4f1] p-5 text-[15px] font-medium leading-7 text-[#2a1a12]"
                >
                  {member}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}