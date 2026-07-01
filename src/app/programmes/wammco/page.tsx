import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Recycle, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "WAMMCO | NAMO Foundation",
  description:
    "Incubating community-led waste management systems through the Waste Managers Multistate Cooperative Society Ltd (WAMMCO).",
};

export default function WammcoPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="WAMMCO"
        subtitle="Waste Managers Multistate Cooperative Society Ltd"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: "WAMMCO" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid lg:grid-cols-[1fr_350px] gap-16 items-start">
            <div>
              <div className="mb-12">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#8b2635] mb-4">
                  Flagship Project: Cooperative Governance
                </p>
                <h2 className="font-heading text-[32px] md:text-[40px] font-bold tracking-[-0.02em] text-[#120a06] leading-tight">
                  Incubating Community-Led Waste Management Systems
                </h2>
              </div>

              <div className="space-y-8 text-[16px] leading-relaxed text-[#5e514a]">
                <p>
                  <strong className="text-[#8b2635]">NAMO Foundation</strong> played a
                  foundational role in the conceptualisation, incubation, and
                  institutional development of the Waste Managers Multistate
                  Cooperative Society Ltd. (WAMMCO), a first-of-its-kind
                  cooperative platform aimed at strengthening the livelihoods,
                  dignity, and collective bargaining power of waste workers.
                  Recognising the need for an inclusive and worker-owned model
                  of waste management that prioritises worker health and safety,
                  the Foundation facilitated the cooperative's creation.
                  WAMMCO's commitment to zero waste and 100 percent recycling
                  eliminates legacy waste accumulation, preventing hazardous
                  gases like methane that pose severe health risks to waste
                  workers and communities.
                </p>

                <div className="bg-white p-8 rounded-[8px] border border-[#e2c8bf]/50 shadow-sm my-10">
                  <h3 className="font-heading text-[22px] font-bold text-[#120a06] mb-4">
                    Knowledge & Implementation Partner
                  </h3>
                  <p>
                    As the knowledge and implementation partner, NAMO Foundation
                    has developed governance frameworks, operational systems,
                    and capacity-building initiatives that enable waste workers
                    as organised stakeholders. WAMMCO employs a detailed
                    questionnaire to comprehensively analyse workers' current
                    socio-economic situations, health conditions, and
                    vulnerabilities. Based on these insights, WAMMCO
                    collaborates with workers to design tailored interventions
                    that improve their overall circumstances while minimising
                    exposure to toxic emissions and occupational hazards.
                  </p>
                </div>

                <p>
                  A key pillar is empowering Self-Help Groups (SHGs),
                  particularly women-led groups, through entrepreneurship
                  development, financial literacy, and leadership training. This
                  enables safe participation in waste collection, segregation,
                  and recycling activities. By fostering community ownership and
                  economic participation with health-centred operations, the
                  initiative strengthens waste management systems while
                  promoting sustainable livelihoods and inclusion of
                  marginalised communities.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sticky top-24">
              <div className="bg-[#8b2635] text-white p-8 rounded-[8px] shadow-lg">
                <Recycle className="w-10 h-10 text-[#c9921a] mb-6" />
                <h3 className="font-heading text-[20px] font-bold mb-3">
                  Zero Waste Commitment
                </h3>
                <p className="text-[14px] text-white/90 leading-relaxed">
                  100% recycling eliminates legacy waste accumulation,
                  preventing hazardous gases like methane that pose severe
                  health risks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-[8px] border border-[#e2c8bf]/50 shadow-sm">
                <Users className="w-10 h-10 text-[#8b2635] mb-6" />
                <h3 className="font-heading text-[20px] font-bold text-[#120a06] mb-3">
                  Empowering SHGs
                </h3>
                <p className="text-[14px] text-[#5e514a] leading-relaxed">
                  Supporting women-led groups through entrepreneurship
                  development, financial literacy, and leadership training.
                </p>
              </div>

              <div className="bg-[#fbf4f1] p-8 rounded-[8px] border border-[#e2c8bf]/30">
                <Target className="w-10 h-10 text-[#c9921a] mb-6" />
                <h3 className="font-heading text-[20px] font-bold text-[#120a06] mb-3">
                  Data-Driven Interventions
                </h3>
                <p className="text-[14px] text-[#5e514a] leading-relaxed">
                  Using comprehensive questionnaires to analyse vulnerabilities
                  and design tailored interventions for workers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
