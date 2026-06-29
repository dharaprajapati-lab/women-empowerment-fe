import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Users2, Stethoscope, Scale, FileSignature, MapPin, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "West Bengal Outreach | NAMO Foundation",
  description: "Flagship programmes covering Human Rights Awareness, Health & Welfare Camps, and Labour Welfare for unorganized sector workers in West Bengal.",
};

export default function WestBengalOutreachPage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      <PageHeader
        title="West Bengal Outreach"
        subtitle="FLAGSHIP PROGRAMMES FOR UNORGANIZED SECTOR WORKERS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: "West Bengal Outreach" },
        ]}
      />

      <section className="px-5 py-24 sm:px-8 border-b border-[#e2c8bf]/50">
        <div className="mx-auto max-w-[1220px]">
          
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c9921a] mb-4">
              FLAGSHIP PROGRAMME
            </p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              Human Rights Awareness- cum- Health and Welfare Camps — West Bengal
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            
            {/* Text Content */}
            <div className="rounded-[12px] bg-white border border-[#e2c8bf] p-8 md:p-10 shadow-sm relative">
              <div className="absolute top-8 left-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9921a] text-white">
                <Heart className="h-5 w-5" />
              </div>
              <div className="pl-16">
                <h3 className="font-heading text-[20px] font-bold text-[#130a06] mb-6">
                  Reaching unorganised-sector workers
                </h3>
                <div className="space-y-4 text-[14px] leading-relaxed text-[#5f514a]">
                  <p>
                    Human Rights Awareness-cum-Health & Welfare Camps were held at eight Railway Goods Sheds across West Bengal in partnership with SGT University to improve access to quality healthcare services for workers in the unorganised sector and their families.
                  </p>
                  <p>
                    The collaboration brought together qualified medical professionals, specialists, and support staff to deliver consultations, health screenings, preventive care advice, and referral support across multiple disciplines, including General Medicine, Orthopaedics, Pulmonology, Paediatrics, and Gynaecology.
                  </p>
                  <p>
                    The camps combined human rights awareness, medical health services, e-Shram registration support, grievance documentation, and facilitation of access to welfare schemes. Dedicated support mechanisms were established to assist workers in accessing social security benefits, overcoming barriers related to documentation, digital exclusion, and limited awareness of available entitlements. By bringing essential services directly to worksites and communities, the initiative strengthened worker inclusion and improved access to welfare and social protection frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Side */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#fdf9f7] rounded-[12px] border border-[#e2c8bf] p-8 shadow-sm flex items-center gap-6">
                <div className="font-heading text-[48px] font-bold text-[#130a06] tracking-tight">
                  3,000+
                </div>
                <div className="text-[13px] text-[#675953] leading-snug">
                  workers & family members reached across the State
                </div>
              </div>

              <div className="bg-[#fdf9f7] rounded-[12px] border border-[#e2c8bf] p-8 shadow-sm flex gap-6 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c9921a] text-white">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-[#130a06] mb-1">Medical health camps</h4>
                  <p className="text-[12px] text-[#675953] leading-relaxed">
                    General medicine, orthopaedics, pulmonology, paediatrics & gynaecology
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#c9921a] mb-4">
              FLAGSHIP PROGRAMME
            </p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#130a06]">
              Conferences on Human Rights, Labour Welfare, And Social Security For Unorganized Sector Workers West Bengal
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
            
            {/* Text Content */}
            <div className="rounded-[12px] bg-white border border-[#e2c8bf] p-8 md:p-10 shadow-sm relative">
              <div className="absolute top-8 left-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9921a] text-white">
                <Heart className="h-5 w-5" />
              </div>
              <div className="pl-16">
                <h3 className="font-heading text-[20px] font-bold text-[#130a06] mb-6">
                  Reaching unorganised-sector workers
                </h3>
                <div className="space-y-4 text-[14px] leading-relaxed text-[#5f514a]">
                  <p>
                    A series of sensitisation programmes, awareness campaigns, and public conferences were conducted across West Bengal to strengthen understanding of labour rights, human rights protections, social security entitlements, and welfare mechanisms available to workers in the unorganised sector. Particular emphasis was placed on the Four Labour Codes, Employees' State Insurance (ESI), occupational safety, grievance redressal mechanisms, and access to statutory benefits.
                  </p>
                  <p>
                    Targeting Malgodam (goods-shed) workers, contract & daily-wage labourers, transport workers, artisans, masons and street vendors — among the most vulnerable in the informal economy. These engagements focused on clarifying provisions of the new labour laws, addressing concerns and misconceptions, and explaining grievance redressal mechanisms, social protection measures, and access to public services.
                  </p>
                  <p>
                    This proactive engagement played a key role in maintaining social harmony and ensuring that the implementation of the new labour laws in West Bengal proceeded without protests or unrest.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Side */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#fdf9f7] rounded-[12px] border border-[#e2c8bf] p-8 shadow-sm flex items-center gap-6">
                <div className="font-heading text-[48px] font-bold text-[#130a06] tracking-tight">
                  10,000+
                </div>
                <div className="text-[13px] text-[#675953] leading-snug">
                  workers & family members reached across the State
                </div>
              </div>

              <div className="bg-[#fdf9f7] rounded-[12px] border border-[#e2c8bf] p-6 shadow-sm flex gap-5 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c9921a] text-white">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#130a06] mb-1">Rights & labour-code awareness</h4>
                  <p className="text-[12px] text-[#675953] leading-relaxed">
                    Sensitization on the four Labour Codes, ESI & grievance redressal
                  </p>
                </div>
              </div>

              <div className="bg-[#fdf9f7] rounded-[12px] border border-[#e2c8bf] p-6 shadow-sm flex gap-5 items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#130a06] text-white">
                  <FileSignature className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[15px] text-[#130a06] mb-1">e-Shram registration</h4>
                  <p className="text-[12px] text-[#675953] leading-relaxed">
                    On-the-spot enrolment into the national social-security framework
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
