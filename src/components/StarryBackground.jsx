"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function StarryBackground() {
  const [stars, setStars] = useState([])
  resize();
  addEventListener("resize", resize);
  const shootingStars = [];
  class ShootingStar {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 0.4;
    this.length = Math.random() * 120 + 50;
    this.speed = Math.random() * 15 + 10;
    this.opacity = 1;
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
    this.opacity -= 0.02;
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.length, this.y - this.length);
    ctx.strokeStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 20;
    ctx.shadowColor = "white";
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
}
  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-pink-200 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
          }}
          
          
        />
      ))}
    </div>
  )
}
