function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className={`project-image${project.id === 'digital-stacked-brand-guide' ? ' project-image--wide' : ''}`}
      />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a className="button secondary" href={project.link} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
