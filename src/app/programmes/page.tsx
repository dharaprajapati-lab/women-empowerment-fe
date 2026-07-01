import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Shield,
  Gavel,
  Scale,
  Server,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programmes | NAMO Foundation",
  description:
    "Explore our Key Initiatives and Flagship Programmes driving impact across India.",
};

const flagshipProgrammes = [
  {
    title: "SANKALP: Building Safer Campuses",
    location: "Bhopal, Madhya Pradesh",
    desc: "A multi-tiered awareness, sensitization, survivor-support, and empowerment initiative addressing mental health, ragging, and student safety.",
    href: "/programmes/sankalp",
  },
  {
    title: "Waste Managers Cooperative (WAMMCO)",
    location: "National Initiative",
    desc: "Incubating a community-led, worker-owned waste management system that prioritizes worker health, safety, and collective bargaining.",
    href: "/programmes/wammco",
  },
  {
    title: "Labour Rights & Welfare Camps",
    location: "Pan-India Reach",
    desc: "Large-scale Health & Welfare Camps and Labour Rights conferences reaching 13,000+ unorganized sector workers across multiple states to advocate for their rights and well-being.",
    href: "/programmes/west-bengal-outreach",
  },
];

const healthWellbeingInitiatives = [
  {
    type: "Report Release",
    title: "Intrusion on Civilization: Lowering the Age of Consent",
    desc: 'Successfully released the report titled "Intrusion on Civilization: Lowering the Age of Consent – Analysing Its Impact". The report was formally released by the Hon\'ble Member of the National Human Rights Commission (NHRC), alongside Designated Senior Advocates of the Supreme Court of India, and contributed to the national discourse on the implications of lowering the age of consent. With a strong focus on health, the report highlighted how such legal changes could affect adolescent physical and mental well-being. It underscored the need for safeguarding young individuals through robust health systems, awareness, and protective frameworks that prioritize their holistic development and long-term welfare.',
    icon: BookOpen,
  },
  {
    type: "Round Table",
    title: "Impact of Lowering Age of Consent on Adolescent Well-being",
    desc: "In Collaboration with the SGT University, Gurugram, Haryana. The roundtable brought together medical professionals, mental health practitioners, legal experts, academicians, and child rights specialists to examine the potential impact of lowering the age of consent on adolescent reproductive health and mental well-being. The discussions explored the implications of such a policy shift on physical and sexual health, psychological development, access to healthcare services, and the overall well-being of adolescents.",
    icon: Users,
  },
  {
    type: "University Dialogue",
    title: "Age of Consent & Adolescent Reproductive Health",
    desc: "Organized at Firodia Law College, Pune. A Dialogue on lowering the age of consent under the POCSO Act, 2012 from 18 to 16 years, where students, legal professionals, health and mental well-being practitioners, and academicians weighed its health, socio-legal, and developmental implications. The talks spanned across adolescent rights, child protection, reproductive and sexual health, mental well-being, and the law's effect on vulnerable children, while urging evidence-based, child-centric policymaking on any amendment.",
    icon: Scale,
  },
  {
    type: "Seminar",
    title: "Adolescent Reproductive Health & Mental Well-being",
    desc: "A seminar organized bringing together Health and Mental being practitioners and policymakers to deliberate on emerging challenges and policy considerations relating to Adolescent Reproductive and Sexual Health and Mental well-being in collaboration with the National Association for Reproductive and Child Health of India. The discussion facilitated evidence-based dialogue on the implementation of the POCSO Act, judicial developments, and strengthening safeguards for children through informed policy interventions.",
    icon: Shield,
  },
];

