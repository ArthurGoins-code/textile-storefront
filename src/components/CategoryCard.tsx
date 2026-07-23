import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MachineCategory } from "@/lib/types";
import { getIcon } from "@/lib/icons";
import FabricSwatch from "@/components/FabricSwatch";
import MachineIllustration from "@/components/MachineIllustration";

export default function CategoryCard({ category }: { category: MachineCategory }) {
  const Icon = getIcon(category.icon);

  return (
    <Link
      href={`/contracts?category=${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors hover:border-dashed hover:border-amber-400/60"
    >
      <MachineIllustration
        slug={category.slug}
        className="h-32 w-full text-slate-700 transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-amber-50 text-amber-600">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-base font-bold text-slate-900">{category.name}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-500">{category.description}</p>
        <div className="mt-4 border-t border-dashed border-slate-200 pt-3">
          <FabricSwatch color={category.swatchColor} label={`Tested: ${category.swatchFabric}`} size="sm" />
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600">
          View plans
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
