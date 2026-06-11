import { Footer, Header } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

const chapters = [
  {
    eyebrow: "02",
    heading: "The modern world is optimized to capture attention, not strengthen it.",
    body: [
      "Every day, people move through constant stimulation, algorithmic distraction, emotional overload, and fractured focus.",
      "The result is not only tiredness.",
      "It is reduced awareness. Reduced signal detection. Reduced emotional control. Reduced execution under pressure.",
    ],
  },
  {
    eyebrow: "03",
    heading: "The strongest advantage is often internal.",
    body: [
      "The people who perform best under pressure are often the people who can remain aware within it.",
      "They can regulate before reacting. They can detect signal from noise. They can execute intentionally when it matters.",
    ],
  },
  {
    eyebrow: "05",
    heading: "Foundation: Awareness & Stability",
    body: [
      "Before performance becomes consistent, awareness must become stable.",
      "Foundation training develops attention control, emotional regulation, and present awareness.",
      "It is not passive relaxation. It is the base layer of mental performance.",
    ],
  },
  {
    eyebrow: "06",
    heading: "Intuition: Signal Detection & Perception",
    body: [
      "Modern humans consume more information, but often notice less.",
      "Intuition training develops the ability to recognize meaningful signals before they become obvious.",
    ],
  },
  {
    eyebrow: "07",
    heading: "Flow: Execution & Performance",
    body: [
      "Execution is not only physical.",
      "It is cognitive, emotional, and behavioral.",
      "Flow training develops clarity under pressure and intentional action during uncertainty.",
    ],
  },
];

const framework = [
  ["Awareness", "Can I become aware of what is happening?"],
  ["Intuition", "Can I recognize meaningful signals?"],
  ["Execution", "Can I act effectively when it matters?"],
];

const signals = [
  "session consistency",
  "completion patterns",
  "skipped practices",
  "reflection signals",
  "time patterns",
  "pressure behavior",
];

export default function WhitepaperPage() {
  return (
    <main className="min-h-screen bg-vexis-black text-vexis-stone">
      <Header />
      <section className="noise-vignette relative flex min-h-screen items-end px-5 pb-20 pt-28 sm:px-8 sm:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_32%,rgba(255,255,255,0.13),transparent_24rem),linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0.96))]" />
        <Reveal className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.34em] text-white/45">
            A Mental Performance Thesis by VEXIS
          </p>
          <h1 className="max-w-6xl text-balance text-5xl font-medium leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-9xl">
            Building The Mind Behind Performance
          </h1>
        </Reveal>
      </section>

      {chapters.slice(0, 2).map((chapter) => (
        <Chapter key={chapter.eyebrow} {...chapter} />
      ))}

      <section className="px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.28em] text-white/35">04 / Core framework</p>
          <h2 className="text-balance text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            Awareness → Intuition → Execution
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {framework.map(([title, body]) => (
              <article key={title} className="cinematic-border rounded-[2rem] p-8">
                <h3 className="text-2xl font-medium tracking-[-0.03em]">{title}</h3>
                <p className="mt-6 text-lg leading-8 text-white/58">{body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {chapters.slice(2).map((chapter) => (
        <Chapter key={chapter.eyebrow} {...chapter} />
      ))}

      <section className="px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.28em] text-white/35">08 / Future of training</p>
          <h2 className="max-w-4xl text-balance text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            The future of mental training is adaptive.
          </h2>
          <div className="my-12 overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-xs uppercase tracking-[0.2em] text-white/60 sm:text-sm">
            Observe → Model → Detect → Adapt → Generate
          </div>
          <div className="max-w-3xl space-y-6 text-xl leading-9 text-white/62 sm:text-2xl sm:leading-10">
            <p>Static training is only the beginning.</p>
            <p>
              The next evolution is behavioral intelligence systems that adapt training to
              how the individual actually functions.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-28 sm:px-8 sm:py-36">
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.28em] text-white/35">09 / SignAI</p>
            <h2 className="text-balance text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
              SignAI: Behavioral Intelligence for Mental Performance
            </h2>
            <div className="mt-10 space-y-6 text-xl leading-9 text-white/62 sm:text-2xl sm:leading-10">
              <p>SignAI is the future intelligence layer of VEXIS.</p>
              <p>Its goal is not to define who the user is.</p>
              <p>Its goal is to understand how the user functions.</p>
              <p className="text-base leading-7 text-white/45">
                SignAI is framed as roadmap direction, not as an implemented production system.
              </p>
            </div>
          </div>
          <div className="cinematic-border rounded-[2rem] p-8">
            <p className="mb-8 text-sm uppercase tracking-[0.24em] text-white/35">
              Future behavioral signals may include
            </p>
            <ul className="space-y-4 text-lg text-white/66">
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

      <section className="px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal className="mx-auto max-w-5xl">
          <p className="mb-8 text-xs uppercase tracking-[0.28em] text-white/35">10 / Closing manifesto</p>
          <h2 className="text-balance text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            Mental performance is becoming trainable.
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-7 text-xl leading-9 text-white/62 sm:text-2xl sm:leading-10">
            <p>The future advantage is not information alone.</p>
            <p>
              It is the ability to observe clearly, regulate emotion, recognize meaningful
              signals, and execute intentionally under pressure.
            </p>
            <p>VEXIS exists to help build the mind behind performance.</p>
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
    <section className="border-t border-white/[0.07] px-5 py-28 sm:px-8 sm:py-36">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.32fr_1fr]">
        <p className="text-xs uppercase tracking-[0.28em] text-white/35">{eyebrow}</p>
        <div>
          <h2 className="max-w-5xl text-balance text-4xl font-medium tracking-[-0.05em] sm:text-6xl">
            {heading}
          </h2>
          <div className="mt-10 max-w-3xl space-y-6 text-xl leading-9 text-white/62 sm:text-2xl sm:leading-10">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
