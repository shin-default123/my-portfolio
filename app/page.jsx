'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const defaultConfig = {
  background_color: "#0f172a",
  surface_color: "#1e293b",
  text_color: "#f8fafc",
  primary_color: "#3b82f6",
  secondary_color: "#8b5cf6",
  font_family: "Inter, system-ui, -apple-system, sans-serif",
  font_size: 16,
  name: "Sheen Milger Ochavo",
  tagline: "AI/ML & Full-Stack Developer",
  about_heading: "About Me",
  about_text: "I'm a passionate computer science student with a focus on full-stack development and machine learning. I love building innovative solutions that solve real-world problems and constantly learning new technologies.An ambitious and solution-driven Computer Science student, I combine technical expertise with a passion for social and environmental initiatives. With hands-on experience in project management, software development, and community engagement, I successfully led and contributed to projects that promote sustainable development and eco-friendly practices.",
  projects_heading: "Featured Projects",
  experience_heading: "Work Experience",
  skills_heading: "Technical Skills",
  contact_heading: "Let's Connect",
  contact_text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
}

export default function Home() {
  const [config, setConfig] = useState(defaultConfig)

  useEffect(() => {
    // Apply CSS variables
    document.documentElement.style.setProperty('--primary-color', config.primary_color)
    document.documentElement.style.setProperty('--secondary-color', config.secondary_color)
    document.documentElement.style.fontFamily = config.font_family
    document.documentElement.style.fontSize = `${config.font_size}px`
  }, [config])

  const updateConfig = (updates) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }

  return (
    <main 
      className="w-full min-h-screen overflow-auto"
      style={{ 
        backgroundColor: config.background_color,
        color: config.text_color,
        fontFamily: config.font_family,
        fontSize: `${config.font_size}px`
      }}
    >
      <div className="code-symbol top-[10%] left-[10%]">&lt;/&gt;</div>
      <div className="code-symbol bottom-[10%] right-[10%]">{'{}'}</div>
      
      <Navbar config={config} />
      <Hero config={config} updateConfig={updateConfig} />
      <About config={config} updateConfig={updateConfig} />
      <Projects config={config} updateConfig={updateConfig} />
      <Experience config={config} updateConfig={updateConfig} />
      <Skills config={config} updateConfig={updateConfig} />
      <Contact config={config} updateConfig={updateConfig} />
      <Footer config={config} />
    </main>
  )
}