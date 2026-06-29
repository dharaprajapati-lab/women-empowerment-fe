import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Shield, Users, HeartHandshake, Building, Calendar, Users2, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "SANKALP: Building Safer Campuses | NAMO Foundation",
  description: "Project Sankalp is a multi-tiered awareness, sensitization, survivor-support, and empowerment initiative in Bhopal.",
};

const tiers = [
  {
    icon: Shield,
    title: "Prevention Through Awareness",
    desc: "Anti-ragging norms, gender-based violence, mental health awareness, grooming, trafficking & digital safety",
  },
  {
    icon: HeartHandshake,
    title: "Building Safe, Inclusive & Mental Health-Responsive Institutions",
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
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="SANKALP: Building Safer Campuses"
        subtitle="FLAGSHIP PROJECT AT BHOPAL"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: "SANKALP" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1000px]">
          <div className="rounded-[12px] bg-white border border-[#e2c8bf] p-8 md:p-12 shadow-sm mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-[#c9921a] text-white">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-[24px] md:text-[28px] font-medium text-[#130a06]">
                Towards Safer Campuses and Better Mental Well-being
              </h2>
            </div>
            
            <div className="space-y-6 text-[15px] leading-relaxed text-[#5f514a]">
              <p>
                <strong>Project Sankalp</strong> is a multi-tiered awareness, sensitization, survivor-support, and empowerment initiative launched in August 2025 in Bhopal, Madhya Pradesh. The project was conceived in response to growing concerns regarding the safety, dignity, and well-being of students and young people within educational institutions.
              </p>
              <p>
                Recent national data underscores the urgency of such interventions, with 51 ragging-related deaths reported across the country and 3,156 complaints registered through the National Anti-Ragging Helpline from 1,946 educational institutions nationwide.
              </p>
              <p>
                The initiative addresses critical issues affecting students and young people, including ragging, gender-based violence, sexual exploitation, grooming, trafficking vulnerabilities, mental health concerns, and institutional silence within educational spaces. Moving beyond conventional awareness campaigns, Project Sankalp integrates legal literacy, gender sensitization, mental health awareness, ethical responsibility, reporting awareness, survivor rehabilitation, and institutional capacity-building into a comprehensive framework aimed at creating safer, more inclusive, accountable, and mental health-responsive campuses.
              </p>
              <p>
                A unique aspect of the initiative is the active involvement of trained survivors who draw upon their lived experiences to educate, inspire, and empower others while rebuilding their own confidence, dignity, leadership, and financial independence.
              </p>
              <p>
                Through this survivor-led approach, Project Sankalp seeks to foster a culture of empathy, accountability, resilience, and collective responsibility within educational institutions.
              </p>
            </div>
          </div>

          <div className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f] mb-3">
              FLAGSHIP PROJECT AT BHOPAL
            </p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              A Four-Tier Empowerment Model
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {tiers.map((tier) => (
              <div key={tier.title} className="bg-white rounded-[12px] border border-[#e2c8bf] p-8 text-center shadow-sm flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c9921a] text-white mb-6">
                  <tier.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-[18px] font-semibold text-[#130a06] mb-4">
                  {tier.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-[#675953]">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Conference Banner */}
          <div className="rounded-[12px] bg-[#416754] border border-[#2d4d3e] p-8 md:p-12 text-white shadow-md flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading text-[28px] font-medium">
                  Sankalp Conference 2026
                </h3>
              </div>
              <p className="text-[15px] leading-relaxed text-white/90">
                10 June 2026 • LNCT Group Campus, Bhopal — the flagship awareness gathering convening human-rights, mental health, child-protection and social-work voices alongside students and faculty.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 min-w-[200px]">
              <div className="flex items-center gap-3">
                <Users2 className="h-5 w-5 text-[#c9921a]" />
                <span className="font-semibold text-[#c9921a]">10,000+ reached</span>
                <span className="text-[12px] text-white/70">Aug'25–Jun'26</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-[#c9921a]" />
                <span className="font-semibold text-[#c9921a]">Multiple FIR's lodged</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
