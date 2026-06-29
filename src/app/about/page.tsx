import { Scale, Settings } from "lucide-react";
import React from "react";

export const metadata = {
  title: "About NAMO Foundation | Who We Are",
  description: "Learn about the NAMO Foundation, our mission, and our approach to delivering impact.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-30 max-w-5xl">
      <div className="relative">
        <div className="mb-8">
          <h3 className="text-[#c9921a] font-semibold tracking-widest uppercase text-sm mb-2">
            Who We Are
          </h3>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
            About NAMO Foundation
          </h1>
        </div>

        {/* Logo / Icon Placeholder on the right */}
        <div className="absolute top-0 right-0 hidden md:flex items-center justify-center bg-muted/30 border border-border/50 rounded-sm w-20 h-20 border border-red-200">
          <div className="relative w-full h-full flex items-center justify-center text-primary">
            <Settings className="absolute w-20 h-20 opacity-20 text-[#0f2c59]" />
            <Scale className="absolute w-10 h-10 text-[#c9921a]" />
          </div>
        </div>

        <div className="bg-card text-card-foreground p-8 md:p-12 rounded-xl shadow-md border border-border/50 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            NAMO Foundation is an interdisciplinary think tank that transforms complex health & mental well being, governance, legal, and social challenges into practical, evidence-based pathways for lasting public impact. Through rigorous research, policy analysis, stakeholder engagement, and sustained field-based interventions, we at NAMO are dedicated to strengthen public institutions, improve access to health and mental health services, promote accountable governance, and support the effective implementation of laws, policies, and public programmes.
          </p>

          <p>
            The Foundation serves as a platform for dialogue among policymakers, public health professionals, mental health practitioners, legal experts, researchers, academicians, civil society stakeholders and communities directly affected by public policy. Our work combines research with on-ground engagement, enabling us to generate practical insights from lived experiences and translate them into informed policy recommendations, institutional reforms, and community-centred solutions.
          </p>

          <p>
            By bridging the gap between policy design, implementation, and field realities, we help institutions address complex health, governance, and development challenges through evidence-based research, public health initiatives, mental health advocacy, legal analysis, collaborative engagement, and grassroots action. Through this integrated approach, NAMO Foundation seeks to strengthen systems, improve service delivery, and advance sustainable and measurable impact across communities.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#c9921a] font-serif italic text-xl md:text-2xl font-bold">
            Decoding Complexities. Delivering Impact.
          </p>
        </div>
      </div>
    </div>
  );
}