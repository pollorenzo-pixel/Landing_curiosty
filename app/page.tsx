import Link from "next/link";
import { Footer, Header } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

const framework = [
  {
    title: "Awareness",
    lines: ["Attention control.", "Emotional regulation.", "Mental stability."],
  },
  {
    title: "Intuition",
    lines: ["Signal detection.", "Pattern recognition.", "Situational awareness."],
  },
  {
    title: "Execution",
    lines: ["Focus under pressure.", "Decision clarity.", "Performance consistency."],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-vexis-black text-vexis-stone">
      <Header />
      <section className="noise-vignette relative flex min-h-screen items-center px-5 pt-24 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.14),transparent_23rem),linear-gradient(115deg,rgba(255,255,255,0.08),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.95))]" />
        <div className="absolute inset-x-6 top-28 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Reveal className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-7 text-xs uppercase tracking-[0.34em] text-white/45">
            A VEXIS Mental Performance Thesis
          </p>
          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Building The Mind Behind Performance
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/62 sm:text-xl">
            Mental performance is becoming essential infrastructure.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-full bg-vexis-stone px-7 py-4 text-sm font-medium text-vexis-black transition hover:bg-white"
            >
              Join the Waitlist
            </a>
            <a
              href="#framework"
              className="rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white/75 transition hover:border-white/25 hover:text-white"
            >
              Explore the Framework
            </a>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <p className="text-xs uppercase tracking-[0.28em] text-white/35">Opening thesis</p>
          <div className="space-y-10 text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-white/88 sm:text-5xl">
            <p>
              Modern humans are physically connected,
              <br /> but mentally fragmented.
            </p>
            <div className="space-y-3 text-xl leading-8 tracking-[-0.02em] text-white/55 sm:text-2xl sm:leading-9">
              <p>Attention is collapsing.</p>
              <p>Emotional reactivity is rising.</p>
              <p>Information is everywhere.</p>
              <p>Clarity is becoming rare.</p>
            </div>
            <div className="space-y-7 text-2xl leading-9 text-white/75 sm:text-4xl sm:leading-tight">
              <p>Most people train their bodies.</p>
              <p>
                Very few train the system behind: perception, emotion, decision making,
                and execution.
              </p>
              <p>VEXIS exists to help build the mind behind performance.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="framework" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-balance text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              Awareness → Intuition → Execution
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {framework.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="cinematic-border rounded-[2rem] p-7 sm:p-9"
              >
                <p className="mb-14 text-xs uppercase tracking-[0.28em] text-white/35">
                  0{index + 1}
                </p>
                <h3 className="text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
                <div className="mt-6 space-y-2 text-lg leading-7 text-white/58">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-5 py-28 text-center sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="text-balance text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            Mental performance is becoming trainable.
          </h2>
          <WaitlistForm source="landing-final-cta" />
          <Link
            href="/whitepaper"
            className="mt-9 inline-flex text-sm text-white/45 transition hover:text-white"
          >
            Read the manifesto
          </Link>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
