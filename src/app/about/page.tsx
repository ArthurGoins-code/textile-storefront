import { BadgeCheck, Building2, Globe2, Users } from "lucide-react";
import { stats } from "@/lib/data";

const values = [
  {
    icon: BadgeCheck,
    title: "Accuracy you can certify",
    description:
      "Every calibration follows documented procedures traceable to national measurement standards, so your results hold up under audit.",
  },
  {
    icon: Users,
    title: "Engineers, not ticket queues",
    description:
      "Our field engineers specialize in textile testing equipment and stay assigned to the same accounts year over year.",
  },
  {
    icon: Globe2,
    title: "Built for global supply chains",
    description:
      "From single-lab startups to multi-site mills, our plans scale with consolidated billing across every location.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
            <Building2 className="h-3.5 w-3.5" />
            About TexTest Support
          </span>
          <h1 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            We keep textile testing labs running, so quality never waits.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            TexTest Support was founded by former lab technicians who were
            tired of watching calibration deadlines slip and machines sit
            idle waiting on parts. Today we support fleets of tensile
            testers, abrasion testers, colour fastness instruments, and more
            for QC labs, mills, and independent testing houses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What we believe
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          Note: TexTest Support is a fictional company built for this demo
          storefront. Machine names, statistics, and testimonials are not
          real.
        </p>
      </section>
    </div>
  );
}
