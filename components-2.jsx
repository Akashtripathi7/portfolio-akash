/* global React */
const { useState: useState2, useRef: useRef2, useEffect: useEffect2 } = React;

// ============= PROJECTS =============
function PhoneMock({ accent, title, lines, footer }) {
  return (
    <div className="phone phone-front">
      <div className="screen" style={{ background: "#fff" }}>
        <div className="notch" />
        <div style={{
          padding: "44px 18px 18px",
          background: `linear-gradient(160deg, ${accent}, color-mix(in oklab, ${accent} 60%, #000))`,
          color: "#fff",
          height: 180,
          display: "flex", flexDirection: "column", justifyContent: "flex-end"
        }}>
          <div style={{fontSize: 11, opacity: 0.8, fontFamily: "Geist Mono, monospace"}}>{title.tag}</div>
          <div style={{fontFamily: "Instrument Serif, serif", fontSize: 28, lineHeight: 1.05, letterSpacing: "-0.02em"}}>{title.t}</div>
        </div>
        <div style={{padding: 16, display: "flex", flexDirection: "column", gap: 10}}>
          {lines.map((l, i) => (
            <div key={i} style={{
              padding: 10,
              borderRadius: 10,
              background: "#F5F2ED",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 11
            }}>
              <span style={{color: "#1A1A1A", fontWeight: 500}}>{l.k}</span>
              <span style={{color: accent, fontFamily: "Geist Mono, monospace"}}>{l.v}</span>
            </div>
          ))}
          {footer && (
            <div style={{
              marginTop: 8,
              padding: "10px 12px",
              borderRadius: 999,
              background: accent,
              color: "#fff",
              textAlign: "center",
              fontSize: 12,
              fontWeight: 500
            }}>{footer}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function PhoneStack({ accent, title, lines, footer, secondary }) {
  return (
    <div className="phone-stack">
      <div className="phone phone-back" style={{ background: secondary || "#1A1A1A" }}>
        <div className="screen" style={{ background: secondary || "#1A1A1A" }}>
          <div className="notch" style={{background: secondary || "#1A1A1A"}} />
        </div>
      </div>
      <div className="phone phone-back2" style={{ background: accent, opacity: 0.5 }}>
        <div className="screen" style={{ background: accent, opacity: 0.4 }}>
          <div className="notch" style={{background: accent}} />
        </div>
      </div>
      <PhoneMock accent={accent} title={title} lines={lines} footer={footer} />
    </div>
  );
}

function Projects() {
  const projects = [
    {
      n: "PROJECT 01",
      tags: [{t: "Live"}, {t: "Senior · Nupipay"}],
      title: "Nupi App",
      desc: "Architected a fintech super-app on Riverpod + MVC. Slashed bundle size by 78% (150MB → 33MB) and rebuilt WebView e-commerce into native flows with custom animations — lifting conversion meaningfully.",
      impact: [
        { v: <>78<em>%</em></>, l: "Smaller build" },
        { v: <>33<em>MB</em></>, l: "Final size" },
        { v: <>4<em>+</em></>, l: "Live products" },
      ],
      accent: "#E04E2A",
      mock: { tag: "NUPI · DASHBOARD", t: "Welcome back, Akash" },
      lines: [
        { k: "Wallet balance", v: "₹ 24,580" },
        { k: "Pending invoices", v: "3" },
        { k: "OCR scans today", v: "12" },
      ],
      footer: "Scan invoice"
    },
    {
      n: "PROJECT 02",
      tags: [{t: "9 mobile · 4 web"}, {t: "SDE-1 · Handpickd"}],
      title: "Handpickd Suite — POS, WMS, FOS, Delivery",
      desc: "Shipped 13 apps end-to-end across the consumer + ops stack. Bridged Bluetooth weighing machines into Flutter, built background delivery services that lifted operations efficiency by 25%, and instrumented growth with Mixpanel + Percept Insight.",
      impact: [
        { v: <>13<em></em></>, l: "Apps shipped" },
        { v: <>25<em>%</em></>, l: "Ops efficiency ↑" },
        { v: <>3<em></em></>, l: "Mission-critical leads" },
      ],
      accent: "#2A9D8F",
      mock: { tag: "WMS · DELIVERY", t: "Order #4827" },
      lines: [
        { k: "Bluetooth scale", v: "1.240 kg" },
        { k: "Items packed", v: "8 / 12" },
        { k: "Route ETA", v: "14 min" },
      ],
      footer: "Mark delivered"
    },
    {
      n: "PROJECT 03",
      tags: [{t: "Live"}, {t: "Senior · Wonder WallCare"}],
      title: "Wonder WallCare",
      desc: "Consumer-facing wallpaper marketplace built on Flutter + Riverpod. QR-based deep linking gets users from a printed sample to checkout in two taps. Dynamic app icon switching enables seasonal branding without app updates.",
      impact: [
        { v: <>2<em></em></>, l: "Taps to checkout" },
        { v: <>QR<em></em></>, l: "Deep links" },
        { v: <>iOS<em>+And</em></>, l: "Native bridges" },
      ],
      accent: "#6B5BFF",
      mock: { tag: "WALLCARE · CATALOG", t: "Botanical Twilight" },
      lines: [
        { k: "Pattern", v: "Bloom · 04" },
        { k: "Roll size", v: "10m × 53cm" },
        { k: "₹ per roll", v: "1,899" },
      ],
      footer: "Add to cart"
    },
    {
      n: "PROJECT 04",
      tags: [{t: "Live"}, {t: "Senior · Nupipay"}],
      title: "HomeSure Samriddhi · Diamond Club",
      desc: "Loyalty + rewards platform with OCR-based invoice scanning, Firebase Crashlytics integration, and Flutter flavors for environment-specific configs. Resolved priority crashes — pushed crash-free sessions back above industry benchmark.",
      impact: [
        { v: <>OCR<em></em></>, l: "Invoice capture" },
        { v: <>95<em>%+</em></>, l: "Crash-free" },
        { v: <>3<em></em></>, l: "Flutter flavors" },
      ],
      accent: "#F4A261",
      mock: { tag: "SAMRIDDHI · REWARDS", t: "Diamond status" },
      lines: [
        { k: "Points balance", v: "12,450" },
        { k: "Tier", v: "Diamond" },
        { k: "Invoices scanned", v: "27" },
      ],
      footer: "Redeem rewards"
    },
    {
      n: "PROJECT 05",
      tags: [{t: "Production"}, {t: "Flutter Dev · Corpusvision"}],
      title: "Trient MedCare · Coro Suite",
      desc: "Owned frontend for a healthcare suite — independently delivered Trient MedCare to production. Implemented MVC architecture for modular, reusable code that the team continues to build on years later.",
      impact: [
        { v: <>1<em></em></>, l: "Solo delivery" },
        { v: <>MVC<em></em></>, l: "Architecture" },
        { v: <>Health<em></em></>, l: "Domain" },
      ],
      accent: "#0D9488",
      mock: { tag: "TRIENT · TRACKER", t: "Vitals — Today" },
      lines: [
        { k: "Heart rate", v: "72 bpm" },
        { k: "Blood pressure", v: "118 / 76" },
        { k: "Next dose", v: "8:00 PM" },
      ],
      footer: "Log reading"
    },
  ];

  return (
    <section className="section" id="projects" style={{background: "var(--bg-2)"}}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">// 03 — Featured Work</div>
            <h2 className="section-title serif">Apps in the wild</h2>
          </div>
          <p className="section-sub">Five chapters from a four-year build streak. Each shipped, measured, and iterated on with real users.</p>
        </div>
        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={i} className={`project ${i % 2 === 1 ? "reverse" : ""}`}>
              <div className="project-info">
                <div className="num">{p.n}</div>
                <h3 className="serif">{p.title}</h3>
                <div style={{marginBottom: 18}}>
                  {p.tags.map((t, j) => <span key={j} className={`tag ${t.t === "Live" ? "live" : ""}`}>{t.t}</span>)}
                </div>
                <p>{p.desc}</p>
                <div className="impact">
                  {p.impact.map((m, j) => (
                    <div key={j} className="impact-item">
                      <div className="v serif">{m.v}</div>
                      <div className="l">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <PhoneStack accent={p.accent} title={p.mock} lines={p.lines} footer={p.footer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= EXPERIENCE =============
function Experience() {
  const xp = [
    {
      date: "Feb 2025 — Present",
      duration: "1+ yr",
      role: "Senior Software Developer",
      co: "Nupipay",
      loc: "Mumbai",
      tag: "SENIOR",
      color: "#E04E2A",
      bullets: [
        "Architected migration to Riverpod + MVC for maintainability and scalability",
        "Reduced app size by 78% (150MB → 33MB) for faster load and better UX",
        "Built OCR-based invoice scanning + dynamic app icon switching (native iOS/Android)",
        "Mentored junior devs through daily reviews and architectural guidance",
      ],
    },
    {
      date: "Aug 2023 — Feb 2025",
      duration: "1 yr 6 mos",
      role: "SDE-1",
      co: "Handpickd",
      loc: "Gurgaon · Hybrid",
      tag: "SHIPPED 13 APPS",
      color: "#2A9D8F",
      bullets: [
        "Developed 9 mobile + 4 web apps — POS, WMS, FOS, consumer delivery",
        "Bluetooth integration with weighing machines for real-time data capture",
        "Background services that improved delivery operations efficiency by 25%",
        "Led delivery of mission-critical apps: PPD, WMS, Delivery",
      ],
    },
    {
      date: "Jul 2022 — Aug 2023",
      duration: "1 yr 1 mo",
      role: "Flutter Developer",
      co: "Corpusvision",
      loc: "Mumbai",
      tag: "MVC ARCHITECT",
      color: "#6B5BFF",
      bullets: [
        "Led frontend for Coro Suite — improved UI consistency and performance",
        "Independently developed and delivered Trient MedCare to production",
        "Implemented MVC architecture for modular, reusable code",
      ],
    },
    {
      date: "Feb 2022 — Jun 2022",
      duration: "5 mos",
      role: "Flutter Intern",
      co: "SOV Technologies",
      loc: "Mumbai",
      tag: "FIRST CHAPTER",
      color: "#F4A261",
      bullets: [
        "Built admin panel with secure role-based access for teachers, students, schools",
        "FishEye suite — real-time tracking, Firebase auth, image/location-based chat",
      ],
    },
  ];

  const [active, setActive] = useState2(0);

  return (
    <section className="section xp-section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">// 04 — The Journey</div>
            <h2 className="section-title serif">Intern <span style={{color: "var(--accent)", fontStyle: "italic"}}>→</span> Senior, in 4 acts</h2>
          </div>
        </div>

        <div className="xp-grid">
          {/* Left rail — role list */}
          <div className="xp-rail">
            {xp.map((x, i) => (
              <button
                key={i}
                className={`xp-rail-item ${active === i ? "active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{"--c": x.color}}
              >
                <div className="xp-rail-bar" />
                <div className="xp-rail-content">
                  <div className="xp-rail-meta mono">
                    <span>{x.duration}</span>
                    <span className="xp-tag" style={{color: x.color, borderColor: x.color}}>{x.tag}</span>
                  </div>
                  <div className="xp-rail-role serif">{x.role}</div>
                  <div className="xp-rail-co">{x.co} <span style={{color: "var(--muted)"}}>· {x.loc}</span></div>
                </div>
                <div className="xp-rail-num mono">0{i + 1}</div>
              </button>
            ))}
          </div>

          {/* Right card — animated detail */}
          <div className="xp-card-wrap">
            <div className="xp-card" style={{"--c": xp[active].color}} key={active}>
              <div className="xp-card-bg">
                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 400 600">
                  <defs>
                    <linearGradient id={`g${active}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor={xp[active].color} stopOpacity="0.4" />
                      <stop offset="1" stopColor={xp[active].color} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <circle cx="320" cy="80" r="180" fill={`url(#g${active})`} className="xp-orb">
                    <animate attributeName="cx" values="320;280;340;320" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="80;120;60;80" dur="8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="500" r="140" fill={`url(#g${active})`} opacity="0.6">
                    <animate attributeName="cx" values="80;120;60;80" dur="10s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="500;460;520;500" dur="10s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              <div className="xp-card-head">
                <div className="xp-card-tag mono" style={{background: xp[active].color}}>{xp[active].tag}</div>
                <div className="xp-card-date mono">{xp[active].date}</div>
              </div>

              <div className="xp-card-title">
                <div className="xp-card-role serif">{xp[active].role}</div>
                <div className="xp-card-co">at <span style={{color: xp[active].color}}>{xp[active].co}</span></div>
                <div className="xp-card-loc mono">{xp[active].loc} · {xp[active].duration}</div>
              </div>

              <div className="xp-card-bullets">
                {xp[active].bullets.map((b, j) => (
                  <div key={j} className="xp-bullet" style={{animationDelay: `${j * 80 + 200}ms`}}>
                    <span className="xp-bullet-dot" style={{background: xp[active].color}} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="xp-card-foot mono">
                {String(active + 1).padStart(2, "0")} / {String(xp.length).padStart(2, "0")}
                <div className="xp-progress">
                  {xp.map((_, i) => (
                    <div key={i} className={`xp-progress-bar ${i <= active ? "filled" : ""}`} style={{background: i <= active ? xp[active].color : ""}} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= ACHIEVEMENTS =============
function Achievements() {
  const items = [
    { i: "✦", t: "Eyantra Finalist", c: "IIT Bombay", d: "Built a deep-learning powered water plastic cleanup bot — selected as one of the national finalists." },
    { i: "★", t: "Anveshana 2020", c: "Consolation Prize", d: "Led a Smart City IoT project, mentored fellow students, and brought home a national-level recognition." },
    { i: "✶", t: "Covid-19 Hackathon", c: "Bioinformatics", d: "Finalist in the Covid-19 Bioinformatics Hackathon for an Android safety-feature app shipped under deadline." },
  ];
  return (
    <section className="section" id="achievements" style={{paddingTop: 0}}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">// 05 — Recognition</div>
            <h2 className="section-title serif">Beyond the day job</h2>
          </div>
          <p className="section-sub">Side projects and competitions that taught me to ship under pressure.</p>
        </div>
        <div className="achievements-grid">
          {items.map((x, i) => (
            <div key={i} className="achv-card">
              <div className="achv-icon">{x.i}</div>
              <h4>{x.t}</h4>
              <div style={{fontFamily: "Geist Mono, monospace", fontSize: 11, color: "var(--accent)", marginBottom: 12, letterSpacing: "0.06em"}}>{x.c.toUpperCase()}</div>
              <p>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= LIVE APPS =============
function LiveApps() {
  const apps = [
    { i: "H", n: "Handpickd", d: "Consumer delivery", role: "SDE-1 · Lead engineer", year: "2023 — 2025", tech: ["Flutter", "Bluetooth", "Background"], g: "linear-gradient(135deg,#2A9D8F,#06B6D4)" },
    { i: "N", n: "Nupi App", d: "Fintech super-app", role: "Senior · Architect", year: "2025 — Now", tech: ["Riverpod", "MVC", "OCR"], g: "linear-gradient(135deg,#E04E2A,#F4A261)" },
    { i: "W", n: "Wonder WallCare", d: "Wallpaper marketplace", role: "Senior · Native flows", year: "2025 — Now", tech: ["QR deep-links", "Native", "Flavors"], g: "linear-gradient(135deg,#6B5BFF,#A663F1)" },
    { i: "S", n: "HomeSure Samriddhi", d: "Loyalty & rewards", role: "Senior · OCR + Crashlytics", year: "2025 — Now", tech: ["OCR", "Firebase", "Analytics"], g: "linear-gradient(135deg,#F4A261,#E76F51)" },
    { i: "D", n: "Diamond Club", d: "Premium tier rewards", role: "Senior · Engagement", year: "2025 — Now", tech: ["Riverpod", "Native", "Animations"], g: "linear-gradient(135deg,#EC4899,#F472B6)" },
  ];
  const [active, setActive] = useState2(0);
  const a = apps[active];

  return (
    <section className="section apps-v2" id="apps" style={{background: "var(--bg-2)"}}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">// 06 — Shipped &amp; Shipping</div>
            <h2 className="section-title serif">Apps you can install today</h2>
          </div>
          <p className="section-sub">A working portfolio of products on the Play Store — from fintech to logistics, marketplace to rewards.</p>
        </div>

        <div className="apps-v2-grid">
          {/* Featured panel */}
          <div className="apps-v2-feature" key={active} style={{"--g": a.g}}>
            <div className="apps-v2-feature-bg" style={{background: a.g}} />
            <div className="apps-v2-feature-noise" aria-hidden="true" />

            {/* Phone preview */}
            <div className="apps-v2-phone">
              <div className="apps-v2-phone-frame">
                <div className="notch" />
                <div className="apps-v2-phone-screen">
                  <div className="apps-v2-phone-header" style={{background: a.g}}>
                    <div className="apps-v2-phone-icon">{a.i}</div>
                    <div className="apps-v2-phone-name serif">{a.n}</div>
                    <div className="apps-v2-phone-tag mono">{a.d}</div>
                  </div>
                  <div className="apps-v2-phone-body">
                    {[1,2,3,4].map((x) => (
                      <div key={x} className="apps-v2-phone-row" style={{animationDelay: `${x * 80}ms`}}>
                        <div className="apps-v2-phone-bar" />
                        <div className="apps-v2-phone-bar small" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="apps-v2-feature-info">
              <div className="apps-v2-num mono">/{String(active + 1).padStart(2, "0")} · OF {String(apps.length).padStart(2, "0")}</div>
              <div className="apps-v2-name serif">{a.n}</div>
              <div className="apps-v2-meta mono">
                <span>{a.role}</span>
                <span className="apps-v2-dot" />
                <span>{a.year}</span>
              </div>
              <div className="apps-v2-tech">
                {a.tech.map((t, i) => <span key={i} className="apps-v2-tech-tag">{t}</span>)}
              </div>
              <div className="apps-v2-status">
                <span className="apps-v2-pulse" />
                <span className="mono">SHIPPED · IN PRODUCTION</span>
              </div>
            </div>
          </div>

          {/* Selector list */}
          <div className="apps-v2-list">
            {apps.map((app, i) => (
              <button
                key={i}
                className={`apps-v2-list-item ${active === i ? "active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <div className="apps-v2-list-icon" style={{background: app.g}}>{app.i}</div>
                <div className="apps-v2-list-text">
                  <div className="apps-v2-list-name serif">{app.n}</div>
                  <div className="apps-v2-list-desc">{app.d}</div>
                </div>
                <div className="apps-v2-list-arrow">↗</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= CONTACT =============
function Contact() {
  const [form, setForm] = useState2({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState2(false);
  const [error, setError] = useState2("");
  const [submitting, setSubmitting] = useState2(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="blob b1" style={{top: "-100px", left: "-100px"}} />
      <div className="blob b2" style={{bottom: "-100px", right: "-100px"}} />
      <div className="wrap contact-grid">
        <div>
          <div className="section-tag">// 07 — Get in touch</div>
          <h2>Building<br/>something? <em>Let's talk.</em></h2>
          <p>Currently open to senior Flutter roles, contracts, and interesting product collaborations. Fastest reply on email — usually within a day.</p>
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="ic">✉</div>
              <a href="mailto:writetoakashtripathi@gmail.com">writetoakashtripathi@gmail.com</a>
            </div>
            <div className="contact-info-item">
              <div className="ic">☏</div>
              <a href="tel:+919867530858">+91 98675 30858</a>
            </div>
            <div className="contact-info-item">
              <div className="ic">in</div>
              <a href="https://linkedin.com/in/akash-tripathi-42063a1b1" target="_blank" rel="noreferrer">linkedin.com/in/akash-tripathi-42063a1b1</a>
            </div>
            <div className="contact-info-item">
              <div className="ic">{"<>"}</div>
              <a href="https://github.com/Akashtripathi7" target="_blank" rel="noreferrer">github.com/Akashtripathi7</a>
            </div>
            <div className="contact-info-item">
              <div className="ic">⌖</div>
              <span style={{color: "rgba(250,247,242,0.85)"}}>Mumbai, India</span>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={submit}>
          {sent && <div className="form-msg success">✓ Thanks {form.name || "there"} — your message landed. I'll reply within a day.</div>}
          {error && <div className="form-msg" style={{background:"rgba(224,78,42,0.12)",color:"#ff8a70",border:"1px solid rgba(224,78,42,0.3)"}}>{error}</div>}
          <div className="form-row">
            <div className="field">
              <label>Your name</label>
              <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
            </div>
          </div>
          <div className="field">
            <label>Company (optional)</label>
            <input value={form.company} onChange={(e) => setForm({...form, company: e.target.value})} />
          </div>
          <div className="field">
            <label>What's on your mind?</label>
            <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} placeholder="A role, a product, a problem to solve…" required />
          </div>
          <button type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Send message"} <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

window.Projects = Projects;
window.Experience = Experience;
window.Achievements = Achievements;
window.LiveApps = LiveApps;
window.Contact = Contact;
