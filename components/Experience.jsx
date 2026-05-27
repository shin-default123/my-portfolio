const experiences = [
  {
    id: 1,
    title: "Project Head",
    company: "TechBai Web Development Services",
    period: "Nov 2025 - Present",
    responsibilities: [
      "Managed project timelines, feature prioritization, and quality assurance to ensure scalable and user-centered solutions.",
      "Led the overall planning, development, and execution of an augmented reality–based startup platform."
    ]
  },
  {
    id: 2,
    title: "On-the-Job Training / Full Stack",
    company: "FSUU - Innovation, Data Empowerment and Analytics (IDEA) Office",
    period: "Jan 2026 - Apr 2026",
    responsibilities: [
      "Collaborated on the front-end implementation and performed critical revisions to the back-end architecture.",
      "Improved system stability and performance for the TechnoBusiness Incubator (TBI) of Father Saturnino Urios University."
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer, Pro-Bono Project",
    company: "Caraga State University (CSU Rent-A-Bike System)",
    period: "Sept 2024 - Oct 2025",
    responsibilities: [
      "Developed a web-based bike rental and monitoring system to support CSU’s sustainable mobility and bike-sharing initiative.",
      "Collaborated with university stakeholders to translate operational needs into functional system features.",
      "Supported data collection and reporting to inform campus transport planning and policy development."
    ]
  },
  {
    id: 4,
    title: "Opinion Writer and Editor",
    company: "The Gold Panicles",
    period: "Nov 2021 - Jan 2025",
    responsibilities: [
      "Wrote opinion articles and editorials covering student concerns, social issues, community development, and environmental advocacy.",
      "Edited and reviewed manuscripts to ensure clarity, accuracy, and adherence to publication standards.",
      "Collaborated with the editorial board, writers, and layout artists in producing campus publications and media content.",
      "Assisted in content planning, publication activities, and student journalism initiatives within the university."
    ]
  },
  {
    id: 5,
    title: "Executive Director, Community Organization",
    company: "iKilos Bayugan",
    period: "Oct 2021 - Present",
    responsibilities: [
      "Founded and led a youth-driven environmental organization promoting community action on waste management, sustainability, and good governance.",
      "Coordinated with local government units, schools, and partner organizations to strengthen environmental advocacy and civic participation.",
      "Oversaw organizational strategy, volunteer management, and partnerships to ensure long-term impact and sustainability."
    ]
  }
]

export default function Experience({ config }) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-black mb-16 text-center tracking-tight"
          style={{ fontSize: `${config.font_size * 2.5}px` }}
        >
          {config.experience_heading}
        </h2>
        
        {/* Core Timeline Shell */}
        <div className="relative border-l-2 md:ml-32 pl-8 space-y-12" style={{ borderColor: `${config.primary_color}33` }}>
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Connector Dot */}
              <div 
                className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-4 transition-transform group-hover:scale-125"
                style={{ 
                  backgroundColor: config.background_color, 
                  borderColor: config.primary_color 
                }}
              />

              {/* Absolute Left-Aligned Period for Large Screens */}
              <div 
                className="hidden md:block absolute -left-40 top-1 text-right w-28 text-xs font-mono font-semibold tracking-wider opacity-60"
              >
                {exp.period}
              </div>

              {/* Card Body */}
              <div 
                className="rounded-xl p-6 border transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: config.surface_color,
                  borderColor: `${config.primary_color}1a`
                }}
              >
                <span className="inline-block md:hidden mb-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold tracking-tight">{exp.title}</h3>
                <p 
                  className="text-md font-semibold mb-4 font-mono"
                  style={{ color: config.primary_color }}
                >
                  {exp.company}
                </p>
                <ul className="space-y-2 text-sm opacity-85 leading-relaxed">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2.5 text-blue-400 select-none">›</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}