const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.24A6.6 6.6 0 105.4 12 6.6 6.6 0 0012 5.4zm0 10.88A4.28 4.28 0 1116.28 12 4.28 4.28 0 0112 16.28zm6.85-11.13a1.54 1.54 0 11-1.54-1.54 1.54 1.54 0 011.54 1.54z" />
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <path d="M23.5 6.2a3 3 0 00-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 002.12-2.12A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6z" />
    ),
  },
]

export function SocialIcons({ className = 'flex gap-3' }) {
  return (
    <div className={className}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all hover:bg-gold-500 hover:text-white hover:-translate-y-0.5"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  )
}

export function SocialIconsLight({ className = 'flex gap-3' }) {
  return (
    <div className={className}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-all hover:bg-primary-700 hover:text-white hover:-translate-y-0.5"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  )
}
