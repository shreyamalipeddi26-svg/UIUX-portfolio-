import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="ABOUT"
          title="Designing clean interfaces that feel effortless"
          description="A recruiter-friendly summary built from the resume, presented like a modern product page."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Card className="p-6 sm:p-7">
              <p className="text-sm leading-7 text-zinc-200/85 sm:text-[15px]">
                {profile.objective}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.tools.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-5">
            <Card className="p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70">
                QUICK INFO
              </p>
              <div className="mt-4 grid gap-4">
                <div>
                  <p className="text-xs font-semibold text-zinc-200/80">Primary focus</p>
                  <p className="mt-1 text-sm text-white">UI systems • UX flows • Prototyping</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-200/80">Strengths</p>
                  <p className="mt-1 text-sm text-white">
                    Research mindset • Detail-oriented layouts • Clear hierarchy
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-200/80">Tools</p>
                  <p className="mt-1 text-sm text-white">{profile.tools.join(' • ')}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

