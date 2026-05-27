export default function Hero({ config }) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6 relative">
      <div className="max-w-6xl w-full grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Visual Identification */}
        <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="w-44 h-44 rounded-2xl mb-6 overflow-hidden shadow-2xl border-2 transform rotate-3 hover:rotate-0 transition-transform duration-300"
            style={{ borderColor: config.primary_color }}
          >
            <img 
              src="/me.jpg" 
              alt={config.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 
            className="font-black tracking-tight mb-3"
            style={{ fontSize: `${config.font_size * 3.5}px`, lineHeight: 1.1 }}
          >
            {config.name}
          </h1>
          <p 
            className="mb-8 font-medium tracking-wide opacity-90"
            style={{ 
              fontSize: `${config.font_size * 1.35}px`,
              color: config.primary_color 
            }}
          >
            {config.tagline}
          </p>
          <a 
            href="#projects" 
            className="px-8 py-3.5 rounded-xl font-bold tracking-wide transition-all shadow-lg hover:translate-y-[-2px] active:translate-y-0"
            style={{ 
              backgroundColor: config.primary_color, 
              color: config.background_color 
            }}
          >
            Explore Systems
          </a>
        </div>

        {/* Right Column: Creative IDE/Terminal Window Mockup */}
        <div className="md:col-span-7 hidden md:block">
          <div 
            className="rounded-xl border shadow-2xl font-mono text-xs overflow-hidden"
            style={{ 
              backgroundColor: config.surface_color,
              borderColor: `${config.primary_color}33` 
            }}
          >
            {/* Window Header */}
            <div className="px-4 py-3 flex items-center justify-between border-b bg-black/20" style={{ borderColor: `${config.primary_color}22` }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="opacity-50 text-[10px]">sheen_developer_profile.py</span>
              <div className="w-10" />
            </div>
            {/* Terminal Body */}
            <div className="p-6 space-y-2 opacity-95 leading-relaxed text-slate-300">
              <p><span className="text-purple-400">import</span> developer_profile <span className="text-purple-400">as</span> sheen</p>
              <br />
              <p className="text-emerald-400"># Engineering multi-stack & community frameworks</p>
              <p>capabilities = [</p>
              <p className="pl-4"><span className="text-amber-300">"Computer Vision (YOLOv8)"</span>,</p>
              <p className="pl-4"><span className="text-amber-300">"Augmented Reality Systems"</span>,</p>
              <p className="pl-4"><span className="text-amber-300">"Sustainable Campus Logistics Mobility"</span></p>
              <p>]</p>
              <br />
              <p>status = sheen.get_current_focus()</p>
<p>print(<span className="text-cyan-400">{'f"Active State: {status}"'}</span>)</p>
              <p className="text-gray-500">&gt;&gt; Active State: Building tools for accessibility & green computing.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}