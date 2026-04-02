import { Container } from '../components/Container'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-300/70">
          © {year} Shreya Malipeddi. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="text-sm text-zinc-300/70 transition hover:text-white"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-sm text-zinc-300/70 transition hover:text-white"
            href="/resume.pdf"
          >
            Resume
          </a>
          <a
            className="text-sm text-zinc-300/70 transition hover:text-white"
            href="mailto:shreyamalipeddi26@gmail.com"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  )
}

