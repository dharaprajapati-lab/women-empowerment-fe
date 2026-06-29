import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "WAMMCO | NAMO Foundation",
  description: "Incubating community-led waste management systems through the Waste Managers Multistate Cooperative Society Ltd (WAMMCO).",
};

export default function WammcoPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="WAMMCO"
        subtitle="WASTE MANAGERS MULTISTATE COOPERATIVE SOCIETY LTD"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: "WAMMCO" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 border-b border-[#e2c8bf]/50">
        <div className="mx-auto max-w-[1220px]">
          
          <div className="mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#d45d3c] mb-4">
              FLAGSHIP PROJECT: COORPORATIVE GOVERNANCE
            </p>
            <h2 className="font-heading text-[28px] md:text-[32px] font-bold tracking-[-0.02em] text-[#130a06] leading-tight">
              INCUBATING COMMUNITY-LED WASTE MANAGEMENT SYSTEMS: Waste Managers Multistate Cooperative Society Ltd (WAMMCO)
            </h2>
          </div>

          <div className="rounded-[12px] bg-white border border-[#e2c8bf] p-8 md:p-12 shadow-sm mb-12">
            <div className="space-y-6 text-[15px] leading-relaxed text-[#5f514a]">
              <p>
                NAMO Foundation played a foundational role in the conceptualisation, incubation, and institutional development of the Waste Managers Multistate Cooperative Society Ltd. (WAMMCO), a first-of-its-kind cooperative platform aimed at strengthening the livelihoods, dignity, and collective bargaining power of waste workers. Recognising the need for an inclusive and worker-owned model of waste management that prioritises worker health and safety, the Foundation facilitated the cooperative's creation. WAMMCO's commitment to zero waste and 100 percent recycling eliminates legacy waste accumulation, preventing hazardous gases like methane that pose severe health risks to waste workers and communities.
              </p>
              
              <p>
                As the knowledge and implementation partner, NAMO Foundation has developed governance frameworks, operational systems, and capacity-building initiatives that enable waste workers as organised stakeholders. WAMMCO employs a detailed questionnaire to comprehensively analyse workers' current socio-economic situations, health conditions, and vulnerabilities. Based on these insights, WAMMCO collaborates with workers to design tailored interventions that improve their overall circumstances while minimising exposure to toxic emissions and occupational hazards.
              </p>
              
              <p>
                A key pillar is empowering Self-Help Groups (SHGs), particularly women-led groups, through entrepreneurship development, financial literacy, and leadership training. This enables safe participation in waste collection, segregation, and recycling activities. By fostering community ownership and economic participation with health-centred operations, the initiative strengthens waste management systems while promoting sustainable livelihoods and inclusion of marginalised communities.
              </p>
            </div>
          </div>

          {/* <div className="text-center">
            <p className="text-[#c9921a] font-bold italic text-[15px]">
              Decoding Complexities. Delivering Impact.
            </p>
          </div> */}

        </div>
      </section>
    </div>
  );
}
