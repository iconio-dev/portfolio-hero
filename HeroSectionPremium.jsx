export default function HeroSection({
  // Headline
  headlineText = "Design Partner for Ambitious Startups",
  headlineSize = 120,
  headlineColor = "#171715",
  headlineWeight = 400,
  headlineLineHeight = 1,
  
  // Accent words (grayed out)
  accentWords = ["for", "ambitious"],
  accentColor = "#a5a49e",
  
  // Subtext
  subtextText = "Hi, I'm Daniel. I'm a product designer with four years of turning complex ideas into products people get on the first try. I work from research to launch, with teams anywhere in the world.",
  subtextSize = 16,
  subtextColor = "#5d5d58",
  subtextMaxWidth = 360,
  subtextLineHeight = 1.5,
  
  // CTA Buttons
  primaryBtnText = "View selected work",
  secondaryBtnText = "Book Intro Call",
  btnPadding = "16px 32px",
  btnFontSize = 16,
  btnBorderRadius = 50,
  primaryBtnBg = "#171715",
  primaryBtnColor = "#f1f0ec",
  secondaryBtnBg = "transparent",
  secondaryBtnColor = "#171715",
  secondaryBtnBorder = "1px solid #d9d8d2",
  
  // Image placeholders
  stripHeight = 280,
  stripWidth = "200px",
  cardBg1 = "#0f8f58",
  cardBg2 = "#7c4dff",
  cardBg3 = "#cbbca8",
  cardBg4 = "#1c2b4d",
  
  // Tags
  tag1Text = "Product design",
  tag1Bg = "#caa8f5",
  tag1Color = "#17171a",
  tag2Text = "UX research",
  tag2Bg = "#f0b429",
  tag2Color = "#17171a",
  
  // Layout
  heroPadding = "0 40px 40px",
  heroMinHeight = 800,
  bottomGap = 60,
  
  // Animation
  animationDuration = 0.9,
  animationDelay = 0.05,
  letterAnimationDuration = 0.4,
}) {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const headlineWords = headlineText.split(" ");
  
  const isAccentWord = (word) => {
    return accentWords.some(aw => 
      word.toLowerCase().replace(/[.,!?]/g, "") === aw.toLowerCase()
    );
  };

  return (
    <div style={{
      backgroundColor: theme === "dark" ? "#141412" : "#f1f0ec",
      color: theme === "dark" ? "#ecebe7" : headlineColor,
      fontFamily: "Familjen Grotesk, system-ui, sans-serif",
      minHeight: `${heroMinHeight}px`,
      display: "flex",
      flexDirection: "column",
      padding: heroPadding,
      overflow: "hidden",
      transition: "background-color 0.3s, color 0.3s",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Familjen+Grotesk:wght@400;500;700&display=swap');
        
        @keyframes rise {
          from {
            transform: translateY(115%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes wipe {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }
        
        @keyframes pop {
          from {
            opacity: 0;
            scale: 0.3;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }
        
        .display-font {
          font-family: Anton, Impact, sans-serif;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        
        .headline-char {
          display: inline-block;
          overflow: clip;
          animation: rise ${animationDuration}s cubic-bezier(0.2, 0.9, 0.2, 1) backwards;
        }
        
        .frame {
          animation: wipe 1.1s cubic-bezier(0.7, 0, 0.2, 1) 0.6s backwards;
        }
        
        .tag {
          animation: pop 0.5s cubic-bezier(0.3, 1.6, 0.5, 1) backwards;
        }
        
        .cta-btn {
          padding: ${btnPadding};
          font-size: ${btnFontSize}px;
          border-radius: ${btnBorderRadius}px;
          border: none;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.9rem;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.01em;
          font-size: 1rem;
        }
        
        .cta-primary {
          background: ${primaryBtnBg};
          color: ${primaryBtnColor};
        }
        
        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(23, 23, 21, 0.2);
          letter-spacing: 0.03em;
        }
        
        .cta-primary:active {
          transform: translateY(-1px);
        }
        
        .cta-secondary {
          background: ${secondaryBtnBg};
          color: ${secondaryBtnColor};
          border: ${secondaryBtnBorder};
        }
        
        .cta-secondary:hover {
          background: rgba(23, 23, 21, 0.05);
          transform: translateY(-3px);
          border-color: ${secondaryBtnColor};
        }
        
        .cta-secondary:active {
          transform: translateY(-1px);
        }
        
        .cta-btn svg {
          transition: transform 0.25s;
          width: 18px;
          height: 18px;
        }
        
        .cta-btn:hover svg {
          transform: translateX(6px);
        }
      `}</style>

      {/* Headline */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        paddingBlock: "3rem",
      }}>
        <h1 style={{
          width: "100%",
          margin: 0,
          fontSize: `${headlineSize}px`,
          lineHeight: headlineLineHeight,
          fontWeight: headlineWeight,
          display: "flex",
          flexDirection: "column",
          gap: "0.095em",
          userSelect: "none",
        }} className="display-font">
          {headlineWords.map((word, idx) => (
            <span
              key={idx}
              style={{
                display: "flex",
                gap: "0.1em",
                alignItems: "stretch",
              }}
            >
              {word.split("").map((char, charIdx) => (
                <span
                  key={charIdx}
                  style={{
                    display: "inline-block",
                    lineHeight: 1,
                    overflowClip: "visible",
                    animation: `rise ${animationDuration}s cubic-bezier(0.2, 0.9, 0.2, 1) backwards`,
                    animationDelay: `${animationDelay * (idx * 8 + charIdx)}s`,
                    color: isAccentWord(word) ? accentColor : "inherit",
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom Section - CTA Left, Bio Right */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: `${bottomGap}px`,
        flexWrap: "wrap",
      }}>
        {/* CTA Buttons - Left */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <button className="cta-btn cta-primary">
            {primaryBtnText}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <path d="M4 12h15M13 6l6 6-6 6"/>
            </svg>
          </button>
          <button className="cta-btn cta-secondary">
            {secondaryBtnText}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <path d="M4 12h15M13 6l6 6-6 6"/>
            </svg>
          </button>
        </div>

        {/* Bio - Right */}
        <p style={{
          maxWidth: `${subtextMaxWidth}px`,
          margin: 0,
          fontSize: `${subtextSize}px`,
          lineHeight: subtextLineHeight,
          color: subtextColor,
        }}>
          <strong style={{ color: theme === "dark" ? "#ecebe7" : headlineColor }}>
            Hi, I'm Daniel.
          </strong>{" "}
          {subtextText.replace("Hi, I'm Daniel. ", "")}
        </p>
      </div>

      {/* Image Strips (Placeholder) */}
      <div style={{
        display: "flex",
        gap: "24px",
        marginTop: "60px",
        flexWrap: "wrap",
      }}>
        <div style={{
          width: stripWidth,
          height: `${stripHeight}px`,
          backgroundColor: cardBg1,
          borderRadius: "12px",
          animation: `rise ${animationDuration}s cubic-bezier(0.2, 0.9, 0.2, 1) 0.8s backwards`,
        }} />
        <div style={{
          width: stripWidth,
          height: `${stripHeight}px`,
          backgroundColor: cardBg2,
          borderRadius: "12px",
          animation: `rise ${animationDuration}s cubic-bezier(0.2, 0.9, 0.2, 1) 1s backwards`,
        }} />
        <div style={{
          width: stripWidth,
          height: `${stripHeight}px`,
          backgroundColor: cardBg3,
          borderRadius: "12px",
          animation: `rise ${animationDuration}s cubic-bezier(0.2, 0.9, 0.2, 1) 1.2s backwards`,
        }} />
        <div style={{
          width: stripWidth,
          height: `${stripHeight}px`,
          backgroundColor: cardBg4,
          borderRadius: "12px",
          animation: `rise ${animationDuration}s cubic-bezier(0.2, 0.9, 0.2, 1) 1.4s backwards`,
        }} />
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: `1px solid ${theme === "dark" ? "#2c2c29" : "#d9d8d2"}`,
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        }}
      >
        {theme === "dark" ? "☀" : "☾"}
      </button>
    </div>
  );
}
