const projects = [
  {
    id: 1,
    image: "/bike.png", 
    title: "CSU Rent-A-Bike System v1.0",
    description: "Full-stack web-based application designed to modernize and streamline the bike rental process at Caraga State University (CSU) as part of the University Sustainable Mobility Program (USMP).",
    technologies: ["NextJS", "Supabase", "Clerk"],
    link: "https://github.com/shin-default123/CSU-Borrow-Bike"
  },
  {
    id: 2,
    image: "/micro.png",
    title: "Microplastics Screening Tool",
    description: "AI-Powered Water Quality Assessment Using Smartphone Imaging.",
    technologies: ["FastAPI", "NextJS", "YOLOv8"],
    link: "https://github.com/shin-default123/microplastic_screening"
  },
  {
    id: 3,
    image: "/bisdak.png", 
    title: "Bisdak Compiler",
    description: "An Online Bisaya-based programming language compiler for arithmetic parsed.",
    technologies: ["Lex and Yacc", "API Routing", "NextJS"],
    link: "https://github.com/shin-default123/Bisdak"
  },
  {
    id: 4,
    image: "/river.jpg",
    title: "The River News",
    description: "Youth-run reporting, seeking to inform and inspire in our corner of Mindanao and beyond.",
    technologies: ["NextJS", "Supabase", "Google Adsense"],
    link: "https://the-river-news.live/"
  },
  {
    id: 5,
    image: "/ecommerce.jpg",
    title: "Thrift Marias",
    description: "E-commerce demo webpage for a local thrift store in Facebook, featuring product listings and shopping functionality.",
    technologies: ["NextJS", "Supabase"],
    link: "https://thrift-marias.vercel.app/"
  },
    {
    id: 6,
    image: "/csu.png",
    title: "CSU Bike Share Mobile App",
    description: "Official Bike-Sharing Platform for Caraga State University.",
    technologies: ["React", "Supabase", "Mapbox API", "Capacitor-BG Geolocation API"],
    link: "https://www.csubikeshare.app/"
  },
      {
    id: 7,
    image: "/TheraSpeech.png",
    title: "TheraSpeech",
    description: "A mobile application designed to assist children with speech delays, providing a user-friendly interface for communication and therapy exercises.",
    technologies: ["Unity", "C#", "Supabase", "Mixamo Animations", "Vuforia AR", "Google Api", "Apple Xcode"],
    link: "https://www.csubikeshare.app/"
  }
]

export default function Projects({ config }) {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl font-bold mb-12 text-center"
          style={{ fontSize: `${config.font_size * 2.25}px` }}
        >
          {config.projects_heading}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: config.surface_color }}
            >
              {/* Replaced emoji div with image */}
              <div 
                className="w-full h-48 relative overflow-hidden"
                style={{ backgroundColor: `${config.primary_color}22` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ fontSize: `${config.font_size * 1.25}px` }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4"
                  style={{ fontSize: `${config.font_size}px` }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: `${config.secondary_color}33`,
                        color: config.secondary_color,
                        fontSize: `${config.font_size * 0.875}px`
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