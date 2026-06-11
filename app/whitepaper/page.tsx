import { Footer, Header } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

const chapters = [
  {
    eyebrow: "02",
    heading: "The modern world is designed to take attention, not strengthen it.",
    body: [
      "People move through constant stimulation, fractured focus, and pressure that rarely announces itself clearly.",
      "The cost is not only fatigue.",
      "It is the slow loss of awareness. Less signal. Less regulation. Less choice in the moment that matters.",
    ],
  },
  {
    eyebrow: "03",
    heading: "The strongest advantage is often internal.",
    body: [
      "The best performers are not untouched by pressure.",
      "They notice sooner. They regulate before reaction takes over. They recognize what matters while others are still sorting noise.",
    ],
  },
  {
    eyebrow: "05",
    heading: "Foundation: Awareness & Stability",
    body: [
      "Before performance becomes consistent, awareness has to become available.",
      "Foundation training begins with attention, emotional regulation, and the ability to return.",
      "Not escape. Not passive calm. A steadier base beneath action.",
    ],
  },
  {
    eyebrow: "06",
    heading: "Intuition: Signal Detection & Perception",
    body: [
      "Modern life gives people more information than they can meaningfully absorb.",
      "Intuition is the ability to notice what matters before it becomes obvious.",
    ],
  },
  {
    eyebrow: "07",
    heading: "Flow: Execution & Performance",
    body: [
      "Execution is never only physical.",
      "It is attention under load. Emotion under pressure. Behavior when the room gets loud.",
      "Flow training is the practice of acting clearly without disconnecting from the moment.",
    ],
  },
];

const framework = [
  ["Awareness", "Can I notice what is happening before it owns me?"],
  ["Intuition", "Can I recognize the signal inside the noise?"],
  ["Execution", "Can I move well when it matters?"],
];

