"use client";

import { FormEvent, useState } from "react";
import { submitWaitlistEmail } from "@/lib/waitlist";

type FormState = "idle" | "invalid" | "not_configured";

export function WaitlistForm({ source = "landing" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [preparedAt, setPreparedAt] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await submitWaitlistEmail(email, source);

    if (result.status === "invalid_email") {
      setState("invalid");
      setPreparedAt(null);
      return;
    }

    setState("not_configured");
    setPreparedAt(result.payload.created_at);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
      aria-label="Join the VEXIS waitlist"
    >
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="h-14 w-full rounded-full border border-white/10 bg-white/[0.06] px-6 text-sm text-vexis-stone outline-none transition placeholder:text-white/35 focus:border-white/30 focus:bg-white/[0.09]"
          aria-label="Email address"
        />
        {state === "invalid" ? (
          <p className="mt-3 text-xs text-red-200/80">Enter a valid email address.</p>
        ) : null}
        {state === "not_configured" ? (
          <p className="mt-3 text-xs leading-5 text-white/45">
            Waitlist capture is prepared for future Supabase storage but is not connected yet.
            {preparedAt ? ` Prepared at ${preparedAt}.` : null}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="h-14 rounded-full bg-vexis-stone px-7 text-sm font-medium text-vexis-black transition hover:bg-white sm:min-w-40"
      >
        Join the Waitlist
      </button>
    </form>
  );
}
