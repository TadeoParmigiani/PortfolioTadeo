"use client"

import type React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { FiMapPin, FiExternalLink } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Education.module.css"

const Education: React.FC = () => {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const educationData = [
    {
      id: 1,
      title: t("education.degree1.title"),
      institution: t("education.degree1.institution"),
      period: t("education.degree1.period"),
      status: t("education.degree1.status"),
      location: t("education.location"),
    },
    {
      id: 2,
      title: t("education.degree2.title"),
      institution: t("education.degree2.institution"),
      period: t("education.degree2.period"),
      status: t("education.degree2.status"),
      info: t("education.degree2.info"),
      location: t("education.location"),
    },
  ]

  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  }

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

  return (
<motion.section
  id="education"
  className={styles.education}
  variants={sectionVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
>
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={itemVariants}>
          {t("education.title")}
        </motion.h2>

        <motion.div className={styles.timeline} variants={sectionVariants}>
          <div className={styles.timelineLine}></div>

          {educationData.map((edu, index) => (
            <motion.div key={edu.id} className={styles.timelineItem} variants={itemVariants}>
              <div className={styles.timelinePoint}></div>

              <div className={styles.educationCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.period}>{edu.period}</div>
                  <div className={styles.statusBadge}>
                    {edu.status === "completed" ? t("education.completed") : t("education.inProgress")}
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.degreeTitle}>{edu.title}</h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  {edu.info ? <p className={styles.info}>{edu.info}</p> : null}

                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <FiMapPin className={styles.metaIcon} />
                      <span>{edu.location}</span>
                    </div>

                    {index === 0 && (
                      <a
                        href="./titulos/parmigianiTitulo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.titleButton}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Education
