import { useEffect, useState } from 'react'
import { Github, Linkedin } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  useEffect(() => {
    document.title = 'Contact | Ratiloe Lebogang'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contact Ratiloe Lebogang about graduate opportunities, collaboration and digital projects.'
      )
    }
  }, [])

  const validate = (values) => {
    const nextErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!values.name.trim()) nextErrors.name = 'Full name is required.'
    if (!values.email.trim()) nextErrors.email = 'Email address is required.'
    else if (!emailPattern.test(values.email)) nextErrors.email = 'Please enter a valid email address.'
    if (!values.subject.trim()) nextErrors.subject = 'Subject is required.'
    if (!values.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(formData)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please complete the required fields before submitting.')
      return
    }

    setStatus('This form has been validated and is ready to connect to a working backend or email service.')
    setFormData(initialForm)
  }

  return (
    <div className="page-shell contact-page">
      <section className="container section-block">
        <div className="section-heading narrow">
          <p className="eyebrow">CONTACT</p>
          <h1>Let’s Connect</h1>
          <p className="intro-text">
            I&apos;m interested in connecting with recruiters, developers and organisations exploring
            meaningful digital solutions. Feel free to reach out about graduate opportunities,
            collaboration or technology projects.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-info">
            <div className="info-item">
              <span>Email</span>
              <a href="mailto:mratwalebogang@gmail.com">mratwalebogang@gmail.com</a>
            </div>
            <div className="info-item">
              <span>Location</span>
              <p>Cape Town, South Africa.</p>
            </div>
            <div className="info-item">
              <span>LinkedIn</span>
              <a className="social-link" href="https://www.linkedin.com/in/RatiloeMbonani" target="_blank" rel="noreferrer">
                <Linkedin size={20} aria-hidden="true" />
                linkedin.com/in/RatiloeMbonani
              </a>
            </div>
            <div className="info-item">
              <span>GitHub</span>
              <a className="social-link" href="https://github.com/RatiloeMbonani" target="_blank" rel="noreferrer">
                <Github size={20} aria-hidden="true" />
                github.com/RatiloeMbonani
              </a>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field-group">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="button primary full-width">
              Send Message
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
