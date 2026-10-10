import { useEffect } from 'react'
import { Code2, Database, Palette, Sparkles } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: [
      { name: 'HTML / CSS', strength: 'full' },
      { name: 'JavaScript / React', strength: 'high' },
      { name: 'Tailwind CSS', strength: 'medium' },
      { name: 'Vue.js', strength: 'medium' },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    items: [
      { name: 'Node.js', strength: 'high' },
      { name: 'Express.js', strength: 'medium' },
      { name: 'PHP', strength: 'medium' },
      { name: 'Laravel', strength: 'medium' },
    ],
  },
  {
    title: 'Design & Multimedia',
    icon: Palette,
    items: [
      { name: 'UI / UX Design', strength: 'high' },
      { name: 'Figma', strength: 'medium' },
      { name: 'Photo & Video Editing', strength: 'soft' },
      { name: 'Adobe InDesign & Illustrator', strength: 'high' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Sparkles,
    items: [
      { name: 'GitHub', strength: 'high' },
      { name: 'Git', strength: 'high' },
      { name: 'Visual Studio Code', strength: 'high' },
      { name: 'API Integration', strength: 'medium' },
    ],
  },
]

const strengthWidths = {
  full: '100%',
  high: '88%',
  medium: '72%',
  soft: '54%',
}

function Skills() {
  useEffect(() => {
    document.title = 'Skills | Ratiloe Lebogang'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore Ratiloe Lebogang’s technical skills in frontend development, backend development, database systems and multimedia design.'
      )
    }
  }, [])

  return (
    <div className="page-shell skills-page">
      <section className="container section-block">
        <div className="section-heading narrow">
          <p className="eyebrow">SKILLS</p>
          <h1>My Technical Skills</h1>
          <p className="intro-text">
            My skills combine software development, database fundamentals and multimedia design.
            I continue to strengthen these capabilities through academic work, personal projects
            and collaborative development.
          </p>
        </div>

        <div className="skills-showcase">
          <div className="skill-groups">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div key={title} className="skill-group">
                <div className="skill-group-header">
                  <div className="skill-group-title">
                    <span className="skill-group-icon">
                      <Icon size={18} />
                    </span>
                    <span>{title}</span>
                  </div>
                </div>

                <div className="skill-list">
                  {items.map(({ name, strength }) => (
                    <div key={name} className="skill-row">
                      <span className="skill-name">{name}</span>
                      <div className="skill-bar-track" aria-label={name}>
                        <span className="skill-bar" style={{ width: strengthWidths[strength] }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
