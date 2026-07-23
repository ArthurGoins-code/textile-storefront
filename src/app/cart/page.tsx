"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

export default function CartPage() {
  const { lines, subtotal, setQuantity, removeItem } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <ShoppingCart className="mx-auto h-12 w-12 text-slate-600" />
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="mt-2 text-slate-500">
          Browse support plans and add coverage for your testing machines.
        </p>
        <Link
          href="/contracts"
          className="mt-6 inline-flex items-center gap-2 rounded bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-300"
        >
          Browse support plans
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900">Your cart</h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {lines.map(({ contract, quantity }) => (
            <div
              key={contract.id}
              className="flex flex-col gap-4 rounded-md border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  {contract.tier}
                </div>
                <Link
                  href={`/contracts/${contract.slug}`}
                  className="text-base font-bold text-slate-900 hover:text-amber-600"
                >
                  {contract.name}
                </Link>
                <div className="mt-1 text-sm text-slate-500">
                  {formatPrice(contract.price)} / year, per machine
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 rounded border border-slate-300 px-3 py-1.5">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity(contract.id, quantity - 1)}
                    className="text-slate-600 hover:text-amber-600"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold text-slate-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity(contract.id, quantity + 1)}
                    className="text-slate-600 hover:text-amber-600"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="w-24 text-right text-sm font-semibold text-slate-900">
                  {formatPrice(contract.price * quantity)}
                </div>

                <button
                  type="button"
                  aria-label="Remove item"
                  onClick={() => removeItem(contract.id)}
                  className="text-slate-500 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Order summary</h2>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm text-slate-500">
              <span>Estimated tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
              <span>Total / year</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 flex items-center justify-center gap-2 rounded bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300"
            >
              Proceed to checkout
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