const signals = [
  "practice rhythm",
  "completion patterns",
  "missed sessions",
  "reflection cues",
  "time-of-day behavior",
  "pressure responses",
];

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-vexis-black text-vexis-stone">
      <Header />
      <section className="noise-vignette relative flex min-h-[86svh] items-end px-5 pb-14 pt-28 sm:min-h-screen sm:px-8 sm:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_32%,rgba(255,255,255,0.13),transparent_24rem),linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0.96))]" />
        <Reveal className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.28em] text-white/45 sm:mb-6 sm:text-xs sm:tracking-[0.34em]">
            A Mental Performance Thesis by VEXIS
          </p>
          <h1 className="max-w-6xl text-balance text-[3.05rem] font-medium leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-9xl">
            Building the Mind Behind Performance
          </h1>
          <p className="mt-6 max-w-[21rem] text-base leading-7 text-white/58 sm:mt-8 sm:max-w-2xl sm:text-2xl sm:leading-9">
            A manifesto for awareness, intuition, and execution in a world that keeps getting louder.
          </p>
        </Reveal>
      </section>

      {chapters.slice(0, 2).map((chapter) => (
        <Chapter key={chapter.eyebrow} {...chapter} />
      ))}

      <section className="px-5 py-20 sm:px-8 sm:py-40">
        <Reveal className="mx-auto max-w-7xl">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.24em] text-white/35 sm:mb-8 sm:text-xs sm:tracking-[0.28em]">04 / Core framework</p>
          <h2 className="max-w-[22rem] text-balance text-[2.35rem] font-medium leading-[1.03] tracking-[-0.055em] sm:max-w-none sm:text-6xl sm:leading-none sm:tracking-[-0.05em]">
            Awareness → Intuition → Execution
          </h2>
          <div className="mt-10 grid gap-3.5 sm:mt-14 sm:gap-4 md:grid-cols-3">
            {framework.map(([title, body]) => (
              <article key={title} className="cinematic-border min-h-0 rounded-[1.55rem] p-6 sm:min-h-64 sm:rounded-[2rem] sm:p-9">
                <h3 className="text-[1.65rem] font-medium tracking-[-0.035em] sm:text-2xl sm:tracking-[-0.03em]">{title}</h3>
                <p className="mt-5 text-base leading-7 text-white/58 sm:mt-7 sm:text-lg sm:leading-8">{body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {chapters.slice(2).map((chapter) => (
        <Chapter key={chapter.eyebrow} {...chapter} />
      ))}

      <section className="border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-40">
        <Reveal className="mx-auto max-w-7xl">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.24em] text-white/35 sm:mb-8 sm:text-xs sm:tracking-[0.28em]">08 / Future of training</p>
          <h2 className="max-w-[22rem] text-balance text-[2.35rem] font-medium leading-[1.03] tracking-[-0.055em] sm:max-w-4xl sm:text-6xl sm:leading-none sm:tracking-[-0.05em]">
            Training will become more personal.
          </h2>
          <div className="my-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-[0.64rem] uppercase leading-5 tracking-[0.16em] text-white/60 sm:my-12 sm:rounded-full sm:text-sm sm:tracking-[0.2em]">
            Notice → Understand → Adapt → Practice → Refine
          </div>
          <div className="max-w-[34rem] space-y-4 text-lg leading-8 text-white/62 sm:max-w-3xl sm:space-y-6 sm:text-2xl sm:leading-10">
            <p>Static training is only the beginning.</p>
            <p>
              Over time, training may become increasingly adaptive to the individual behind
              the practice.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-40">
        <Reveal className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="mb-5 text-[0.68rem] uppercase tracking-[0.24em] text-white/35 sm:mb-8 sm:text-xs sm:tracking-[0.28em]">09 / SignAI</p>
            <h2 className="max-w-[22rem] text-balance text-[2.35rem] font-medium leading-[1.03] tracking-[-0.055em] sm:max-w-none sm:text-6xl sm:leading-none sm:tracking-[-0.05em]">
              SignAI: intelligence for the person behind the practice.
            </h2>
            <div className="mt-7 max-w-[34rem] space-y-4 text-lg leading-8 text-white/62 sm:mt-10 sm:max-w-3xl sm:space-y-6 sm:text-2xl sm:leading-10">
              <p>SignAI points toward a more observant form of training.</p>
              <p>Not a system that defines the user.</p>
              <p>A system that learns the shape of their practice: rhythm, resistance, pressure, return.</p>
              <p>So the work can meet the person more precisely over time.</p>
            </div>
          </div>
          <div className="cinematic-border rounded-[1.55rem] p-6 sm:rounded-[2rem] sm:p-9">
            <p className="mb-6 text-[0.68rem] uppercase tracking-[0.22em] text-white/35 sm:mb-8 sm:text-sm sm:tracking-[0.24em]">
              Future signals may include
            </p>
            <ul className="space-y-3.5 text-base leading-7 text-white/66 sm:space-y-4 sm:text-lg">
              {signals.map((signal) => (
                <li key={signal} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-20 text-center sm:px-8 sm:py-40">
        <Reveal className="mx-auto max-w-5xl">
          <p className="mb-5 text-[0.68rem] uppercase tracking-[0.24em] text-white/35 sm:mb-8 sm:text-xs sm:tracking-[0.28em]">10 / Closing manifesto</p>
          <h2 className="mx-auto max-w-[22rem] text-balance text-[2.35rem] font-medium leading-[1.03] tracking-[-0.055em] sm:max-w-none sm:text-6xl sm:leading-none sm:tracking-[-0.05em]">
            Mental performance is becoming trainable.
          </h2>
          <div className="mx-auto mt-7 max-w-[34rem] space-y-5 text-lg leading-8 text-white/62 sm:mt-10 sm:max-w-3xl sm:space-y-7 sm:text-2xl sm:leading-10">
            <p>The future advantage is not more information.</p>
            <p>
              It is the ability to observe clearly, regulate sooner, read meaningful signals,
              and act with intention under pressure.
            </p>
            <p>VEXIS exists to build the mind behind performance.</p>
          </div>
          <WaitlistForm source="whitepaper-closing" />
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}

function Chapter({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body: string[];
}) {
  return (
    <section className="border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-40">
      <Reveal className="mx-auto grid max-w-7xl gap-6 sm:gap-10 lg:grid-cols-[0.32fr_1fr]">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/35 sm:text-xs sm:tracking-[0.28em]">{eyebrow}</p>
        <div>
          <h2 className="max-w-[22rem] text-balance text-[2.25rem] font-medium leading-[1.05] tracking-[-0.055em] sm:max-w-5xl sm:text-6xl sm:leading-none sm:tracking-[-0.05em]">
            {heading}
          </h2>
          <div className="mt-7 max-w-[34rem] space-y-4 text-lg leading-8 text-white/62 sm:mt-10 sm:max-w-3xl sm:space-y-6 sm:text-2xl sm:leading-10">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
