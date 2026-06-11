import Link from "next/link";
import { Footer, Header } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

const framework = [
  {
    title: "Awareness",
    lines: ["Train attention deliberately.", "Regulate before reacting.", "Remain present under pressure."],
  },
  {
    title: "Intuition",
    lines: ["Refine pattern recognition.", "Recognize meaningful signals", "Read beneath the noise."],
  },
  {
    title: "Execution",
    lines: ["Move with controlled intent.", "Adapt under uncertainty.", "Perform with clarity intact."],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-vexis-black text-vexis-stone">
      <Header />
      <section className="noise-vignette relative flex min-h-[82svh] items-center px-5 pb-12 pt-24 sm:min-h-screen sm:px-8 sm:pb-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.14),transparent_23rem),linear-gradient(115deg,rgba(255,255,255,0.08),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.95))]" />
        <div className="absolute inset-x-6 top-28 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <Reveal className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.28em] text-white/45 sm:mb-7 sm:text-xs sm:tracking-[0.34em]">
            A VEXIS Mental Performance Thesis
          </p>
          <h1 className="mx-auto max-w-5xl text-balance text-[3.15rem] font-medium leading-[0.95] tracking-[-0.065em] sm:text-7xl sm:tracking-[-0.06em] lg:text-8xl">
            Building the Mind Behind Performance
          </h1>
          <p className="mx-auto mt-5 max-w-[18rem] text-pretty text-base leading-7 text-white/62 sm:mt-7 sm:max-w-2xl sm:text-xl">
            Attention is becoming the rarest human resource.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-11 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="rounded-full bg-vexis-stone px-7 py-4 text-center text-sm font-medium text-vexis-black transition hover:bg-white"
            >
              Join the Waitlist
            </a>
            <a
              href="#framework"
              className="rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-center text-sm font-medium text-white/75 transition hover:border-white/25 hover:text-white"
            >
              Explore the Framework
            </a>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-40">
        <Reveal className="mx-auto grid max-w-6xl gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <p className="text-xs uppercase tracking-[0.28em] text-white/35">Opening thesis</p>
          <div className="space-y-8 text-[2rem] font-medium leading-[1.08] tracking-[-0.05em] text-white/88 sm:space-y-10 sm:text-5xl sm:tracking-[-0.04em]">
            <p>
              Modern humans are always connected,
              <br /> and often hard to reach.
            </p>
            <div className="space-y-2.5 text-lg leading-7 tracking-[-0.02em] text-white/55 sm:space-y-3 sm:text-2xl sm:leading-9">
              <p>Attention is pulled apart.</p>
              <p>Pressure arrives faster.</p>
              <p>Noise keeps getting louder.</p>
              <p>Clarity is becoming rare.</p>
            </div>
            <div className="space-y-5 text-[1.7rem] leading-[1.25] text-white/75 sm:space-y-7 sm:text-4xl sm:leading-tight">
              <p>Most people train the body.</p>
              <p>
                Fewer train the place performance actually begins: perception, emotion,
                decision, and action.
              </p>
              <p>VEXIS exists to build the mind behind performance.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="framework" className="px-5 py-20 sm:px-8 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-[0.68rem] uppercase tracking-[0.24em] text-white/35 sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
              The internal sequence
            </p>
            <h2 className="max-w-[18rem] text-balance text-[2rem] font-medium leading-[0.98] tracking-[-0.06em] sm:max-w-none sm:text-6xl sm:leading-none sm:tracking-[-0.05em]">
              Awareness → Intuition → Execution
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3.5 sm:mt-14 sm:gap-4 md:grid-cols-3">
            {framework.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="cinematic-border min-h-0 rounded-[1.55rem] p-6 sm:min-h-72 sm:rounded-[2rem] sm:p-9"
              >
                <p className="mb-9 text-[0.68rem] uppercase tracking-[0.24em] text-white/35 sm:mb-14 sm:text-xs sm:tracking-[0.28em]">
                  0{index + 1}
                </p>
                <h3 className="text-[1.65rem] font-medium tracking-[-0.035em] sm:text-2xl sm:tracking-[-0.03em]">{item.title}</h3>
                <div className="mt-5 space-y-2.5 text-base leading-7 text-white/58 sm:mt-7 sm:space-y-3 sm:text-lg">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-5 py-20 text-center sm:px-8 sm:py-40">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="mx-auto max-w-[22rem] text-balance text-[2.3rem] font-medium leading-[1.04] tracking-[-0.055em] sm:max-w-none sm:text-6xl sm:leading-none sm:tracking-[-0.05em]">
            The mind behind performance can be trained.
          </h2>
          <p className="mx-auto mt-5 max-w-[19rem] text-base leading-7 text-white/55 sm:mt-7 sm:max-w-2xl sm:text-xl sm:leading-8">
            A quieter kind of advantage. Built from the inside out.
          </p>
          <WaitlistForm source="landing-final-cta" />
          <Link
            href="/whitepaper"
            className="mt-8 inline-flex text-sm text-white/45 transition hover:text-white sm:mt-9"
          >
            Read the manifesto
          </Link>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
