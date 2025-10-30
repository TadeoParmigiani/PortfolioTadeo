"use client"

import type React from "react"
import { FiMapPin, FiExternalLink } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Education.module.css"

const Education: React.FC = () => {
  const { t } = useLanguage()

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

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("education.title")}</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineLine}></div>

          {educationData.map((edu, index) => (
            <div key={edu.id} className={styles.timelineItem} style={{ animationDelay: `${index * 0.2}s` }}>
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
                  <p className={styles.info}>{edu.info}</p>

                  <div className={styles.metaRow}>
                    <div className={styles.metaItem}>
                      <FiMapPin className={styles.metaIcon} />
                      <span>{edu.location}</span>
                    </div>

                    {index === 0 && (
                      <a href="./titulos/parmigianiTitulo.pdf" target="_blank" rel="noopener noreferrer" className={styles.titleButton}>
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
