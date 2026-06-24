import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function PageHeader({
  title,
  subtitle,
  eyebrow = "About WAMMCO",
  breadcrumbs = [],
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#fbf4f1] px-5 pt-[140px] pb-20 sm:px-8 lg:pt-[155px]">
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-[#c97a45]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#9f2f1f]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1220px]">
        {breadcrumbs.length > 0 && (
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-medium text-[#7a6a63]">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                  {index === 0 && <Home className="h-3.5 w-3.5 text-[#9f2f1f]" />}

                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#9f2f1f]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-[#9f2f1f]" : ""}>
                      {item.label}
                    </span>
                  )}

                  {!isLast && <ChevronRight className="h-3.5 w-3.5 text-[#b69f97]" />}
                </span>
              );
            })}
          </nav>
        )}

        <div className="max-w-[850px]">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#9f2f1f]">
            {eyebrow}
          </p>

          <h1 className="font-heading text-[46px] font-bold leading-[0.95] tracking-[-0.045em] text-[#130a06] sm:text-[64px] lg:text-[78px]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-7 max-w-[760px] text-[17px] leading-8 text-[#5f514a] sm:text-[19px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}