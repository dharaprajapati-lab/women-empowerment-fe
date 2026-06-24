import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Handshake,
  Heart,
  Mail,
  Users,
} from "lucide-react";

type InvolvedData = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: string;
  gradient: string;
  intro: string;
  points: string[];
  steps: string[];
  cta: string;
  ctaHref: string;
};

const involvedData: Record<string, InvolvedData> = {
  volunteer: {
    title: "Volunteer",
    subtitle: "Give your time, skills, and care to support community-led change.",
    icon: Users,
    accent: "#9f2f1f",
    gradient: "from-[#9f2f1f] to-[#c97a45]",
    intro:
      "Volunteers support field activities, mentoring, research, communications, events, training, and professional services. Whether you can contribute a few hours or a few months, your support matters.",
    points: [
      "Field support for community meetings and campaigns",
      "Mentoring for youth, women entrepreneurs, and SHG leaders",
      "Professional support in design, communication, legal aid, research, or technology",
      "Event and awareness campaign volunteering",
    ],
    steps: [
      "Submit your volunteer interest form",
      "Attend a short orientation session",
      "Choose a role based on skills and availability",
      "Begin volunteering with a programme team",
    ],
    cta: "Become a Volunteer",
    ctaHref: "#",
  },
  donate: {
    title: "Donate",
    subtitle: "Your contribution helps women and communities access dignity, rights, and opportunity.",
    icon: Heart,
    accent: "#c97a45",
    gradient: "from-[#c97a45] to-[#9f2f1f]",
    intro:
      "Every donation supports programme implementation across education, health, livelihoods, legal aid, and community leadership. WAMMCO is committed to transparent and accountable use of funds.",
    points: [
      "₹500 can support learning material for a girl",
      "₹1,000 can contribute to a community health camp",
      "₹2,500 can support legal aid for a woman in need",
      "₹5,000 can fund skill training support for one woman",
    ],
    steps: [
      "Choose a donation amount",
      "Complete secure donation details",
      "Receive acknowledgement and receipt",
      "Get periodic impact updates",
    ],
    cta: "Donate Now",
    ctaHref: "#",
  },
  partner: {
    title: "Partner With Us",
    subtitle: "Collaborate with WAMMCO to scale meaningful and measurable impact.",
    icon: Handshake,
    accent: "#416754",
    gradient: "from-[#416754] to-[#c97a45]",
    intro:
      "We partner with corporates, foundations, institutions, universities, government bodies, and civil society organizations to design and implement impactful programmes.",
    points: [
      "CSR partnerships for women empowerment, health, education, and livelihoods",
      "Research and knowledge partnerships",
      "Government and institutional collaborations",
      "Grassroots implementation partnerships",
    ],
    steps: [
      "Share your partnership interest",
      "Discuss goals, geographies, and impact areas",
      "Co-create a programme or support model",
      "Launch, monitor, and report impact together",
    ],
    cta: "Start a Partnership",
    ctaHref: "#",
  },
  internships: {
    title: "Internships",
    subtitle: "Gain hands-on development sector experience with WAMMCO.",
    icon: GraduationCap,
    accent: "#2563eb",
    gradient: "from-[#2563eb] to-[#416754]",
    intro:
      "Our internship programme is designed for students and young professionals who want practical exposure to community development, research, communications, field implementation, and nonprofit management.",
    points: [
      "Field research and community documentation",
      "Programme support and monitoring",
      "Content, design, and communications",
      "Policy research and data analysis",
    ],
    steps: [
      "Submit your internship application",
      "Share your area of interest and availability",
      "Attend an interaction with the team",
      "Begin your internship with a mentor",
    ],
    cta: "Apply for Internship",
    ctaHref: "#",
  },
  careers: {
    title: "Careers",
    subtitle: "Join a team committed to justice, dignity, and community-led development.",
    icon: Briefcase,
    accent: "#7c3aed",
    gradient: "from-[#7c3aed] to-[#9f2f1f]",
    intro:
      "We are always looking for thoughtful, committed, and skilled professionals who want to work with communities and contribute to long-term social change.",
    points: [
      "Programme management and field coordination",
      "Monitoring, evaluation, and research",
      "Finance, compliance, and operations",
      "Communications, partnerships, and fundraising",
    ],
    steps: [
      "Review open roles",
      "Submit your CV and statement of interest",
      "Participate in interviews and assessments",
      "Join the team after selection and onboarding",
    ],
    cta: "View Open Positions",
    ctaHref: "#",
  },
  events: {
    title: "Events",
    subtitle: "Attend campaigns, workshops, conferences, and community gatherings.",
    icon: Calendar,
    accent: "#0f766e",
    gradient: "from-[#0f766e] to-[#416754]",
    intro:
      "Our events bring together communities, partners, experts, young people, and institutions to learn, collaborate, and advocate for inclusive development.",
    points: [
      "Community awareness campaigns",
      "Skill-building and leadership workshops",
      "Policy dialogues and public consultations",
      "Volunteer and partner meetups",
    ],
    steps: [
      "Explore upcoming events",
      "Register for an event of interest",
      "Participate online or in person",
      "Stay connected for future opportunities",
    ],
    cta: "See Upcoming Events",
    ctaHref: "#",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(involvedData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = involvedData[slug];

  if (!data) return { title: "Get Involved | WAMMCO" };

  return {
    title: `${data.title} | WAMMCO`,
    description: data.subtitle,
  };
}

export default async function GetInvolvedSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = involvedData[slug];

  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved", href: "/get-involved" },
          { label: data.title },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: data.accent }}
            >
              <Icon className="h-7 w-7" />
            </div>

            <h2 className="mt-7 font-heading text-[38px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[48px]">
              How You Can Help
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#5f514a]">
              {data.intro}
            </p>

            <div className="mt-9 grid gap-3">
              {data.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/55 p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: data.accent }}
                  />
                  <span className="text-[15px] leading-7 text-[#5f514a]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={data.ctaHref}
              className="mt-9 inline-flex items-center gap-2 rounded-[4px] px-6 py-3 text-[13px] font-bold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: data.accent }}
            >
              {data.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <aside>
            <div
              className={`rounded-[8px] bg-gradient-to-br ${data.gradient} p-8 text-white`}
            >
              <Icon className="h-10 w-10 text-white/85" />

              <h3 className="mt-8 font-heading text-[32px] font-medium leading-tight">
                Start Your Journey
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-white/80">
                We make it simple to get involved. Follow these steps and our
                team will guide you through the process.
              </p>
            </div>

            <div className="mt-6 rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/55 p-6">
              <h4 className="font-heading text-[24px] font-medium">
                Next Steps
              </h4>

              <div className="mt-5 space-y-4">
                {data.steps.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                      style={{ backgroundColor: data.accent }}
                    >
                      {index + 1}
                    </span>

                    <p className="pt-1 text-[14px] leading-6 text-[#5f514a]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {slug === "donate" && <DonationImpact />}

      <section className="bg-[#f8e5df] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[950px] rounded-[8px] bg-[#416754] p-10 text-center text-white sm:p-14">
          <Mail className="mx-auto h-8 w-8 text-white/80" />

          <h2 className="mt-6 font-heading text-[34px] font-medium leading-tight tracking-[-0.035em] sm:text-[44px]">
            Have questions before getting involved?
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-white/80">
            Write to us and our team will help you find the right opportunity
            based on your interest, skills, and location.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-white px-6 py-3 text-[13px] font-bold text-[#315f4b] transition-colors hover:bg-[#f3f3ee]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function DonationImpact() {
  const options = [
    { amount: "₹500", label: "Educate a girl for a month" },
    { amount: "₹1,000", label: "Health camp support for families" },
    { amount: "₹2,500", label: "Legal aid for a woman in need" },
    { amount: "₹5,000", label: "Skill training support for one woman" },
  ];

  return (
    <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-[1220px]">
        <div className="mb-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
            Donation Impact
          </p>

          <h2 className="mt-4 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
            Every Contribution Matters
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <div
              key={option.amount}
              className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/55 p-7 text-center"
            >
              <p className="font-heading text-[34px] font-medium text-[#9f2f1f]">
                {option.amount}
              </p>
              <p className="mt-3 text-[14px] leading-6 text-[#675953]">
                {option.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["80G Certified", "FCRA Approved", "Transparent Reporting"].map(
            (cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 rounded-full bg-[#fff8f5] px-4 py-2 text-[13px] font-semibold text-[#2a1a12]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#416754]" />
                {cert}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}