import { useState } from 'react'

const projects = [
  {
    id: 1,
    image: "/bike.png", 
    title: "CSU Rent-A-Bike System v1.0",
    description: "Full-stack web-based application designed to modernize and streamline the bike rental process at Caraga State University (CSU) as part of the University Sustainable Mobility Program (USMP).",
    technologies: ["NextJS", "Supabase", "Clerk"],
    category: "sustainability",
    link: "https://github.com/shin-default123/CSU-Borrow-Bike"
  },
  {
    id: 2,
    image: "/micro.png",
    title: "Microplastics Screening Tool",
    description: "AI-Powered Water Quality Assessment Using Smartphone Imaging.",
    technologies: ["FastAPI", "NextJS", "YOLOv8"],
    category: "engineering",
    link: "https://github.com/shin-default123/microplastic_screening"
  },
  {
    id: 3,
    image: "/bisdak.png", 
    title: "Bisdak Compiler",
    description: "An Online Bisaya-based programming language compiler for arithmetic parsed.",
    technologies: ["Lex and Yacc", "API Routing", "NextJS"],
    category: "engineering",
    link: "https://github.com/shin-default123/Bisdak"
  },
  {
    id: 4,
    image: "/river.jpg",
    title: "The River News",
    description: "Youth-run reporting, seeking to inform and inspire in our corner of Mindanao and beyond.",
    technologies: ["NextJS", "Supabase", "Google Adsense"],
    category: "sustainability",
    link: "https://the-river-news.live/"
  },
  {
    id: 5,
    image: "/ecommerce.jpg",
    title: "Thrift Marias",
    description: "E-commerce demo webpage for a local thrift store in Facebook, featuring product listings and shopping functionality.",
    technologies: ["NextJS", "Supabase"],
    category: "engineering",
    link: "https://thrift-marias.vercel.app/"
  },
  {
    id: 6,
    image: "/csu.png",
    title: "CSU Bike Share Mobile App",
    description: "Official Bike-Sharing Platform for Caraga State University.",
    technologies: ["React", "Supabase", "Mapbox API", "Capacitor Geolocation"],
    category: "sustainability",
    link: "https://www.csubikeshare.app/"
  },
  {
    id: 7,
    image: "/TheraSpeech.png",
    title: "TheraSpeech",
    description: "A mobile application designed to assist children with speech delays, providing an interactive interface for communication and therapy exercises.",
    technologies: ["Unity", "C#", "Supabase", "Vuforia AR"],
    category: "engineering",
    link: "https://theraspeech-coral.vercel.app/"
  },
  {
    id: 8,
    image: "/aac.png",
    title: "Sulti: Bisaya AAC",
    description: "An AI-powered Augmentative and Alternative Communication (AAC) application designed to assist individuals with speech and language impairments using localized Bisaya voice synthesis and intelligent contextual responses.",
    technologies: ["Android Studio", "ElevenLabs", "Gemini API", "React"],
    category: "engineering",
  }
]

export default function Projects({ config }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl font-black mb-4 text-center tracking-tight"
          style={{ fontSize: `${config.font_size * 2.5}px` }}
        >
          {config.projects_heading}
        </h2>
        
        {/* Dynamic Category Filtering Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {['all', 'engineering', 'sustainability'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className="px-5 py-1.5 rounded-lg text-xs uppercase font-bold tracking-widest transition-all border"
              style={{
                backgroundColor: activeFilter === tab ? config.primary_color : 'transparent',
                borderColor: activeFilter === tab ? config.primary_color : `${config.text_color}33`,
                color: activeFilter === tab ? config.background_color : config.text_color
              }}
            >
              {tab === 'all' ? 'All Systems' : tab === 'engineering' ? 'Core Tech / AI' : 'Eco & Civic Impact'}
            </button>
          ))}
        </div>

        {/* Improved Project Cards Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-2"
              style={{ 
                backgroundColor: config.surface_color,
                borderColor: `${config.primary_color}1a`
              }}
            >
              <div className="w-full h-48 relative overflow-hidden bg-black/20">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
                  style={{ fontSize: `${config.font_size * 1.2}px`, color: config.text_color }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-5 text-sm leading-relaxed opacity-75 line-clamp-3"
                  style={{ fontSize: `${config.font_size * 0.9}px` }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono border"
                      style={{
                        backgroundColor: `${config.secondary_color}12`,
                        borderColor: `${config.secondary_color}33`,
                        color: config.secondary_color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}