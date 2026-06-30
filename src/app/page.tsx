
"use client";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Droplet,
  GraduationCap,
  Lightbulb,
  MapPin,
  Sprout,
  Users,
} from "lucide-react";

const impactStats = [
  {
    value: "4,29,500+",
    label: "Lives Impacted",
    icon: Users,
  },
  {
    value: "220+",
    label: "Institutions",
    icon: Building2,
  },
  {
    value: "7+",
    label: "States",
    icon: MapPin,
  },
];

const partners = [
  "SGT University, Gurugram",
  "Waste Managers Multistate Co-op Ltd. (WAMMCO)",
  "Sewa Nyaya Utthaan Foundation",
  "Dr. Ambedkar Jankalyan Samiti",
  "National Medicos Organisation (NMO)",
  "Advanced Study Institute of ASIA (ASIA)",
  "Aarogya Bharti",
  "Yuva Manch",
  "British Ravidassia Heritage Foundation",
  "United Nobel Human Rights Committee",
  "Shanti Suraksha aur Sadbhav Trust",
  "Bharatiya Railway Mall Godam Shramik Union (BRMGSU)",
  "Jeewanti Sewa Samiti",
  "IGEP TRUST",
  "Pathway Global",
  "Foundation for Integrated Support and Solution (FISS)"
];

const insights = [
  {
    type: "REPORT",
    date: "Oct 12, 2024",
    title: "The Future of Regenerative Agriculture in Drylands",
    image: "/images/regenerative-agriculture.jpg",
    href: "/insights/reports",
  },
  {
    type: "STORY",
    date: "Oct 05, 2024",
    title: "Voices from the Valley: Rebuilding After the Flood",
    image: "/images/community-meeting.jpg",
    href: "/insights/blogs",
  },
];

