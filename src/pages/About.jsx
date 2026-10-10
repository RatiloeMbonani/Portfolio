import { useEffect } from 'react'
import { GraduationCap, Rocket } from 'lucide-react'

function About() {
  useEffect(() => {
    document.title = 'About | Ratiloe Lebogang'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Learn more about Ratiloe Lebogang, a Full-Stack Developer and Multimedia Designer combining creativity, code and problem-solving.'
      )
    }
  }, [])

  return (
    <div className="page-shell about-page">
      <section className="container section-block">
        <div className="section-heading">
          <p className="eyebrow">ABOUT ME</p>
          
        </div>

        <div className="about-grid">
          <div className="visual-card" aria-label="About visual card">
            <div className="visual-panel">
              <span className="visual-label">Ratiloe</span>
            </div>
          </div>

          <div className="about-copy">
            <h2>Combining creativity, technology and problem-solving.</h2>
            <p>
              I&apos;m Ratiloe, a Full-Stack Developer and Multimedia Designer passionate about
              bringing together technology, creativity and problem-solving. My background in
              Multimedia Design has taught me to consider how people experience digital
              products, while my software development projects have allowed me to turn ideas
              into functional applications.
            </p>
            <p>
              I enjoy developing solutions that are visually engaging, functional, responsive
              and user-centred. Through academic projects, hackathons and personal projects,
              I continue to strengthen my technical skills and explore practical approaches to
              solving problems.
            </p>
            <p>
              My career goal is to grow as a Full-Stack Developer, with a particular interest
              in the mining and mining-technology industry and how digital solutions can
              improve processes, efficiency and access to information.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
