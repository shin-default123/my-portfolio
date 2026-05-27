const skillCategories = [
  {
    title: "Engineering Engines",
    items: [
      { emoji: "💻", name: "JavaScript" },
      { emoji: "🐍", name: "Python" },
      { emoji: "⚛️", name: "React / Next.js" },
      { emoji: "🗄️", name: "SQL / Supabase" }
    ]
  },
  {
    title: "Specialized Intelligence & Art",
    items: [
      { emoji: "🤖", name: "AI/Machine Learning" },
      { emoji: "🎞️", name: "Computer Vision" },
      { emoji: "🎨", name: "UI/UX Architecture" },
      { emoji: "🔧", name: "Git Control" }
    ]
  }
]

export default function Skills({ config }) {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-black mb-16 text-center tracking-tight"
          style={{ fontSize: `${config.font_size * 2.5}px` }}
        >
          {config.skills_heading}
        </h2>
        
        <div className="space-y-10">
          {skillCategories.map((cat, cIdx) => (
            <div key={cIdx}>
              <h3 className="text-xs uppercase font-mono tracking-widest mb-4 opacity-50 pl-1">
                // {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {cat.items.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 rounded-xl p-4 border transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: config.surface_color,
                      borderColor: `${config.primary_color}1f`
                    }}
                  >
                    <span className="text-2xl select-none">{skill.emoji}</span>
                    <p className="font-semibold text-sm tracking-tight">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}