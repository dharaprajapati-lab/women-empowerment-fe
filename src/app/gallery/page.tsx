"use client";

import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Community", "Health", "Education", "Events", "Field Work"];

  const galleryItems = [
    { category: "Community", label: "SHG Meeting — Rajasthan", color: "from-rose-200 to-pink-100", size: "col-span-2 row-span-2" },
    { category: "Health", label: "Health Camp — Bihar", color: "from-blue-200 to-sky-100", size: "" },
    { category: "Education", label: "Learning Centre — MP", color: "from-yellow-200 to-amber-100", size: "" },
    { category: "Field Work", label: "Village Survey — UP", color: "from-green-200 to-emerald-100", size: "col-span-2" },
    { category: "Events", label: "National Conference 2023", color: "from-purple-200 to-violet-100", size: "" },
    { category: "Community", label: "Women's Day Celebration", color: "from-rose-300 to-red-100", size: "" },
    { category: "Health", label: "Vaccination Drive — Orissa", color: "from-teal-200 to-cyan-100", size: "" },
    { category: "Education", label: "Digital Literacy Workshop", color: "from-indigo-200 to-blue-100", size: "" },
    { category: "Field Work", label: "Legal Aid Camp — Gujarat", color: "from-orange-200 to-amber-100", size: "" },
    { category: "Events", label: "Partner Forum 2024", color: "from-slate-200 to-gray-100", size: "col-span-2" },
    { category: "Community", label: "Livelihood Training — Jharkhand", color: "from-lime-200 to-green-100", size: "" },
    { category: "Health", label: "Maternal Health Workshop", color: "from-pink-200 to-rose-100", size: "" },
  ];

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Moments from the field — snapshots of change, courage, and community."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-[#8b2635] text-white shadow-md"
                    : "bg-secondary text-muted-foreground hover:bg-red-50 hover:text-[#8b2635]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]">
            {filtered.map((item, i) => (
              <div
                key={i}
                className={`${item.size} bg-gradient-to-br ${item.color} rounded-2xl overflow-hidden group cursor-pointer relative`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    {item.label}
                  </span>
                </div>
                <Badge className="absolute top-3 left-3 bg-white/80 text-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
