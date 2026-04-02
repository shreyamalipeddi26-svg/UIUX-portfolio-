import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { profile } from '../data/profile'

function DotRating({ level = 0, max = 5 }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${
            i < level ? 'bg-white/80' : 'bg-white/15'
          }`}
        />
      ))}
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="SKILLS"
          title="A balanced UI + UX toolkit"
          description="Design-first thinking, backed by practical implementation basics."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70">
                  DESIGN
                </p>
                <ul className="mt-4 space-y-2">
                  {profile.skills.design.map((s) => (
                    <li key={s} className="text-sm text-zinc-100/90">
                      <span className="mr-2 text-zinc-500">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70">
                  DEVELOPMENT
                </p>
                <ul className="mt-4 space-y-2">
                  {profile.skills.development.map((s) => (
                    <li key={s} className="text-sm text-zinc-100/90">
                      <span className="mr-2 text-zinc-500">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 sm:col-span-2">
                <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70">
                  OTHER
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {profile.skills.other.map((s) => (
                    <div key={s} className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                      <p className="text-sm text-zinc-100/90">{s}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-5">
            <Card className="p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70">
                LANGUAGES
              </p>
              <div className="mt-4 space-y-4">
                {profile.languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-white">{l.name}</p>
                    <DotRating level={l.level} />
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-emerald-500/10 p-5 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">What you can expect</p>
                <p className="mt-2 text-sm leading-7 text-zinc-200/75">
                  Clean hierarchy, readable typography, and a calm visual rhythm—plus prototypes
                  that communicate flow and intent.
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

