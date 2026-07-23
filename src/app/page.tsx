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
      <section className="relative overflow-hidden border-b border-slate-200 bg-weave">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Support contracts for textile testing labs
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Keep every testing machine
              <span className="text-amber-600"> calibrated, certified, and running.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              TexTest Support sells annual maintenance and calibration
              contracts for tensile testers, abrasion &amp; pilling testers,
              colour fastness instruments, and other textile testing
              equipment &mdash; so unplanned downtime never costs you an
              audit or an order.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contracts"
                className="inline-flex items-center justify-center gap-2 rounded bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
              >
                Browse support plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-amber-400 hover:text-amber-600"
              >
                Request a fleet quote
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-dashed border-slate-200 pt-6">
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

          <div className="mt-16 grid grid-cols-2 gap-6 stitch-divider border-slate-200 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Coverage for every machine in your lab
            </h2>
            <p className="mt-2 max-w-2xl text-slate-500">
              Pick a machine category to compare Essential, Standard, and
              Premium care plans.
            </p>
          </div>
          <Link
            href="/contracts"
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600"
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
      <section className="border-y border-slate-200 bg-slate-50 bg-weave">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Why labs choose TexTest Support
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured plans */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Popular support plans
        </h2>
        <p className="mt-2 max-w-2xl text-slate-500">
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
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Trusted by quality &amp; production teams
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex flex-col rounded-lg border border-slate-200 bg-white p-6"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-500">
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
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-amber-400/30 bg-amber-50 p-10 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Covering more than 5 machines?
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Talk to our fleet team about a custom, multi-machine support
              agreement with consolidated billing and volume pricing.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
          >
            Talk to sales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
