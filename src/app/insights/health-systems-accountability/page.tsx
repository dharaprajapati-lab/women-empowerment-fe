import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Systems Accountability | NAMO Foundation",
  description: "Ongoing study documenting occupational health risks and psychosocial burdens among mortuary workers.",
};

export default function StudyPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="Health Systems Accountability"
        subtitle="ONGOING STUDY"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: "Ongoing Study" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          
          <div className="mb-12">
            <p className="text-[14px] font-bold tracking-[0.1em] text-[#d45d3c] mb-2">
              Ongoing Study
            </p>
            <h2 className="font-heading text-[28px] md:text-[34px] font-bold tracking-[-0.02em] text-[#130a06] leading-tight">
              Health Systems Accountability: Documenting Occupational Health Risks, Psychosocial Burdens, and Caste-Based Discrimination Among Mortuary Workers
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_400px] items-start bg-white p-8 md:p-12 shadow-sm rounded-sm">
            
            <div className="text-[15px] leading-[1.8] text-[#130a06]">
              The Namo Foundation is conducting a comprehensive fact-finding study to systematically document the working conditions, occupational health risks, and lived experiences of mortuary assistants in Indian hospitals, a workforce that sustains critical medico-legal and healthcare functions despite facing severe marginalization, poor working conditions, social stigma, and institutional neglect. The study examines infrastructure conditions, access to protective equipment and occupational health services, as well as the caste, class, and gender dimensions of discrimination workers encounter both within hospitals and their communities. With fieldwork already initiated and the first hospital visit completed, this research seeks to fill a critical gap in health-systems research and human-rights advocacy by generating evidence that can drive necessary policy reforms, labor protections, institutional recognition, and dignified working conditions for this essential yet neglected workforce.
            </div>

            <div className="border border-[#4f7952] p-8 mt-2 lg:mt-0">
              <h3 className="font-bold text-[18px] text-[#4f7952] mb-6 text-center">
                Fieldwork Status
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[14px] text-[#130a06]">
                  <Check className="h-4 w-4 text-[#130a06]" />
                  Fieldwork Initiated
                </li>
                <li className="flex items-center gap-3 text-[14px] text-[#130a06]">
                  <Check className="h-4 w-4 text-[#130a06]" />
                  1 Hospital Visit Completed
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
