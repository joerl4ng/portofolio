'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '@/lib/portfolio-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-serif text-2xl tracking-tight">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Tutup menu' : 'Buka menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigasi seluler" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-2xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
