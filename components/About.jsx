export default function About({ config }) {
  const borderStyle = {
    borderColor: `${config.primary_color}22`,
  }

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12">
          <h2 
            className="font-black tracking-tight"
            style={{ fontSize: `${config.font_size * 2.25}px` }}
          >
            {config.about_heading || "About Me"}
          </h2>
          <div className="h-[2px] flex-grow opacity-20" style={{ backgroundColor: config.primary_color }} />
          <span className="font-mono text-xs opacity-40 select-none">// identity_manifest.v2</span>
        </div>

        {/* Core Content Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Bio */}
          <div className="md:col-span-7 space-y-6">
            <div 
              className="rounded-2xl p-6 sm:p-8 border shadow-sm backdrop-blur-sm relative overflow-hidden group"
              style={{ 
                backgroundColor: config.surface_color,
                ...borderStyle
              }}
            >
              {/* Decorative accent bracket */}
              <div 
                className="absolute top-0 left-0 w-1.5 h-full opacity-60 group-hover:opacity-100 transition-opacity" 
                style={{ backgroundColor: config.primary_color }}
              />
              
              <p 
                className="leading-relaxed opacity-90 font-normal"
                style={{ fontSize: `${config.font_size * 1.05}px` }}
              >
                {config.about_text}
              </p>
            </div>
            
            {/* System Status Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px] px-2 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span style={{ color: config.primary_color }}>[ RUNTIME ]</span>
                <span className="opacity-70">Next.js / Python / Unity / AR</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: config.secondary_color }}>[ MISSION ]</span>
                <span className="opacity-70">EdTech & Sustainability</span>
              </div>
            </div>
          </div>

          {/* Right Column: Impact Modules */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            {/* Module 01: The Core Tech */}
            <div 
              className="p-5 rounded-xl border relative overflow-hidden transition-all duration-300 hover:translate-x-1"
              style={{ backgroundColor: `${config.surface_color}80`, ...borderStyle }}
            >
              <div className="absolute top-3 right-4 font-mono text-[9px] opacity-25 italic">01_ENGINEERING</div>
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: config.primary_color }}></span>
                Systems Architect
              </h4>
              <p className="text-xs opacity-70 leading-relaxed">
                Developing custom compilers, scaling computer vision (YOLOv8), and architecting spatial interfaces.
              </p>
            </div>

            {/* Module 02: Inclusive Education (TheraSpeech Focus) */}
            <div 
              className="p-5 rounded-xl border relative overflow-hidden transition-all duration-300 hover:translate-x-1"
              style={{ backgroundColor: `${config.surface_color}80`, ...borderStyle }}
            >
              <div className="absolute top-3 right-4 font-mono text-[9px] opacity-25 italic">02_EDTECH</div>
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: config.secondary_color }}></span>
                Inclusive Education
              </h4>
              <p className="text-xs opacity-70 leading-relaxed">
                Building TheraSpeech: An AI-powered AR system helping children speak better by merging physical books with a smart mobile application.
              </p>
            </div>

            {/* Module 03: The Sustainability Catalyst */}
            <div 
              className="p-5 rounded-xl border relative overflow-hidden transition-all duration-300 hover:translate-x-1"
              style={{ backgroundColor: `${config.surface_color}80`, ...borderStyle }}
            >
              <div className="absolute top-3 right-4 font-mono text-[9px] opacity-25 italic">03_CIVIC</div>
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#10b981" }}></span>
                Eco-System Innovator
              </h4>
              <p className="text-xs opacity-70 leading-relaxed">
                Mobilizing youth for environmental action through tech-driven low-carbon mobility and waste management solutions.
              </p>
            </div>

            {/* Live Compilation Metric */}
            <div 
              className="mt-2 p-3 rounded-lg border font-mono text-[10px] flex items-center justify-between opacity-60"
              style={{ 
                borderColor: `${config.text_color}11`,
                backgroundColor: 'transparent'
              }}
            >
              <span>Build Status: <span className="text-emerald-400">Stable</span></span>
              <span className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/20"></div>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}