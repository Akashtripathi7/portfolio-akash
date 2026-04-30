/* global React */
const { useState, useEffect, useRef } = React;

// ============= HERO =============
function Hero() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const photoWrapRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
    const tick = () => {
      const opts = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false };
      setTime(new Date().toLocaleTimeString("en-GB", opts) + " IST");
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // 3D tilt on photo based on global mouse position
  useEffect(() => {
    const wrap = photoWrapRef.current;
    if (!wrap) return;
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
      wrap.style.transform = `perspective(900px) rotateY(${clamp(dx * 11, -15, 15)}deg) rotateX(${clamp(-dy * 11, -15, 15)}deg) scale(1.02)`;
    };
    const onLeave = () => { wrap.style.transform = ""; };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="hv4" id="home">
      {/* Layered background */}
      <div className="hv4-bg">
        <div className="hv4-grid" />
        <div className="hv4-glow-r" />
        <div className="hv4-glow-l" />
        <div className="hv4-glow-c" />
      </div>

      {/* Top bar: chapter + live clock */}
      <div className={`hv4-topbar mono ${mounted ? "in" : ""}`}>
        <div className="hv4-topbar-left">
          <span className="hv4-topbar-num">001</span>
          <span className="hv4-topbar-div" />
          <span>Introduction</span>
        </div>
        <div className="hv4-topbar-right">
          <span className="hv4-topbar-dot" />
          <span>{time || "—"}</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>Mumbai</span>
        </div>
      </div>
      <div className="hv4-rule" />

      {/* Two-column content */}
      <div className="hv4-content">

        {/* ---- LEFT: text ---- */}
        <div className="hv4-left">
          <div className={`hv4-eyebrow mono ${mounted ? "in" : ""}`}>
            <span className="hv4-ew-dot" />
            <span className="hv4-ew-bar" />
            <span>Senior Flutter Developer</span>
          </div>

          <h1 className="hv4-name serif">
            <span className="hv4-name-r1">
              {"Akash".split("").map((ch, i) => (
                <span key={`f${ch}${i}`} className="hv4-name-ch" style={{ animationDelay: `${0.52 + i * 0.055}s` }}>{ch}</span>
              ))}
            </span>
            <span className="hv4-name-r2">
              {"Tripathi".split("").map((ch, i) => (
                <span key={`l${ch}${i}`} className="hv4-name-ch" style={{ animationDelay: `${0.82 + i * 0.055}s` }}>{ch}</span>
              ))}
            </span>
          </h1>

          <p className={`hv4-tagline serif ${mounted ? "in" : ""}`}>
            I craft mobile experiences that <em>feel inevitable</em> — and engineer the architecture that lets them <em>scale without compromise</em>.
          </p>

          <div className={`hv4-ctas ${mounted ? "in" : ""}`}>
            <a href="#projects" className="hv4-cta-primary">
              View Selected Work
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="assets/Akash_Tripathi_Resume.pdf" className="hv4-cta-ghost" target="_blank" rel="noopener">
              Download Resume ↗
            </a>
          </div>

          <div className={`hv4-stats-row ${mounted ? "in" : ""}`}>
            <div>
              <div className="hv4-stat-v">4<em>+</em></div>
              <div className="hv4-stat-l">Years</div>
            </div>
            <div className="hv4-stat-sep" />
            <div>
              <div className="hv4-stat-v">15<em>+</em></div>
              <div className="hv4-stat-l">Apps Shipped</div>
            </div>
            <div className="hv4-stat-sep" />
            <div>
              <div className="hv4-stat-v">4</div>
              <div className="hv4-stat-l">Companies</div>
            </div>
          </div>
        </div>

        {/* ---- RIGHT: photo ---- */}
        <div className={`hv4-right ${mounted ? "in" : ""}`}>
          <div className="hv4-photo-wrap" ref={photoWrapRef}>
            <div className="hv4-photo-glow" />

            <div className="hv4-photo-frame">
              <img src="assets/akash.png" alt="Akash Tripathi" />
              <div className="hv4-photo-fade" />
            </div>

            <div className="hv4-photo-tag">
              <div className="hv4-photo-tag-name">Akash <em>Tripathi</em></div>
              <div className="hv4-photo-tag-role">Senior Flutter Developer</div>
            </div>

            {/* Floating info chips */}
            <div className="hv4-chip hv4-chip-1">
              <div className="hv4-chip-icon">Fl</div>
              <div>
                <div className="hv4-chip-k">Primary Stack</div>
                <div className="hv4-chip-v">Flutter · Dart</div>
              </div>
            </div>
            <div className="hv4-chip hv4-chip-2">
              <div className="hv4-chip-icon" style={{ background: "rgba(42,157,143,0.15)", color: "#2A9D8F" }}>✦</div>
              {/* <div>
                <div className="hv4-chip-k">Status</div>
                <div className="hv4-chip-v">Open to Work</div>
              </div> */}
            </div>
            <div className="hv4-chip hv4-chip-3">
              <div className="hv4-chip-icon" style={{ background: "rgba(107,91,255,0.15)", color: "#6B5BFF" }}>◉</div>
              <div>
                <div className="hv4-chip-k">Location</div>
                <div className="hv4-chip-v">Mumbai, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`hv4-scroll-cue ${mounted ? "in" : ""}`}>
        <div className="hv4-scroll-line"><div className="hv4-scroll-dot" /></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

