import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, MapPin, Award } from "lucide-react";

export const metadata = {
  title: "Our Impact | WAMMCO",
  description: "Measuring the real difference made through WAMMCO's 25 years of community development work.",
};

const impactStats = [
  { value: "500K+", label: "Lives Touched Annually", icon: Users, color: "from-rose-500 to-pink-600" },
  { value: "18", label: "States Covered", icon: MapPin, color: "from-blue-500 to-sky-600" },
  { value: "25+", label: "Years of Service", icon: Award, color: "from-amber-500 to-yellow-500" },
  { value: "200+", label: "Active Programmes", icon: TrendingUp, color: "from-emerald-500 to-green-600" },
];

const thematicImpact = [
  {
    area: "Women Empowerment",
    metrics: [
      { label: "Women in SHGs", value: "1,50,000+" },
      { label: "Active SHGs", value: "5,000+" },
      { label: "Credit Mobilized", value: "₹50 Crore+" },
      { label: "Women in Local Governance", value: "2,000+" },
    ],
    color: "bg-rose-50 border-rose-200",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    area: "Livelihoods",
    metrics: [
      { label: "Individuals Trained", value: "80,000+" },
      { label: "Employment Rate Post-Training", value: "65%" },
      { label: "Enterprises Supported", value: "10,000+" },
      { label: "Average Income Increase", value: "40%" },
    ],
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    area: "Public Health",
    metrics: [
      { label: "Health Camps Conducted/Year", value: "300+" },
      { label: "Institutional Deliveries Facilitated", value: "50,000+" },
      { label: "Children Immunized", value: "2,00,000+" },
      { label: "Swasthya Sathis Deployed", value: "1,200+" },
    ],
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    area: "Education",
    metrics: [
      { label: "Children Enrolled", value: "50,000+" },
      { label: "Learning Centres Operated", value: "200+" },
      { label: "Girl Retention Rate", value: "90%" },
      { label: "Scholarships Disbursed", value: "1,500+" },
    ],
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    area: "Legal Aid",
    metrics: [
      { label: "Legal Cases Handled", value: "10,000+" },
      { label: "Case Resolution Rate", value: "85%" },
      { label: "Empanelled Lawyers", value: "50+" },
      { label: "Legal Literacy Camps", value: "500+" },
    ],
    color: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    area: "Child Protection",
    metrics: [
      { label: "Children Rescued & Supported", value: "2,000+" },
      { label: "Protection Committees Formed", value: "500+" },
      { label: "Children Repatriated", value: "300+" },
      { label: "Schools Covered", value: "800+" },
    ],
    color: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
];

const awards = [
  { year: "2023", title: "National Award for Excellence in Social Work", org: "Ministry of Social Justice" },
  { year: "2022", title: "GuideStar Platinum Certification", org: "Candid (GuideStar)" },
  { year: "2020", title: "UN Women WEPs Champion", org: "UN Women India" },
  { year: "2018", title: "Skoch Award — Digital Inclusion", org: "Skoch Group" },
  { year: "2016", title: "Best NGO in Gender & Development", org: "CSR Times" },
];

export default function ImpactPage() {
  return (
    <div>
      <PageHeader
        title="Our Impact"
        subtitle="Numbers that represent real lives transformed, real dignity restored, real futures built."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Impact" }]}
      />

      {/* Big stats */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {impactStats.map(({ value, label, icon: Icon, color }) => (
              <div key={label} className={`bg-gradient-to-br ${color} text-white rounded-3xl p-8 text-center card-hover`}>
                <Icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold font-['Playfair_Display'] mb-2">{value}</div>
                <div className="text-white/80 text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* Thematic impact */}
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-5" />
            <h2 className="text-3xl font-bold font-['Playfair_Display']">Impact by Theme</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {thematicImpact.map(({ area, metrics, color, badge }) => (
              <Card key={area} className={`${color} border card-hover`}>
                <CardContent className="p-6">
                  <Badge className={`${badge} mb-4`}>{area}</Badge>
                  <div className="grid grid-cols-2 gap-3">
                    {metrics.map(({ label, value }) => (
                      <div key={label} className="text-center">
                        <div className="text-xl font-bold text-foreground font-['Playfair_Display']">{value}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Awards */}
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-5" />
            <h2 className="text-3xl font-bold font-['Playfair_Display']">Recognition & Awards</h2>
          </div>
          <div className="space-y-4">
            {awards.map((award) => (
              <div key={award.title} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors">
                <div className="w-16 text-center shrink-0">
                  <Badge className="bg-[#8b2635] text-white">{award.year}</Badge>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{award.title}</div>
                  <div className="text-sm text-muted-foreground">{award.org}</div>
                </div>
                <Award className="w-5 h-5 text-amber-500 ml-auto shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
