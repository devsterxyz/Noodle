
import Link from "next/link";

const features = [
  { icon: "⌘", title: "Create freely", text: "Sketch ideas, map flows, and turn loose thoughts into something your whole team can see." },
  { icon: "◌", title: "Work together", text: "Invite your team into the same space and see every cursor, note, and edit in real time." },
  { icon: "✦", title: "Keep momentum", text: "Start with a template, leave feedback, and come back to every decision when you need it." },
];
const templates = [
  { title: "Product brainstorm", color: "violet", tags: ["Ideas", "Research", "Next steps"] },
  { title: "Project kickoff", color: "orange", tags: ["Goals", "Timeline", "Owners"] },
  { title: "User journey", color: "blue", tags: ["Discover", "Decide", "Delight"] },
];

export default function Home() {
  return <main className="landing-page">
    <nav className="site-nav">
      <Link className="brand" href="/"><span className="brand-mark"><i /><i /><i /></span>Noodle</Link>
      <div className="nav-links"><a href="#features">Features</a><a href="#templates">Templates</a><a href="#how-it-works">How it works</a></div>
      <div className="nav-actions"><Link className="text-link" href="/signin">Log in</Link><Link className="nav-cta" href="/signup">Get started <span>↗</span></Link></div>
    </nav>
    <section className="hero">
      <div className="hero-eyebrow"><span className="spark">✦</span> The canvas for clearer thinking</div>
      <h1>Ideas move better<br />when everyone can <em>see</em> them.</h1>
      <p>Bring your team into one simple, shared space for mapping ideas, making decisions, and building what&apos;s next.</p>
      <div className="hero-actions"><Link className="primary-button" href="/signup">Start creating for free <span>→</span></Link><a className="play-button" href="#how-it-works"><b>▶</b> See how it works</a></div>
      <div className="hero-note"><span>●</span> No credit card required · Free forever for small teams</div>
      <div className="canvas-preview" aria-label="Example collaborative whiteboard">
        <div className="canvas-topbar"><span className="canvas-dots"><i /><i /><i /></span><span>Untitled canvas</span><div className="canvas-avatars"><b>J</b><b>M</b><b>+</b></div></div><div className="canvas-toolbar"><b>↖</b><b>□</b><b>○</b><b>╱</b><b>T</b><b>◉</b></div><div className="canvas-grid" />
        <div className="sticky sticky-yellow">What if it felt<br />more human?</div><div className="sticky sticky-pink">Start with the<br />customer</div><div className="sticky sticky-blue">Make space for<br />the unexpected</div><div className="canvas-card"><span className="mini-icon">✦</span><strong>Big idea</strong><small>Make collaboration feel less like a meeting.</small></div><div className="scribble scribble-one">↗</div><div className="scribble scribble-two">⌁</div><div className="cursor cursor-one"><i /> Maya</div><div className="cursor cursor-two"><i /> Jordan</div>
      </div>
    </section>
    <section className="feature-section" id="features"><p className="section-kicker">Everything in one place</p><div className="section-heading"><h2>From first thought<br />to shared direction.</h2><p>Noodle gives ideas room to grow — then gives your team the clarity to act on them.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><span className="feature-icon">{feature.icon}</span><h3>{feature.title}</h3><p>{feature.text}</p><a href="#how-it-works">Learn more <span>→</span></a></article>)}</div></section>
    <section className="workflow-section" id="how-it-works"><div className="workflow-copy"><p className="section-kicker">A calmer way to collaborate</p><h2>Made for the messy middle.</h2><p>Great work rarely moves in a straight line. Noodle keeps your notes, sketches, feedback, and next steps connected — even when the process isn&apos;t.</p><ul><li><span>01</span> Open a canvas and make it yours</li><li><span>02</span> Bring in the people who matter</li><li><span>03</span> Turn the good stuff into action</li></ul></div><div className="workflow-visual"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="idea-node node-one">💡<small>Insight</small></div><div className="idea-node node-two">✎<small>Sketch</small></div><div className="idea-node node-three">✓<small>Done</small></div><div className="center-node">Your<br />idea</div></div></section>
    <section className="template-section" id="templates"><div className="template-heading"><div><p className="section-kicker">Start somewhere good</p><h2>A blank page, if you want it.</h2></div><a href="#templates">Explore all templates <span>→</span></a></div><div className="template-grid">{templates.map((template) => <article className={`template-card ${template.color}`} key={template.title}><div className="template-board">{template.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><h3>{template.title}</h3><p>Ready to make your own</p></article>)}</div></section>
    <section className="closing-cta"><p className="section-kicker">Your next great idea starts here</p><h2>Make room for<br /><em>better thinking.</em></h2><Link className="primary-button light-button" href="/signup">Create your free canvas <span>→</span></Link></section>
    <footer><Link className="brand" href="/"><span className="brand-mark"><i /><i /><i /></span>Noodle</Link><span>© 2026 Noodle. Made for teams with ideas.</span><div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></div></footer>
  </main>;
}
