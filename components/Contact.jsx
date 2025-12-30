export default function Contact({ config }) {
  const buttonStyle = {
    backgroundColor: config.surface_color,
    color: config.primary_color,
    border: `2px solid ${config.primary_color}`,
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 
          className="text-4xl font-bold mb-6"
          style={{ fontSize: `${config.font_size * 2.25}px` }}
        >
          {config.contact_heading}
        </h2>
        <p 
          className="text-lg mb-8"
          style={{ fontSize: `${config.font_size * 1.125}px` }}
        >
          {config.contact_text}
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/shin-default123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
            style={buttonStyle}
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sheen-milger-ochavo-76521a145" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
            style={buttonStyle}
          >
            LinkedIn
          </a>
          <a 
            href="mailto:ochavo.sheenmilger@gmail.com"
            className="px-6 py-3 rounded-lg font-semibold transition-all hover:opacity-90"
            style={buttonStyle}
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}