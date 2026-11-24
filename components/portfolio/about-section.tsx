import { experiences, skills } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function AboutSection() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Tentang Saya"
            title="Belajar, berkembang, dan membangun melalui teknologi"
          />
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Saya adalah mahasiswa Rekayasa Keamanan Siber yang memiliki ketertarikan pada
            pengembangan aplikasi dan keamanan teknologi. Saya senang mempelajari bagaimana sebuah
            aplikasi dibangun, bagaimana sistem bekerja, serta bagaimana keamanan dapat diterapkan
            di dalamnya.
          </p>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Melalui berbagai project perkuliahan dan praktikum, saya terus mengembangkan kemampuan
            dalam Android development, web development, software testing, dan digital forensics.
            Bagi saya, setiap project merupakan kesempatan untuk mencoba hal baru, memahami
            tantangan, dan mengembangkan kemampuan menjadi lebih baik.
          </p>

          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Keahlian">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Pengalaman
          </h3>
          <ol className="flex flex-col">
            {experiences.map((exp) => (
              <li
                key={exp.company}
                className="flex flex-col gap-1 border-t border-border py-6 last:border-b sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-serif text-2xl">{exp.role}</p>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
