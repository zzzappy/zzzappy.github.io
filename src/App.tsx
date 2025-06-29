import './App.css'
import { ReactTyped } from 'react-typed'
import MailIcon from '@mui/icons-material/Mail';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function App() {
  return (
    <div className="main-content">
      {/* animating svg: https://maxwellito.github.io/vivus-instant/ */}
      <img
        src={`/name_animated_no_loop.svg?${Date.now()}`}
        alt="Sam Zappa"
        className="animated-name-img slide-fade-in"
      />
      <div className="purpose-statement">
        <div className="purpose-main">
          Computer Science student at the University of Washington Paul G. Allen School of Computer Science & Engineering. Motivated and passionate about software engineering, problem solving, and building impactful technology.
        </div>
        <div className="purpose-objective">
          Seeking internship or entry-level software engineering (or related) opportunities where I can apply my strong analytical and collaborative skills. Looking for a role where I can contribute to an organization's goals while gaining valuable life and work experience.
        </div>
      </div>
      <div className="social-links tech-font">
        <a href="https://www.linkedin.com/in/sam-zappa-237922276/" target="_blank" rel="noopener" className="social-btn linkedin-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" /> LinkedIn
        </a>
        <a href="https://github.com/zzzappy" target="_blank" rel="noopener" className="social-btn github-btn">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="github-mark-white" /> GitHub
        </a>
        <a
          href="#"
          className="social-btn contact-btn"
          onClick={e => {
            e.preventDefault();
            window.location.href = 'mailto:' + ['spzappa.personal', 'gmail.com'].join('@');
          }}
        >
          <MailIcon className="email-icon" />
          Contact
        </a>
        <a
          href="/Resume_SamZappa.pdf"
          download
          className="social-btn resume-btn"
          target="_blank"
          rel="noopener"
        >
          <PictureAsPdfIcon className="email-icon" />
          Resume
        </a>
      </div>
      <ReactTyped
        strings={['CS Student @ University of Washington', 'Aspiring Software Engineer']}
        typeSpeed={40}
        backSpeed={50}
        backDelay={1200}
        loop
        className="tech-font typed-subtitle"
      />
      <footer className="footer-badges">
        Site by Sam Zappa. Made with
        <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
        </a>
        <a href="https://github.com/facebook/react" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
        </a>
        <a href="https://github.com/microsoft/TypeScript" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
        </a>
        <a href="https://pages.github.com" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
        </a>
      </footer>
    </div>
  )
}

export default App
