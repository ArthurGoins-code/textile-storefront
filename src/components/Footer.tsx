import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 bg-weave text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 text-white">
            <ShieldCheck className="h-6 w-6 text-amber-400" />
            <span className="text-base font-bold">
              TexTest <span className="text-amber-400">Support</span>
            </span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Annual support contracts that keep textile testing machines
            calibrated, certified, and running &mdash; so your lab never
            misses an audit.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
            Machine Categories
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.slice(0, 5).map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/contracts?category=${category.slug}`}
                  className="text-slate-400 transition-colors hover:text-amber-400"
                >
                  {category.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-slate-400 transition-colors hover:text-amber-400">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contracts" className="text-slate-400 transition-colors hover:text-amber-400">
                Support plans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-400 transition-colors hover:text-amber-400">
                Contact &amp; quotes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>support@textestsupport.example</li>
            <li>+1 (555) 019-2044</li>
            <li>Mon&ndash;Fri, 8am&ndash;6pm (24/7 for Premium plans)</li>
          </ul>
        </div>
      </div>

      <div className="stitch-divider border-slate-800 py-6 text-center text-xs text-slate-500">
        This is a demo storefront. All products, pricing, and companies shown
        are fictional. &copy; {new Date().getFullYear()} TexTest Support.
      </div>
    </footer>
  );
}
