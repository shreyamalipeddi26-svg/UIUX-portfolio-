import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'
import { profile } from '../data/profile'

function ProjectCard({ p, i }) {
  return (
    <Reveal delay={i * 0.04}>
      <motion.a
        href="#contact"
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className="group block"
      >
        <Card className="overflow-hidden">
          <div className="relative aspect-[16/9] bg-white/5">
            <img
              src={p.preview}
              alt={`${p.title} preview`}
              className="h-full w-full object-cover opacity-95 transition duration-300 group-hover:opacity-100"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-70" />
          </div>
          <div className="p-6">
            <p className="font-['Sora'] text-lg font-semibold tracking-tight text-white">
              {p.title}
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-200/80">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85">
              Request full case study
              <span className="transition group-hover:translate-x-0.5">→</span>
            </div>
          </div>
        </Card>
      </motion.a>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="PROJECTS"
          title="Case-study ready UI/UX work"
          description="Card-based project highlights with modern hover states and polished motion."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {profile.projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}

