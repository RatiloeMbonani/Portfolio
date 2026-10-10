function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-body">
        <span className="project-category">{project.category}</span>
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
