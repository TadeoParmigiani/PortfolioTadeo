"use client"

import type React from "react"
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import TypingEffect from "../TypingEffect/TypingEffect"
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.name}>Tadeo Parmigiani</h1>
            <div className={styles.animatedSubtitleWrapper}>
              <TypingEffect text={t("hero.typingSubtitle")} />
            </div>
            <p className={styles.location}>Rosario Santa Fe, Argentina</p>
            <p className={styles.description}>{t("hero.subtitle")}</p>
            <div className={styles.buttons}>
              <a
                href="./public/TadeoParmigianiCV.pdf"
                download="TadeoParmigianiCV.pdf"
                className={styles.primaryButton}
              >
                <FiDownload />
                {t("hero.downloadCV")}
              </a>
              <button className={styles.secondaryButton} onClick={scrollToProjects}>
                {t("hero.viewProjects")}
                <FiArrowDown />
              </button>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://github.com/TadeoParmigiani" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                <FiGithub />
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/tadeoparmigiani/" target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:TadeoParmi2001@gmail.com" className={styles.socialButton}>
                <FiMail />
                <span>TadeoParmi2001@gmail.com</span>
              </a>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className={styles.imageContainer}>
              <img src="https://i.pinimg.com/originals/5d/45/0c/5d450cd11bc125fe8bd2e0214110fb36.gif" alt="Developer" className={styles.heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
