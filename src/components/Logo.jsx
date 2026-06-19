export function Logo({ className = 'h-10 w-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#1e40af" />
      <path d="M32 12 L50 23 V41 L32 52 L14 41 V23 Z" fill="#f59e0b" />
      <path d="M32 20 L42 26.5 V37.5 L32 44 L22 37.5 V26.5 Z" fill="#ffffff" />
      <circle cx="32" cy="32" r="4" fill="#1e40af" />
    </svg>
  )
}
