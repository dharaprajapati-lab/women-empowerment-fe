import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import {
  ArrowRight,
  Calendar,
  Download,
  ExternalLink,
  Newspaper,
  Radio,
} from "lucide-react";

type MediaItem = {
  title: string;
  date: string;
  tag: string;
  desc?: string;
  publication?: string;
};

type MediaData = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: string;
  intro: string;
  items: MediaItem[];
};

const mediaData: Record<string, MediaData> = {
  "press-release": {
    title: "Press Releases",
    subtitle: "Official announcements, partnerships, campaigns, and programme updates.",
    icon: Newspaper,
    accent: "#9f2f1f",
    intro:
      "Find official WAMMCO announcements about new initiatives, partnerships, programme milestones, and institutional updates.",
    items: [
      {
        title: "WAMMCO Launches Digital Empowerment Initiative for 10,000 Rural Women",
        date: "March 15, 2024",
        tag: "Press Release",
        desc: "The initiative will provide smartphones, internet access, and digital literacy training to women across five states.",
      },
      {
        title: "WAMMCO Signs MoU with Ministry of Women & Child Development",
        date: "February 2, 2024",
        tag: "Partnership",
        desc: "The partnership aims to strengthen implementation of women and child development schemes in high-priority districts.",
      },
      {
        title: "SANKALP Achieves Significant Improvements in Nutrition Indicators",
        date: "January 18, 2024",
        tag: "Programme Update",
        desc: "Three-year evaluation results show improvements in child nutrition and adolescent health indicators.",
      },
    ],
  },
  "media-reports": {
    title: "Media Reports",
    subtitle: "Media coverage, features, interviews, and external stories about our work.",
    icon: Radio,
    accent: "#416754",
    intro:
      "Read features, interviews, and reportage from media organizations covering WAMMCO’s community-led development work.",
    items: [
      {
        title: "How WAMMCO Is Transforming Rural Women’s Lives Through SHGs",
        publication: "The Hindu",
        date: "March 20, 2024",
        tag: "Feature",
      },
      {
        title: "India’s NGOs Leading Change: WAMMCO’s Story",
        publication: "Indian Express",
        date: "February 14, 2024",
        tag: "Interview",
      },
      {
        title: "Legal Aid Reaches Remote Villages Through Paralegal Networks",
        publication: "Deccan Herald",
        date: "January 25, 2024",
        tag: "Reportage",
      },
      {
        title: "SANKALP’s Nutrition Model: A Blueprint for India",
        publication: "Hindustan Times",
        date: "December 10, 2023",
        tag: "Analysis",
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(mediaData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = mediaData[slug];

  if (!data) return { title: "Media | WAMMCO" };

  return {
    title: `${data.title} | WAMMCO`,
    description: data.subtitle,
  };
}

export default async function MediaSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = mediaData[slug];

  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media", href: "/media" },
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

              <h2 className="mt-6 font-heading text-[38px] font-medium tracking-[-0.035em] sm:text-[48px]">
                Latest Updates
              </h2>
            </div>

            <p className="max-w-[680px] text-[16px] leading-8 text-[#5f514a] lg:ml-auto">
              {data.intro}
            </p>
          </div>

          <div className="grid gap-5">
            {data.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-6 transition-transform duration-300 hover:-translate-y-1 md:flex md:items-start md:justify-between md:gap-8"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <span
                      className="rounded-full px-3 py-1 font-bold text-white"
                      style={{ backgroundColor: data.accent }}
                    >
                      {item.tag}
                    </span>

                    {item.publication && (
                      <span className="font-semibold text-[#2a1a12]">
                        {item.publication}
                      </span>
                    )}

                    <span className="flex items-center gap-1 text-[#7a6a63]">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-[25px] font-medium leading-tight text-[#130a06]">
                    {item.title}
                  </h3>

                  {item.desc && (
                    <p className="mt-3 max-w-[780px] text-[14px] leading-7 text-[#675953]">
                      {item.desc}
                    </p>
                  )}
                </div>

                <Link
                  href="#"
                  className="mt-5 inline-flex shrink-0 items-center gap-2 text-[13px] font-bold text-[#9f2f1f] hover:underline md:mt-0"
                >
                  {slug === "press-release" ? "Read Release" : "Open Link"}
                  {slug === "press-release" ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : (
                    <ExternalLink className="h-4 w-4" />
                  )}
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-[8px] border border-[#e2c8bf] bg-[#f8e5df] p-8 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-heading text-[30px] font-medium text-[#130a06]">
                Media Kit
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-[#675953]">
                Download logos, photos, organizational fact sheets, and approved
                press materials.
              </p>
            </div>

            <button className="mt-6 inline-flex items-center gap-2 rounded-[4px] bg-[#9f2f1f] px-6 py-3 text-[13px] font-bold text-white hover:bg-[#842719] sm:mt-0">
              Download Media Kit
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}