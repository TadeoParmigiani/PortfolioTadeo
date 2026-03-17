"use client"

import type React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Experience.module.css"

const Experience: React.FC = () => {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const experiences = [
    {
      id: 1,
      role: t("experience.experience1.role"),
      date: t("experience.experience1.date"),
      subtitle: t("experience.experience1.subtitle"),
      description: t("experience.experience1.description"),
    },
    {
      id: 2,
      role: t("experience.experience2.role"),
      date: t("experience.experience2.date"),
      subtitle: t("experience.experience2.subtitle"),
      description: t("experience.experience2.description"),
    },
  ]

  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.08 },
    },
  }

  const itemVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: smoothEase },
        },
      }

  const pointVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, scale: 1 },
        show: { opacity: 1, scale: 1 },
      }
    : {
        hidden: { opacity: 0, scale: 0.6 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1, ease: smoothEase },
        },
      }

  return (
    <motion.section
      id="experience"
      className={styles.experience}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={itemVariants}>
          {t("experience.title")}
        </motion.h2>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <motion.div key={exp.id} className={styles.timelineItem} variants={itemVariants}>
              <motion.div className={styles.timelinePoint} variants={pointVariants} />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <p className={styles.subtitle}>{exp.subtitle}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience
