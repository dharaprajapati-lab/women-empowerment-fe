import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, Gavel, Scale, Server, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Programmes | NAMO Foundation",
  description: "Explore our Key Initiatives and Flagship Programmes driving impact across India.",
};

const flagshipProgrammes = [
  {
    title: "SANKALP: Building Safer Campuses",
    location: "Bhopal, Madhya Pradesh",
    desc: "A multi-tiered awareness, sensitization, survivor-support, and empowerment initiative addressing mental health, ragging, and student safety.",
    href: "/programmes/sankalp",
    color: "bg-[#416754]",
  },
  {
    title: "Waste Managers Cooperative (WAMMCO)",
    location: "National Initiative",
    desc: "Incubating a community-led, worker-owned waste management system that prioritizes worker health, safety, and collective bargaining.",
    href: "/programmes/wammco",
    color: "bg-[#c97a45]",
  },
  {
    title: "West Bengal Outreach",
    location: "West Bengal",
    desc: "Large-scale Health & Welfare Camps and Labour Rights conferences reaching 13,000+ unorganized sector workers across the state.",
    href: "/programmes/west-bengal-outreach",
    color: "bg-[#9f2f1f]",
  }
];

const healthWellbeingInitiatives = [
  {
    title: 'Research Report titled "Intrusion on Civilization: Lowering the Age of Consent - Analysing Its Impact"',
    desc: 'Successfully released the report titled "Intrusion on Civilization: Lowering the Age of Consent – Analysing Its Impact". The report was formally released by the Hon\'ble Member of the National Human Rights Commission (NHRC), alongside Designated Senior Advocates of the Supreme Court of India, and contributed to the national discourse on the implications of lowering the age of consent. With a strong focus on health, the report highlighted how such legal changes could affect adolescent physical and mental well-being. It underscored the need for safeguarding young individuals through robust health systems, awareness, and protective frameworks that prioritize their holistic development and long-term welfare.',
    icon: BookOpen
  },
  {
    title: 'Round Table Discussion on Impact of Lowering the Age of Consent on Adolescent Reproductive and Mental Well-being',
    desc: 'In Collaboration with the SGT University, Gurugram, Haryana. The roundtable brought together medical professionals, mental health practitioners, legal experts, academicians, and child rights specialists to examine the potential impact of lowering the age of consent on adolescent reproductive health and mental well-being. The discussions explored the implications of such a policy shift on physical and sexual health, psychological development, access to healthcare services, and the overall well-being of adolescents.',
    icon: Users
  },
  {
    title: 'Dialogue on Age of Consent Dialogue: Implications for Adolescent Reproductive Health and Well- Being',
    desc: 'Firodia Law College, Pune. A Dialogue on lowering the age of consent under the POCSO Act, 2012 from 18 to 16 years, was organised where students, legal professionals, health and mental well-being practioners, academicians, weighed its health, socio-legal, and developmental implications. The talks spanned across adolescent rights, child protection, reproductive and sexual health, mental well-being, and the law\'s effect on vulnerable children, while urging evidence-based, child-centric policymaking on any amendment.',
    icon: Scale
  },
  {
    title: 'Key Opinion Leaders Seminar with National Association for Reproductive and Child Health of India on Adolescent Reproductive and Sexual Health and Mental well-being',
    desc: 'A seminar was organized bringing together Health and Mental being practioners and policymakers to deliberate on emerging challenges and policy considerations relating to Adolescent Reproductive and Sexual Health and Mental well-being The discussion facilitated evidence-based dialogue on the implementation of the POCSO Act, judicial developments, and strengthening safeguards for children through informed policy interventions.',
    icon: Shield
  }
];

