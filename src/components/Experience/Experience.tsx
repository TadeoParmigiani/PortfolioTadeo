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
                <h3 className={styles.role}>{t("experience.experience1.role")}</h3>
                <span className={styles.date}>{t("experience.experience1.date")}</span>
              </div>
              <p className={styles.subtitle}>{t("experience.experience1.subtitle")}</p>
              <p className={styles.description}>{t("experience.experience1.description")}</p>
            </div>
          </div>
        

        
          
            
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.role}>{t("experience.experience2.role")}</h3>
                <span className={styles.date}>{t("experience.experience2.date")}</span>
              </div>
              <p className={styles.subtitle}>{t("experience.experience2.subtitle")}</p>
              <p className={styles.description}>{t("experience.experience2.description")}</p>
            </div>
          </div>
        </div>
      
      
    </section>
  )
}

export default Experience
