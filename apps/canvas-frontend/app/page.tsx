import Link from "next/link";

const features = [
  [
    "⌘",
    "Create freely",
    "Sketch ideas, map flows, and turn loose thoughts into something your whole team can see.",
  ],
  [
    "◌",
    "Work together",
    "Invite your team into the same space and see every cursor, note, and edit in real time.",
  ],
  [
    "✦",
    "Keep momentum",
    "Start with a template, leave feedback, and come back to every decision when you need it.",
  ],
];

const templates: [string, string, string, string[]][] = [
  [
    "Product brainstorm",
    "bg-[#e8e3ff]",
    "bg-[#fff19c]",
    ["Ideas", "Research", "Next steps"],
  ],
  [
    "Project kickoff",
    "bg-[#f7d4b4]",
    "bg-[#ffebaa]",
    ["Goals", "Timeline", "Owners"],
  ],
  [
    "User journey",
    "bg-[#cde8f4]",
    "bg-[#ffd8e6]",
    ["Discover", "Decide", "Delight"],
  ],
];

const Brand = () => (
  <Link
    className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight"
    href="/"
  >
    <span className="flex h-5 w-5 -rotate-[10deg] items-start gap-0.5">
      <i className="mt-2 block h-3 w-1.5 rounded bg-[#6853e8]" />
      <i className="mt-0.5 block h-5 w-1.5 rounded bg-[#6853e8]" />
      <i className="block h-4 w-1.5 rounded bg-[#6853e8]" />
    </span>
    Noodle
  </Link>
);

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fffdf9] text-[#1e1e2d]">
      <nav className="mx-auto flex h-[78px] max-w-[1180px] items-center justify-between px-7">
        <Brand />
        <div className="ml-24 hidden gap-8 text-sm text-[#555565] md:flex">
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#how-it-works">How it works</a>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <Link className="hidden text-[#555565] sm:block" href="/signin">
            Sign In
          </Link>
          <Link
            className="rounded-lg bg-[#6853e8] px-4 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#5340ca]"
            href="/signup"
          >
            Sign Up <span className="ml-1">↗</span>
          </Link>
        </div>
      </nav>

      <section className="relative px-5 pb-20 pt-16 text-center sm:pt-[77px] sm:pb-24">
        <div className="pointer-events-none absolute left-1/2 top-28 -z-0 h-[540px] w-[760px] -translate-x-1/2 rounded-full bg-[#efebff] opacity-70 blur-sm" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f0edff] px-3 py-2 text-xs font-extrabold uppercase tracking-[1.4px] text-[#6853e8]">
            <span className="text-sm">✦</span>The canvas for clearer thinking
          </div>
          <h1 className="mt-5 text-5xl font-bold leading-[.99] tracking-[-.07em] sm:text-7xl lg:text-[80px]">
            Ideas move better
            <br />
            when everyone can{" "}
            <em className="font-serif font-normal text-[#6853e8]">see</em> them.
          </h1>
          <p className="mx-auto mt-5 max-w-[590px] text-base leading-relaxed text-[#6e6d7a] sm:text-lg">
            Bring your team into one simple, shared space for mapping ideas,
            making decisions, and building what&apos;s next.
          </p>
          <div className="mt-7 flex items-center justify-center gap-6">
            <Link
              className="rounded-lg bg-[#6853e8] px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#5340ca]"
              href="/signup"
            >
              Start creating for free <span className="ml-2">→</span>
            </Link>
            <a
              className="hidden text-sm font-bold sm:block"
              href="#how-it-works"
            >
              <b className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full border border-[#d7d4e5] text-[9px] text-[#6853e8]">
                ▶
              </b>
              See how it works
            </a>
          </div>
          <div className="mt-4 text-xs text-[#8b8b98]">
            <span className="mr-1 text-[10px] text-[#54b878]">●</span>No credit
            card required · Free forever for small teams
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 h-[275px] max-w-[950px] overflow-hidden rounded-2xl border border-[#e6e3ee] bg-white text-left shadow-[0_25px_55px_rgba(49,41,91,.16)] sm:mt-[68px] sm:h-[390px]">
          <div className="flex h-11 items-center gap-4 border-b border-[#eceaf2] px-4 text-[11px] text-[#8d8b98]">
            <span className="flex gap-1">
              <i className="h-1.5 w-1.5 rounded-full bg-[#dedce5]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#dedce5]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#dedce5]" />
            </span>
            Untitled canvas
            <div className="ml-auto flex">
              <b className="-ml-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#ffc062] text-[9px] text-white">
                J
              </b>
              <b className="-ml-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#7968e9] text-[9px] text-white">
                M
              </b>
              <b className="-ml-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#e5e2ed] text-[9px] text-[#777]">
                +
              </b>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 top-11 bg-[radial-gradient(#e6e3eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-75" />
          <div className="absolute left-2 top-[52px] z-20 flex flex-col gap-2 rounded-lg border border-[#ebe9f1] bg-white p-2 text-xs text-[#848291] shadow">
            <b>↖</b>
            <b>□</b>
            <b>○</b>
            <b>╱</b>
            <b>T</b>
          </div>
          <div className="absolute left-[27%] top-[86px] z-10 -rotate-3 rounded bg-[#fff1a8] px-2.5 py-3 text-[10px] font-bold leading-snug shadow-lg sm:left-[28%] sm:top-[107px] sm:px-4 sm:py-5 sm:text-sm">
            What if it felt
            <br />
            more human?
          </div>
          <div className="absolute left-[52%] top-[144px] z-10 rotate-3 rounded bg-[#ffd3e4] px-2.5 py-3 text-[10px] font-bold leading-snug shadow-lg sm:left-[51%] sm:top-[180px] sm:px-4 sm:py-5 sm:text-sm">
            Start with the
            <br />
            customer
          </div>
          <div className="absolute left-[64%] top-[78px] z-10 -rotate-2 rounded bg-[#cfeaff] px-2.5 py-3 text-[10px] font-bold leading-snug shadow-lg sm:left-[65%] sm:top-[89px] sm:px-4 sm:py-5 sm:text-sm">
            Make space for
            <br />
            the unexpected
          </div>
          <div className="absolute left-[34%] top-[212px] z-10 flex w-[170px] origin-top-left scale-75 flex-col gap-1 rounded-lg border border-[#eeeaf5] bg-white p-3 shadow sm:left-[37%] sm:top-[292px] sm:scale-100">
            <span className="text-[#6853e8]">✦</span>
            <strong>Big idea</strong>
            <small className="text-[10px] leading-snug text-[#898794]">
              Make collaboration feel less like a meeting.
            </small>
          </div>
          <div className="absolute left-[32%] top-[213px] z-20 hidden rounded bg-[#29263e] px-2 py-1 text-[9px] text-white sm:block">
            <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#ff7a9f]" />
            Maya
          </div>
          <div className="absolute left-[76%] top-[270px] z-20 hidden rounded bg-[#29263e] px-2 py-1 text-[9px] text-white sm:block">
            <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-[#8d7dff]" />
            Jordan
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8fc] px-7 py-18 sm:py-28">
        <div className="mx-auto max-w-[1125px]">
          <p className="text-xs font-extrabold uppercase tracking-[1.4px] text-[#6853e8]">
            Everything in one place
          </p>
          <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-bold leading-none tracking-[-.06em] sm:text-5xl">
              From first thought
              <br />
              to shared direction.
            </h2>
            <p className="max-w-xs text-base leading-relaxed text-[#6e6d7a]">
              Noodle gives ideas room to grow — then gives your team the clarity
              to act on them.
            </p>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {features.map(([icon, title, text]) => (
              <article
                className="rounded-xl border border-[#e8e6ed] bg-white p-7"
                key={title}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eeeaff] text-2xl text-[#6853e8]">
                  {icon}
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 min-h-16 text-sm leading-relaxed text-[#6e6d7a]">
                  {text}
                </p>
                <a
                  className="mt-3 inline-block text-[13px] font-extrabold text-[#6853e8]"
                  href="#how-it-works"
                >
                  Learn more <span className="ml-1">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-[1125px] gap-11 px-7 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-30"
        id="how-it-works"
      >
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[1.4px] text-[#6853e8]">
            A calmer way to collaborate
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-.06em] sm:text-5xl">
            Made for the messy middle.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#6e6d7a]">
            Great work rarely moves in a straight line. Noodle keeps your notes,
            sketches, feedback, and next steps connected — even when the process
            isn&apos;t.
          </p>
          <ul className="mt-7">
            <li className="border-t border-[#e8e6ed] py-4 text-sm font-bold">
              <span className="mr-4 text-xs text-[#6853e8]">01</span>Open a
              canvas and make it yours
            </li>
            <li className="border-t border-[#e8e6ed] py-4 text-sm font-bold">
              <span className="mr-4 text-xs text-[#6853e8]">02</span>Bring in
              the people who matter
            </li>
            <li className="border-y border-[#e8e6ed] py-4 text-sm font-bold">
              <span className="mr-4 text-xs text-[#6853e8]">03</span>Turn the
              good stuff into action
            </li>
          </ul>
        </div>
        <div className="relative h-[340px] overflow-hidden rounded-3xl bg-[#f3f0ff] sm:h-[405px]">
          <div className="absolute left-1/2 top-1/2 h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7d0fc]" />
          <div className="absolute left-1/2 top-1/2 h-[435px] w-[435px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7d0fc]" />
          <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-8 border-[#f8f7ff] bg-[#6853e8] text-center text-xl font-bold leading-none text-white shadow-xl">
            Your
            <br />
            idea
          </div>
          <div className="absolute left-[12%] top-[18%] flex h-18 w-18 flex-col items-center justify-center rounded-full bg-white text-2xl shadow">
            <span>💡</span>
            <small className="text-[10px] font-bold text-[#777484]">
              Insight
            </small>
          </div>
          <div className="absolute right-[12%] top-[25%] flex h-18 w-18 flex-col items-center justify-center rounded-full bg-white text-2xl shadow">
            <span>✎</span>
            <small className="text-[10px] font-bold text-[#777484]">
              Sketch
            </small>
          </div>
          <div className="absolute bottom-[13%] left-[23%] flex h-18 w-18 flex-col items-center justify-center rounded-full bg-white text-2xl shadow">
            <span>✓</span>
            <small className="text-[10px] font-bold text-[#777484]">Done</small>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf5ed] px-7 py-18 sm:py-26" id="templates">
        <div className="mx-auto max-w-[1125px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[1.4px] text-[#6853e8]">
                Start somewhere good
              </p>
              <h2 className="mt-3 text-4xl font-bold leading-none tracking-[-.06em] sm:text-5xl">
                A blank page, if you want it.
              </h2>
            </div>
            <a
              className="text-[13px] font-extrabold text-[#6853e8]"
              href="#templates"
            >
              Explore all templates <span className="ml-1">→</span>
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {templates.map(([title, background, note, tags]) => (
              <article className="rounded-xl bg-[#fffdf9] p-3 pb-5" key={title}>
                <div
                  className={`h-44 overflow-hidden rounded-md p-5 ${background}`}
                >
                  {tags.map((tag, index) => (
                    <span
                      className={`m-1 inline-block rounded px-2 py-3 text-[10px] font-bold shadow ${note} ${index === 1 ? "translate-y-8 rotate-2" : index === 2 ? "-translate-y-2 -rotate-2" : "-rotate-3"}`}
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mx-2 mt-4 text-base font-bold">{title}</h3>
                <p className="mx-2 mt-1 text-xs text-[#85818a]">
                  Ready to make your own
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#6853e8] px-5 py-20 text-center text-white sm:py-28">
        <p className="text-xs font-extrabold uppercase tracking-[1.4px] text-[#d8d1ff]">
          Your next great idea starts here
        </p>
        <h2 className="mt-4 text-5xl font-bold leading-none tracking-[-.06em] sm:text-6xl">
          Make room for
          <br />
          <em className="font-serif font-normal text-[#fff1af]">
            better thinking.
          </em>
        </h2>
        <Link
          className="mt-8 inline-block rounded-lg bg-white px-5 py-4 text-sm font-bold text-[#6853e8] transition hover:-translate-y-0.5 hover:bg-[#f5f2ff]"
          href="/signup"
        >
          Create your free canvas <span className="ml-2">→</span>
        </Link>
      </section>
      <footer className="mx-auto flex max-w-[1180px] flex-col gap-4 px-7 py-7 text-xs text-[#777482] sm:flex-row sm:items-center sm:justify-between">
        <Brand />
        <span>© 2026 Noodle. Made for teams with ideas.</span>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </main>
  );
}
