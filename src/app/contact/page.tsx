"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900">Contact us</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Questions about coverage for your machine, or need a quote for a
        multi-machine fleet? Send us a message.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-amber-600" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Email</div>
              <div className="text-sm text-slate-500">
                support@textestsupport.example
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-amber-600" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Phone</div>
              <div className="text-sm text-slate-500">+1 (555) 019-2044</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-amber-600" />
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Service hubs
              </div>
              <div className="text-sm text-slate-500">
                Regional engineers across North America, Europe, and South
                Asia.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="flex flex-col items-start gap-3 rounded-lg border border-emerald-400/30 bg-emerald-50 p-8">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              <h2 className="text-xl font-bold text-slate-900">
                Message received
              </h2>
              <p className="text-sm text-slate-600">
                Thanks for reaching out! This is a demo form, so no message
                was actually sent, but in a live store our team would reply
                within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 rounded-lg border border-slate-200 bg-white p-6 sm:grid-cols-2"
            >
              <label className="text-sm text-slate-600">
                Name
                <input
                  required
                  type="text"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600">
                Email
                <input
                  required
                  type="email"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600 sm:col-span-2">
                Company
                <input
                  type="text"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600 sm:col-span-2">
                Machine make & model
                <input
                  type="text"
                  placeholder="e.g. TenTech TT-5000"
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <label className="text-sm text-slate-600 sm:col-span-2">
                Message
                <textarea
                  required
                  rows={5}
                  className="mt-1 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-300 sm:col-span-2"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
