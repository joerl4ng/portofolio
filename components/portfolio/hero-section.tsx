import Image from 'next/image'
import { ArrowDownRight, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24">
      <div className="grid items-end gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                Tersedia untuk proyek baru
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
            {profile.headline}
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            {profile.intro}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#karya"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Lihat Karya
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 font-medium transition-colors hover:bg-secondary"
            >
              Mari Berdiskusi
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
          <Image
            src={profile.portrait || '/placeholder.svg'}
            alt={`Foto ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
