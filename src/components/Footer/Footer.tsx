"use client"

import type React from "react"
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            <p>© 2025 Tadeo Parmigiani. {t("footer.rights")}.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
