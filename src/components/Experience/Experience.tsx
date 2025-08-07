import type React from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Experience.module.css"

const Experience: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("experience.title")}</h2>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelinePoint}></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.role}>{t("experience.role")}</h3>
                <span className={styles.date}>{t("experience.date")}</span>
              </div>
              <p className={styles.subtitle}>{t("experience.subtitle")}</p>
              <p className={styles.description}>{t("experience.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
