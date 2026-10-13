import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    document.title = 'Projects | Ratiloe Lebogang'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Explore Ratiloe Lebogang’s selected projects spanning web development, multimedia design and digital problem solving.'
      )
    }
  }, [])

  useEffect(() => {
    if (selectedProject && !projects.some((project) => project.id === selectedProject.id)) {
      setSelectedProject(null)
    }
  }, [selectedProject])

  return (
    <div className="page-shell projects-page">
      <section className="container section-block">
        <div className="section-heading narrow">
          <p className="eyebrow">PROJECTS</p>
          <h1>My Projects</h1>
          <p className="intro-text">
            Explore selected projects that reflect my development journey, technical interests,
            design skills and approach to solving real-world problems through technology.
          </p>
        </div>

       

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className={`project-image${project.id === 'digital-stacked-brand-guide' ? ' project-image--wide' : ''}`}
              />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a className="button secondary" href={project.link} target="_blank" rel="noreferrer">
                    View Project <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedProject && (
          <div className="project-detail">
            <div className="detail-header">
              <h2>{selectedProject.title}</h2>
            </div>

            <div className="detail-grid">
              <div>
                <h3>The problem</h3>
                <p>{selectedProject.problem}</p>
              </div>
              <div>
                <h3>The solution</h3>
                <p>{selectedProject.solution}</p>
              </div>
              <div>
                <h3>My contribution</h3>
                <p>{selectedProject.contribution}</p>
              </div>
              <div>
                <h3>Technologies used</h3>
                <p>{selectedProject.technologies.join(', ')}</p>
              </div>
              <div>
                <h3>Lessons learned</h3>
                <p>{selectedProject.lessons}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Projects
