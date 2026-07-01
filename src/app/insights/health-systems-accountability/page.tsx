import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Check, ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Systems Accountability | NAMO Foundation",
  description:
    "Ongoing study documenting occupational health risks and psychosocial burdens among mortuary workers.",
};

export default function StudyPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="Health Systems Accountability"
        subtitle="Ongoing Study"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights/health-systems-accountability" },
          { label: "Ongoing Study" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#8b2635] mb-4">
              Research & Policy
            </p>
            <h2 className="font-heading text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-[#120a06] leading-tight max-w-4xl">
              Documenting Occupational Health Risks, Psychosocial Burdens, and
              Caste-Based Discrimination Among Mortuary Workers
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_350px] items-start">
            <div className="bg-white p-8 md:p-12 shadow-sm border border-[#e2c8bf]/50 rounded-[8px]">
              <div className="text-[16px] leading-relaxed text-[#5e514a] space-y-6">
                <p>
                  <strong className="text-[#8b2635]">NAMO Foundation</strong> is
                  conducting a comprehensive fact-finding study to
                  systematically document the working conditions, occupational
                  health risks, and lived experiences of mortuary assistants in
                  Indian hospitals, a workforce that sustains critical
                  medico-legal and healthcare functions despite facing severe
                  marginalization, poor working conditions, social stigma, and
                  institutional neglect.
                </p>
                <p>
                  The study examines infrastructure conditions, access to
                  protective equipment and occupational health services, as well
                  as the caste, class, and gender dimensions of discrimination
                  workers encounter both within hospitals and their communities.
                </p>
                <p>
                  With fieldwork already initiated and the first hospital visit
                  completed, this research seeks to fill a critical gap in
                  health-systems research and human-rights advocacy by generating
                  evidence that can drive necessary policy reforms, labor
                  protections, institutional recognition, and dignified working
                  conditions for this essential yet neglected workforce.
                </p>
              </div>
            </div>

            <div className="bg-[#8b2635] text-white p-8 rounded-[8px] shadow-lg sticky top-24">
              <ClipboardList className="w-10 h-10 text-[#c9921a] mb-6" />
              <h3 className="font-heading text-[20px] font-bold mb-6 border-b border-white/20 pb-4">
                Fieldwork Status
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[15px] text-white/90 leading-snug">
                    Fieldwork Initiated
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1 rounded-full mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-[15px] text-white/90 leading-snug">
                    1 Hospital Visit Completed
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
