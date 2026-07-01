import { useRef, useEffect, useState } from 'react'

/**
 * Stylized SVG principal character whose eyes follow the cursor.
 * Pure SVG + CSS — no 3D model dependency, fully responsive.
 */
export function PrincipalAvatar({ className = '' }) {
  const containerRef = useRef(null)
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
  const [headTilt, setHeadTilt] = useState({ rx: 0, ry: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const maxOffset = 4
      const norm = Math.min(dist / 300, 1)
      setEyeOffset({
        x: (dx / (dist || 1)) * maxOffset * norm,
        y: (dy / (dist || 1)) * maxOffset * norm,
      })
      setHeadTilt({
        rx: -(dy / (dist || 1)) * 3 * norm,
        ry: (dx / (dist || 1)) * 3 * norm,
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div ref={containerRef} className={`perspective-1000 ${className}`}>
      <div
        className="preserve-3d transition-transform duration-200 ease-out"
        style={{ transform: `rotateX(${headTilt.rx}deg) rotateY(${headTilt.ry}deg)` }}
      >
        <svg viewBox="0 0 300 360" className="w-full h-full drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Glow halo */}
          <ellipse cx="150" cy="180" rx="130" ry="160" fill="url(#haloGrad)" opacity="0.3" />

          {/* Shoulders / robe */}
          <path d="M60 340 Q60 280 100 260 L200 260 Q240 280 240 340 Z" fill="#224229" />
          <path d="M60 340 Q60 280 100 260 L200 260 Q240 280 240 340 Z" fill="url(#robeShine)" opacity="0.3" />
          {/* Collar */}
          <path d="M120 262 L150 285 L180 262" stroke="#DAA520" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Cross pin */}
          <rect x="146" y="270" width="8" height="8" rx="1" fill="#DAA520" />
          <rect x="148.5" y="266" width="3" height="16" rx="1" fill="#DAA520" />

          {/* Neck */}
          <rect x="135" y="240" width="30" height="30" rx="6" fill="#d4a78f" />
          <rect x="135" y="240" width="30" height="30" rx="6" fill="url(#neckShade)" opacity="0.2" />

          {/* Face */}
          <ellipse cx="150" cy="170" rx="65" ry="78" fill="#e8c4a8" />
          <ellipse cx="150" cy="170" rx="65" ry="78" fill="url(#faceShade)" opacity="0.15" />

          {/* Hair */}
          <path d="M85 160 Q80 100 150 88 Q220 100 215 160 Q215 130 200 120 Q180 100 150 100 Q120 100 100 120 Q85 130 85 160 Z" fill="#3a2a1a" />
          {/* Hair sides */}
          <path d="M85 160 Q82 180 88 200 L92 195 Q88 175 90 160 Z" fill="#3a2a1a" />
          <path d="M215 160 Q218 180 212 200 L208 195 Q212 175 210 160 Z" fill="#3a2a1a" />

          {/* Glasses frame */}
          <g stroke="#001F3F" strokeWidth="3" fill="none">
            <rect x="100" y="150" width="42" height="34" rx="8" />
            <rect x="158" y="150" width="42" height="34" rx="8" />
            <line x1="142" y1="165" x2="158" y2="165" />
            <line x1="100" y1="160" x2="85" y2="155" />
            <line x1="200" y1="160" x2="215" y2="155" />
          </g>

          {/* Left eye white */}
          <ellipse cx="121" cy="167" rx="14" ry="11" fill="white" />
          {/* Right eye white */}
          <ellipse cx="179" cy="167" rx="14" ry="11" fill="white" />

          {/* Left pupil (tracks cursor) */}
          <g style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`, transition: 'transform 0.15s ease-out' }}>
            <circle cx="121" cy="167" r="6" fill="#001F3F" />
            <circle cx="123" cy="165" r="2" fill="white" opacity="0.8" />
          </g>
          {/* Right pupil (tracks cursor) */}
          <g style={{ transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`, transition: 'transform 0.15s ease-out' }}>
            <circle cx="179" cy="167" r="6" fill="#001F3F" />
            <circle cx="181" cy="165" r="2" fill="white" opacity="0.8" />
          </g>

          {/* Eyebrows */}
          <path d="M102 142 Q121 134 140 142" stroke="#3a2a1a" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M160 142 Q179 134 198 142" stroke="#3a2a1a" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Nose */}
          <path d="M150 175 Q147 190 145 198 Q148 202 152 200 Q155 202 155 198" stroke="#c49a7a" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Smile */}
          <path d="M130 215 Q150 228 170 215" stroke="#8a5a3a" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Cheek blush */}
          <ellipse cx="108" cy="200" rx="10" ry="7" fill="#e8a090" opacity="0.3" />
          <ellipse cx="192" cy="200" rx="10" ry="7" fill="#e8a090" opacity="0.3" />

          {/* Ears */}
          <ellipse cx="86" cy="175" rx="8" ry="14" fill="#d4a78f" />
          <ellipse cx="214" cy="175" rx="8" ry="14" fill="#d4a78f" />

          {/* Gradients */}
          <defs>
            <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#DAA520" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#DAA520" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="robeShine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="faceShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="white" />
              <stop offset="100%" stopColor="#c49a7a" />
            </linearGradient>
            <linearGradient id="neckShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="#8a5a3a" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
