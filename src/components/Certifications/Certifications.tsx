"use client"

import type React from "react"
import { FiExternalLink, FiAward } from "react-icons/fi"
import { SiPython, SiHuawei } from "react-icons/si"
import { BiLogoAws } from "react-icons/bi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Certifications.module.css"

const Certifications: React.FC = () => {
  const { t } = useLanguage()

  const certifications = [
    {
      id: 1,
      title: t("certifications.cert1.title"),
      issuer: t("certifications.cert1.issuer"),
      date: t("certifications.cert1.date"),
      icon: <SiPython />,
      color: "#1456a0ff",
      url: "Diploma_CAC.pdf",
    },
    {
      id: 2,
      title: t("certifications.cert2.title"),
      issuer: t("certifications.cert2.issuer"),
      date: t("certifications.cert2.date"),
      icon: <BiLogoAws size={50} />,
      color: "#FF9900",
      url: "aws-cloud-practitioner.pdf",
    },
    {
      id: 3,
      title: t("certifications.cert3.title"),
      issuer: t("certifications.cert3.issuer"),
      date: t("certifications.cert3.date"),
      icon: <SiHuawei size={50} />,
      color: "#ff3c00",
      url: "#",
    },
    
  ]

  return (
    <section id="certifications" className={styles.certifications}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("certifications.title")}</h2>

        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => (
            <div key={cert.id} className={styles.certCard} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.certIcon} style={{ color: cert.color }}>
                {cert.icon}
              </div>

              <div className={styles.certContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <div className={styles.certMeta}>
                  <div className={styles.issuer}>
                    <FiAward className={styles.issuerIcon} />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className={styles.certFooter}>
                    <span className={styles.date}>{cert.date}</span>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.certButton}>
                      <FiExternalLink />
                    </a>
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

export default Certifications
