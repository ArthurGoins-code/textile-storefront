import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  MapPinned,
  PhoneCall,
} from "lucide-react";
import { categories, contracts, stats, testimonials } from "@/lib/data";
import ContractCard from "@/components/ContractCard";
import CategoryCard from "@/components/CategoryCard";
import FabricSwatch from "@/components/FabricSwatch";

const featuredContracts = categories
  .slice(0, 3)
  .map((category) => contracts.find((c) => c.categorySlug === category.slug && c.popular))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

const whyUs = [
  {
    icon: BadgeCheck,
    title: "Certified field engineers",
    description:
      "Every technician is factory-trained on tensile, abrasion, colour fastness, and safety-critical test instruments.",
  },
  {
    icon: CalendarClock,
    title: "ISO 17025-aligned calibration",
    description:
      "Traceable calibration certificates delivered after every visit, ready for your next accreditation audit.",
  },
  {
    icon: MapPinned,
    title: "Nationwide coverage",
    description:
      "On-site response from regional service hubs, with loaner machines available on Premium plans.",
  },
  {
    icon: PhoneCall,
    title: "Fast, human support",
    description:
      "Skip the call centre. Reach engineers who already know your lab's fleet and calibration history.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-weave">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
              Support contracts for textile testing labs
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Keep every testing machine
              <span className="text-amber-400"> calibrated, certified, and running.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              TexTest Support sells annual maintenance and calibration
              contracts for tensile testers, abrasion &amp; pilling testers,
              colour fastness instruments, and other textile testing
              equipment &mdash; so unplanned downtime never costs you an
              audit or an order.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contracts"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
              >
                Browse support plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                Request a fleet quote
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-dashed border-slate-800 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Fabrics our machines test
              </span>
              {categories.slice(0, 5).map((category) => (
                <FabricSwatch
                  key={category.slug}
                  color={category.swatchColor}
                  label={category.swatchFabric}
                  size="sm"
                />
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 stitch-divider border-slate-800 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Coverage for every machine in your lab
            </h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              Pick a machine category to compare Essential, Standard, and
              Premium care plans.
            </p>
          </div>
          <Link
            href="/contracts"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-400"
          >
            View all plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y border-slate-800 bg-slate-900/40 bg-weave">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Why labs choose TexTest Support
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured plans */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Popular support plans
        </h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Our Standard Care plans strike the best balance of price and
          coverage across every machine category.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredContracts.map((contract) => (
            <ContractCard key={contract.id} contract={contract} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Trusted by quality &amp; production teams
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 to-transparent p-10 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Covering more than 5 machines?
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Talk to our fleet team about a custom, multi-machine support
              agreement with consolidated billing and volume pricing.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
          >
            Talk to sales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
