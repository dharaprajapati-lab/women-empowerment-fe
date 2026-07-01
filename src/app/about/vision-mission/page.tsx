import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Lightbulb, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Mission | NAMO Foundation",
  description:
    "Discover NAMO Foundation's vision for a just and equal world and the mission that guides our work.",
};

export default function VisionMissionPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08] min-h-screen">
      <PageHeader
        title="Vision & Mission"
        subtitle="The guiding principles behind everything we do."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Vision & Mission" },
        ]}
      />

      {/* Vision — full width statement. A horizon of faint radiating lines
          behind the text, literal to "vision" as something you look toward. */}
      <section className="relative overflow-hidden bg-[#8b2635] px-5 py-20 sm:px-8 md:py-32">
        <svg
          viewBox="0 0 900 500"
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[520px] w-[900px] opacity-[0.07]"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1="450"
              y1="500"
              x2={90 + i * 90}
              y2="0"
              stroke="white"
              strokeWidth="1"
            />
          ))}
          <circle cx="450" cy="500" r="6" fill="white" />
        </svg>

        <div className="relative mx-auto max-w-[900px]">
          <div className="flex items-center gap-3 mb-10">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
              <Lightbulb className="h-4 w-4 text-white/85" />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              Our Vision
            </p>
          </div>

          <p className="text-[24px] md:text-[28px] leading-[1.6] text-white font-light tracking-[-0.01em]">
            To advance equitable and evidence-based approaches in health &
            mental well-being, governance, and social development through
            research, policy innovation, and collaborative action.
          </p>

          <p className="mt-8 text-[16px] leading-[1.8] text-white/75 max-w-[780px]">
            We envision responsive institutions and empowered communities where
            laws, policies, and public programmes are informed by both rigorous
            analysis and lived experiences, delivering meaningful, inclusive,
            and lasting public impact.
          </p>
        </div>
      </section>

      {/* Mission — clean split layout */}
      <section className="bg-white border-t border-[#e2c8bf]/30 px-5 py-20 sm:px-8 md:py-32">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            {/* Primary Mission Text */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#8b2635]/20">
                  <Target className="h-4 w-4 text-[#8b2635]" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
                  Our Mission
                </p>
              </div>

              <p className="text-[17px] leading-[1.8] text-[#3e3029]">
                We are committed to advancing thoughtful and practical
                approaches to the health & mental health, legal, governance,
                and social challenges of our time. Through rigorous research,
                informed analysis, stakeholder engagement, and field-based
                interventions, we seek to strengthen public institutions,
                improve access to health and mental health services, enrich
                public discourse, and support the development of laws and
                policies that are responsive to the needs of society.
              </p>
            </div>

            {/* Guiding Belief — an editorial pull-quote, marked by a
                large serif quotation glyph instead of a plain rule. */}
            <div className="lg:pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]/50 mb-6">
                Guiding Belief
              </p>

              <div className="relative pl-2">
                <span
                  aria-hidden="true"
                  className="font-heading absolute -left-1 -top-6 text-[80px] leading-none text-[#8b2635]/15 select-none"
                >
                  &ldquo;
                </span>
                <p className="relative text-[19px] leading-[1.75] text-[#3e3029] font-heading font-medium tracking-[-0.01em]">
                  Sustainable change is achieved when knowledge informs action
                  and policy reflects lived realities.
                </p>
                <p className="mt-5 text-[15px] leading-[1.8] text-[#675953]">
                  NAMO Foundation works to bridge research, implementation, and
                  community engagement so that governance and public systems
                  deliver tangible outcomes for the people they serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}