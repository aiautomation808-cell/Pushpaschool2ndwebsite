/**
 * Reusable glassmorphism card with optional 3D tilt-on-hover.
 * variant: 'light' | 'dark' | 'gold'
 * tilt: boolean — enable mouse-tracking 3D tilt
 */
export function GlassCard({ children, className = '', variant = 'light', tilt = false, ...rest }) {
  const base = {
    light: 'glass',
    dark: 'glass-dark',
    gold: 'glass-gold',
  }[variant]

  if (!tilt) {
    return (
      <div className={`rounded-2xl ${base} ${className}`} {...rest}>
        {children}
      </div>
    )
  }

  return (
    <TiltCard className={`rounded-2xl ${base} ${className}`} {...rest}>
      {children}
    </TiltCard>
  )
}

function TiltCard({ children, className = '', ...rest }) {
  const handleMove = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`
  }
  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)'
  }
  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: 'preserve-3d' }}
      {...rest}
    >
      {children}
    </div>
  )
}
