import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Container } from '../components/Container'
import { Icon } from '../components/Icon'
import { sectionIds, sectionLabels } from '../lib/sections'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 84
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export function Navbar({ activeId }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto">
        <div className="bg-zinc-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/55">
          <div className="border-b border-white/10">
            <Container className="flex h-16 items-center justify-between">
              <button
                type="button"
                onClick={() => scrollToId('home')}
                className="group inline-flex items-center gap-3 rounded-xl px-2 py-1 text-left"
              >
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10 transition group-hover:bg-white/15">
                  <span className="font-['Sora'] text-sm font-semibold tracking-tight text-white">
                    S
                  </span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-white">Shreya</p>
                  <p className="-mt-0.5 text-xs text-zinc-300/70">UI/UX Designer</p>
                </div>
              </button>

              <nav className="hidden items-center gap-1 md:flex">
                {sectionIds.map((id) => {
                  const isActive = activeId === id
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => scrollToId(id)}
                      className={`relative rounded-xl px-3 py-2 text-xs font-medium transition ${
                        isActive ? 'text-white' : 'text-zinc-300/75 hover:text-white'
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="navActive"
                          className="absolute inset-0 -z-10 rounded-xl bg-white/10 ring-1 ring-white/10"
                          transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                        />
                      ) : null}
                      {sectionLabels[id]}
                    </button>
                  )
                })}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/10 transition hover:bg-white/15 md:hidden"
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  aria-expanded={open}
                >
                  <Icon name={open ? 'x' : 'menu'} />
                </button>
                <a
                  href="mailto:shreyamalipeddi26@gmail.com"
                  className="hidden rounded-xl bg-white/10 px-3 py-2 text-xs font-medium text-white ring-1 ring-white/10 transition hover:bg-white/15 sm:inline-flex"
                >
                  Contact
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex rounded-xl bg-white px-3 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-zinc-100"
                >
                  Download CV
                </a>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-auto md:hidden"
          >
            <div className="border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl">
              <Container className="py-4">
                <div className="grid gap-1">
                  {sectionIds.map((id) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        scrollToId(id)
                        setOpen(false)
                      }}
                      className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium ring-1 ring-white/10 transition ${
                        activeId === id
                          ? 'bg-white/10 text-white'
                          : 'bg-white/5 text-zinc-200/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {sectionLabels[id]}
                      <Icon name="arrow-right" className="opacity-70" />
                    </button>
                  ))}
                </div>
              </Container>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

