import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const roles = [
  {
    role: 'Full-Stack Developer in Progress',
    focus: 'building digital solutions',
    status: 'currently growing, learning, upskilling',
  },
  {
    role: 'Hackathon Addict',
    focus: 'building ideas with a team',
    status: 'creating, collaborating, competing',
  },
  {
    role: 'ICT Student — Multimedia Design',
    focus: 'combining design and development',
    status: 'learning, designing, developing',
  },
  {
    role: 'Creative Problem Solver',
    focus: 'turning challenges into solutions',
    status: 'exploring, experimenting, improving',
  },
]

function Home() {
  const [activeRole, setActiveRole] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    document.title = 'Ratiloe Lebogang | Full-Stack Developer & Multimedia Designer'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Ratiloe Lebogang is a Full-Stack Developer and Multimedia Designer building digital solutions with creativity, problem-solving and user-centred design.'
      )
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const currentRole = roles[activeRole].role

    if (prefersReducedMotion) {
      setTypedRole(currentRole)
      return
    }

    setTypedRole('')
    let index = 0
    const interval = setInterval(() => {
      index += 1
      setTypedRole(currentRole.slice(0, index))

      if (index >= currentRole.length) {
        clearInterval(interval)
      }
    }, 35)

    return () => clearInterval(interval)
  }, [activeRole, prefersReducedMotion])

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return
    }

    const interval = setInterval(() => {
      setActiveRole((current) => (current + 1) % roles.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused, prefersReducedMotion])

  const currentRole = roles[activeRole]

  return (
    <div className="page-shell home-page">
      <section className="hero-section container">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL PORTFOLIO · 2026</p>

          <h1 className="hero-heading" aria-label="Hey, I’m Ratiloe Mbonani">
            Hey, I&apos;m <span className="hero-name">Ratiloe</span>
            <span className="hero-surname">Mbonani</span>
          </h1>

          <p className="professional-title">Full-Stack Developer &amp; Multimedia Designer</p>

          <p className="lead">
            A Full-Stack Developer and Multimedia Designer combining code, creativity and
            problem solving to build user-centred digital solutions. I&apos;m passionate about
            technology and exploring how software can solve real-world challenges.
          </p>

          <div className="hero-actions">
            <Link className="button primary" to="/projects">
          View My Work <ArrowRight size={18} />
           </Link>
            <Link className="button secondary" to="/contact ">
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="Professional profile summary">
          <div
            className="profile-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            tabIndex={0}
            aria-live="polite"
          >
            <div className="editor-toolbar" aria-hidden="true">
              <div className="traffic-lights">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="editor-title">welcome.js</span>
            </div>

            <div className="editor-content" aria-label="Profile code example">
              <div className="code-line comment">// welcome.js</div>
              <div className="code-line">
                <span className="keyword">const</span>
                <span className="variable"> ratiloe</span>
                <span className="punctuation"> =</span>
                <span className="punctuation"> &#123;</span>
              </div>
              <div className="code-line indent">
                <span className="property">role</span>
                <span className="punctuation">:</span>
                <span className="string"> &quot;{typedRole}</span>
                <span className="cursor" aria-hidden="true" />
                <span className="string">&quot;</span>
              </div>
              <div className="code-line indent">
                <span className="property">focus</span>
                <span className="punctuation">:</span>
                <span className="string"> &quot;{currentRole.focus}&quot;</span>
              </div>
              <div className="code-line indent">
                <span className="property">status</span>
                <span className="punctuation">:</span>
                <span className="string"> &quot;{currentRole.status}&quot;</span>
              </div>
              <div className="code-line">
                <span className="punctuation">&#125;</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
