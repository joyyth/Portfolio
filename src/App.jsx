import "./App.css";
import Clock from "./components/Clock/Clock";
import CopyEmail from "./components/CopyEmail/CopyEmail";
import { contact, experience, identity, projects } from "./data/portfolio";

const GitHubIcon = () => <span className="icon icon-github" aria-hidden="true" />;

const LinkedInIcon = () => (
  <span className="icon icon-linkedin" aria-hidden="true" />
);

function Socials() {
  return (
    <nav className="socials" aria-label="Social profiles">
      <a
        href={contact.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
      >
        <GitHubIcon />
      </a>
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon />
      </a>
    </nav>
  );
}

function App() {
  return (
    <div className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="joy.dev — back to top">
          joy.dev
        </a>
        <div className="masthead-side">
          <Clock timeZone={identity.timeZone} location="Dhaka" />
          <Socials />
        </div>
      </header>

      <main id="top">
        <section className="identity" aria-labelledby="name">
          <h1 className="name" id="name">
            Tanvir Hassan Joy<span className="name-dot" aria-hidden="true">.</span>
          </h1>
          <p className="role">{identity.role}</p>
          <p className="intro">
            {identity.intro[0]} {identity.intro[1]}
          </p>
        </section>

        <section className="ledger" aria-labelledby="experience-label">
          <h2 className="section-label" id="experience-label">
            Experience
          </h2>
          <ol className="ledger-rows">
            {experience.map((entry) => (
              <li className="ledger-row" key={entry.id}>
                <span className="ledger-cell ledger-company">
                  {entry.url ? (
                    <a href={entry.url} target="_blank" rel="noreferrer">
                      {entry.company}
                    </a>
                  ) : (
                    entry.company
                  )}
                </span>
                <span className="ledger-cell ledger-role">{entry.role}</span>
                <span className="ledger-cell ledger-year">{entry.year}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="ledger projects" aria-labelledby="projects-label">
          <h2 className="section-label" id="projects-label">
            Selected Projects
          </h2>
          <ol className="ledger-rows">
            {projects.map((project) => (
              <li className="ledger-row" key={project.id}>
                <span className="ledger-cell ledger-company">
                  {project.title}
                </span>
                <span className="ledger-cell ledger-summary">
                  {project.summary}
                </span>
                <span className="ledger-cell ledger-year">
                  <a
                    className="ledger-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel}&nbsp;↗
                  </a>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" aria-labelledby="contact-label">
          <h2 className="section-label" id="contact-label">
            Contact
          </h2>
          <div className="contact-body">
            <CopyEmail email={contact.email} />
            <div className="contact-row">
              <a
                className="cv-link"
                href={contact.cv}
                target="_blank"
                rel="noreferrer"
              >
                Read my CV&nbsp;↗
              </a>
              <Socials />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
