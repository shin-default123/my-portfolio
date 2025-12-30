export default function About({ config }) {
  const cardStyle = {
    backgroundColor: config.surface_color,
    borderLeft: `4px solid ${config.primary_color}`,
  }

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-bold mb-8 text-center"
          style={{ fontSize: `${config.font_size * 2.25}px` }}
        >
          {config.about_heading}
        </h2>
        <div className="rounded-2xl p-8 shadow-lg" style={cardStyle}>
          <p 
            className="text-lg leading-relaxed"
            style={{ fontSize: `${config.font_size * 1.125}px` }}
          >
            {config.about_text}
          </p>
        </div>
      </div>
    </section>
  )
}