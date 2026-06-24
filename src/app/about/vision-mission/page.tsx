import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import {
  ArrowRight,
  Compass,
  Eye,
  Globe,
  Lightbulb,
  Quote,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vision & Mission | WAMMCO",
  description:
    "Discover WAMMCO's vision for a just and equal world and the mission that guides our work.",
};

const pillars = [
  {
    icon: Globe,
    title: "Gender Justice",
    desc: "Ensuring women have equal rights, equal opportunities, and protection under the law.",
  },
  {
    icon: Users,
    title: "Community-Led Development",
    desc: "Communities are architects of their own futures. We support, enable, and strengthen.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Using research, digital tools, and evidence-based models to scale meaningful impact.",
  },
  {
    icon: Compass,
    title: "Sustainability",
    desc: "Long-term transformation through systems change, local leadership, and resilience.",
  },
];

const approach = [
  "Listen deeply before designing solutions.",
  "Work with grassroots leaders and community institutions.",
  "Integrate health, education, livelihoods, and justice.",
  "Measure outcomes and improve continuously.",
];

export default function VisionMissionPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="Vision & Mission"
        subtitle="The north star that guides our work, our partnerships, and our commitment to community-led transformation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />

      {/* Vision Mission Cards */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-7 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/45 shadow-sm">
            <div className="h-2 bg-gradient-to-r from-[#9f2f1f] to-[#c97a45]" />

            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#f8e5df] text-[#9f2f1f]">
                  <Eye className="h-6 w-6" />
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
                  Our Vision
                </p>
              </div>

              <h2 className="mt-10 font-heading text-[32px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[42px]">
                A just, equitable, and inclusive world.
              </h2>

              <p className="mt-6 text-[17px] leading-8 text-[#5f514a]">
                We envision a world where every woman and marginalized community
                lives with dignity, agency, safety, and opportunity.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[8px] border border-[#e2c8bf] bg-[#fff8f5]/45 shadow-sm">
            <div className="h-2 bg-gradient-to-r from-[#416754] to-[#c97a45]" />

            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#e4f1df] text-[#416754]">
                  <Target className="h-6 w-6" />
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#416754]">
                  Our Mission
                </p>
              </div>

              <h2 className="mt-10 font-heading text-[32px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[42px]">
                Enabling people to claim rights and lead dignified lives.
              </h2>

              <p className="mt-6 text-[17px] leading-8 text-[#5f514a]">
                We support women and marginalized communities through integrated
                programmes in livelihoods, public health, education, legal aid,
                child protection, and policy advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <Quote className="mx-auto h-8 w-8 text-[#9f2f1f]" />

          <h2 className="mt-7 font-heading text-[30px] font-medium leading-tight tracking-[-0.03em] text-[#130a06] sm:text-[40px]">
            We do not believe in charity that creates dependence. We believe in
            partnership that builds power, confidence, and self-reliance.
          </h2>

          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
            WAMMCO Foundation
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#9f2f1f] to-[#c97a45]" />

            <h2 className="font-heading text-[36px] font-medium tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Strategic Pillars
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#675953]">
              Our pillars help us stay focused on long-term change, not
              short-term activity.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/45 p-7 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e5df] text-[#9f2f1f]">
                  <Icon className="h-6 w-6" />
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

      {/* Approach */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
              Our Approach
            </p>

            <h2 className="mt-4 font-heading text-[36px] font-medium leading-tight tracking-[-0.035em] text-[#130a06] sm:text-[44px]">
              Practical, participatory, and rooted in trust.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#675953]">
              We combine grassroots mobilization with systems thinking, so that
              each intervention strengthens community capability and long-term
              resilience.
            </p>

            <Link
              href="/our-work"
              className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-[#9f2f1f] px-6 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#842719]"
            >
              See Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {approach.map((item, index) => (
              <div
                key={item}
                className="rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/50 p-6"
              >
                <span className="font-heading text-[32px] font-medium text-[#9f2f1f]">
                  0{index + 1}
                </span>

                <p className="mt-5 text-[15px] font-medium leading-7 text-[#2a1a12]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}