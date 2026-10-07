export default function HeroSection(props) {
  const [theme, setTheme] = React.useState("dark");

  // All customizable parameters - can be tweaked in Figma
  const config = {
    // Hero dimensions
    heroHeight: props.heroHeight || 800,
    heroWidth: props.heroWidth || "100%",
    
    // Background
    bgColor: props.bgColor || (theme === "dark" ? "#0a0e27" : "#ffffff"),
    bgGradient: props.bgGradient || (theme === "dark" 
      ? "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)"
    ),
    
    // Headline
    headlineText: props.headlineText || "Design Partner for Ambitious Startups",
    headlineSize: props.headlineSize || "clamp(2.5rem, 7vw, 4.5rem)",
    headlineColor: props.headlineColor || (theme === "dark" ? "#ffffff" : "#000000"),
    headlineFont: props.headlineFont || "system-ui, -apple-system, sans-serif",
    headlineWeight: props.headlineWeight || 800,
    headlineLineHeight: props.headlineLineHeight || 1.1,
    headlineLetterSpacing: props.headlineLetterSpacing || "-0.02em",
    
    // Accent text (gradient)
    accentText: props.accentText || "ambitious startups",
    accentGradient: props.accentGradient || (theme === "dark"
      ? "linear-gradient(135deg, #7ef9ff, #7c5cff)"
      : "linear-gradient(135deg, #5d5ef6, #1fb8ff)"
    ),
    
    // Subtext
    subtextText: props.subtextText || "Hi, I'm Daniel. I design across industries—creating intuitive, scalable digital experiences that solve real problems for ambitious startups and growing brands.",
    subtextSize: props.subtextSize || "18px",
    subtextColor: props.subtextColor || (theme === "dark" ? "#a0a9c9" : "#4a5568"),
    subtextMaxWidth: props.subtextMaxWidth || "600px",
    subtextLineHeight: props.subtextLineHeight || 1.7,
    
    // CTA Buttons
    primaryBtnText: props.primaryBtnText || "View My Work",
    secondaryBtnText: props.secondaryBtnText || "Get in Touch",
    btnPadding: props.btnPadding || "14px 32px",
    btnFontSize: props.btnFontSize || "16px",
    btnBorderRadius: props.btnBorderRadius || "10px",
    
    // Image cards section
    imageCardHeight: props.imageCardHeight || 350,
    imageCardWidth: props.imageCardWidth || "100%",
    cardBgBlur: props.cardBgBlur || 15,
    cardBorderRadius: props.cardBorderRadius || 16,
    cardSpacing: props.cardSpacing || 24,
    cardBorderColor: props.cardBorderColor || (theme === "dark" 
      ? "rgba(255,255,255,0.1)" 
      : "rgba(0,0,0,0.1)"
    ),
    
    // Images
    image1: props.image1 || "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    image2: props.image2 || "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    
    // Spacing/Layout
    containerPadding: props.containerPadding || "40px 20px",
    containerMaxWidth: props.containerMaxWidth || "1200px",
    contentGap: props.contentGap || "60px",
    
    // Animation
    animationDuration: props.animationDuration || 0.8,
    animationDelay: props.animationDelay || 0.1,
  };

  // Text animation split effect (like temitopeojo.com)
  const SplitText = ({ text, accentWords = [], delay = 0 }) => {
    const words = text.split(" ");
    
    return (
      <span style={{ display: "block" }}>
        {words.map((word, idx) => {
          const isAccent = accentWords.some(aw => word.toLowerCase().includes(aw.toLowerCase()));
          return (
            <span
              key={idx}
              style={{
                display: "inline-block",
                marginRight: "0.2em",
                opacity: 0,
                animation: `fadeInUp ${config.animationDuration}s ease-out forwards`,
                animationDelay: `${delay + idx * 0.05}s`,
              }}
            >
              <span style={isAccent ? {
                background: config.accentGradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: "900",
              } : {}}>
                {word}
              </span>
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div style={{
      width: config.heroWidth,
      minHeight: `${config.heroHeight}px`,
      background: config.bgGradient,
      backgroundColor: config.bgColor,
      padding: config.containerPadding,
      boxSizing: "border-box",
      fontFamily: config.headlineFont,
      color: config.headlineColor,
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: ${config.cardBorderRadius}px;
        }
      `}</style>

      <div style={{
        maxWidth: config.containerMaxWidth,
        margin: "0 auto",
      }}>
        {/* Header with theme toggle */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "80px",
          paddingBottom: "20px",
          borderBottom: `1px solid ${config.cardBorderColor}`,
        }}>
          <div style={{
            fontWeight: "900",
            fontSize: "16px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            Daniel — UI/UX Designer
          </div>
          <button
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            style={{
              background: "none",
              border: `1px solid ${config.cardBorderColor}`,
              color: config.headlineColor,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              transition: "all 0.2s ease",
            }}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>

        {/* Headline with animation */}
        <h1 style={{
          fontSize: config.headlineSize,
          fontWeight: config.headlineWeight,
          margin: "0 0 30px",
          lineHeight: config.headlineLineHeight,
          letterSpacing: config.headlineLetterSpacing,
          color: config.headlineColor,
        }}>
          <SplitText 
            text={config.headlineText}
            accentWords={["ambitious", "startups"]}
            delay={0}
          />
        </h1>

        {/* Subtext with fade-in */}
        <p style={{
          fontSize: config.subtextSize,
          lineHeight: config.subtextLineHeight,
          color: config.subtextColor,
          maxWidth: config.subtextMaxWidth,
          marginBottom: "50px",
          opacity: 0,
          animation: "fadeInUp 0.8s ease-out 0.4s forwards",
        }}>
          {config.subtextText}
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "16px",
          marginBottom: "120px",
          flexWrap: "wrap",
          opacity: 0,
          animation: "fadeInUp 0.8s ease-out 0.6s forwards",
        }}>
          <button style={{
            padding: config.btnPadding,
            fontSize: config.btnFontSize,
            borderRadius: config.btnBorderRadius,
            border: "none",
            background: config.accentGradient,
            color: "#fff",
            fontWeight: "700",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}>
            {config.primaryBtnText}
          </button>
          <button style={{
            padding: config.btnPadding,
            fontSize: config.btnFontSize,
            borderRadius: config.btnBorderRadius,
            border: `1px solid ${config.cardBorderColor}`,
            background: "transparent",
            color: config.headlineColor,
            fontWeight: "700",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}>
            {config.secondaryBtnText}
          </button>
        </div>

        {/* Image Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: `${config.cardSpacing}px`,
          opacity: 0,
          animation: "fadeInUp 0.8s ease-out 0.8s forwards",
        }}>
          {/* Card 1 */}
          <div style={{
            height: `${config.imageCardHeight}px`,
            borderRadius: `${config.cardBorderRadius}px`,
            border: `1px solid ${config.cardBorderColor}`,
            overflow: "hidden",
            backdropFilter: `blur(${config.cardBgBlur}px)`,
            background: theme === "dark" 
              ? "rgba(255,255,255,0.05)" 
              : "rgba(0,0,0,0.02)",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
          >
            <img 
              src={config.image1} 
              alt="Portfolio work 1"
              className="card-image"
            />
          </div>

          {/* Card 2 */}
          <div style={{
            height: `${config.imageCardHeight}px`,
            borderRadius: `${config.cardBorderRadius}px`,
            border: `1px solid ${config.cardBorderColor}`,
            overflow: "hidden",
            backdropFilter: `blur(${config.cardBgBlur}px)`,
            background: theme === "dark" 
              ? "rgba(255,255,255,0.05)" 
              : "rgba(0,0,0,0.02)",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
          >
            <img 
              src={config.image2} 
              alt="Portfolio work 2"
              className="card-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
