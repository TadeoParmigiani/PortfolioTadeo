"use client"

import type React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { FiUser, FiBook, FiHeart } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./About.module.css"

const About: React.FC = () => {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.08,
      },
    },
  }

  const titleVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: smoothEase },
        },
      }

  const textVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        show: { opacity: 1, x: 0 },
      }
    : {
        hidden: { opacity: 0, x: -26 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 2, ease: smoothEase },
        },
      }

  const imageVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0, scale: 1 },
        show: { opacity: 1, x: 0, scale: 1 },
      }
    : {
        hidden: { opacity: 0, x: 26, scale: 0.96 },
        show: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 2, ease: smoothEase },
        },
      }

  const paragraphVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 14 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
            delay: index * 0.08,
            ease: smoothEase,
          },
        }),
      }

  const highlightVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        show: { opacity: 1, x: 0 },
      }
    : {
        hidden: { opacity: 0, x: -12 },
        show: (index: number) => ({
          opacity: 1,
          x: 0,
          transition: {
            duration: 3,
            delay: 1 + index * 0.08,
            ease: smoothEase,
          },
        }),
      }

  const paragraphs = t("about.description").split("\n\n")

  return (
    <motion.section
      id="about"
      className={styles.about}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={titleVariants}>
          {t("about.title")}
        </motion.h2>

        <div className={styles.content}>
          <motion.div className={styles.textContent} variants={textVariants}>
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className={styles.description}
                variants={paragraphVariants}
                custom={index}
              >
                {paragraph}
              </motion.p>
            ))}

            <div className={styles.highlights}>
              <motion.div
                className={styles.highlight}
                variants={highlightVariants}
                custom={0}
              >
                <FiBook className={styles.icon} />
                <span>{t("about.education")}</span>
              </motion.div>

              <motion.div
                className={styles.highlight}
                variants={highlightVariants}
                custom={1}
              >
                <FiHeart className={styles.icon} />
                <span>{t("about.passion")}</span>
              </motion.div>

              <motion.div
                className={styles.highlight}
                variants={highlightVariants}
                custom={2}
              >
                <FiUser className={styles.icon} />
                <span>{t("about.focus")}</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className={styles.imageContent} variants={imageVariants}>
            <motion.div
              className={styles.imageContainer}
              whileHover={reduceMotion ? undefined : { scale: 1.03, rotate: -0.6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <img src="/FOTOCV.jpg" alt="About me" className={styles.aboutImage} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
