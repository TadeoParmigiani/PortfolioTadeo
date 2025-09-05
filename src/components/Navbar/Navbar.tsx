"use client"

import type React from "react"
import { useState } from "react"
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"
import { useTheme } from "../../contexts/ThemeContext"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Navbar.module.css"

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>Portfolio</span>
        </div>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <button onClick={() => scrollToSection("home")}>{t("nav.home")}</button>
          <button onClick={() => scrollToSection("education")}>{t("nav.education")}</button>
          <button onClick={() => scrollToSection("projects")}>{t("nav.projects")}</button>
          <button onClick={() => scrollToSection("skills")}>{t("nav.skills")}</button>
          <button onClick={() => scrollToSection("experience")}>{t("nav.experience")}</button>
          <button onClick={() => scrollToSection("about")}>{t("nav.about")}</button>
        </div>

        <div className={styles.controls}>
          <button className={styles.langButton} onClick={() => setLanguage(language === "es" ? "en" : "es")}>
            {language.toUpperCase()}
          </button>

          <button className={styles.themeButton} onClick={toggleTheme}>
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