const strategicInitiatives = [
  {
    title: "Narrative Amplification for Mobilization & Outcomes",
    desc: "Facilitating informed public dialogue by amplifying diverse community voices, translating complex evidence into clear and accessible insights, and fostering inclusive conversations that bridge gaps between stakeholders. This approach helps shape narratives that not only influence policy discourse but also guide institutional priorities toward more equitable and responsive outcomes.",
    icon: BookOpen,
  },
  {
    title: "Age of Consent Discourse & Judicial Sensitisation Campaign",
    desc: "Nationwide public awareness and legal engagement initiative/campaign was organized on child protection laws and POCSO. Multiple digital discussions were held which has an engagement of over 62,900 participants and supported interventions before the Supreme Court",
    icon: Scale,
  },
  {
    title:
      "Standardisation of Traditional Practices: Orientation Programme on Livelihood Opportunities for Schedule Caste Communities",
    desc: "Facilitated the launch of the Malhar Certification Initiative for the Jhatka Method, supporting efforts towards the standardisation, institutional recognition, and promotion of traditional practices through stakeholder engagement and policy dialogue, while also contributing to the protection and preservation of religious faith.",
    icon: Shield,
  },
  {
    title: "Advancing Passenger Safety Through Regulatory Accountability",
    desc: "Multiple fatal fire incidents involving sleeper buses highlighted critical gaps in passenger safety and regulatory oversight. Representations were submitted to the concerned government departments seeking information from relevant authorities regarding safety standards, compliance mechanisms, and enforcement practices governing sleeper bus operations. The initiative helped bring greater attention to systemic safety concerns and contributed to ongoing discussions on strengthening regulatory safeguards and accountability in public transport.",
    icon: Server,
  },
  {
    title: "Strategic Interventions in case of Age of Consent discourse",
    desc: "Facilitated and supported 11 intervention applications before the Hon'ble Supreme Court of India on the issues relating to the lowering of age of consent under the POCSO Act, 2012 By bringing together members of the legal fraternity, medical professionals, researchers, academicians, and child rights practitioners, the initiative sought to promote a nuanced understanding of adolescent relationships, child protection concerns, and the broader social and legal consequences of proposed changes to the law.",
    icon: Gavel,
  },
  {
    title:
      "Contributing to Building Trust in India's Digital Ecosystem : DPDP and Allied Issues",
    desc: "Contributed to the evolving discourse on the DPDP Act, 2023 as a necessary regulatory response to India's rapidly expanding digital ecosystem. Through stakeholder engagement and knowledge exchange, the initiative highlighted the need for a balanced framework that safeguards individual privacy, establishes accountability for data fiduciaries, and builds public trust in digital governance. By fostering informed dialogue on data rights, compliance, and institutional responsibility, the initiative supported a broader understanding of DPDP as a critical step in strengthening India's digital governance architecture.",
    icon: Server,
  },
  {
    title: "Strategic Intervention in case of Freedom of Religion",
    desc: "Supported the filing of 18 Intervention Applications before the Hon'ble Supreme Court of India, concerning challenges to various State Freedom of Religion legislations. The interventions placed on record detailed factual inputs and ground realities relating to cases involving alleged coercion, inducement, misrepresentation, and deception in matters of religious conversion, particularly affecting women and children. The initiative sought to assist the Court by presenting factual material and documented instances relevant to the issues under consideration in the ongoing constitutional challenge.",
    icon: Gavel,
  },
];

