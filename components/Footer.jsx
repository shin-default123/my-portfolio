export default function Footer({ config }) {
  const footerStyle = {
    backgroundColor: config.surface_color,
    borderTop: `1px solid ${config.primary_color}33`,
    color: config.text_color,
  }

  return (
    <footer 
      id="footer" 
      className="py-8 text-center"
      style={footerStyle}
    >
      <p style={{ fontSize: `${config.font_size * 0.875}px` }}>
        © 2025 Sheen Milger Ochavo. All rights reserved.
      </p>
    </footer>
  )
}