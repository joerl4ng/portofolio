export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="font-serif text-4xl tracking-tight text-balance md:text-6xl">{title}</h2>
    </div>
  )
}
