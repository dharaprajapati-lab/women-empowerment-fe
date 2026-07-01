import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships & Collaborations | NAMO Foundation",
  description:
    "Meet our CSR and institutional partners who are driving our mission forward across India.",
};

const partners = [
  { name: "SGT University, Gurugram", category: "Academic Institution" },
  { name: "Waste Managers Multistate Co-op Ltd. (WAMMCO)", category: "Community Cooperative" },
  { name: "Sewa Nyaya Utthaan Foundation", category: "Civil Society" },
  { name: "Dr. Ambedkar Jankalyan Samiti", category: "Civil Society" },
  { name: "National Medicos Organisation (NMO)", category: "Health & Medical" },
  { name: "Advanced Study Institute of ASIA (ASIA)", category: "Academic Institution" },
  { name: "Aarogya Bharti", category: "Health & Medical" },
  { name: "Yuva Manch", category: "Civil Society" },
  { name: "British Ravidassia Heritage Foundation", category: "Cultural Foundation" },
  { name: "United Nobel Human Rights Committee", category: "Human Rights" },
  { name: "Shanti Suraksha aur Sadbhav Trust", category: "Civil Society" },
  { name: "Bharatiya Railway Mall Godam Shramik Union (BRMGSU)", category: "Labour Union" },
  { name: "Jeewanti Sewa Samiti", category: "Civil Society" },
  { name: "IGEP TRUST", category: "Civil Society" },
  { name: "Pathway Global", category: "International" },
  { name: "Foundation for Integrated Support and Solution (FISS)", category: "Civil Society" },
];

// Group partners by category
const grouped = partners.reduce<Record<string, string[]>>((acc, p) => {
  if (!acc[p.category]) acc[p.category] = [];
  acc[p.category].push(p.name);
  return acc;
}, {});

export default function PartnershipsPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="Partnerships & Collaborations"
        subtitle="Building coalitions for lasting impact across India."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Partnerships" },
        ]}
      />

      {/* Intro Section */}
      <section className="px-5 py-20 sm:px-8 border-b border-[#e2c8bf]/30 bg-white">
        <div className="mx-auto max-w-[1220px] grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#8b2635] mb-4">
              Our Network
            </p>
            <h2 className="font-heading text-[36px] md:text-[48px] font-medium tracking-[-0.035em] text-[#120a06] leading-[1.1]">
              Stronger Together
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[#5e514a]">
              NAMO Foundation works in partnership with academic institutions,
              civil society organisations, medical bodies, community cooperatives,
              and international networks to amplify impact, share expertise, and
              drive evidence-based social change across India.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-[#5e514a]">
              These collaborations enable us to reach more communities, strengthen
              our research, and ensure that our interventions are grounded in
              diverse perspectives and ground-level realities.
            </p>
          </div>

          <div className="bg-[#8b2635] rounded-[16px] p-10 text-white shadow-xl relative overflow-hidden">
            <Handshake className="w-12 h-12 text-[#c9921a] mb-6 relative z-10" />
            <h3 className="font-heading text-[32px] font-medium leading-tight relative z-10">
              {partners.length}+ Active Partners
            </h3>
            <p className="mt-4 text-[16px] text-white/80 leading-relaxed relative z-10 max-w-md">
              Spanning academia, health, law, labour rights, and civil society
              across national and international networks.
            </p>
            <Handshake className="absolute -bottom-12 -right-12 w-64 h-64 text-white/[0.04] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Partners by Category Grid */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#c9921a] mb-4">
              Our Collaborators
            </p>
            <h2 className="font-heading text-[32px] md:text-[40px] font-medium tracking-[-0.035em] text-[#120a06]">
              CSR & Institutional Partners
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#5e514a]">
              We are proud to align with these esteemed organizations that share our commitment to societal development and equity.
            </p>
          </div>

          {/* Grid Layout for Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(grouped).map(([category, names]) => (
              <div 
                key={category} 
                className="bg-white border border-[#e2c8bf]/40 rounded-[16px] p-8 shadow-sm hover:shadow-md hover:border-[#8b2635]/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6 pb-4 border-b border-[#e2c8bf]/40">
                  <h3 className="font-heading text-[18px] font-semibold text-[#8b2635] tracking-tight">
                    {category}
                  </h3>
                  <span className="text-[12px] font-bold text-[#8b2635] bg-[#8b2635]/10 rounded-full px-3 py-1 mt-0.5">
                    {names.length}
                  </span>
                </div>
                <div className="space-y-4 flex-grow">
                  {names.map((name) => (
                    <div key={name} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9921a] flex-shrink-0 mt-2"></span>
                      <span className="text-[15px] text-[#3e3029] leading-relaxed font-medium">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}