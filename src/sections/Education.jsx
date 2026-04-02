import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { profile } from '../data/profile'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="EDUCATION"
          title="Strong foundations, consistent growth"
          description="A clean timeline layout with clear hierarchy."
        />

        <div className="mt-10 grid gap-6">
          {profile.education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.04}>
              <Card className="p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-['Sora'] text-lg font-semibold tracking-tight text-white">
                      {e.title}
                    </p>
                    <p className="mt-1 text-sm text-zinc-200/80">
                      <span className="font-medium text-white/90">{e.org}</span>
                      <span className="text-zinc-400"> · </span>
                      {e.location}
                    </p>
                    {e.score ? (
                      <p className="mt-2 text-sm text-zinc-200/75">{e.score}</p>
                    ) : null}
                  </div>
                  <p className="text-sm font-medium text-zinc-300/80">{e.period}</p>
                </div>

                {e.highlights ? (
                  <div className="mt-4 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-sm leading-7 text-zinc-200/80">{e.highlights}</p>
                  </div>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

