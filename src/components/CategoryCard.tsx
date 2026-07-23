import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MachineCategory } from "@/lib/types";
import { getIcon } from "@/lib/icons";

export default function CategoryCard({ category }: { category: MachineCategory }) {
  const Icon = getIcon(category.icon);

  return (
    <Link
      href={`/contracts?category=${category.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-amber-400/60"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-base font-bold text-white">{category.name}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-400">{category.description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-400">
        View plans
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
