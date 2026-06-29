"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/our-story" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Women Empowerment", href: "/our-work/women-empowerment" },
      { label: "Livelihoods", href: "/our-work/livelihoods" },
      { label: "Public Health", href: "/our-work/public-health" },
      { label: "Policy and Governance", href: "/our-work/policy-governance" },
      { label: "Child Protection", href: "/our-work/child-protection" },
      { label: "Education", href: "/our-work/education" },
      { label: "Legal Aid", href: "/our-work/legal-aid" },
      { label: "Capacity Building", href: "/our-work/capacity-building" },
    ],
  },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "WAMMCO", href: "/programmes/wammco" },
      { label: "SANKALP", href: "/programmes/sankalp" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Reports", href: "/insights/reports" },
      { label: "Publications", href: "/insights/publications" },
      { label: "Health Systems Accountability", href: "/insights/health-systems-accountability" },
      { label: "Blogs", href: "/insights/blogs" },
      { label: "Opinions", href: "/insights/opinions" },
      { label: "Videos", href: "/insights/videos" },
      { label: "Newsletters", href: "/insights/newsletters" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Press Release", href: "/media/press-release" },
      { label: "Media Reports", href: "/media/media-reports" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Careers", href: "/get-involved/careers" },
      { label: "Partner", href: "/get-involved/partner" },
      { label: "Internships", href: "/get-involved/internships" },
      { label: "Events", href: "/get-involved/events" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      {/* Top Bar */}
      <div className="bg-[#8b2635] text-white text-xs py-1.5 px-4 flex items-center justify-between">
        <span className="hidden sm:block">Empowering Communities Since 2001</span>
        <div className="flex items-center gap-4 ml-auto">
          <Link href="/get-involved/donate" className="hover:text-amber-300 transition-colors font-medium flex items-center gap-1">
            <Heart className="w-3 h-3" /> Donate Now
          </Link>
          <span className="text-white/40">|</span>
          <Link href="/get-involved/volunteer" className="hover:text-amber-300 transition-colors">Volunteer</Link>
          <span className="text-white/40">|</span>
          <Link href="/contact" className="hover:text-amber-300 transition-colors">Contact</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#8b2635] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm font-['Playfair_Display']">W</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[#8b2635] text-lg leading-none font-['Playfair_Display']">Women</p>
              <p className="text-xs text-muted-foreground leading-none mt-0.5">Women Empowerment</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group pt-2" // ← Hover bridge
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                    pathname.startsWith(item.href)
                      ? "text-[#8b2635] bg-red-50"
                      : "text-foreground hover:text-[#8b2635] hover:bg-red-50"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        openDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 min-w-[220px] bg-white rounded-xl shadow-xl border border-border/60 py-1 transition-all duration-200 origin-top",
                      openDropdown === item.label
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-95 pointer-events-none"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-[#fdf8f3]",
                          pathname === child.href
                            ? "text-[#8b2635] bg-red-50 font-medium"
                            : "text-foreground hover:text-[#8b2635]"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-2">
            <Link href="/get-involved/donate">
              <Button
                size="sm"
                className="hidden lg:flex bg-[#8b2635] hover:bg-[#7a2130] text-white shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 mr-1" />
                Donate
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto">
                <div className="flex items-center gap-3 mb-8 mt-2">
                  <div className="w-8 h-8 rounded-full bg-[#8b2635] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">W</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#8b2635] font-['Playfair_Display']">WAMMCO</p>
                    <p className="text-xs text-muted-foreground">Women Empowerment</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      pathname={pathname}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link href="/get-involved/donate" onClick={() => setMobileOpen(false)} className="block w-full">
                    <Button className="w-full bg-[#8b2635] hover:bg-[#7a2130] text-white">
                      <Heart className="w-4 h-4 mr-2" />
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

// Mobile Navigation Component
function MobileNavItem({
  item,
  pathname,
  onClose,
}: {
  item: (typeof navItems)[0];
  pathname: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
          pathname.startsWith(item.href)
            ? "text-[#8b2635] bg-red-50"
            : "text-foreground hover:text-[#8b2635] hover:bg-red-50"
        )}
      >
        {item.label}
        {item.children && (
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              open ? "rotate-180" : ""
            )}
          />
        )}
      </button>
      {item.children && open && (
        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-red-100 pl-3">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onClose}
              className={cn(
                "block py-2 text-sm transition-colors",
                pathname === child.href
                  ? "text-[#8b2635] font-medium"
                  : "text-muted-foreground hover:text-[#8b2635]"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}