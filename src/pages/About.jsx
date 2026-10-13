import { useEffect } from 'react'
import { Download, Eye } from 'lucide-react'

const cvPath = '/assets/CV.pdf'

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
              <img src = "/images/Ratiloe.jpeg" alt="Ratiloe Lebogang"/>
            </div>
          </div>

          <div className="about-copy">
            <h2>Where Code Meets Creativity.</h2>
            <p>
              I&apos;m Ratiloe, a Full-Stack Developer and Multimedia Designer passionate about
              bringing together technology, creativity and problem-solving. My background in
              Multimedia Design has taught me to consider how people experience digital
              products, while my software development projects have allowed me to turn ideas
              into functional applications.
            </p>
            <p>
             I enjoy taking an idea from concept and design through to a working digital solution. 
             I actively participate in hackathons, tech events, workshops and developer communities,
              where I get to explore new technologies, collaborate with different people, solve real-world 
              problems and challenge myself outside the classroom. Every project and event is an opportunity 
              to learn something new and become a better developer. 
            </p>
            <p>
           My goal is to grow into a well-rounded Full-Stack Developer who combines strong technical 
           skills with a solid understanding of design, and user experience. I’m constantly looking 
           for opportunities to up skill, experiment, build meaningful projects and stay curious about 
           what’s next in technology.
            </p>
            <p> I am particularly interested in exploring how technology can create practical solutions in 
              industries such as mining, and other sectors where innovation can make a meaningful 
              difference. As I continue to grow both technically and creatively, I aim to contribute to projects 
              that are not only functional and visually engaging but also accessible, reliable and centred around 
              the needs of the people who use them. </p>
            <div className="hero-actions">
              <a className="button primary" href={cvPath} download>
                <Download size={18} /> Download CV
              </a>
              <a className="button secondary" href={cvPath} target="_blank" rel="noreferrer">
                <Eye size={18} /> View CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
