"use client"

import type React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { FiExternalLink, FiAward, FiGlobe } from "react-icons/fi"
import { SiPython, SiCisco } from "react-icons/si"
import { BiLogoAws } from "react-icons/bi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Certifications.module.css"

const Certifications: React.FC = () => {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const certifications = [
    {
      id: 3,
      title: t("certifications.cert3.title"),
      issuer: t("certifications.cert3.issuer"),
      date: t("certifications.cert3.date"),
      icon: <SiCisco size={50} />,
      color: "#4d95cf",
      url: "#",
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
      id: 4,
      title: t("certifications.cert4.title"),
      issuer: t("certifications.cert4.issuer"),
      date: t("certifications.cert4.date"),
      icon: <FiGlobe size={50} />,
      color: "#2557b4",
      url: "https://www.instagram.com/eclanguagesolutions/?hl=es",
    },
    {
      id: 1,
      title: t("certifications.cert1.title"),
      issuer: t("certifications.cert1.issuer"),
      date: t("certifications.cert1.date"),
      icon: <SiPython />,
      color: "#1456a0ff",
      url: "Diploma_CAC.pdf",
    },
  ]

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
          transition: { duration: 1, ease: smoothEase },
        },
      }

  const cardVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 18 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 4,
            delay: index * 0.3,
            ease: smoothEase,
          },
        }),
      }

  return (
    <motion.section
      id="certifications"
      className={styles.certifications}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={titleVariants}>
          {t("certifications.title")}
        </motion.h2>

        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={styles.certCard}
              variants={cardVariants}
              custom={index}
            >
              <motion.div
                className={styles.certIcon}
                style={{ color: cert.color }}
                whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {cert.icon}
              </motion.div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Certifications
