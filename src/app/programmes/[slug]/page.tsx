import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Heart,
  MapPin,
  Sprout,
  TrendingUp,
  Users,
} from "lucide-react";

type ProgrammeData = {
  title: string;
  subtitle: string;
  badge: string;
  description: string[];
  icon: LucideIcon;
  gradient: string;
  accent: string;
  started: string;
  stats: { value: string; label: string; icon: LucideIcon }[];
  pillars: string[];
  outcomes: string[];
  relatedLinks: { label: string; href: string }[];
};

const programmeData: Record<string, ProgrammeData> = {
  wammco: {
    title: "WAMMCO",
    subtitle: "Women And Marginalized Mobilization for Community Ownership",
    badge: "Flagship Programme",
    icon: Heart,
    gradient: "from-[#9f2f1f] to-[#c97a45]",
    accent: "#9f2f1f",
    started: "2005",
    description: [
      "WAMMCO is our cornerstone programme for women’s economic and social empowerment. It operates through a federated Self Help Group model — beginning at village level and scaling to block, district, and state federations.",
      "The programme links women to microfinance, government welfare schemes, legal support, digital literacy, and market opportunities. At its heart is the belief that when women have economic agency, entire communities transform.",
    ],
    stats: [
      { icon: Users, value: "1,50,000+", label: "Women Enrolled" },
      { icon: MapPin, value: "12 States", label: "Operational" },
      { icon: TrendingUp, value: "5,000+", label: "Active SHGs" },
      { icon: Calendar, value: "2005", label: "Year Started" },
    ],
    pillars: [
      "Economic Empowerment",
      "Health & Nutrition",
      "Education & Literacy",
      "Legal Rights & Justice",
      "Leadership & Governance",
      "Digital Inclusion",
    ],
    outcomes: [
      "Women-led savings groups and federations strengthened",
      "Improved access to credit and government schemes",
      "Greater participation of women in local governance",
      "Increased household income through micro-enterprises",
    ],
    relatedLinks: [
      { label: "Women Empowerment", href: "/our-work/women-empowerment" },
      { label: "Livelihoods", href: "/our-work/livelihoods" },
      { label: "Volunteer With Us", href: "/get-involved/volunteer" },
    ],
  },
  sankalp: {
    title: "SANKALP",
    subtitle: "Sustainable Action for Nutrition, Knowledge, and Livelihood Progression",
    badge: "Health & Nutrition",
    icon: Sprout,
    gradient: "from-[#416754] to-[#c97a45]",
    accent: "#416754",
    started: "2012",
    description: [
      "SANKALP is a holistic nutrition and adolescent health programme launched to address malnutrition, poor adolescent health, and limited health access in high-burden districts.",
      "The programme deploys community health workers who provide counseling, facilitate institutional deliveries, monitor child growth, and bridge the gap between public health systems and remote communities.",
    ],
    stats: [
      { icon: Users, value: "50,000+", label: "Children Covered" },
      { icon: MapPin, value: "8 Districts", label: "Operational" },
      { icon: TrendingUp, value: "300+ Villages", label: "Reached" },
      { icon: Calendar, value: "2012", label: "Year Started" },
    ],
    pillars: [
      "Maternal & Child Health",
      "Adolescent Nutrition",
      "Community Health Workers",
      "School Health Education",
      "Growth Monitoring",
      "Government Scheme Linkages",
    ],
    outcomes: [
      "Reduced stunting and wasting in target villages",
      "Improved adolescent health awareness",
      "Better school enrolment and retention for girls",
      "Strengthened ASHA-community health linkages",
    ],
    relatedLinks: [
      { label: "Public Health", href: "/our-work/public-health" },
      { label: "Education", href: "/our-work/education" },
      { label: "Donate", href: "/get-involved/donate" },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(programmeData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = programmeData[slug];

  if (!data) {
    return {
      title: "Programme | WAMMCO",
    };
  }

  return {
    title: `${data.title} | WAMMCO`,
    description: data.subtitle,
  };
}

export default async function ProgrammeSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = programmeData[slug];

  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: data.title },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span
              className="inline-flex rounded-full px-3 py-1 text-[12px] font-bold text-white"
              style={{ backgroundColor: data.accent }}
            >
              {data.badge}
            </span>

            <h2 className="mt-6 font-heading text-[38px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[48px]">
              Programme Overview
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-[#5f514a]">
              {data.description.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {data.stats.map(({ icon: StatIcon, value, label }) => (
                <div
                  key={label}
                  className="rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/55 p-5"
                >
                  <StatIcon
                    className="h-5 w-5"
                    style={{ color: data.accent }}
                  />
                  <p className="mt-4 font-heading text-[28px] font-medium leading-none text-[#130a06]">
                    {value}
                  </p>
                  <p className="mt-2 text-[13px] text-[#675953]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div
              className={`rounded-[8px] bg-gradient-to-br ${data.gradient} p-8 text-white`}
            >
              <Icon className="h-10 w-10 text-white/85" />

              <h3 className="mt-8 font-heading text-[32px] font-medium leading-tight">
                {data.title}
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-white/80">
                Started in {data.started}, this programme continues to drive
                community-led transformation.
              </p>
            </div>

            <div className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/55 p-6">
              <h4 className="font-heading text-[24px] font-medium">
                Related Links
              </h4>

              <div className="mt-4 space-y-2">
                {data.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-md px-3 py-2.5 text-[14px] text-[#2a1a12] transition-colors hover:bg-[#f8e5df] hover:text-[#9f2f1f]"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
              Programme Pillars
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              What We Focus On
            </h2>

            <div className="mt-8 grid gap-3">
              {data.pillars.map((pillar) => (
                <div
                  key={pillar}
                  className="flex items-center gap-3 rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/55 p-4"
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0"
                    style={{ color: data.accent }}
                  />
                  <span className="text-[15px] font-medium text-[#2a1a12]">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#416754]">
              Key Outcomes
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Impact We Measure
            </h2>

            <div className="mt-8 space-y-4">
              {data.outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className="rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/55 p-5"
                >
                  <span className="font-heading text-[28px] text-[#9f2f1f]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-[15px] leading-7 text-[#5f514a]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}