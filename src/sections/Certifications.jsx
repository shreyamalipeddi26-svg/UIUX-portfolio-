import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { profile } from '../data/profile'

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="CERTIFICATIONS"
          title="Credentials & wins"
          description="Compact, badge-like presentation that still feels premium."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {profile.certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.04}>
              <Card className="p-6">
                <p className="font-['Sora'] text-base font-semibold tracking-tight text-white">
                  {c.title}
                </p>
                {c.org ? (
                  <p className="mt-2 text-sm text-zinc-200/75">{c.org}</p>
                ) : (
                  <p className="mt-2 text-sm text-zinc-200/65">Certification</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Verified learning</Badge>
                  <Badge>Portfolio-ready</Badge>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

