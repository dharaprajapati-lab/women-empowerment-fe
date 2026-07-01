// import type { Metadata } from "next";
// import PageHeader from "@/components/PageHeader";
// import { BookOpen, Scale, Target, Users } from "lucide-react";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "About Us | NAMO Foundation",
//   description:
//     "Learn about the NAMO Foundation, our mission, and our approach to delivering impact.",
// };

// export default function AboutPage() {
//   return (
//     <div className="bg-[#faf9f6] text-[#170d08]">
//       <PageHeader
//         title="About Us"
//         subtitle="Decoding Complexities. Delivering Impact."
//         breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
//       />

//       {/* Main Content Section */}
//       <section className="px-5 py-20 sm:px-8 lg:py-28">
//         <div className="mx-auto max-w-[1220px]">
//           <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] items-center">
//             {/* Text Side */}
//             <div>
//               <h2 className="text-[32px] md:text-[42px] font-heading font-medium leading-tight tracking-[-0.035em] text-[#120a06] mb-8">
//                 Who We Are
//               </h2>

//               <div className="space-y-6 text-[16px] leading-relaxed text-[#5e514a]">
//                 <p>
//                   <strong className="text-[#8b2635]">NAMO Foundation</strong> is
//                   an interdisciplinary think tank that transforms complex health
//                   & mental well being, governance, legal, and social challenges
//                   into practical, evidence-based pathways for lasting public
//                   impact.
//                 </p>
//                 <p>
//                   Through rigorous research, policy analysis, stakeholder
//                   engagement, and sustained field-based interventions, we are
//                   dedicated to strengthening public institutions, improving
//                   access to health and mental health services, promoting
//                   accountable governance, and supporting the effective
//                   implementation of laws, policies, and public programmes.
//                 </p>
//                 <p>
//                   The Foundation serves as a platform for dialogue among
//                   policymakers, public health professionals, mental health
//                   practitioners, legal experts, researchers, academicians, civil
//                   society stakeholders, and communities directly affected by
//                   public policy.
//                 </p>
//               </div>
//             </div>

//             {/* Image Side */}
//             <div className="relative mt-8 lg:mt-0">
//               <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-lg border border-[#e2c8bf]/50">
//                 <Image
//                   src="/images/about-hero.png"
//                   alt="NAMO Foundation Leaders discussing policy"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[8px] shadow-xl border border-[#e2c8bf] max-w-[280px] hidden md:block">
//                 <div className="flex gap-4 items-start">
//                   <div className="bg-[#fbf4f1] p-3 rounded-full text-[#c9921a]">
//                     <Scale className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="text-[14px] font-bold text-[#120a06] mb-1">
//                       Bridging the Gap
//                     </h4>
//                     <p className="text-[12px] text-[#675953] leading-relaxed">
//                       Between policy design, implementation, and field realities.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Three Pillars Section */}
//       <section className="bg-white px-5 py-24 sm:px-8 border-t border-[#e2c8bf]/30">
//         <div className="mx-auto max-w-[1220px]">
//           <div className="text-center max-w-[700px] mx-auto mb-16">
//             <h3 className="text-[#8b2635] text-[12px] font-bold uppercase tracking-[0.2em] mb-4">
//               Our Approach
//             </h3>
//             <h2 className="text-[32px] md:text-[40px] font-heading font-medium tracking-[-0.02em] text-[#120a06]">
//               Integrated Strategy for Sustainable Change
//             </h2>
//           </div>

