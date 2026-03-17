"use client"

import type React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import TypingEffect from "../TypingEffect/TypingEffect"
import styles from "./Hero.module.css"

const Hero: React.FC = () => {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const itemVariants: Variants = reduceMotion
? {
hidden: { opacity: 1, y: 0 },
show: { opacity: 1, y: 0 },
}
: {
hidden: { opacity: 0, y: 24 },
show: {
opacity: 1,
y: 0,
transition: {
duration: 2,
ease: smoothEase,
},
},
}

const imageVariants: Variants = reduceMotion
? {
hidden: { opacity: 1, scale: 1 },
show: { opacity: 1, scale: 1 },
}
: {
hidden: { opacity: 0, scale: 0.94 },
show: {
opacity: 1,
scale: 1,
transition: {
duration: 1,
ease: smoothEase,
},
},
}


  return (
    <motion.section
      id="home"
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div className={styles.textContent} variants={containerVariants}>
            <motion.h1 className={styles.name} variants={itemVariants}>
              Tadeo Parmigiani
            </motion.h1>

            <motion.div className={styles.animatedSubtitleWrapper} variants={itemVariants}>
              <TypingEffect text={t("hero.typingSubtitle")} />
            </motion.div>

            <motion.p className={styles.location} variants={itemVariants}>
              Rosario Santa Fe, Argentina
            </motion.p>

            <motion.p className={styles.description} variants={itemVariants}>
              {t("hero.subtitle")}
            </motion.p>

            <motion.div className={styles.buttons} variants={itemVariants}>
              <a
                href="/TadeoParmigianiCV.pdf"
                download="TadeoParmigianiCV.pdf"
                className={styles.primaryButton}
              >
                <FiDownload />
                {t("hero.downloadCV")}
              </a>

              <button className={styles.secondaryButton} onClick={scrollToProjects}>
                {t("hero.viewProjects")}
                <motion.span
                  animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
                >
                  <FiArrowDown />
                </motion.span>
              </button>
            </motion.div>

            <motion.div className={styles.socialLinks} variants={itemVariants}>
              <a
                href="https://github.com/TadeoParmigiani"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <FiGithub />
                <span>Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tadeoparmigiani/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialButton}
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>

              <a href="mailto:TadeoParmi2001@gmail.com" className={styles.socialButton}>
                <FiMail />
                <span>TadeoParmi2001@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageContent} variants={imageVariants}>
            <motion.div
              className={styles.imageContainer}
              whileHover={reduceMotion ? undefined : { scale: 1.03, rotate: -0.7 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <img
                src="https://i.pinimg.com/originals/5d/45/0c/5d450cd11bc125fe8bd2e0214110fb36.gif"
                alt="Developer"
                className={styles.heroImage}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
