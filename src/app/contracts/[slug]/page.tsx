import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock, ShieldCheck, Wrench } from "lucide-react";
import { contracts, getCategory, getContract, getContractsByCategory } from "@/lib/data";
import { formatPrice } from "@/lib/format";
import { getIcon } from "@/lib/icons";
import AddToCartButton from "@/components/AddToCartButton";
import { clsx } from "clsx";

interface ContractPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return contracts.map((contract) => ({ slug: contract.slug }));
}

const tierStyles: Record<string, string> = {
  Essential: "bg-slate-800 text-slate-200",
  Standard: "bg-amber-400/20 text-amber-300",
  Premium: "bg-emerald-400/20 text-emerald-300",
};

export default async function ContractDetailPage({ params }: ContractPageProps) {
  const { slug } = await params;
  const contract = getContract(slug);
  if (!contract) notFound();

  const category = getCategory(contract.categorySlug);
  const siblingPlans = getContractsByCategory(contract.categorySlug);
  const Icon = getIcon(category?.icon ?? "Gauge");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <nav className="text-sm text-slate-400">
        <Link href="/contracts" className="hover:text-amber-400">
          Support plans
        </Link>{" "}
        /{" "}
        <Link
          href={`/contracts?category=${contract.categorySlug}`}
          className="hover:text-amber-400"
        >
          {category?.shortName}
        </Link>{" "}
        / <span className="text-slate-200">{contract.tier}</span>
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
              <Icon className="h-6 w-6" />
            </span>
            <span
              className={clsx(
                "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold",
                tierStyles[contract.tier],
              )}
            >
              {contract.tier} Care
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            {contract.name}
          </h1>
          <p className="mt-3 text-lg text-slate-300">{contract.tagline}</p>
          <p className="mt-4 text-slate-400">{contract.description}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <Clock className="h-5 w-5 text-amber-400" />
              <div>
                <div className="text-sm font-semibold text-white">
                  {contract.responseTime}
                </div>
                <div className="text-xs text-slate-400">On-site response</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <Wrench className="h-5 w-5 text-amber-400" />
              <div>
                <div className="text-sm font-semibold text-white">
                  {contract.calibrationVisits}x / year
                </div>
                <div className="text-xs text-slate-400">Calibration visits</div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold text-white">What&apos;s included</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contract.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold text-white">Compatible machines</h2>
            <p className="mt-1 text-sm text-slate-400">
              This plan covers the following {category?.shortName.toLowerCase()}{" "}
              models. Don&apos;t see yours? {" "}
              <Link href="/contact" className="text-amber-400 underline">
                Ask us
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {contract.compatibleMachines.map((machine) => (
                <span
                  key={machine}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {machine}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Order card */}
        <div>
          <div className="sticky top-24 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-white">
                {formatPrice(contract.price)}
              </span>
              <span className="text-sm text-slate-400">/ year, per machine</span>
            </div>

            <div className="mt-6">
              <AddToCartButton contractId={contract.id} />
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-lg bg-slate-800/60 p-3 text-xs text-slate-400">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400" />
              <span>
                This is a demo checkout. No real payment is processed and no
                data is sent to a live server.
              </span>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Compare tiers
              </h3>
              <ul className="mt-3 space-y-2">
                {siblingPlans.map((plan) => (
                  <li key={plan.id}>
                    <Link
                      href={`/contracts/${plan.slug}`}
                      className={clsx(
                        "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                        plan.slug === contract.slug
                          ? "bg-amber-400/10 text-amber-300"
                          : "text-slate-300 hover:bg-slate-800",
                      )}
                    >
                      <span>{plan.tier}</span>
                      <span className="font-semibold">{formatPrice(plan.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
