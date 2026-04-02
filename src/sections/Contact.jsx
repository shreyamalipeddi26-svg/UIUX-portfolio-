import { useMemo, useState } from 'react'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { profile } from '../data/profile'

function buildMailto({ to, name, email, message }) {
  const subject = `Portfolio inquiry — ${name || 'Hello'}`
  const body = [`Name: ${name || '-'}`, `Email: ${email || '-'}`, '', message || ''].join(
    '\n',
  )
  const params = new URLSearchParams({ subject, body })
  return `mailto:${to}?${params.toString()}`
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const mailto = useMemo(
    () => buildMailto({ to: profile.contact.email, ...form }),
    [form],
  )

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s build something clean and usable"
          description="Fastest way to reach me is email. The form below opens your mail app (static)."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Card className="p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70">
                DETAILS
              </p>
              <div className="mt-4 space-y-4">
                <a
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10 transition hover:bg-white/10"
                  href={`mailto:${profile.contact.email}`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <Icon name="mail" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-200/80">Email</p>
                    <p className="text-sm font-medium text-white">{profile.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-200/80">Location</p>
                    <p className="text-sm font-medium text-white">
                      {profile.contact.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-zinc-200/80">Phone</p>
                    <p className="text-sm font-medium text-white">{profile.contact.phone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-cyan-500/10 to-emerald-500/10 p-5 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-white">Recruiter note</p>
                <p className="mt-2 text-sm leading-7 text-zinc-200/75">
                  Ask for full case studies, prototypes, or a walkthrough—happy to share.
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <Card className="p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70">
                MESSAGE
              </p>
              <form
                className="mt-4 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = mailto
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-zinc-200/80">Name</span>
                    <input
                      className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold text-zinc-200/80">Email</span>
                    <input
                      className="h-11 rounded-xl bg-white/5 px-3 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-xs font-semibold text-zinc-200/80">Message</span>
                  <textarea
                    rows={6}
                    className="rounded-xl bg-white/5 px-3 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-300/60"
                    placeholder="Share role details, timeline, or what you’d like to see…"
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-zinc-300/70">
                    This is a static site. Clicking send opens your mail app.
                  </p>
                  <Button as="button" type="submit" size="lg">
                    Send message <Icon name="arrow-right" />
                  </Button>
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

