"use client"

import type React from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGit,
  SiJira,
  SiPostman,
} from "react-icons/si"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Skills.module.css"

const Skills: React.FC = () => {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const skills = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#fdfdfdff" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Jira", icon: <SiJira />, color: "#0052CC" },
  ]

  const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.08 },
    },
  }

  const titleVariants: Variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: smoothEase },
        },
      }

  const cardVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0, scale: 1 },
        show: { opacity: 1, y: 0, scale: 1 },
      }
    : {
        hidden: { opacity: 0, y: 20, scale: 0.94 },
        show: (index: number) => ({
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 1.7,
            delay: index * 0.1,
            ease: smoothEase,
          },
        }),
      }

  return (
    <motion.section
      id="skills"
      className={styles.skills}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.30 }}
    >
      <div className={styles.container}>
        <motion.h2 className={styles.title} variants={titleVariants}>
          {t("skills.title")}
        </motion.h2>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillItem}
              variants={cardVariants}
              custom={index}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className={styles.skillIcon} style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
