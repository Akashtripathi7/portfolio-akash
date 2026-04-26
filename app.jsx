/* global React, ReactDOM */
const { useState, useEffect } = React;
// useRef intentionally not destructured here — cursor uses DOM queries directly

function App() {
  // Tweaks integration
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "accent": "#E04E2A"
  }/*EDITMODE-END*/;

  const tweaks = (window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : { values: TWEAK_DEFAULTS, setTweak: () => {} });
  const { values, setTweak } = tweaks;

  // Apply accent CSS var live
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", values.accent || "#E04E2A");
  }, [values.accent]);

  // Nav scroll state
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Custom cursor: dot (instant) + ring (lerp follow)
  useEffect(() => {
    const dot = document.querySelector(".c-cursor-dot");
    const ring = document.querySelector(".c-cursor-ring");
    if (!dot || !ring) return;

    let mx = -120, my = -120, rx = -120, ry = -120, raf;
    const lerp = (a, b, t) => a + (b - a) * t;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    const animate = () => {
      rx = lerp(rx, mx, 0.11);
      ry = lerp(ry, my, 0.11);
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("mousemove", onMove, { passive: true });

    // Delegation: detect hover on interactive / photo elements
    const onOver = (e) => {
      const isPhoto = !!e.target.closest(".hv4-photo-frame, .hv4-photo-wrap");
      const isLink  = !!e.target.closest("a, button");
      document.body.classList.toggle("c-photo", isPhoto);
      document.body.classList.toggle("c-hover", isLink && !isPhoto);
    };
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Reveal observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });

  const presets = ["#E04E2A", "#6B5BFF", "#2A9D8F", "#F4A261", "#EC4899", "#0EA5E9"];

  return (
    <>
      <div className="c-cursor-dot" />
      <div className="c-cursor-ring"><span className="c-cursor-label">View</span></div>

      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">
          <span className="dot" />
          <span className="serif" style={{fontSize: 22}}>Akash<span style={{color: "var(--accent)"}}>.</span></span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#apps">Apps</a>
        </div>
        <a href="#contact" className="nav-cta">Hire me ↗</a>
      </nav>

      <window.Hero />
      <window.Stats />
      <window.About />
      <window.Marquee />
      <window.Skills />
      <window.Projects />
      <window.Experience />
      <window.Achievements />
      <window.LiveApps />
      <window.Contact />

      <footer className="footer">
        <div className="wrap">© 2026 Akash Tripathi · Built with Flutter energy + a lot of CSS</div>
      </footer>

      {window.TweaksPanel && (
        <window.TweaksPanel>
          <window.TweakSection title="Accent color">
            <div style={{display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12}}>
              {presets.map((c) => (
                <button
                  key={c}
                  onClick={() => setTweak("accent", c)}
                  style={{
                    width: 32, height: 32, borderRadius: 999,
                    background: c, border: values.accent === c ? "2px solid #fff" : "2px solid transparent",
                    boxShadow: values.accent === c ? `0 0 0 2px ${c}` : "none",
                    cursor: "pointer"
                  }}
                  aria-label={c}
                />
              ))}
            </div>
            <window.TweakColor label="Custom" value={values.accent} onChange={(v) => setTweak("accent", v)} />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
