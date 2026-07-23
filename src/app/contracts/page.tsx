import Link from "next/link";
import { clsx } from "clsx";
import { categories, contracts, getCategory } from "@/lib/data";
import ContractCard from "@/components/ContractCard";
import type { Tier } from "@/lib/types";

const tiers: Tier[] = ["Essential", "Standard", "Premium"];

interface ContractsPageProps {
  searchParams: Promise<{ category?: string; tier?: string }>;
}

export default async function ContractsPage({ searchParams }: ContractsPageProps) {
  const params = await searchParams;
  const activeCategory = params.category;
  const activeTier = params.tier;

  const filtered = contracts.filter((contract) => {
    if (activeCategory && contract.categorySlug !== activeCategory) return false;
    if (activeTier && contract.tier !== activeTier) return false;
    return true;
  });

  function buildHref(next: { category?: string; tier?: string }) {
    const query = new URLSearchParams();
    const category = "category" in next ? next.category : activeCategory;
    const tier = "tier" in next ? next.tier : activeTier;
    if (category) query.set("category", category);
    if (tier) query.set("tier", tier);
    const qs = query.toString();
    return qs ? `/contracts?${qs}` : "/contracts";
  }

  const groups = activeCategory
    ? [{ category: getCategory(activeCategory), items: filtered }]
    : categories.map((category) => ({
        category,
        items: filtered.filter((c) => c.categorySlug === category.slug),
      }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Support plans
        </h1>
        <p className="mt-3 text-slate-500">
          Compare Essential, Standard, and Premium care plans for every
          textile testing machine category. Every plan includes calibration,
          software updates, and on-site repair coverage.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Link
            href={buildHref({ category: undefined })}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              !activeCategory
                ? "border-amber-400 bg-amber-50 text-amber-700"
                : "border-slate-300 text-slate-600 hover:border-amber-400 hover:text-amber-600",
            )}
          >
            All machines
          </Link>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={buildHref({ category: category.slug })}
              className={clsx(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                activeCategory === category.slug
                  ? "border-amber-400 bg-amber-50 text-amber-700"
                  : "border-slate-300 text-slate-600 hover:border-amber-400 hover:text-amber-600",
              )}
            >
              {category.shortName}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={buildHref({ tier: undefined })}
            className={clsx(
              "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
              !activeTier
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200",
            )}
          >
            All tiers
          </Link>
          {tiers.map((tier) => (
            <Link
              key={tier}
              href={buildHref({ tier })}
              className={clsx(
                "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
                activeTier === tier
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200",
              )}
            >
              {tier}
            </Link>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mt-12 space-y-16">
        {groups.map(({ category, items }) => {
          if (!category || items.length === 0) return null;
          return (
            <div key={category.slug}>
              {!activeCategory && (
                <h2 className="text-xl font-bold text-slate-900">{category.name}</h2>
              )}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {items.map((contract) => (
                  <ContractCard key={contract.id} contract={contract} />
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-slate-500">
            No plans match those filters yet. Try clearing a filter or{" "}
            <Link href="/contact" className="text-amber-600 underline">
              contact us
            </Link>{" "}
            about your machine.
          </p>
        )}
      </div>
    </div>
  );
}
