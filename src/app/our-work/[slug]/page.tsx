import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import {
  Heart, Sprout, Stethoscope, Scale, ShieldCheck,
  GraduationCap, Building2, CheckCircle2, ArrowRight
} from "lucide-react";
import Link from "next/link";

const workData: Record<string, {
  title: string;
  tagline: string;
  description: string[];
  icon: React.ElementType;
  iconColor: string;
  bgColor: string;
  stats: { value: string; label: string }[];
  keyActivities: string[];
  sdgs: string[];
  relatedLinks: { label: string; href: string }[];
}> = {
  "women-empowerment": {
    title: "Women Empowerment",
    tagline: "Building leadership, dignity, and economic independence",
    description: [
      "Our Women Empowerment programme is the cornerstone of WAMMCO's work. We believe that when women thrive, entire communities flourish. Through Self Help Groups (SHGs), leadership training, and financial literacy programs, we are building a generation of confident, self-reliant women.",
      "We work with women across rural and semi-urban India to help them access government schemes, open bank accounts, take out microloans for businesses, and participate actively in local governance.",
    ],
    icon: Heart,
    iconColor: "text-rose-600",
    bgColor: "from-rose-500 to-pink-600",
    stats: [
      { value: "5,000+", label: "Active SHGs" },
      { value: "150K+", label: "Women Members" },
      { value: "18", label: "States Covered" },
      { value: "₹50Cr+", label: "Credit Mobilized" },
    ],
    keyActivities: [
      "Self Help Group formation and capacity building",
      "Financial literacy and microfinance linkage",
      "Leadership and governance training",
      "Gender-based violence prevention",
      "Access to government welfare schemes",
      "Digital literacy for women entrepreneurs",
    ],
    sdgs: ["SDG 1", "SDG 5", "SDG 8", "SDG 10"],
    relatedLinks: [
      { label: "WAMMCO Programme", href: "/programmes/wammco" },
      { label: "Volunteer With Us", href: "/get-involved/volunteer" },
    ],
  },
  livelihoods: {
    title: "Livelihoods",
    tagline: "Creating sustainable income and economic resilience",
    description: [
      "Sustainable livelihoods are the foundation of family well-being. Our Livelihoods programme helps women and men gain marketable skills, access credit, and build small enterprises that provide steady income.",
      "We partner with government schemes and private sector employers to create pathways from training to employment, ensuring that economic growth reaches those who need it most.",
    ],
    icon: Sprout,
    iconColor: "text-emerald-600",
    bgColor: "from-emerald-500 to-green-600",
    stats: [
      { value: "80K+", label: "Trained Individuals" },
      { value: "65%", label: "Employment Rate" },
      { value: "500+", label: "Partner Enterprises" },
      { value: "12", label: "Vocational Trades" },
    ],
    keyActivities: [
      "Vocational skills training (tailoring, handicrafts, electronics)",
      "Entrepreneurship development and business planning",
      "Market linkage and buyer-seller meets",
      "Rural enterprise clusters",
      "Agricultural livelihood and climate-resilient farming",
      "Financial inclusion and credit access",
    ],
    sdgs: ["SDG 1", "SDG 8", "SDG 9", "SDG 10"],
    relatedLinks: [
      { label: "SANKALP Programme", href: "/programmes/sankalp" },
      { label: "Partner With Us", href: "/get-involved/partner" },
    ],
  },
  "public-health": {
    title: "Public Health",
    tagline: "Delivering quality healthcare to every doorstep",
    description: [
      "Healthcare is a right, not a privilege. Our Public Health programme focuses on maternal and child health, nutrition, reproductive rights, and disease prevention for communities without adequate access to health services.",
      "Our community health workers — known as Swasthya Sathis — provide doorstep health services, facilitate institutional deliveries, and support ASHA workers in remote areas.",
    ],
    icon: Stethoscope,
    iconColor: "text-blue-600",
    bgColor: "from-blue-500 to-sky-600",
    stats: [
      { value: "300+", label: "Health Camps/Year" },
      { value: "95%", label: "Institutional Delivery Rate" },
      { value: "1,200+", label: "Swasthya Sathis" },
      { value: "100K+", label: "Families Covered" },
    ],
    keyActivities: [
      "Maternal and child health support",
      "Nutrition counseling and supplementation",
      "Reproductive health and family planning",
      "Mobile health camps in remote areas",
      "Adolescent health and menstrual hygiene",
      "COVID-19 response and immunization support",
    ],
    sdgs: ["SDG 2", "SDG 3", "SDG 5"],
    relatedLinks: [
      { label: "SANKALP Programme", href: "/programmes/sankalp" },
      { label: "Donate", href: "/get-involved/donate" },
    ],
  },
  "policy-governance": {
    title: "Policy and Governance",
    tagline: "Advocacy for systemic, lasting change",
    description: [
      "Individual empowerment must be matched by enabling policies. Our Policy & Governance team works with state and central governments to advocate for gender-just laws, budget allocation, and implementation monitoring.",
      "We amplify community voices in policy spaces through evidence-based research, public campaigns, and coalition-building with like-minded civil society organizations.",
    ],
    icon: Scale,
    iconColor: "text-purple-600",
    bgColor: "from-purple-500 to-violet-600",
    stats: [
      { value: "50+", label: "Policy Papers Published" },
      { value: "20+", label: "Government Collaborations" },
      { value: "100+", label: "CSO Partners" },
      { value: "10", label: "National Campaigns" },
    ],
    keyActivities: [
      "Policy research and evidence generation",
      "Budget advocacy for gender-responsive allocations",
      "Community monitoring of government schemes",
      "Coalition building with civil society",
      "RTI training for communities",
      "UN and international advocacy representation",
    ],
    sdgs: ["SDG 5", "SDG 10", "SDG 16", "SDG 17"],
    relatedLinks: [
      { label: "Insights & Reports", href: "/insights/reports" },
      { label: "Partner With Us", href: "/get-involved/partner" },
    ],
  },
  "child-protection": {
    title: "Child Protection",
    tagline: "Every child deserves a safe childhood",
    description: [
      "Children are the future, and their protection is non-negotiable. Our Child Protection programme addresses trafficking, child labour, abuse, and neglect through community-based vigilance committees, rescue networks, and rehabilitation services.",
      "We work with local authorities, schools, and families to create safe environments where every child can grow, learn, and thrive.",
    ],
    icon: ShieldCheck,
    iconColor: "text-orange-600",
    bgColor: "from-orange-500 to-amber-600",
    stats: [
      { value: "2,000+", label: "Children Supported" },
      { value: "500+", label: "VCCs Formed" },
      { value: "300+", label: "Children Repatriated" },
      { value: "95%", label: "School Retention Rate" },
    ],
    keyActivities: [
      "Village Child Protection Committees (VCCs)",
      "Anti-trafficking awareness and rescue support",
      "Child labour elimination and mainstreaming",
      "Abuse reporting and counseling",
      "POCSO Act awareness in schools",
      "Rehabilitation and reintegration for rescued children",
    ],
    sdgs: ["SDG 3", "SDG 4", "SDG 8", "SDG 16"],
    relatedLinks: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Donate", href: "/get-involved/donate" },
    ],
  },
  education: {
    title: "Education",
    tagline: "Unlocking potential through learning",
    description: [
      "Education is the most powerful tool for breaking cycles of poverty. We focus on school enrolment, retention, and quality learning — especially for girls and first-generation learners in marginalized communities.",
      "From remedial teaching centres to digital classrooms, we meet children where they are and help them reach their full potential.",
    ],
    icon: GraduationCap,
    iconColor: "text-yellow-600",
    bgColor: "from-yellow-500 to-amber-500",
    stats: [
      { value: "50K+", label: "Children Enrolled" },
      { value: "200+", label: "Learning Centres" },
      { value: "1,500+", label: "Scholarships Given" },
      { value: "90%", label: "Girl Retention Rate" },
    ],
    keyActivities: [
      "Community learning and remedial centres",
      "Bridge education for out-of-school children",
      "Digital literacy and e-learning programmes",
      "Scholarships for girls and SC/ST students",
      "Teacher training and school management committees",
      "Career counseling and higher education support",
    ],
    sdgs: ["SDG 4", "SDG 5", "SDG 10"],
    relatedLinks: [
      { label: "Internships", href: "/get-involved/internships" },
      { label: "Partner With Us", href: "/get-involved/partner" },
    ],
  },
  "legal-aid": {
    title: "Legal Aid",
    tagline: "Justice within reach for every woman",
    description: [
      "Access to justice is a fundamental right that most marginalized women never experience. Our Legal Aid programme provides free legal consultation, court support, and awareness about rights to women facing domestic violence, property disputes, and discrimination.",
      "We have a network of 50+ empanelled lawyers and 100+ paralegal workers who provide doorstep legal assistance.",
    ],
    icon: Scale,
    iconColor: "text-teal-600",
    bgColor: "from-teal-500 to-cyan-600",
    stats: [
      { value: "10,000+", label: "Cases Handled" },
      { value: "85%", label: "Resolution Rate" },
      { value: "50+", label: "Empanelled Lawyers" },
      { value: "100+", label: "Paralegal Workers" },
    ],
    keyActivities: [
      "Free legal consultation camps",
      "Domestic violence and POCSO case support",
      "Property and land rights for women",
      "Lok Adalat linkage and mediation",
      "Legal literacy training for communities",
      "Court accompaniment services",
    ],
    sdgs: ["SDG 5", "SDG 10", "SDG 16"],
    relatedLinks: [
      { label: "Insights & Reports", href: "/insights/reports" },
      { label: "Volunteer", href: "/get-involved/volunteer" },
    ],
  },
  "capacity-building": {
    title: "Capacity Building",
    tagline: "Strengthening organizations for greater impact",
    description: [
      "Strong civil society is the backbone of democratic development. Our Capacity Building programme supports small grassroots organizations with training, mentoring, technology tools, and governance systems.",
      "We believe in building organizations — not just programs — so that the impact outlasts any single project or donor.",
    ],
    icon: Building2,
    iconColor: "text-indigo-600",
    bgColor: "from-indigo-500 to-blue-600",
    stats: [
      { value: "500+", label: "CSOs Supported" },
      { value: "100+", label: "Training Workshops" },
      { value: "50+", label: "Mentorship Cohorts" },
      { value: "18", label: "States Reached" },
    ],
    keyActivities: [
      "Organizational development and governance training",
      "Financial management and compliance support",
      "Project planning and monitoring systems",
      "Technology and digital tools adoption",
      "Leadership development for CSO heads",
      "Resource mobilization and proposal writing",
    ],
    sdgs: ["SDG 17"],
    relatedLinks: [
      { label: "Partner With Us", href: "/get-involved/partner" },
      { label: "Careers", href: "/get-involved/careers" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(workData).map((slug) => ({ slug }));
}

export default async function OurWorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = workData[slug];
  if (!data) notFound();

  const Icon = data.icon;

  return (
    <div>
      <PageHeader
        title={data.title}
        subtitle={data.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Work", href: "/our-work" },
          { label: data.title },
        ]}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="section-divider mb-6" />
              <h2 className="text-2xl font-bold font-['Playfair_Display'] mb-6">Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {data.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
                {data.stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className={`bg-gradient-to-br ${data.bgColor} text-white rounded-2xl p-5 text-center`}
                  >
                    <div className="text-2xl font-bold font-['Playfair_Display']">{value}</div>
                    <div className="text-xs text-white/75 mt-1">{label}</div>
                  </div>
                ))}
              </div>

              {/* Key Activities */}
              <h3 className="text-xl font-bold font-['Playfair_Display'] mb-4">Key Activities</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.keyActivities.map((activity) => (
                  <div key={activity} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    <CheckCircle2 className="w-4 h-4 text-[#8b2635] mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-border/60 overflow-hidden">
                <div className={`bg-gradient-to-br ${data.bgColor} p-6 text-white text-center`}>
                  <Icon className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-bold text-xl font-['Playfair_Display']">{data.title}</h3>
                </div>
                <CardContent className="p-5">
                  <p className="text-sm text-muted-foreground mb-4">Contributing to UN Sustainable Development Goals:</p>
                  <div className="flex flex-wrap gap-2">
                    {data.sdgs.map((sdg) => (
                      <Badge key={sdg} className="bg-[#8b2635] text-white text-xs">{sdg}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60">
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3">Related Links</h4>
                  <div className="space-y-2">
                    {data.relatedLinks.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-red-50 text-sm text-foreground hover:text-[#8b2635] transition-colors"
                      >
                        {label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
