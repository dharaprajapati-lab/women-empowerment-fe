import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Download,
  FileText,
  Mail,
  PenLine,
  Video,
} from "lucide-react";

type InsightItem = {
  title: string;
  date: string;
  desc: string;
  tag: string;
};

type InsightData = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  count: string;
  accent: string;
  intro: string;
  items: InsightItem[];
  ctaLabel: string;
};

const insightsData: Record<string, InsightData> = {
  reports: {
    title: "Reports",
    subtitle: "Evidence, research, and field-based impact documentation.",
    icon: FileText,
    count: "45+",
    accent: "#9f2f1f",
    intro:
      "Our reports document programme outcomes, policy gaps, community insights, and field evidence from across our programme areas.",
    ctaLabel: "Download Report",
    items: [
      {
        tag: "Annual Report",
        title: "Annual Impact Report 2023-2024",
        date: "March 2024",
        desc: "A detailed review of programme outcomes, financial stewardship, and strategic progress.",
      },
      {
        tag: "Research Report",
        title: "State of Women’s Economic Empowerment in Rural India",
        date: "February 2024",
        desc: "A multi-state study on SHGs, microfinance access, and income generation.",
      },
      {
        tag: "Evaluation",
        title: "SANKALP Year 3 Evaluation",
        date: "December 2023",
        desc: "Findings from nutrition, adolescent health, and community health worker interventions.",
      },
    ],
  },
  publications: {
    title: "Publications",
    subtitle: "Guides, toolkits, manuals, and programme learning documents.",
    icon: BookOpen,
    count: "30+",
    accent: "#416754",
    intro:
      "Our publications convert field experience into practical resources for communities, NGOs, partners, and institutions.",
    ctaLabel: "View Publication",
    items: [
      {
        tag: "Toolkit",
        title: "SHG Leadership Training Manual",
        date: "January 2024",
        desc: "A facilitator guide for building women’s leadership through collective action.",
      },
      {
        tag: "Guide",
        title: "Community Nutrition Monitoring Handbook",
        date: "November 2023",
        desc: "A field guide for community workers supporting maternal and child nutrition.",
      },
      {
        tag: "Manual",
        title: "Legal Literacy for Rural Women",
        date: "September 2023",
        desc: "A simplified rights-awareness manual for paralegal workers and SHGs.",
      },
    ],
  },
  blogs: {
    title: "Blogs",
    subtitle: "Stories and reflections from the field.",
    icon: PenLine,
    count: "120+",
    accent: "#c97a45",
    intro:
      "Read field stories, programme reflections, and human-centered narratives from communities and teams.",
    ctaLabel: "Read Article",
    items: [
      {
        tag: "Field Story",
        title: "How One SHG Changed a Village Economy",
        date: "March 2024",
        desc: "A story of women-led savings, entrepreneurship, and collective bargaining.",
      },
      {
        tag: "Health",
        title: "Why Menstrual Health Education is Non-Negotiable",
        date: "February 2024",
        desc: "Understanding dignity, school attendance, and adolescent health through menstrual awareness.",
      },
      {
        tag: "Education",
        title: "First-Generation Learners and the Power of Mentorship",
        date: "January 2024",
        desc: "How community learning centres help children build confidence and continuity.",
      },
    ],
  },
  opinions: {
    title: "Opinions",
    subtitle: "Perspectives on policy, gender justice, and development practice.",
    icon: PenLine,
    count: "60+",
    accent: "#7c3aed",
    intro:
      "Our opinion pieces highlight urgent policy issues, implementation challenges, and pathways for systemic change.",
    ctaLabel: "Read Opinion",
    items: [
      {
        tag: "Policy",
        title: "Gender-Responsive Budgeting: India’s Missing Link",
        date: "January 2024",
        desc: "Why gender budgeting must move from reporting to accountable implementation.",
      },
      {
        tag: "Governance",
        title: "Why Local Women Leaders Need Institutional Support",
        date: "December 2023",
        desc: "A reflection on panchayat leadership, training, and resource access.",
      },
      {
        tag: "Justice",
        title: "Making Legal Aid Truly Accessible",
        date: "October 2023",
        desc: "The importance of paralegal workers and community-based legal awareness.",
      },
    ],
  },
  videos: {
    title: "Videos",
    subtitle: "Films, interviews, explainers, and voices from the field.",
    icon: Video,
    count: "80+",
    accent: "#dc2626",
    intro:
      "Watch stories of change, expert conversations, community voices, and programme explainers.",
    ctaLabel: "Watch Video",
    items: [
      {
        tag: "Story",
        title: "Voices of Change: SHG Success Stories",
        date: "September 2023",
        desc: "Women share how collective savings and enterprise changed their lives.",
      },
      {
        tag: "Explainer",
        title: "Understanding Community Nutrition Monitoring",
        date: "August 2023",
        desc: "A simple explanation of child growth tracking and nutrition counseling.",
      },
      {
        tag: "Interview",
        title: "Leadership from the Grassroots",
        date: "July 2023",
        desc: "A conversation with women leaders from village-level federations.",
      },
    ],
  },
  newsletters: {
    title: "Newsletters",
    subtitle: "Quarterly updates from our programmes, partners, and communities.",
    icon: Mail,
    count: "24+",
    accent: "#be123c",
    intro:
      "Our newsletters bring field stories, impact updates, events, campaigns, and research highlights directly to readers.",
    ctaLabel: "Read Issue",
    items: [
      {
        tag: "Quarterly",
        title: "WAMMCO Quarterly — Q4 2023",
        date: "October 2023",
        desc: "Stories from the field, programme updates, and upcoming events.",
      },
      {
        tag: "Quarterly",
        title: "WAMMCO Quarterly — Q3 2023",
        date: "July 2023",
        desc: "Updates on livelihoods, education, health camps, and legal aid work.",
      },
      {
        tag: "Special Issue",
        title: "Women’s Day Special Newsletter",
        date: "March 2023",
        desc: "Celebrating women leaders, community champions, and SHG federations.",
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(insightsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = insightsData[slug];

  if (!data) return { title: "Insights | WAMMCO" };

  return {
    title: `${data.title} | WAMMCO`,
    description: data.subtitle,
  };
}

export default async function InsightSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = insightsData[slug];

  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: data.title },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: data.accent }}
              >
                <Icon className="h-7 w-7" />
              </div>

              <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
                {data.count} Resources
              </p>

              <h2 className="mt-3 font-heading text-[38px] font-medium tracking-[-0.035em] sm:text-[48px]">
                Latest {data.title}
              </h2>
            </div>

            <p className="max-w-[680px] text-[16px] leading-8 text-[#5f514a] lg:ml-auto">
              {data.intro}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-[11px]">
                  <span
                    className="rounded-full px-3 py-1 font-bold text-white"
                    style={{ backgroundColor: data.accent }}
                  >
                    {item.tag}
                  </span>

                  <span className="flex items-center gap-1 text-[#7a6a63]">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-[23px] font-medium leading-tight text-[#130a06]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#675953]">
                  {item.desc}
                </p>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold text-[#9f2f1f] hover:underline"
                >
                  {data.ctaLabel}
                  {slug === "reports" || slug === "publications" ? (
                    <Download className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[8px] bg-[#416754] p-10 text-center text-white sm:p-14">
            <Mail className="mx-auto h-8 w-8 text-white/80" />

            <h3 className="mt-6 font-heading text-[34px] font-medium tracking-[-0.035em] sm:text-[44px]">
              Stay Updated
            </h3>

            <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-white/80">
              Subscribe to receive field stories, research summaries, and
              programme updates from WAMMCO.
            </p>

            <div className="mx-auto mt-8 flex max-w-[520px] flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-[4px] border border-white/20 bg-white px-4 py-3 text-sm text-[#170d08] outline-none"
              />
              <button className="rounded-[4px] bg-[#9f2f1f] px-6 py-3 text-sm font-bold text-white hover:bg-[#842719]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}