import type { Metadata } from "next";
import {
  ArrowRight,
  Compass,
  Globe,
  Lightbulb,
  Quote,
  Scale,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Vision & Mission | NAMO Foundation",
  description:
    "Discover NAMO Foundation's vision for a just and equal world and the mission that guides our work.",
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
    <div className="bg-[#fbf4f1] text-[#170d08] pb-24">
      {/* Top Header & Vision/Mission Overlapping Cards */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="relative mb-16 md:mb-12">
          <div className="mb-8">
            {/* <h3 className="text-[#c9921a] font-semibold tracking-widest uppercase text-sm mb-2">
              Who We Are
            </h3> */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
              Our Vision & Mission
            </h1>
          </div>

          {/* Logo / Icon Placeholder on the right */}
          <div className="absolute top-0 right-0 hidden md:flex items-center justify-center bg-muted/30 border border-border/50 rounded-sm w-24 h-24">
            <div className="relative w-full h-full flex items-center justify-center text-primary">
              <Settings className="absolute w-24 h-24 opacity-20 text-[#0f2c59]" />
              <Scale className="absolute w-12 h-12 text-[#c9921a]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 relative items-start">
          {/* Left Card - Vision */}
          <div className="bg-[#fdf6eb] p-8 md:p-12 rounded-xl shadow-sm lg:w-[55%] z-20 relative border border-[#f0d4b8]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#c9921a] text-white p-3 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-[#c9921a] font-bold tracking-widest text-lg md:text-xl uppercase">
                Our Vision
              </h3>
            </div>
            <p className="text-[#8b4513] text-base md:text-[17px] leading-relaxed font-medium">
              To advance equitable and evidence-based approaches in health & mental well-being, governance, and social development through research, policy innovation, and collaborative action. We envision responsive institutions and empowered communities where laws, policies, and public programmes are informed by both rigorous analysis and lived experiences, delivering meaningful, inclusive, and lasting public impact.
            </p>
          </div>

          {/* Right Card - Mission */}
          <div className="bg-white p-8 md:p-12 lg:pl-32 xl:pl-40 rounded-xl shadow-lg border border-border/50 lg:w-[55%] lg:-ml-[10%] z-10 relative lg:mt-16">
            <h3 className="text-[#c9921a] font-bold tracking-widest text-lg md:text-xl uppercase mb-6">
              Our Mission
            </h3>
            <div className="space-y-6 text-[#5f514a] text-base md:text-[17px] leading-relaxed">
              <p>
                We are committed to advancing thoughtful and practical approaches to the health & mental health, legal, governance, and social challenges of our time. Through rigorous research, informed analysis, stakeholder engagement, and field-based interventions, we seek to strengthen public institutions, improve access to health and mental health services, enrich public discourse, and support the development of laws and policies that are responsive to the needs of society.
              </p>
              <p>
                Guided by the belief that sustainable change is achieved when knowledge informs action and policy reflects lived realities, NAMO Foundation works to bridge research, implementation, and community engagement so that governance and public systems deliver tangible outcomes for the people it serve.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-[#c9921a] font-serif italic text-xl md:text-2xl font-bold">
            Decoding Complexities. Delivering Impact.
          </p>
        </div>
      </div>

      {/* Quote */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8 mt-12 lg:mt-24">
        <div className="mx-auto max-w-[980px] text-center">
          <Quote className="mx-auto h-8 w-8 text-[#9f2f1f]" />

          <h2 className="mt-7 font-heading text-[30px] font-medium leading-tight tracking-[-0.03em] text-[#130a06] sm:text-[40px]">
            We do not believe in charity that creates dependence. We believe in
            partnership that builds power, confidence, and self-reliance.
          </h2>

          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.25em] text-[#9f2f1f]">
            NAMO Foundation
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