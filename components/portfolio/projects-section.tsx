import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function ProjectsSection() {
  return (
    <section id="karya" className="scroll-mt-20 bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Karya Pilihan" title="Proyek yang saya banggakan" />

        <ul className="mt-14 flex flex-col gap-16">
          {projects.map((project, index) => (
            <li key={project.title}>
              <a
                href={project.href}
                {...(project.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`Pratinjau proyek ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-4xl tracking-tight text-balance md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-2 font-medium">
                    <span className="border-b border-foreground/30 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                      Lihat studi kasus
                    </span>
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
