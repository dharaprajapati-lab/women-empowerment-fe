import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Research | NAMO Foundation",
  description: "Explore NAMO Foundation's research, fact-finding studies, and policy publications.",
};

const insights = [
  {
    title: "Documenting Occupational Health Risks Among Mortuary Workers",
    type: "ONGOING STUDY",
    desc: "A comprehensive fact-finding study to systematically document the working conditions, occupational health risks, and lived experiences of mortuary assistants in Indian hospitals.",
    href: "/insights/health-systems-accountability",
    icon: Stethoscope,
    status: "Fieldwork Initiated",
  },
];

export default function InsightsPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08] min-h-screen">
      <PageHeader
        title="Insights & Research"
        subtitle="Research, fact-finding studies, and perspectives from the field."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12">
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              Latest Publications & Studies
            </h2>
            <p className="mt-4 text-[16px] text-[#675953] max-w-2xl">
              Generating evidence to drive policy reforms, labor protections, and institutional recognition.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col justify-between rounded-[12px] border border-[#e2c8bf] bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbf4f1] text-[#9f2f1f]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="inline-block rounded-full bg-[#e5f1df] px-3 py-1 text-[11px] font-bold text-[#4f7952] uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-[22px] font-medium leading-tight text-[#130a06] mb-4 group-hover:text-[#9f2f1f] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-[14px] leading-relaxed text-[#675953] mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#e2c8bf]/50 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[#c9921a]">
                    Status: {item.status}
                  </span>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#9f2f1f]">
                    Read Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
