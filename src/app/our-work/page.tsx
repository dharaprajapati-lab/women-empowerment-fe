import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  Scale,
  GraduationCap,
  HeartPulse,
  Gavel,
  Handshake,
  Users,
  Briefcase,
  BrainCircuit,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | NAMO Foundation",
  description:
    "Explore NAMO Foundation's thematic areas of work and our core organisational strengths.",
};

const thematicAreas = [
  { icon: HeartPulse, label: "Health" },
  { icon: GraduationCap, label: "Education" },
  { icon: Briefcase, label: "Livelihood" },
  { icon: BrainCircuit, label: "Capacity Building" },
  { icon: Handshake, label: "Cooperative Governance" },
  { icon: Users, label: "Community Outreach" },
  { icon: Scale, label: "Research & Policy" },
  { icon: Gavel, label: "Judicial Intervention" },
  { icon: Scale, label: "Legal Aid" },
];

const strengths = [
  {
    title: "Multidisciplinary expertise",
    desc: "A diverse team of former senior government officials, mental health practitioners, advocates, policy researchers, education specialists, and development practitioners with expertise spanning governance, law, child rights, education, public policy, social development, and community engagement.",
  },
  {
    title: "High-level institutional access",
    desc: "Deep engagement with government ministries, statutory commissions, judicial institutions, international organisations, academic bodies, and civil society networks, enabling informed policy dialogue, strategic partnerships, and effective institutional collaboration.",
  },
  {
    title: "Evidence-to-policy pathway",
    desc: "Combining rigorous research, legal analysis, field insights, and stakeholder consultations to translate evidence and lived realities into actionable policy recommendations, institutional reforms, and implementation-focused solutions.",
  },
  {
    title: "Convening power",
    desc: "Bringing together policymakers, health and mental wellbeing practitioners, legal experts, researchers, educators, practitioners, and community stakeholders to foster dialogue, build consensus, and address complex governance and social challenges through collaborative action.",
  },
];

export default function OurWorkPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="Our Work"
        subtitle="Decoding Complexities. Delivering Impact."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
      />

      {/* 1. Thematic Areas Section */}
      <section className="px-5 py-20 sm:px-8 bg-white border-b border-[#e2c8bf]/30">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="inline-block text-[#8b2635] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-[#8b2635]/5">
              What We Do
            </span>
            <h2 className="font-heading text-[32px] md:text-[42px] font-medium tracking-[-0.035em] text-[#120a06]">
              Thematic Areas of Work
            </h2>
            <p className="mt-4 text-[16px] text-[#5e514a] leading-relaxed">
              We operate across diverse sectors to ensure a holistic approach to
              social and structural challenges, bridging grassroots realities with
              institutional frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thematicAreas.map(({ icon: Icon, label }, index) => (
              <div
                key={`${label}-${index}`}
                className="group flex items-center gap-5 bg-[#faf9f6] border border-[#e2c8bf]/50 rounded-[16px] p-6 hover:bg-white hover:shadow-xl hover:border-[#8b2635]/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#e2c8bf]/50 text-[#8b2635] shadow-sm group-hover:bg-[#8b2635] group-hover:border-[#8b2635] group-hover:text-white transition-all duration-300">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-[18px] font-semibold text-[#120a06] group-hover:text-[#8b2635] transition-colors">
                  {label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Organisational Strengths Section */}
      <section className="px-5 py-24 sm:px-8 bg-[#faf9f6]">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="inline-block text-[#c9921a] text-[12px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full bg-[#c9921a]/5">
              Our Edge
            </span>
            <h2 className="font-heading text-[32px] md:text-[42px] font-medium tracking-[-0.035em] text-[#120a06]">
              Organisational Strengths
            </h2>
            <p className="mt-4 text-[16px] text-[#5e514a] leading-relaxed">
              Our capabilities are defined by deep expertise, strategic access, and
              a commitment to translating evidence into real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={strength.title}
                className="relative bg-white border border-[#e2c8bf]/40 rounded-[20px] p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Background Number */}
                <span className="absolute top-2 right-6 text-[110px] font-heading font-bold text-[#8b2635]/[0.03] leading-none pointer-events-none select-none">
                  0{index + 1}
                </span>
                
                <div className="relative z-10">
                  <div className="w-12 h-[3px] bg-[#c9921a] rounded-full mb-6"></div>
                  <h3 className="font-heading text-[22px] font-bold text-[#120a06] mb-4">
                    {strength.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5e514a]">
                    {strength.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}