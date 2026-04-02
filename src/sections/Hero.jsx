import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import { profile } from '../data/profile'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 84
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.55] mask-radial" />
      <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-6xl bg-gradient-to-r from-fuchsia-500/25 via-cyan-500/20 to-emerald-500/20 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 ring-1 ring-white/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for internships & junior roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-['Sora'] text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            {profile.name}
            <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 text-sm leading-7 text-zinc-300/85 sm:text-base"
          >
            {profile.objective}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button as="button" size="lg" onClick={() => scrollToId('projects')}>
              View Projects <Icon name="arrow-right" />
            </Button>
            <Button as="a" size="lg" variant="secondary" href="/resume.pdf">
              Download Resume <Icon name="download" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-10 grid grid-cols-1 gap-3 text-left sm:grid-cols-3"
          >
            {[
              { k: 'Focus', v: 'Product UI + UX flows' },
              { k: 'Strengths', v: 'Research • Prototyping • Visual design' },
              { k: 'Based in', v: 'Mumbai, India' },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
              >
                <p className="text-xs font-semibold tracking-wide text-zinc-200/80">
                  {item.k}
                </p>
                <p className="mt-1 text-sm text-white">{item.v}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

