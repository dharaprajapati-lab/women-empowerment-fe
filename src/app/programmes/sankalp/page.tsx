import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  Shield,
  Users,
  HeartHandshake,
  Building,
  Calendar,
  Users2,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SANKALP: Building Safer Campuses | NAMO Foundation",
  description:
    "Project Sankalp is a multi-tiered awareness, sensitization, survivor-support, and empowerment initiative in Bhopal.",
};

const tiers = [
  {
    icon: Shield,
    title: "Prevention Through Awareness",
    desc: "Anti-ragging norms, gender-based violence, mental health awareness, grooming, trafficking & digital safety",
  },
  {
    icon: HeartHandshake,
    title: "Building Safe & Inclusive Institutions",
    desc: "Gender equality, consent, emotional well-being and respectful conduct across the campus community",
  },
  {
    icon: Users,
    title: "Survivor Rehabilitation",
    desc: "Rehabilitation, mental health support, economic empowerment & social reintegration of survivors",
  },
  {
    icon: Building,
    title: "Strengthening Institutional Response",
    desc: "Strengthening anti-ragging committees, ICCs, grievance-redressal mechanisms and mental health support mechanisms",
  },
];

export default function SankalpPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="SANKALP"
        subtitle="Building Safer Campuses"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: "SANKALP" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 border-b border-[#e2c8bf]/30 bg-white">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
            <div>
              <div className="mb-10">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#8b2635] mb-4">
                  Flagship Project: Bhopal
                </p>
                <h2 className="font-heading text-[32px] md:text-[40px] font-bold tracking-[-0.02em] text-[#120a06] leading-tight">
                  Towards Safer Campuses and Better Mental Well-being
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-relaxed text-[#5e514a]">
                <p>
                  <strong className="text-[#8b2635]">Project Sankalp</strong> is
                  a multi-tiered awareness, sensitization, survivor-support, and
                  empowerment initiative launched in August 2025 in Bhopal,
                  Madhya Pradesh. The project was conceived in response to
                  growing concerns regarding the safety, dignity, and well-being
                  of students and young people within educational institutions.
                </p>
                <p>
                  Recent national data underscores the urgency of such
                  interventions, with 51 ragging-related deaths reported across
                  the country and 3,156 complaints registered through the
                  National Anti-Ragging Helpline from 1,946 educational
                  institutions nationwide.
                </p>
                <p>
                  The initiative addresses critical issues affecting students and
                  young people, including ragging, gender-based violence, sexual
                  exploitation, grooming, trafficking vulnerabilities, mental
                  health concerns, and institutional silence within educational
                  spaces.
                </p>
                <div className="p-6 bg-[#faf9f6] border-l-4 border-[#c9921a] rounded-r-[8px] my-8">
                  <p className="italic text-[#120a06] font-medium">
                    A unique aspect of the initiative is the active involvement
                    of trained survivors who draw upon their lived experiences to
                    educate, inspire, and empower others while rebuilding their
                    own confidence, dignity, leadership, and financial
                    independence.
                  </p>
                </div>
                <p>
                  Through this survivor-led approach, Project Sankalp seeks to
                  foster a culture of empathy, accountability, resilience, and
                  collective responsibility within educational institutions.
                </p>
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="bg-[#8b2635] text-white p-10 rounded-[8px] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-heading text-[26px] font-bold mb-8">
                    A Four-Tier Empowerment Model
                  </h3>
                  <div className="space-y-8">
                    {tiers.map((tier, index) => (
                      <div key={tier.title} className="flex gap-5">
                        <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#c9921a]">
                          <tier.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-heading text-[18px] font-semibold text-white mb-2">
                            {tier.title}
                          </h4>
                          <p className="text-[14px] text-white/80 leading-relaxed">
                            {tier.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative background */}
                <Shield className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Banner */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="rounded-[8px] bg-white border border-[#e2c8bf]/50 p-10 md:p-14 shadow-sm flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf4f1]">
                  <Calendar className="h-7 w-7 text-[#8b2635]" />
                </div>
                <div>
                  <h3 className="text-[#8b2635] text-[12px] font-bold uppercase tracking-[0.2em] mb-1">
                    Upcoming Event
                  </h3>
                  <h2 className="font-heading text-[32px] font-medium text-[#120a06]">
                    Sankalp Conference 2026
                  </h2>
                </div>
              </div>
              <p className="text-[16px] leading-relaxed text-[#5e514a] max-w-2xl">
                <strong>10 June 2026 • LNCT Group Campus, Bhopal</strong> — the
                flagship awareness gathering convening human-rights, mental
                health, child-protection and social-work voices alongside
                students and faculty.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:border-l lg:border-[#e2c8bf]/50 lg:pl-10 min-w-[280px]">
              <div className="flex items-start gap-4">
                <div className="bg-[#faf9f6] p-3 rounded-full">
                  <Users2 className="h-6 w-6 text-[#c9921a]" />
                </div>
                <div>
                  <span className="block font-heading text-[22px] font-bold text-[#120a06]">
                    10,000+
                  </span>
                  <span className="text-[14px] text-[#675953]">Reached (Aug'25–Jun'26)</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#faf9f6] p-3 rounded-full">
                  <FileText className="h-6 w-6 text-[#c9921a]" />
                </div>
                <div>
                  <span className="block font-heading text-[22px] font-bold text-[#120a06]">
                    Multiple
                  </span>
                  <span className="text-[14px] text-[#675953]">FIR's lodged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
