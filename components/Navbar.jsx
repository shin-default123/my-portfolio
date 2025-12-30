export default function Navbar({ config }) {
  const navStyle = {
    backgroundColor: `${config.surface_color}cc`,
    borderBottom: `1px solid ${config.primary_color}33`,
  }

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={navStyle}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">
          Sheen Milger Ochavo
        </div>
        <div className="flex gap-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  )
}