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
        <a
          href="#"
          className="social-btn contact-btn"
          onClick={e => {
            e.preventDefault();
            window.location.href = 'mailto:' + ['spzappa.personal', 'gmail.com'].join('@');
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5v-8.217l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"/></svg>
          Contact
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