// ============= STATS =============
function Stat({ end, suffix, label, prefix }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1400;
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(Math.floor(eased * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return (
    <div ref={ref}>
      <div className="stat-num serif">{prefix}{v}<span className="unit">{suffix}</span></div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        <Stat end={4} suffix="+ yrs" label="Building Flutter apps" />
        <Stat end={15} suffix=" apps" label="Mobile + web shipped" />
        <Stat end={15} suffix=" live" label="Currently in production" />
        <Stat end={4} suffix="" label="Roles · intern to senior" />
      </div>
    </section>
  );
}

// ============= ABOUT =============
function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">// 01 — About</div>
            <h2 className="section-title serif">The story so far</h2>
          </div>
          <p className="section-sub">From engineering student in Mumbai to senior developer shipping apps used across India.</p>
        </div>

        <div className="about-grid">
          <p className="about-text">
            I'm Akash — a developer who treats <em>user experience</em> as the product. My priority is making apps that feel <em>fast, intuitive, and effortless</em>, then engineering them to <em>scale</em>: clean architecture, modular state, and code other developers can build on for years. The details users feel but never see — <em>load times, animations, crash-free sessions</em> — that's where I live.
          </p>
          <Terminal />
        </div>
      </div>
    </section>
  );
}

function Terminal() {
  const lines = [
    { p: "akash@dev", c: "~/portfolio", cmd: "whoami" },
    { o: "Senior Flutter Developer · Mumbai, India" },
    { p: "akash@dev", c: "~/portfolio", cmd: "cat stack.json" },
    { o: <>{"{"}</> },
    { o: <>  <span className="term-key">"language"</span>: <span className="term-str">"Dart / Flutter"</span>,</> },
    { o: <>  <span className="term-key">"state"</span>: <span className="term-str">["Riverpod", "Bloc", "GetX"]</span>,</> },
    { o: <>  <span className="term-key">"backend"</span>: <span className="term-str">["Firebase", "REST", "FastAPI"]</span>,</> },
    { o: <>  <span className="term-key">"shipped"</span>: <span className="term-str">"4+ years, 13 apps"</span></> },
    { o: <>{"}"}</> },
    { p: "akash@dev", c: "~/portfolio", cmd: "ls /currently", cursor: true },
  ];
  return (
    <div className="terminal">
      <div className="bar"><span /><span /><span /></div>
      {lines.map((l, i) => (
        <div key={i}>
          {l.cmd ? (
            <>
              <span className="term-prompt">{l.p}</span>
              <span className="term-out"> </span>
              <span className="term-out">{l.c}</span>
              <span className="term-out"> $ </span>
              <span className="term-cmd">{l.cmd}</span>
              {l.cursor && <span className="cursor" />}
            </>
          ) : (
            <span className="term-out">{l.o}</span>
          )}
        </div>
      ))}
    </div>
  );
}

// ============= MARQUEE =============
function Marquee() {
  const items = ["Flutter", "Dart", "Riverpod", "Firebase", "MVC", "Mixpanel", "FastAPI", "OCR", "Crashlytics", "Bloc", "iOS", "Android"];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((x, i) => <span key={i} className="marquee-item">{x}</span>)}
      </div>
    </div>
  );
}

// ============= SKILLS =============
function Skills() {
  const groups = [
    { num: "/01", title: "Flutter Stack", tags: ["Flutter", "Dart", "Riverpod", "Bloc", "GetX", "MVC", "MVVM", "Flavors"] },
    { num: "/02", title: "Backend & APIs", tags: ["Firebase Suite", "Crashlytics", "REST APIs", "FastAPI", "Auth", "Background services"] },
    { num: "/03", title: "Native & Tooling", tags: ["Android (Kotlin)", "iOS (Swift)", "Bluetooth", "Deep linking", "OCR", "Dynamic icons"] },
    { num: "/04", title: "Analytics & Growth", tags: ["Mixpanel", "Percept Insight", "Firebase Analytics", "CleverTap", "A/B testing"] },
    { num: "/05", title: "DevOps", tags: ["GitHub Actions", "CI/CD", "App release", "Play Store", "App Store"] },
    { num: "/06", title: "Leadership", tags: ["Code reviews", "Mentorship", "Architecture", "Agile", "Cross-functional"] },
  ];
  return (
    <section className="section" id="skills" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-tag">// 02 — Capabilities</div>
            <h2 className="section-title serif">What I bring</h2>
          </div>
          <p className="section-sub">A full Flutter toolkit, plus the native bridges and data plumbing that make apps actually feel polished.</p>
        </div>
        <div className="skills-grid">
          {groups.map((g, i) => (
            <div key={i} className="skill-card">
              <div className="num">{g.num}</div>
              <h4>{g.title}</h4>
              <div className="skill-tags">
                {g.tags.map((t, j) => <span key={j} className="skill-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.Stats = Stats;
window.About = About;
window.Marquee = Marquee;
window.Skills = Skills;
