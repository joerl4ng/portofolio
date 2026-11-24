import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function ContactSection() {
  const contacts = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    ...profile.socials.map((social) => ({
      label: social.label,
      value: social.href.replace(/^https?:\/\/(www\.)?/, ''),
      href: social.href,
    })),
  ]

  return (
    <section id="kontak" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Kontak</p>
          <h2 className="font-serif text-4xl tracking-tight text-balance md:text-6xl">
            Mari terhubung
          </h2>
        </div>

        <ul className="flex flex-col">
          {contacts.map((contact) => {
            const isExternal = contact.href.startsWith('http')
            return (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center justify-between gap-4 border-t border-border py-6 transition-colors hover:text-accent"
                >
                  <span className="font-serif text-3xl md:text-4xl">{contact.label}</span>
                  <span className="flex items-center gap-3 text-sm text-muted-foreground transition-colors group-hover:text-accent md:text-base">
                    <span className="hidden truncate sm:inline">{contact.value}</span>
                    <ArrowUpRight
                      className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
