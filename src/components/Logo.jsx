export function Logo({ className = 'h-10 w-10', variant = 'top' }) {
  const src = variant === 'footer' ? '/photos/logo-footer.png' : '/photos/logo-top.png'
  return (
    <img
      src={src}
      alt="Pushpa School Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
