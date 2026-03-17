"use client"

import type React from "react"
import { useState } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { FiGithub, FiExternalLink, FiInfo } from "react-icons/fi"
import { useLanguage } from "../../contexts/LanguageContext"
import ProjectModal from "../ProjectModal/ProjectModal"
import styles from "./Projects.module.css"

const Projects: React.FC = () => {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 5,
      image: "/projectImg/b2p.png",
      title: t("projects.project5.title"),
      description: t("projects.project5.description"),
      tech: t("projects.project5.tech"),
      github: "https://github.com/TadeoParmigiani/B2-P_Page",
      demo: "https://b2-p-page.vercel.app/",
      hasDetails: true,
      fullDescription: t("projects.project5.fullDescription"),
      fullDescription2: t("projects.project5.fullDescription2"),
      fullDescription3: t("projects.project5.fullDescription3"),
      features: t("projects.project5.features"),
      challenges: t("projects.project5.challenges"),
      links: t("projects.project5.links"),
    },
    {
      id: 2,
      image: "/projectImg/stockorbit.png",
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      tech: t("projects.project2.tech"),
      github: "https://github.com/TadeoParmigiani/OrbitStock",
      demo: "https://stockorbit.onrender.com",
      hasDetails: false,
    },
    {
      id: 3,
      image: "/projectImg/orbitpage.png",
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      tech: t("projects.project3.tech"),
      github: "https://github.com/TadeoParmigiani/Orbitpage",
      demo: "https://www.orbitdev.com.ar/",
      hasDetails: false,
    },
    {
      id: 4,
      image: "/projectImg/oiat.png",
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      tech: t("projects.project4.tech"),
      github: "",
      demo: "",
      hasDetails: true,
      fullDescription: t("projects.project4.fullDescription"),
      fullDescription2: t("projects.project4.fullDescription2"),
      fullDescription3: t("projects.project4.fullDescription3"),
      fullDescription4: t("projects.project4.fullDescription4"),
      features: t("projects.project4.features"),
      challenges: t("projects.project4.challenges"),
    },
    {
      id: 1,
      image: "/projectImg/image.png",
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      tech: t("projects.project1.tech"),
      github: "https://github.com/TadeoParmigiani",
      hasDetails: false,
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
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: smoothEase,
          },
        },
      }

  const cardVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0, scale: 1 },
        show: { opacity: 1, y: 0, scale: 1 },
      }
    : {
        hidden: { opacity: 0, y: 28, scale: 0.98 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 3,
            delay: index * 0.2,
            ease: smoothEase,
          },
        }),
      }

  const handleOpenModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <motion.section
      id="projects"
      className={styles.projects}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={titleVariants}>
          {t("projects.title")}
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={cardVariants}
              custom={index}
            >
              <div className={styles.imageContainer}>
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.links}>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                        {t("projects.viewCode")}
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                        {t("projects.liveDemo")}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.split(", ").map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.hasDetails && (
                  <button
                    className={styles.infoButton}
                    onClick={() => handleOpenModal(project)}
                    aria-label="More information"
                  >
                    <FiInfo />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </motion.section>
  )
}

export default Projects
