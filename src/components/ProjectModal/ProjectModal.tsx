"use client"

import { FiX } from "react-icons/fi"
import { useEffect } from "react"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "../ProjectModal/Project.module.css"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    fullDescription?: string
    fullDescription2?: string
    fullDescription3?: string
    fullDescription4?: string
    tech: string
    features?: string[]
    challenges?: string[]
    image: string
  }
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { t } = useLanguage()

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <div className={styles.modalImage}>
          <img src={project.image || "/placeholder.svg"} alt={project.title} />
        </div>

        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          
          <div className={styles.modalSection}>
            <h3>{t("projects.descriptionTitle")}</h3>
            <p>{project.fullDescription}</p>
            <p>{project.fullDescription2}</p>
            <p>{project.fullDescription3}</p>
            <p>{project.fullDescription4}</p>
          </div>

          {project.features && project.features.length > 0 && (
            <div className={styles.modalSection}>
              <h3>{t("projects.featuresTitle")}</h3>
              <ul className={styles.featureList}>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div className={styles.modalSection}>
              <h3>{t("projects.challengesTitle")}</h3>
              <ul className={styles.featureList}>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.modalSection}>
            <h3>{t("projects.technologiesTitle")}</h3>
            <div className={styles.techList}>
              {project.tech.split(", ").map((tech, index) => (
                <span key={index} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
