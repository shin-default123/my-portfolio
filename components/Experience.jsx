const experiences = [
  {
    id: 1,
    title: "Project Head",
    company: "AR Startup",
    period: " November 2025 - Present",
    responsibilities: [
      "Managed project timelines, feature prioritization, and quality assurance to ensure scalable and user-centered solutions.",
      "Led the overall planning, development, and execution of an augmented reality–based startup",
        ]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Caraga State University (CSU Rent-A-Bike System)",
    period: " September 2024 - October 2025",
    responsibilities: [
      "Developed a web-based bike rental and monitoring system to support CSU’s sustainable mobility and bike-sharing initiative.",
      "Collaborated with university stakeholders to translate operational needs into functional system features.",
      "Supported data collection and reporting to inform campus transport planning and policy development."
    ]
  },
  {
    id: 3,
    title: "Executive Director",
    company: "iKilos Bayugan",
    period: "October 2021 - Present",
    responsibilities: [
      "Founded and led a youth-driven environmental organization promoting community action on waste management, sustainability, and good governance.",
      "Coordinated with local government units, schools, and partner organizations to strengthen environmental advocacy and civic participation.",
      "Oversaw organizational strategy, volunteer management, and partnerships to ensure long-term impact and sustainability."
    ]
  }
]

export default function Experience({ config }) {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-bold mb-12 text-center"
          style={{ fontSize: `${config.font_size * 2.25}px` }}
        >
          {config.experience_heading}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="rounded-xl p-6 shadow-md border-l-4"
              style={{
                backgroundColor: config.surface_color,
                borderLeftColor: config.primary_color
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 
                    className="text-2xl font-bold"
                    style={{ fontSize: `${config.font_size * 1.5}px` }}
                  >
                    {exp.title}
                  </h3>
                  <p 
                    className="text-lg font-semibold opacity-80"
                    style={{ 
                      color: config.primary_color,
                      fontSize: `${config.font_size * 1.125}px`
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
                <span 
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: `${config.secondary_color}33`,
                    color: config.secondary_color,
                    fontSize: `${config.font_size * 0.875}px`
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 ml-4">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span style={{ fontSize: `${config.font_size}px` }}>
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}