//           <div className="grid gap-8 md:grid-cols-3">
//             {[
//               {
//                 icon: BookOpen,
//                 title: "Evidence-Based Research",
//                 desc: "Generating practical insights from lived experiences and translating them into informed policy recommendations and institutional reforms.",
//               },
//               {
//                 icon: Users,
//                 title: "Collaborative Engagement",
//                 desc: "Bringing together experts, practitioners, and communities to foster dialogue and address challenges through grassroots action.",
//               },
//               {
//                 icon: Target,
//                 title: "Sustainable Impact",
//                 desc: "Strengthening systems and improving service delivery to advance measurable and lasting progress across communities.",
//               },
//             ].map((pillar, i) => (
//               <div
//                 key={i}
//                 className="bg-[#faf9f6] p-8 rounded-[8px] border border-[#e2c8bf]/50 hover:border-[#8b2635]/30 transition-colors group"
//               >
//                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#8b2635] shadow-sm mb-6 group-hover:scale-110 transition-transform">
//                   <pillar.icon className="w-5 h-5" />
//                 </div>
//                 <h3 className="text-[18px] font-bold text-[#120a06] mb-3">
//                   {pillar.title}
//                 </h3>
//                 <p className="text-[14px] text-[#5e514a] leading-relaxed">
//                   {pillar.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Scale, Target, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | NAMO Foundation",
  description:
    "Learn about the NAMO Foundation, our mission, and our approach to delivering impact.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6] text-[#170d08]">
      <PageHeader
        title="About Us"
        subtitle="Decoding Complexities. Delivering Impact."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Main Content Section */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] items-center">
            {/* Text Side */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
                The Organisation
              </p>

              <h2 className="mt-4 text-[32px] md:text-[42px] font-heading font-medium leading-[1.05] tracking-[-0.035em] text-[#120a06]">
                Turning Insight
                <br />
                Into Action
              </h2>

              <div className="mt-8 space-y-6 text-[16px] leading-relaxed text-[#5e514a]">
                <p>
                  <strong className="text-[#8b2635]">NAMO Foundation</strong> is
                  an interdisciplinary think tank that transforms complex health
                  & mental well being, governance, legal, and social challenges
                  into practical, evidence-based pathways for lasting public
                  impact.
                </p>
                <p>
                  Through rigorous research, policy analysis, stakeholder
                  engagement, and sustained field-based interventions, we are
                  dedicated to strengthening public institutions, improving
                  access to health and mental health services, promoting
                  accountable governance, and supporting the effective
                  implementation of laws, policies, and public programmes.
                </p>
                <p>
                  The Foundation serves as a platform for dialogue among
                  policymakers, public health professionals, mental health
                  practitioners, legal experts, researchers, academicians, civil
                  society stakeholders, and communities directly affected by
                  public policy.
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden shadow-lg border border-[#e2c8bf]/50">
                <Image
                  src="/images/about-hero.png"
                  alt="NAMO Foundation Leaders discussing policy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-sm p-5 rounded-[8px] shadow-lg border border-[#e2c8bf]/60 max-w-[260px] hidden md:block">
                <div className="flex gap-3.5 items-start">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8b2635]/[0.07] text-[#8b2635]">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold text-[#120a06]">
                      Bridging the Gap
                    </h4>
                    <p className="mt-1 text-[12px] text-[#675953] leading-relaxed">
                      Between policy design, implementation, and field realities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="bg-white px-5 py-24 sm:px-8 border-t border-[#e2c8bf]/30">
        <div className="mx-auto max-w-[1220px]">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b2635]">
              Our Approach
            </p>
            <h2 className="mt-3 text-[32px] md:text-[40px] font-heading font-medium tracking-[-0.02em] text-[#120a06]">
              Integrated Strategy for
              <br className="hidden sm:block" />
              Sustainable Change
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[8px] bg-[#e2c8bf]/40 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Evidence-Based Research",
                desc: "Generating practical insights from lived experiences and translating them into informed policy recommendations and institutional reforms.",
              },
              {
                icon: Users,
                title: "Collaborative Engagement",
                desc: "Bringing together experts, practitioners, and communities to foster dialogue and address challenges through grassroots action.",
              },
              {
                icon: Target,
                title: "Sustainable Impact",
                desc: "Strengthening systems and improving service delivery to advance measurable and lasting progress across communities.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-white p-8 md:p-10 group transition-colors hover:bg-[#faf9f6]"
              >
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#8b2635]/[0.06]" />
                  <div className="relative text-[#8b2635]">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="mt-7 text-center text-[18px] font-bold text-[#120a06]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-center text-[14px] text-[#5e514a] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}