
import type React from "react"
import { FiUser, FiBook, FiHeart } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./About.module.css"

const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("about.title")}</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            {t("about.description")
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index} className={styles.description}>{paragraph}</p>
            ))}

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <FiBook className={styles.icon} />
                <span>{t("about.education")}</span>
              </div>
              <div className={styles.highlight}>
                <FiHeart className={styles.icon} />
                <span>{t("about.passion")}</span>
              </div>
              <div className={styles.highlight}>
                <FiUser className={styles.icon} />
                <span>{t("about.focus")}</span>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.imageContainer}>
              <img src="/FOTOCV.jpg" alt="About me" className={styles.aboutImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
