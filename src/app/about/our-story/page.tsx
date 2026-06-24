import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  ArrowRight,
  Eye,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | WAMMCO",
  description:
    "Learn about WAMMCO's history, founding vision, and 25 years of community impact.",
};

const milestones = [
  {
    year: "2001",
    event:
      "Founded in New Delhi with a vision to advance dignity, opportunity, and gender justice.",
  },
  {
    year: "2005",
    event:
      "Launched early community programmes across 3 states, reaching 10,000 women.",
  },
  {
    year: "2008",
    event:
      "Received key statutory registrations, strengthening transparency and public trust.",
  },
  {
    year: "2012",
    event:
      "Expanded to 10 states and launched nutrition-focused community interventions.",
  },
  {
    year: "2016",
    event:
      "Crossed the 100,000 beneficiaries milestone and received recognition for excellence.",
  },
  {
    year: "2019",
    event:
      "Built partnerships for policy advocacy, women’s leadership, and grassroots governance.",
  },
  {
    year: "2022",
    event:
      "Reached 18 states with integrated programmes across health, education, livelihoods, and justice.",
  },
  {
    year: "2024",
    event:
      "Advanced digital learning and community-led innovation for women and young people.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    desc: "Every action is rooted in empathy, dignity, and respect for lived experience.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "We practice open, accountable governance across programmes and resources.",
  },
  {
    icon: Target,
    title: "Impact",
    desc: "Our work is designed for measurable, lasting change in underserved communities.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "We hold ourselves to high standards of quality, learning, and responsibility.",
  },
];

const impact = [
  { value: "25+", label: "Years of Service" },
  { value: "18", label: "States Reached" },
  { value: "500K+", label: "Lives Impacted" },
  { value: "5,000+", label: "SHGs Supported" },
];

export default function OurStoryPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="Our Story"
        subtitle="Twenty-five years of walking alongside communities, building hope, and transforming lives through dignity-led development."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Our Story" },
        ]}
      />

      {/* Story */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#9f2f1f] to-[#c97a45]" />

            <h2 className="font-heading text-[36px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              How It All Began
            </h2>

            <div className="mt-8 space-y-5 text-[16px] leading-8 text-[#5f514a]">
              <p>
                WAMMCO was born from a simple yet powerful belief: every woman,
                regardless of where she is born, deserves dignity, opportunity,
                and a voice in decisions that affect her life.
              </p>

              <p>
                In 2001, our founding team began visiting rural communities
                where women had limited access to healthcare, education, legal
                protection, and economic independence. They listened, learned,
                and chose to work with communities rather than for them.
              </p>

              <p>
                What started as a small collective of women and community
                volunteers has grown into a national organization working across
                18 states, touching over 500,000 lives through education, public
                health, legal aid, livelihoods, and governance programmes.
              </p>

              <p>
                Our strength comes not from the offices we occupy, but from the
                trust of the communities we serve. Every programme, policy, and
                partnership is shaped by the women, children, families, and
                grassroots leaders who walk this journey with us.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about/vision-mission"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#9f2f1f] px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#842719]"
              >
                Vision & Mission
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 rounded-[4px] border border-[#cdb4ac] px-6 py-3 text-[13px] font-bold text-[#2a1a12] transition-colors hover:border-[#9f2f1f] hover:text-[#9f2f1f]"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-7 shadow-sm">
            <div className="rounded-[7px] bg-[#c97a45] p-6 text-white">
              <Users className="h-8 w-8 text-white/85" />

              <p className="mt-10 font-heading text-[34px] font-medium leading-tight tracking-[-0.03em]">
                Community has always been our starting point.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-white/80">
                We believe sustainable change is possible only when communities
                lead, institutions listen, and resources reach the people who
                need them most.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {impact.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[6px] border border-[#ead4cc] bg-[#fbf4f1] p-5 text-center"
                >
                  <p className="font-heading text-[28px] font-medium leading-none text-[#9f2f1f]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[12px] text-[#675953]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
              What We Stand For
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Our Core Values
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#675953]">
              These values guide how we design programmes, build partnerships,
              manage resources, and work with communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/45 p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-7 font-heading text-[22px] font-medium text-[#130a06]">
                  {title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#675953]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1060px]">
          <div className="mb-14 text-center">
            <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#9f2f1f] to-[#c97a45]" />

            <h2 className="font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Our Journey
            </h2>

            <p className="mt-3 text-[15px] text-[#675953]">
              A timeline of trust, learning, and community-led progress.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-[#9f2f1f] to-[#c97a45] md:left-1/2" />

            <div className="space-y-8">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative pl-14 md:flex md:items-center md:pl-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      <span className="inline-flex rounded-full bg-[#9f2f1f] px-3 py-1 text-[12px] font-bold text-white">
                        {item.year}
                      </span>

                      <p className="mt-4 text-[14px] leading-7 text-[#5f514a]">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-[10px] top-6 z-10 h-4 w-4 rounded-full border-4 border-[#fbf4f1] bg-[#9f2f1f] shadow-md md:left-1/2 md:-translate-x-1/2" />

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8e5df] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-[950px] rounded-[8px] bg-[#416754] p-10 text-center text-white sm:p-14">
          <Sparkles className="mx-auto h-7 w-7 text-white/80" />

          <h2 className="mt-6 font-heading text-[34px] font-medium leading-tight tracking-[-0.035em] sm:text-[44px]">
            The story continues with every community we serve.
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-[15px] leading-7 text-white/80">
            Join us as a volunteer, donor, partner, or advocate and help create
            lasting change for women and marginalized communities.
          </p>

          <Link
            href="/get-involved"
            className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-white px-6 py-3 text-[13px] font-bold text-[#315f4b] transition-colors hover:bg-[#f3f3ee]"
          >
            Get Involved
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}