export default function ProgrammesPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="Programmes & Initiatives"
        subtitle="Driving systemic change through research, judicial intervention, and community outreach."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes" },
        ]}
      />

      {/* --- 1. FLAGSHIP: MODERN BENTO GRID --- */}
      <section className="px-5 py-24 sm:px-8 border-b border-[#e2c8bf]/30 bg-white">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
              Our Core Interventions
            </p>
            <h2 className="mt-4 font-heading text-[36px] font-medium leading-[1.05] tracking-[-0.035em] text-[#120a06] sm:text-[42px]">
              Flagship Programmes
            </h2>
            <p className="mt-4 text-[16px] text-[#5e514a] max-w-2xl leading-relaxed">
              Large-scale initiatives aimed at creating sustainable structural impact.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2">
            {/* Main Feature - SANKALP */}
            <Link
              href={flagshipProgrammes[0].href}
              className="group relative md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl bg-[#8b2635] text-white transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
            >
              <div className="relative flex h-full min-h-[400px] flex-col justify-between p-8 sm:p-12">
                <div>
                  <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/80">
                    {flagshipProgrammes[0].location}
                  </span>
                  <h3 className="mt-6 max-w-[500px] font-heading text-[32px] sm:text-[38px] font-medium leading-tight tracking-tight">
                    {flagshipProgrammes[0].title}
                  </h3>
                </div>
                
                <div>
                  <p className="max-w-lg text-[15px] leading-relaxed text-white/70 mb-8">
                    {flagshipProgrammes[0].desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[13px] font-bold text-white">
                    Explore Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/[0.03] blur-2xl transition-all group-hover:bg-white/[0.06]" />
              </div>
            </Link>

            {/* WAMMCO */}
            <Link
              href={flagshipProgrammes[1].href}
              className="group relative overflow-hidden rounded-2xl bg-[#f0e8e4] p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]/60">
                {flagshipProgrammes[1].location}
              </span>
              <h3 className="mt-4 font-heading text-[22px] font-bold leading-tight text-[#120a06] group-hover:text-[#8b2635] transition-colors">
                {flagshipProgrammes[1].title}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-[#5e514a] line-clamp-4">
                {flagshipProgrammes[1].desc}
              </p>
              <div className="absolute bottom-8 right-8 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                <ArrowRight className="h-5 w-5 text-[#8b2635]" />
              </div>
            </Link>

            {/* Pan-India Labour Rights */}
            <Link
              href={flagshipProgrammes[2].href}
              className="group relative overflow-hidden rounded-2xl bg-[#1a1210] text-white p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                {flagshipProgrammes[2].location}
              </span>
              <h3 className="mt-4 font-heading text-[22px] font-bold leading-tight text-white/90 group-hover:text-white transition-colors">
                {flagshipProgrammes[2].title}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-white/50 line-clamp-4">
                {flagshipProgrammes[2].desc}
              </p>
              <div className="absolute bottom-8 right-8 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. HEALTH: EDITORIAL STICKY SIDEBAR --- */}
      <section className="px-5 py-24 sm:px-8 bg-[#faf9f6]">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-16 lg:grid-cols-[320px_1fr]">
            
            {/* Sticky Sidebar */}
            <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
                Sector Focus
              </p>
              <h2 className="mt-4 font-heading text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-[#120a06]">
                Health & Mental Well-being
              </h2>
              <div className="mt-6 h-px w-10 bg-[#e2c8bf]" />
              <p className="mt-6 text-[14px] leading-relaxed text-[#675953]">
                Research, dialogues, and seminars bridging policy with adolescent and community health.
              </p>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden mb-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
                Sector Focus
              </p>
              <h2 className="mt-3 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#120a06] sm:text-[42px]">
                Health & Mental Well-being
              </h2>
            </div>

            {/* Content Stack */}
            <div className="space-y-6">
              {healthWellbeingInitiatives.map((initiative, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-[#e2c8bf]/30 bg-white p-8 sm:p-10 transition-all duration-300 hover:shadow-md hover:border-[#8b2635]/20"
                >
                  <div className="flex items-start justify-between gap-6 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0e8e4]">
                        <initiative.icon className="w-4 h-4 text-[#8b2635]" />
                      </div>
                      <span className="rounded-full bg-[#8b2635]/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#8b2635]">
                        {initiative.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-[#120a06] mb-4 leading-tight">
                    {initiative.title}
                  </h3>
                  
                  <p className="text-[15px] leading-[1.8] text-[#5e514a]">
                    {initiative.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. STRATEGIC: NUMBERED MASONRY GRID --- */}
      <section className="bg-white px-5 py-24 sm:px-8 border-t border-[#e2c8bf]/30">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
              Policy & Law
            </p>
            <h2 className="mt-3 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#120a06] sm:text-[42px]">
              Strategic Interventions
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {strategicInitiatives.map((initiative, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-[#e2c8bf]/30 bg-[#faf9f6] p-8 sm:p-10 transition-all duration-300 hover:shadow-md hover:border-[#8b2635]/20"
              >
                <span className="absolute -top-4 -right-2 text-[100px] font-bold leading-none text-[#e2c8bf]/40 select-none group-hover:text-[#8b2635]/10 transition-colors duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-[18px] font-bold text-[#120a06] leading-tight max-w-[85%]">
                      {initiative.title}
                    </h3>
                    <div className="mt-1.5 shrink-0">
                      <initiative.icon className="w-4 h-4 text-[#8b2635]/40" />
                    </div>
                  </div>
                  
                  <p className="text-[14px] leading-[1.75] text-[#5e514a]">
                    {initiative.desc}
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