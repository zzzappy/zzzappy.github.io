import './App.css'
import { ReactTyped } from 'react-typed'

function App() {
  return (
    <>
      <h1 className="slide-fade-in">Sam Zappa</h1>
      <ReactTyped
        strings={['CS Student @ U of Washington', 'Aspiring Software Engineer']}
        typeSpeed={40}
        backSpeed={50}
        backDelay={1200}
        loop
        className="tech-font"
      />
      <div className="social-links tech-font">
        <a href="https://www.linkedin.com/in/sam-zappa-237922276/" target="_blank" rel="noopener" className="social-btn linkedin-btn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" /> LinkedIn
        </a>
        <a href="https://github.com/zzzappy" target="_blank" rel="noopener" className="social-btn github-btn">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="github-mark-white" /> GitHub
        </a>
      </div>
      <footer className="footer-badges">
        Made with
        <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
        </a>,
        <a href="https://github.com/facebook/react" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
        </a>,
        <a href="https://github.com/microsoft/TypeScript" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
        </a>, 
        <a href="https://pages.github.com" target="_blank" rel="noopener">
          <img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" />
        </a>
      </footer>
    </>
  )
}

export default App
