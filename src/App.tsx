import './App.css'
import CV from './CVData'

function Section({title, children}:{title:string, children:React.ReactNode}){
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>{CV.name}</h1>
        <p>
          <a href={`mailto:${CV.contact.email}`}>{CV.contact.email}</a> |{' '}
          <a href={CV.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </header>
      <main>
        <Section title="Summary">
          <p>{CV.summary}</p>
        </Section>
        <Section title="Education">
          <ul>
            {CV.education.map((e, i) => (
              <li key={i}>
                <strong>{e.degree}</strong>, {e.school} ({e.period})
                {e.details && (
                  <ul>
                    {e.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Experience">
          {CV.experience.map((exp, i) => (
            <div key={i} className="experience">
              <h3>{exp.title} - {exp.company}</h3>
              <span className="period">{exp.period}</span>
              <ul>
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
        <Section title="Projects">
          <ul>
            {CV.projects.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong> ({p.period})
                <ul>
                  {p.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Certifications">
          <ul>
            {CV.certifications.map((c, i) => (
              <li key={i}>{c.name} - {c.issuer} ({c.period})</li>
            ))}
          </ul>
        </Section>
        <Section title="Skills">
          <p>{CV.skills.join(', ')}</p>
        </Section>
      </main>
      <footer className="footer">&copy; {new Date().getFullYear()} {CV.name}</footer>
    </div>
  )
}

export default App
