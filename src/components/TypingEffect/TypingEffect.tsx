"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styles from "./TypingEffect.module.css"

interface TypingEffectProps {
  text: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenCycles?: number
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 120,
  deletingSpeed = 50,
  delayBetweenCycles = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTyping) {
      if (charIndex < text.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(charIndex))
          setCharIndex((prev) => prev + 1)
        }, typingSpeed)
      } else {
        timer = setTimeout(() => {
          setIsTyping(false)
        }, delayBetweenCycles)
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1))
          setCharIndex((prev) => prev - 1)
        }, deletingSpeed)
      } else {
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timer)
  }, [charIndex, isTyping, text, typingSpeed, deletingSpeed, delayBetweenCycles])

  return <span className={styles.typingEffect}>{displayedText}</span>
}

export default TypingEffect
