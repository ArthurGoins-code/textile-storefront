"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";

function generateOrderNumber() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `TXS-${random}`;
}

export default function CheckoutPage() {
  const { lines, subtotal, clearCart } = useCart();
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const orderedLines = useMemo(() => lines, [lines]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setOrderNumber(generateOrderNumber());
      clearCart();
      setSubmitting(false);
    }, 600);
  }

  if (orderNumber) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
        <h1 className="mt-4 text-3xl font-extrabold text-slate-900">
          Order confirmed
        </h1>
        <p className="mt-2 text-slate-500">
          Thanks for your order! A confirmation has been &ldquo;sent&rdquo; to
          your email (demo only &mdash; nothing was actually sent).
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded border border-slate-200 bg-white px-4 py-2 text-sm font-mono text-amber-700">
          Order #{orderNumber}
        </div>
        <div className="mt-8">
          <Link
            href="/contracts"
            className="inline-flex items-center gap-2 rounded bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-300"
          >
            Continue browsing
          </Link>
        </div>
      </div>
    );
  }

  if (orderedLines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="mt-2 text-slate-500">
          Add a support plan before checking out.
        </p>
        <Link
          href="/contracts"
          className="mt-6 inline-flex items-center gap-2 rounded bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-300"
        >
          Browse support plans
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900">Checkout</h1>
      <p className="mt-2 text-slate-500">
        This is a mock checkout for demo purposes. No payment is processed.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Company & contact</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-600">
                Company name
                <input
                  required
                  type="text"
                  placeholder="Meridian Textile Labs"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600">
                Contact name
                <input
                  required
                  type="text"
                  placeholder="Jordan Smith"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600">
                Email
                <input
                  required
                  type="email"
                  placeholder="jordan@example.com"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600">
                Phone
                <input
                  type="tel"
                  placeholder="+1 (555) 019-2044"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-600">
              Machine serial numbers (one per line)
              <textarea
                rows={3}
                placeholder={"SN-104829\nSN-104830"}
                className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
              />
            </label>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Payment</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-600 sm:col-span-2">
                Card number
                <input
                  required
                  inputMode="numeric"
                  type="text"
                  placeholder="4242 4242 4242 4242"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600">
                Expiry
                <input
                  required
                  type="text"
                  placeholder="MM/YY"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600">
                CVC
                <input
                  required
                  type="text"
                  placeholder="123"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
            </div>
            <div className="mt-4 flex items-start gap-2 rounded bg-slate-100 p-3 text-xs text-slate-500">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
              <span>
                Demo form only. Do not enter real card details &mdash; nothing
                is transmitted or stored.
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">Order summary</h2>
            <ul className="mt-4 space-y-3">
              {orderedLines.map(({ contract, quantity }) => (
                <li key={contract.id} className="flex justify-between text-sm text-slate-600">
                  <span>
                    {contract.name} &times; {quantity}
                  </span>
                  <span className="font-semibold text-slate-900">
                    {formatPrice(contract.price * quantity)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
              <span>Total / year</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full rounded bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Placing order..." : "Place order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
