const skills = [
  { emoji: "💻", name: "JavaScript" },
  { emoji: "🐍", name: "Python" },
  { emoji: "⚛️", name: "React" },
  { emoji: "🗄️", name: "SQL" },
  { emoji: "🔧", name: "Git" },
  { emoji: "🎞️", name: "Computer Vision" },
  { emoji: "🎨", name: "UI/UX" },
  { emoji: "🤖", name: "AI/Machine Learning" }
]

export default function Skills({ config }) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-bold mb-12 text-center"
          style={{ fontSize: `${config.font_size * 2.25}px` }}
        >
          {config.skills_heading}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-badge rounded-xl p-6 text-center shadow-md"
              style={{
                backgroundColor: config.surface_color,
                border: `2px solid ${config.primary_color}33`
              }}
            >
              <div className="text-4xl mb-2">{skill.emoji}</div>
              <p 
                className="font-semibold"
                style={{ fontSize: `${config.font_size}px` }}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}