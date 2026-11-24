import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} ${profile.name}. Hak cipta dilindungi.`}
        </p>
        <ul className="flex flex-wrap gap-6 text-sm">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