export default function HomePage() {
  return (
    <div className="bg-[#fbf4f1] text-[#170d08]">
      {/* Hero */}
      <section className="border-b border-[#ead4cc]/50 bg-[#fbf4f1]">
        <div className="mx-auto grid max-w-[1220px] items-center gap-14 px-5 py-10 mt-20 sm:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div className="">
            <h1 className="max-w-[590px] text-[45px] font-bold leading-[0.98] tracking-[-0.04em] text-[#120a06] sm:text-[58px] lg:text-[68px]">
              Empowering Communities, Sustaining Impact
            </h1>

            <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[#5e514a]">
              We work alongside local communities to foster sustainable
              development, build resilience, and create lasting social change
              through targeted grassroots initiatives.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/our-work"
                className="rounded-[4px] bg-[#9f2f1f] px-7 py-3 text-[12px] font-bold text-white transition-colors hover:bg-[#842719]"
              >
                Explore Our Work
              </Link>

              <Link
                href="/insights/health-systems-accountability"
                className="rounded-[4px] border border-[#b7a09a] px-7 py-3 text-[12px] font-semibold text-[#2a1a12] transition-colors hover:border-[#9f2f1f] hover:text-[#9f2f1f]"
              >
                Read Insights
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[585px] rounded-[7px] border border-[#a85b3b]/40 bg-[#c97a45] p-5 shadow-sm sm:p-6">
            <div className="mx-auto h-[305px] w-full max-w-[292px] overflow-hidden bg-[#d8b08e]">
              <img
                src="/images/hero-community.jpg"
                alt="Community members working together"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-0 rounded-[4px] bg-[#fff8f5] px-5 py-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full text-[#9f2f1f]">
                  <Sprout className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[13px] font-bold text-[#24140d]">
                    Community First
                  </p>
                  <p className="text-[12px] text-[#6d5c55]">
                    Building trust since 2010.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f8e5df] px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-[1060px] text-center">
          <div className="font-heading text-3xl font-bold leading-none text-[#9f2f1f]">
            ”
          </div>

          <h2 className="mx-auto mt-5 max-w-[990px] text-[28px] font-medium leading-tight tracking-[-0.025em] text-[#130a06] sm:text-[34px]">
            Our mission is to cultivate self-reliant communities by providing
            access to essential resources, education, and sustainable economic
            opportunities.
          </h2>

          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9f2f1f]">
            CommDev Foundation
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-[#fbf4f1] px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-[1220px]">
          <div className="text-center">
            <h2 className="text-[30px] font-medium tracking-[-0.025em] text-[#140b07]">
              Our Impact in Numbers
            </h2>
            <p className="mt-2 text-[14px] text-[#675953]">
              Measurable progress towards a more equitable future.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {impactStats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-[6px] border border-[#e2c8bf] bg-[#fff8f5]/35 px-6 py-8 text-center"
              >
                <Icon className="mx-auto h-5 w-5 text-[#315f4b]" />
                <div className="font-heading mt-5 text-[24px] font-medium leading-none text-[#9f2f1f]">
                  {value}
                </div>
                <p className="mt-2 text-[12px] text-[#3e3029]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Initiatives */}
      {/* <section className="bg-[#fbf4f1] px-5 pb-28 sm:px-8">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-[30px] font-medium tracking-[-0.025em] text-[#140b07]">
                Current Initiatives
              </h2>
              <p className="mt-2 text-[14px] text-[#675953]">
                Addressing pressing needs through focused programmes.
              </p>
            </div>

            <Link
              href="/programmes"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#9f2f1f] hover:underline"
            >
              View All Programmes
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[2fr_0.95fr]">
            <div className="grid gap-6">
              <Link
                href="/programmes"
                className="group relative min-h-[315px] overflow-hidden rounded-[7px] border border-[#e2c8bf]"
              >
                <img
                  src="/images/solar-micro-grid.jpg"
                  alt="Solar micro-grid project"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#fff8f5]/95 via-[#fff8f5]/45 to-transparent" />

                <div className="absolute bottom-6 left-6 max-w-[670px] pr-5">
                  <span className="rounded-full bg-[#e4f1df] px-3 py-1 text-[10px] font-medium text-[#397148]">
                    Sustainability
                  </span>

                  <h3 className="mt-4 text-[22px] font-medium tracking-[-0.02em] text-[#140b07]">
                    Solar Micro-Grids for Rural Hubs
                  </h3>

                  <p className="mt-2 max-w-[610px] text-[13px] leading-6 text-[#5f514a]">
                    Bringing reliable, clean energy to remote community centers
                    to support education and local businesses.
                  </p>
                </div>
              </Link>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/25 p-7">
                  <Sprout className="h-5 w-5 text-[#315f4b]" />

                  <h3 className="mt-12 text-[18px] font-medium text-[#140b07]">
                    Agri-Coop Support
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#675953]">
                    Empowering local farmers with modern techniques and market
                    access.
                  </p>
                </div>

                <div className="rounded-[7px] bg-[#416754] p-7 text-white">
                  <Lightbulb className="h-5 w-5 text-white/80" />

                  <h3 className="mt-12 max-w-[260px] text-[20px] font-medium leading-tight">
                    Got an idea for an initiative?
                  </h3>

                  <p className="mt-3 max-w-[310px] text-[13px] leading-6 text-white/80">
                    We partner with local organizations to bring impactful ideas
                    to life.
                  </p>

                  <Link
                    href="/get-involved/partner"
                    className="mt-6 inline-flex rounded-[3px] bg-white px-4 py-2 text-[11px] font-semibold text-[#315f4b] transition-colors hover:bg-[#f3f3ee]"
                  >
                    Propose a Project
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/our-work/education"
              className="group overflow-hidden rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/35"
            >
              <div className="h-[330px] overflow-hidden">
                <img
                  src="/images/early-learning.jpg"
                  alt="Early learning access"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="rounded-full bg-[#fde4df] px-3 py-1 text-[10px] font-medium text-[#b04a38]">
                  Education
                </span>

                <h3 className="mt-5 text-[22px] font-medium tracking-[-0.02em] text-[#140b07]">
                  Early Learning Access
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#675953]">
                  Establishing foundational education programs in underserved
                  districts, focusing on literacy and numeracy.
                </p>

                <span className="mt-20 inline-flex items-center gap-2 text-[12px] font-semibold text-[#9f2f1f]">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Latest Insights */}
      {/* <section className="bg-[#f8e5df] px-5 py-24 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-9">
            <h2 className="text-[30px] font-medium tracking-[-0.025em] text-[#140b07]">
              Latest Insights
            </h2>
            <p className="mt-2 text-[14px] text-[#675953]">
              Stories, reports, and perspectives from the field.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-[7px] border border-[#e2c8bf] bg-[#fff8f5]/40"
              >
                <div className="h-[260px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[10px] text-[#8a7b75]">
                    <span className="rounded-full bg-[#e5f1df] px-2.5 py-1 text-[#4f7952]">
                      {item.type}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="mt-4 text-[18px] font-medium leading-tight tracking-[-0.015em] text-[#140b07]">
                    {item.title}
                  </h3>

                  <span className="mt-3 inline-flex text-[12px] font-semibold text-[#9f2f1f]">
                    Read Article
                  </span>
                </div>
              </Link>
            ))}

            <Link
              href="/insights/reports"
              className="group overflow-hidden rounded-[7px] border border-[#e2c8bf] bg-[#fae7e1]"
            >
              <div className="flex h-[260px] items-center justify-center px-8 text-center">
                <h3 className="max-w-[310px] text-[30px] font-medium leading-tight tracking-[-0.03em] text-[#9f2f1f]">
                  Annual Impact Report 2023-2024
                </h3>
              </div>

              <div className="border-t border-[#e2c8bf] bg-[#fff8f5]/35 p-6">
                <div className="flex items-center gap-3 text-[10px] text-[#8a7b75]">
                  <span className="rounded-full bg-[#ece7dc] px-2.5 py-1 text-[#777064]">
                    PUBLICATION
                  </span>
                  <span>Sep 28, 2024</span>
                </div>

                <p className="mt-4 text-[15px] leading-6 text-[#140b07]">
                  Comprehensive review of our strategic goals and outcomes.
                </p>

                <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#9f2f1f]">
                  Download PDF
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Partnerships */}
      <section className="bg-white px-5 py-24 sm:px-8 md:py-28">
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-9 text-center">
            <h2 className="text-[30px] font-medium tracking-[-0.025em] text-[#140b07]">
              Partnerships & Collaborations
            </h2>
            <p className="mt-2 text-[14px] text-[#675953]">
              CSR & Institutional Partners driving our mission forward.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div key={partner} className="rounded-full bg-[#fbf4f1] border border-[#e2c8bf] px-6 py-3 text-[13px] font-medium text-[#24140d]">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
