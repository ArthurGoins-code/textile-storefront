import Link from "next/link";
import { Check, Clock, Wrench } from "lucide-react";
import type { SupportContract } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { getCategory } from "@/lib/data";
import FabricSwatch from "@/components/FabricSwatch";
import { clsx } from "clsx";

const tierStyles: Record<string, string> = {
  Essential: "bg-slate-800 text-slate-200",
  Standard: "bg-amber-400/20 text-amber-300",
  Premium: "bg-emerald-400/20 text-emerald-300",
};

export default function ContractCard({ contract }: { contract: SupportContract }) {
  const category = getCategory(contract.categorySlug);

  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl border bg-slate-900 p-6 shadow-sm transition-shadow hover:shadow-lg",
        contract.popular ? "stitch-border border-amber-400/60" : "border-slate-800",
      )}
    >
      {contract.popular && (
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950">
          Most Popular
        </span>
      )}

      <div className="flex items-center justify-between">
        <span
          className={clsx(
            "mb-2 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold",
            tierStyles[contract.tier],
          )}
        >
          {contract.tier}
        </span>
        {category && (
          <FabricSwatch color={category.swatchColor} label={category.swatchFabric} size="sm" />
        )}
      </div>

      <h3 className="text-lg font-bold text-white">{contract.name}</h3>
      <p className="mt-1 text-sm text-slate-400">{contract.tagline}</p>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-white">
          {formatPrice(contract.price)}
        </span>
        <span className="text-sm text-slate-400">/ year</span>
      </div>

      <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-amber-400" />
          {contract.responseTime} response
        </div>
        <div className="flex items-center gap-2">
          <Wrench className="h-4 w-4 text-amber-400" />
          {contract.calibrationVisits} calibration visit
          {contract.calibrationVisits > 1 ? "s" : ""}/year
        </div>
      </div>

      <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-300">
        {contract.features.slice(0, 4).map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/contracts/${contract.slug}`}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
      >
        View plan details
      </Link>
    </div>
  );
}
