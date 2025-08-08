"use client"

import type React from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Projects.module.css"

const Projects: React.FC = () => {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      image: "/projectImg/image.png",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      tech: t("projects.project1.tech"),
      github: "https://github.com/TadeoParmigiani",
    },
    {
      id: 2,
      image: "/projectImg/stockorbit.png",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      tech: t("projects.project2.tech"),
      github: "https://github.com/TadeoParmigiani/OrbitStock",
      demo: "https://stockorbit.onrender.com",
    },
    {
      id: 3,
      image: "/projectImg/orbitpage.png",
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      tech: t("projects.project3.tech"),
      github: "https://github.com/TadeoParmigiani/Orbitpage",
      demo: "https://www.orbitdev.com.ar/",
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("projects.title")}</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                      {t("projects.viewCode")}
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                      {t("projects.liveDemo")}
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.split(", ").map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