const strategicInitiatives = [
  {
    title: "Narrative Amplification for Mobilization & Outcomes",
    desc: "Facilitating informed public dialogue by amplifying diverse community voices, translating complex evidence into clear and accessible insights, and fostering inclusive conversations that bridge gaps between stakeholders. This approach helps shape narratives that not only influence policy discourse but also guide institutional priorities toward more equitable and responsive outcomes.",
    icon: BookOpen
  },
  {
    title: "Age of Consent Discourse & Judicial Sensitisation Campaign",
    desc: "Nationwide public awareness and legal engagement initiative/campaign was organized on child protection laws and POCSO. Multiple digital discussions were held which has an engagement of over 62,900 participants and supported interventions before the Supreme Court",
    icon: Scale
  },
  {
    title: "Standardisation of Traditional Practices: Orientation Programme on Livelihood Opportunities for Schedule Caste Communities",
    desc: "Facilitated the launch of the Malhar Certification Initiative for the Jhatka Method, supporting efforts towards the standardisation, institutional recognition, and promotion of traditional practices through stakeholder engagement and policy dialogue, while also contributing to the protection and preservation of religious faith.",
    icon: Shield
  },
  {
    title: "Advancing Passenger Safety Through Regulatory Accountability",
    desc: "Multiple fatal fire incidents involving sleeper buses highlighted critical gaps in passenger safety and regulatory oversight. Representations were submitted to the concerned government departments seeking information from relevant authorities regarding safety standards, compliance mechanisms, and enforcement practices governing sleeper bus operations. The initiative helped bring greater attention to systemic safety concerns and contributed to ongoing discussions on strengthening regulatory safeguards and accountability in public transport.",
    icon: Server
  },
  {
    title: "Strategic Interventions in case of Age of Consent discourse",
    desc: "Facilitated and supported 11 intervention applications before the Hon'ble Supreme Court of India on the issues relating to the lowering of age of consent under the POCSO Act, 2012 By bringing together members of the legal fraternity, medical professionals, researchers, academicians, and child rights practitioners, the initiative sought to promote a nuanced understanding of adolescent relationships, child protection concerns, and the broader social and legal consequences of proposed changes to the law.",
    icon: Gavel
  },
  {
    title: "Contributing to Building Trust in India's Digital Ecosystem : DPDP and Allied Issues",
    desc: "Contributed to the evolving discourse on the DPDP Act, 2023 as a necessary regulatory response to India's rapidly expanding digital ecosystem. Through stakeholder engagement and knowledge exchange, the initiative highlighted the need for a balanced framework that safeguards individual privacy, establishes accountability for data fiduciaries, and builds public trust in digital governance. By fostering informed dialogue on data rights, compliance, and institutional responsibility, the initiative supported a broader understanding of DPDP as a critical step in strengthening India's digital governance architecture.",
    icon: Server
  },
  {
    title: "Strategic Intervention in case of Freedom of Religion",
    desc: "Supported the filing of 18 Intervention Applications before the Hon'ble Supreme Court of India, concerning challenges to various State Freedom of Religion legislations. The interventions placed on record detailed factual inputs and ground realities relating to cases involving alleged coercion, inducement, misrepresentation, and deception in matters of religious conversion, particularly affecting women and children. The initiative sought to assist the Court by presenting factual material and documented instances relevant to the issues under consideration in the ongoing constitutional challenge.",
    icon: Gavel
  }
];

const communityOutreach = [
  {
    title: "Community Outreach – Panchkula",
    desc: "Community outreach programmes to strengthen the inclusion, empowerment, and well-being of waste picker communities, with a dedicated focus on mental health. Through awareness campaigns, stakeholder engagement, facilitation of access to welfare schemes, and livelihood opportunities, the initiative advanced the dignity, rights, and socio-economic resilience of informal waste workers while promoting their integration into sustainable waste management systems. By fostering community participation, social inclusion, and holistic well-being, the initiative sought to improve both the quality of life and long-term resilience of waste picker communities.",
    icon: Users
  }
];

export default function ProgrammesPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="Programmes & Initiatives"
        subtitle="Driving systemic change through research, judicial intervention, and community outreach."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes" },
        ]}
      />

      {/* Flagship Programmes */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12">
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              Flagship Programmes
            </h2>
            <p className="mt-4 text-[16px] text-[#675953] max-w-2xl">
              Our core, large-scale interventions aimed at creating sustainable structural impact and community empowerment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {flagshipProgrammes.map((programme) => (
              <Link 
                href={programme.href} 
                key={programme.title}
                className={`group flex flex-col justify-between rounded-[12px] p-8 text-white transition-transform duration-300 hover:-translate-y-1 ${programme.color}`}
              >
                <div>
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium mb-6 uppercase tracking-wider">
                    {programme.location}
                  </span>
                  <h3 className="font-heading text-[24px] font-medium leading-tight mb-4">
                    {programme.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-white/80">
                    {programme.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[13px] font-bold">
                  Explore Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Mental Well-being */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f] mb-4">
              Health and Mental Well-being
            </p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              Key Initiatives & Programmes
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {healthWellbeingInitiatives.map((initiative) => (
              <div key={initiative.title} className="bg-white rounded-[12px] border border-[#e2c8bf] p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f] mb-6">
                  <initiative.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-[20px] font-semibold text-[#130a06] mb-4">
                  {initiative.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#675953]">
                  {initiative.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="bg-[#fbf4f1] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12">
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              Strategic Interventions & Policy Discourse
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strategicInitiatives.map((initiative) => (
              <div key={initiative.title} className="bg-white rounded-[12px] border border-[#e2c8bf] p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f] mb-6">
                  <initiative.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-[20px] font-semibold text-[#130a06] mb-4">
                  {initiative.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#675953]">
                  {initiative.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Outreach */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12">
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              Community Outreach
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {communityOutreach.map((initiative) => (
              <div key={initiative.title} className="bg-white rounded-[12px] border border-[#e2c8bf] p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f] mb-6">
                  <initiative.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-[20px] font-semibold text-[#130a06] mb-4">
                  {initiative.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[#675953]">
                  {initiative.desc}
                </p>
              </div>
            ))}
            
            <Link href="/programmes/west-bengal-outreach" className="group bg-white rounded-[12px] border border-[#e2c8bf] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f] mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-[20px] font-semibold text-[#130a06] mb-4 group-hover:text-[#9f2f1f] transition-colors">
                  Health & Welfare Camps in West Bengal
                </h3>
                <p className="text-[14px] leading-relaxed text-[#675953]">
                  Eight Human Rights Awareness-cum-Health & Welfare Camps were conducted across seven districts of West Bengal in collaboration with SGT University, benefiting nearly 3,000 workers and their family members from vulnerable and underserved communities.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[13px] font-bold text-[#9f2f1f]">
                View Full West Bengal Outreach
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
