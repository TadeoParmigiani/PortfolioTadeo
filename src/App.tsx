import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skill"
import Experience from "./components/Experience/Experience"
import Footer from "./components/Footer/Footer"
import Education from "./components/Education/Education"
import Certifications from "./components/Certifications/Certifications"
import "./App.css"

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <Education/>           
            <Projects />
            <Skills />
            <Experience />
            <Certifications/> 
            <About />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
