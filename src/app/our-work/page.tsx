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
  TrendingUp,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | NAMO Foundation",
  description: "Explore NAMO Foundation's thematic areas of work and our core organisational strengths.",
};

const thematicAreas1 = [
  { icon: Scale, label: "Research & Policy" },
  { icon: GraduationCap, label: "Education" },
  { icon: HeartPulse, label: "Health" },
  { icon: Gavel, label: "Judicial Intervention" },
  { icon: Handshake, label: "Cooperative Governance" },
  { icon: Users, label: "Community Outreach" },
  { icon: Scale, label: "Legal Aid" },
  { icon: Briefcase, label: "Livelihood" },
  { icon: BrainCircuit, label: "Capacity Building" },
];

const strengths1 = [
  {
    title: "Multidisciplinary expertise",
    desc: "A diverse team of former senior government officials, advocates, policy researchers, education specialists, and development practitioners with expertise spanning governance, law, child rights, education, public policy, social development, and community engagement.",
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
    desc: "Bringing together policymakers, legal experts, researchers, educators, practitioners, and community stakeholders to foster dialogue, build consensus, and address complex governance and social challenges through collaborative action.",
  },
];

const thematicAreas2 = [
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

const strengths2 = [
  {
    title: "Multidisciplinary expertise",
    desc: "A diverse team of former senior government officials, mental health practioners, advocates, policy researchers, education specialists, and development practitioners with expertise spanning governance, law, child rights, education, public policy, social development, and community engagement.",
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
    desc: "Bringing together policymakers, health and mental wellbeing practioners, legal experts, researchers, educators, practitioners, and community stakeholders to foster dialogue, build consensus, and address complex governance and social challenges through collaborative action.",
  },
];

export default function OurWorkPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="Our Work"
        subtitle="How we work: Decoding Complexities. Delivering Impact."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 border-b border-[#e2c8bf]/50">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Thematic Areas & Organisational Strengths
            </h2>
            <p className="mt-4 text-[#9f2f1f] font-semibold italic text-[15px]">
              Decoding Complexities. Delivering Impact.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Thematic Areas */}
            <div>
              <h3 className="font-heading text-[28px] font-medium text-[#130a06] mb-8 text-center lg:text-left">
                Thematic areas of work
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {thematicAreas1.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-[8px] border border-[#e2c8bf] shadow-sm text-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c9921a] text-white mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[13px] font-semibold text-[#130a06]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organisational Strengths */}
            <div>
              <h3 className="font-heading text-[28px] font-medium text-[#130a06] mb-8 text-center lg:text-left">
                Organisational strengths
              </h3>
              <div className="space-y-6">
                {strengths1.map((strength) => (
                  <div
                    key={strength.title}
                    className="flex items-start gap-4 p-6 bg-white rounded-[8px] border border-[#e2c8bf] shadow-sm"
                  >
                    <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-[#c9921a] text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-[18px] font-semibold text-[#130a06] mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-[14px] leading-relaxed text-[#675953]">
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: HOW WE WORK */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f] mb-4">
              HOW WE WORK
            </p>
            <h2 className="font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Thematic Areas & Organisational Strengths
            </h2>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Thematic Areas */}
            <div>
              <h3 className="font-heading text-[28px] font-medium text-[#130a06] mb-8 text-center lg:text-left">
                Thematic areas of work
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {thematicAreas2.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center p-6 bg-white rounded-[8px] border border-[#e2c8bf] shadow-sm text-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#9f2f1f] text-white mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[13px] font-semibold text-[#130a06]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organisational Strengths */}
            <div>
              <h3 className="font-heading text-[28px] font-medium text-[#130a06] mb-8 text-center lg:text-left">
                Organisational strengths
              </h3>
              <div className="space-y-6">
                {strengths2.map((strength) => (
                  <div
                    key={strength.title}
                    className="flex items-start gap-4 p-6 bg-white rounded-[8px] border border-[#e2c8bf] shadow-sm"
                  >
                    <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-[#9f2f1f] text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-[18px] font-semibold text-[#130a06] mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-[14px] leading-relaxed text-[#675953]">
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
