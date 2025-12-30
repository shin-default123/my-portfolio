export default function Hero({ config, updateConfig }) {
  const buttonStyle = {
    backgroundColor: config.primary_color,
    color: config.background_color,
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl text-center animate-float">
        <div className="w-48 h-48 rounded-full mx-auto mb-8 overflow-hidden shadow-2xl border-4"
          style={{
            borderColor: config.primary_color
          }}
        >
          <img 
            src="/me.jpg" 
            alt={config.name || "Profile Picture"}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 
          className="text-6xl font-bold mb-4"
          style={{ fontSize: `${config.font_size * 3.75}px` }}
        >
          {config.name}
        </h1>
        <p 
          className="text-2xl mb-8"
          style={{ fontSize: `${config.font_size * 1.5}px` }}
        >
          {config.tagline}
        </p>
        <a 
          href="#projects" 
          className="inline-block px-8 py-3 rounded-full font-semibold transition-all hover:opacity-90"
          style={buttonStyle}
        >
          View My Work
        </a>
      </div>
    </section>
  )
}