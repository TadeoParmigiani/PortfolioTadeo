"use client"

import type React from "react"
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
  // SiMongodb,
  // SiPostgresql,
  SiMysql,
  SiGit,
  SiJira,
  // SiTrello,
  // SiDocker,
  // SiFigma,
} from "react-icons/si"
import { useLanguage } from "../../contexts/LanguageContext"
import styles from "./Skills.module.css"

const Skills: React.FC = () => {
  const { t } = useLanguage()

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
    // { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    // { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "Jira", icon: <SiJira />, color: "#0052CC" },
    // { name: "Trello", icon: <SiTrello />, color: "#829dc4ff" },
    // { name: "Docker", icon: <SiDocker />, color: "#7e8a94ff" },
    // { name: "VS Code", icon: <SiVisualstudiocode />, color: "#007ACC" },
    // { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("skills.title")}</h2>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.skillIcon} style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
