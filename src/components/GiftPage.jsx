"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const WHATSAPP_NUMBER = "919155150110" // 🔁 Replace with your WhatsApp number (with country code)

export default function GiftPage() {
  const [giftOpened, setGiftOpened] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)

  const openGift = () => {
    setGiftOpened(true)
    setTimeout(() => {
      setShowSurprise(true)
    }, 1200)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute top-40 md:top-20 left-8 text-2xl"
        animate={{ y: [0, -10, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎁
      </motion.div>

      <motion.div
        className="absolute md:top-32 right-10 text-xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      >
        ✨
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl text-pink-300 mb-16"
      >
        Ye khash tumhare ley... 💝
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {!giftOpened ? (
            <motion.div
              key="gift-box"
              exit={{ scale: 0, opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="cursor-pointer group relative"
              onClick={openGift}
            >
              <div className="absolute inset-0 w-56 h-56 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl scale-110"></div>

              <motion.img
                src="/gifs/gift.gif"
                alt="Gift"
                className="w-56 h-56 mx-auto relative z-10"
                animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <motion.p
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-pink-200 mt-6 text-xl"
              >
                Click to open..! 🎁✨
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="opened-gift"
              initial={{ scale: 0, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-12"
            >
              {/* Teddy GIF */}
              <div className="relative">
                <div className="absolute inset-0 w-64 h-64 mx-auto bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
                <img
                  src="/gifs/teddy-giving-flower.gif"
                  alt="Teddy"
                  className="w-52 mx-auto relative z-10"
                />
              </div>

              <AnimatePresence>
                {showSurprise && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-8 max-w-lg mx-auto"
                  >
                    {/* 💌 WhatsApp Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      onClick={() =>
                        window.open(
                          `https://wa.me/${WHATSAPP_NUMBER}?text=💖%20I%20saw%20your%20gift...`,
                          "_blank"
                        )
                      }
                      className="text-4xl mx-auto hover:scale-125 transition-transform duration-300"
                    >
                      💌
                    </motion.button>

                    {/* Message */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-2xl text-pink-300"
                    >
                      Ye Rose kabhi nhi murjhayega... 🌹
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-lg text-purple-200"
                    >
                      thik wyse hi jysa mera tumhare ley pyar hai.  
                      I promise ki tumhara khubsurat Dil phir kabhi nhi dukhaunga... 💖  
                      <br /><br />
                      Kudko kabhi akela mtt samjhna  
                      Ek bandar hai tumhare pass hmesha...  
                      <br />
                      Efforts krley, abb intezar krunga... (shiddat se 💫)
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-xl text-pink-200"
                    >
                      Ritu...! 💕<br />
                      Plz tm aana jrur...
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
