import React, { useState, useEffect } from "react";

const FuturisticHeroFramer = () => {
  const [theme, setTheme] = useState("dark");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#070b17" : "#edf5ff";
  }, [theme]);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;
    setMousePos({ x, y });
  };

  const darkTheme = {
    bg: "#070b17",
    bg2: "#0d1324",
    text: "#edf4ff",
    muted: "#9aa9c7",
    primary: "#7c5cff",
    secondary: "#29d6ff",
    accent: "#66f0bd",
    pink: "#ff5ec4",
    stroke: "rgba(255, 255, 255, 0.08)",
    panel: "rgba(15, 21, 38, 0.74)",
    surface: "rgba(255, 255, 255, 0.02)",
  };

  const lightTheme = {
    bg: "#edf5ff",
    bg2: "#f8fbff",
    text: "#111827",
    muted: "#5a6b8c",
    primary: "#5d5ef6",
    secondary: "#1fb8ff",
    accent: "#1ccf9a",
    pink: "#ff5db1",
    stroke: "rgba(15, 23, 42, 0.08)",
    panel: "rgba(255, 255, 255, 0.8)",
    surface: "rgba(15, 23, 42, 0.02)",
  };

  const colors = theme === "dark" ? darkTheme : lightTheme;

  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: colors.bg,
    backgroundImage: `
      radial-gradient(circle at 15% 20%, rgba(124, 92, 255, 0.2), transparent 28%),
      radial-gradient(circle at 80% 18%, rgba(41, 214, 255, 0.1), transparent 22%),
      linear-gradient(135deg, ${colors.bg}, ${colors.bg2})
    `,
    color: colors.text,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    overflowX: "hidden",
    transition: "all 0.3s ease",
    onMouseMove: handleMouseMove,
  };

  const pageShellStyle = {
    width: "min(1200px, calc(100% - 40px))",
    margin: "0 auto",
    paddingTop: "28px",
    paddingBottom: "60px",
  };

  const topbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 24px",
    background: "rgba(12, 17, 31, 0.5)",
    border: `1px solid ${colors.stroke}`,
    borderRadius: "20px",
    backdropFilter: "blur(18px)",
    position: "sticky",
    top: "18px",
    zIndex: 20,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: "0.78rem",
  };

  const brandMarkStyle = {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
    boxShadow: `0 0 25px rgba(41, 214, 255, 0.7)`,
  };

  const navStyle = {
    display: "flex",
    gap: "28px",
    alignItems: "center",
    color: colors.muted,
    fontSize: "0.9rem",
  };

  const navLinkStyle = {
    cursor: "pointer",
    transition: "color 0.2s ease",
    color: colors.muted,
  };

  const topbarActionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const themeToggleStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: `1px solid ${colors.stroke}`,
    background: colors.surface,
    color: colors.text,
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const navCtaStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 18px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, rgba(124,92,255,0.18), rgba(41,214,255,0.12))",
    border: "1px solid rgba(255,255,255,0.08)",
    color: colors.text,
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
  };

  const heroStyle = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    alignItems: "center",
    gap: "32px",
    padding: "76px 8px 30px",
  };

  const heroCopyStyle = {
    position: "relative",
    zIndex: 2,
  };

  const eyebrowStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "9px 16px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    color: colors.text,
    fontSize: "0.74rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    boxShadow: "inset 0 0 14px rgba(124,92,255,0.14)",
  };

  const eyebrowDotStyle = {
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${colors.accent}, ${colors.secondary})`,
    boxShadow: `0 0 16px rgba(102, 240, 189, 0.8)`,
    marginRight: "6px",
  };

  const h1Style = {
    margin: "26px 0 18px",
    fontSize: "clamp(3.3rem, 6vw, 6.1rem)",
    lineHeight: 0.94,
    letterSpacing: "-0.08em",
    fontWeight: 900,
  };

  const subtextStyle = {
    maxWidth: "600px",
    color: colors.muted,
    fontSize: "1.06rem",
    lineHeight: 1.7,
  };

  const ctaRowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginTop: "32px",
    flexWrap: "wrap",
  };

  const primaryBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "54px",
    padding: "0 24px",
    borderRadius: "16px",
    fontWeight: 700,
    border: "none",
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
    color: "#040b12",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: `0 14px 34px ${colors.primary}66`,
    textDecoration: "none",
  };

  const secondaryBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "54px",
    padding: "0 24px",
    borderRadius: "16px",
    fontWeight: 700,
    border: `1px solid rgba(255,255,255,0.08)`,
    background: "rgba(255,255,255,0.02)",
    color: colors.text,
    cursor: "pointer",
    transition: "transform 0.2s ease",
    textDecoration: "none",
  };

  const statsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    marginTop: "32px",
    flexWrap: "wrap",
  };

  const statStyle = {
    minWidth: "120px",
  };

  const statStrongStyle = {
    display: "block",
    fontSize: "1.8rem",
    lineHeight: 1.2,
    letterSpacing: "-0.06em",
    marginBottom: "8px",
  };

  const statLabelStyle = {
    display: "block",
    color: colors.muted,
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  };

  const heroVisualStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "620px",
  };

  const orbStyle = {
    position: "absolute",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), rgba(41,214,255,0.1) 26%, rgba(124,92,255,0.38) 48%, rgba(11,16,30,0.1) 70%), linear-gradient(135deg, rgba(124,92,255,0.56), rgba(41,214,255,0.15), rgba(255,94,196,0.22))",
    filter: "blur(10px)",
    opacity: 0.9,
    animation: "pulse 9s ease-in-out infinite",
  };

  const displayPanelStyle = {
    position: "relative",
    width: "min(520px, 92%)",
    padding: "20px",
    borderRadius: "32px",
    background: colors.panel,
    border: `1px solid rgba(255,255,255,0.08)`,
    backdropFilter: "blur(18px)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(124,92,255,0.12), inset 0 0 22px rgba(103, 117, 255, 0.12)",
    transform: `perspective(1200px) rotateX(${8 - mousePos.y}deg) rotateY(${mousePos.x - 12}deg)`,
    animation: "floatPanel 8s ease-in-out infinite",
    transition: "transform 0.25s ease",
  };

  const screenStyle = {
    position: "relative",
    height: "520px",
    borderRadius: "24px",
    padding: "18px",
    background: theme === "dark" ? "linear-gradient(180deg, rgba(8,13,23,0.96), rgba(10,17,31,0.88))" : "linear-gradient(180deg, rgba(247, 250, 255, 0.98), rgba(236, 242, 255, 0.9))",
    overflow: "hidden",
    border: `1px solid ${colors.stroke}`,
  };

  const screenTopStyle = {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  };

  const dotsStyle = {
    display: "flex",
    gap: "8px",
  };

  const dotStyle = (color) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: color,
  });

  const smallPillStyle = {
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "0.72rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: colors.muted,
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.72; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        
        @keyframes floatPanel {
          0%, 100% { transform: perspective(1200px) rotateX(8deg) rotateY(-12deg) translateY(0); }
          50% { transform: perspective(1200px) rotateX(10deg) rotateY(-8deg) translateY(-12px); }
        }
        
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>

      <div style={pageShellStyle}>
        <header style={topbarStyle}>
          <div style={brandStyle}>
            <span style={brandMarkStyle} />
            <span>Astra Labs</span>
          </div>

          <nav style={navStyle} aria-label="Main navigation">
            <a style={navLinkStyle} href="#">Work</a>
            <a style={navLinkStyle} href="#">Services</a>
            <a style={navLinkStyle} href="#">Process</a>
            <a style={navLinkStyle} href="#">About</a>
          </nav>

          <div style={topbarActionsStyle}>
            <button
              style={themeToggleStyle}
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>

            <a href="#" style={navCtaStyle}>
              Let's talk
            </a>
          </div>
        </header>

        <main style={heroStyle}>
          <section style={heroCopyStyle}>
            <div style={eyebrowStyle}>
              <span style={eyebrowDotStyle} />
              Available for select projects
            </div>

            <h1 style={h1Style}>
              Designing
              <span style={{
                background: theme === "dark"
                  ? "linear-gradient(135deg, #f5f7ff 0%, #8ea7ff 22%, #7ef9ff 48%, #dd8bff 72%, #f5f7ff 100%)"
                  : "linear-gradient(135deg, #111827 0%, #5d5ef6 30%, #1fb8ff 60%, #ff5db1 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "12px",
              }}>
                future-facing
              </span>
              <br />
              digital experiences.
            </h1>

            <p style={subtextStyle}>
              I create bold product experiences for startups and ambitious brands —
              blending user experience strategy, interaction design, and AI-powered
              product thinking.
            </p>

            <div style={ctaRowStyle}>
              <a href="#" style={primaryBtnStyle}>
                View portfolio
              </a>
              <a href="#" style={secondaryBtnStyle}>
                Book a discovery call
              </a>
            </div>

            <div style={statsStyle}>
              <div style={statStyle}>
                <div style={statStrongStyle}>8+</div>
                <div style={statLabelStyle}>Years design</div>
              </div>
              <div style={statStyle}>
                <div style={statStrongStyle}>42</div>
                <div style={statLabelStyle}>Products launched</div>
              </div>
              <div style={statStyle}>
                <div style={statStrongStyle}>96%</div>
                <div style={statLabelStyle}>Client retention</div>
              </div>
            </div>
          </section>

          <section style={heroVisualStyle} aria-label="Portfolio dashboard preview">
            <div style={orbStyle} />

            <div style={displayPanelStyle}>
              <div style={screenStyle}>
                <div style={screenTopStyle}>
                  <div style={dotsStyle}>
                    <span style={dotStyle("#ff6b7d")} />
                    <span style={dotStyle("#ffd166")} />
                    <span style={dotStyle("#7ef9ff")} />
                  </div>
                  <span style={smallPillStyle}>Live System</span>
                </div>

                <div style={{
                  position: "relative",
                  zIndex: 2,
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.9fr",
                  gap: "16px",
                  height: "calc(100% - 62px)",
                }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{
                      height: "260px",
                      background: theme === "dark" ? "rgba(13, 19, 35, 0.86)" : "rgba(255, 255, 255, 0.72)",
                      border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(17, 24, 39, 0.08)"}`,
                      borderRadius: "20px",
                      padding: "16px",
                      position: "relative",
                    }}>
                      <div style={{
                        position: "absolute",
                        inset: "14px",
                        borderRadius: "18px",
                        background: "linear-gradient(135deg, rgba(124,92,255,0.12), rgba(41,214,255,0.1), rgba(255,94,196,0.18))",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }} />
                      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", color: colors.muted, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                          <span>Experience Flow</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: colors.accent }} />
                            Active
                          </span>
                        </div>
                        <svg viewBox="0 0 340 120" preserveAspectRatio="none" style={{ height: "120px", marginTop: "18px" }}>
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                              <stop offset="0%" stopColor="#66f0bd" />
                              <stop offset="50%" stopColor="#29d6ff" />
                              <stop offset="100%" stopColor="#7c5cff" />
                            </linearGradient>
                          </defs>
                          <path d="M0,78 C42,35, 82,27, 120,58 S196,92, 220,66 S278,24, 340,42" fill="none" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" />
                          <path d="M0,78 C42,35, 82,27, 120,58 S196,92, 220,66 S278,24, 340,42 L340,120 L0,120 Z" fill="rgba(124,92,255,0.12)" />
                        </svg>
                        <div style={{ display: "flex", justifyContent: "space-between", color: colors.muted, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                          <span>Conversion uplift</span>
                          <span style={{ color: "#7ef9ff" }}>+34.8%</span>
                        </div>
                      </div>
                    </div>

                    <div style={{
                      height: "150px",
                      background: theme === "dark" ? "rgba(13, 19, 35, 0.86)" : "rgba(255, 255, 255, 0.72)",
                      border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(17, 24, 39, 0.08)"}`,
                      borderRadius: "20px",
                      padding: "16px",
                    }}>
                      <div style={{ fontSize: "0.72rem", color: colors.muted, textTransform: "uppercase" }}>UX Health</div>
                      <div style={{ fontSize: "2.7rem", fontWeight: 800, marginTop: "18px" }}>92</div>
                      <div style={{ marginTop: "18px", width: "100%", height: "10px", borderRadius: "999px", background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                        <div style={{ width: "72%", height: "100%", background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary}, ${colors.pink})` }} />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{
                      height: "200px",
                      background: theme === "dark" ? "rgba(13, 19, 35, 0.86)" : "rgba(255, 255, 255, 0.72)",
                      border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(17, 24, 39, 0.08)"}`,
                      borderRadius: "20px",
                      padding: "16px",
                      position: "relative",
                      overflow: "hidden",
                    }}>
                      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 45% 38%, rgba(255,255,255,0.12), transparent 22%), linear-gradient(135deg, rgba(124,92,255,0.2), rgba(41,214,255,0.05), rgba(255,94,196,0.1))" }} />
                      <div style={{ position: "absolute", right: "20px", bottom: "20px", width: "140px", height: "140px", borderRadius: "28px", background: "linear-gradient(150deg, rgba(255,255,255,0.2), rgba(255,255,255,0.04)), linear-gradient(135deg, #0e1430, #0d1a34)", border: "1px solid rgba(255,255,255,0.06)", transform: "rotate(10deg)" }} />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div style={{
                        height: "110px",
                        background: theme === "dark" ? "rgba(13, 19, 35, 0.82)" : "rgba(255, 255, 255, 0.72)",
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(17, 24, 39, 0.08)"}`,
                        borderRadius: "18px",
                        padding: "16px",
                      }}>
                        <div style={{ fontSize: "0.7rem", color: colors.muted, textTransform: "uppercase" }}>Design Ops</div>
                        <div style={{ fontSize: "1.8rem", fontWeight: 800, marginTop: "20px" }}>18</div>
                        <div style={{ width: "100px", height: "2px", marginTop: "18px", background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary}, transparent)` }} />
                      </div>
                      <div style={{
                        height: "110px",
                        background: theme === "dark" ? "rgba(13, 19, 35, 0.82)" : "rgba(255, 255, 255, 0.72)",
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(17, 24, 39, 0.08)"}`,
                        borderRadius: "18px",
                        padding: "16px",
                      }}>
                        <div style={{ fontSize: "0.7rem", color: colors.muted, textTransform: "uppercase" }}>Launches</div>
                        <div style={{ fontSize: "1.8rem", fontWeight: 800, marginTop: "20px" }}>09</div>
                        <div style={{ width: "100px", height: "2px", marginTop: "18px", background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary}, transparent)` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FuturisticHeroFramer;