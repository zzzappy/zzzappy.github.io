import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ReactTyped } from 'react-typed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="slide-fade-in">Sam Zappa</h1>
      <ReactTyped
        strings={['Comp Sci Student @ UW', 'Aspiring Software Engineer']}
        typeSpeed={40}
        backSpeed={50}
        backDelay={1200}
        loop
        className="ReactTyped-tech"
      />
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
        </a>
      </footer>
    </>
  )
}

export default App
