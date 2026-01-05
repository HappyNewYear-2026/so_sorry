"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function GiftPage() {
  const [giftOpened, setGiftOpened] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)
  const [showReplyBtn, setShowReplyBtn] = useState(false)

  const openGift = () => {
    setGiftOpened(true)

    // show message
    setTimeout(() => setShowSurprise(true), 1200)

    // show 💌 right after message
    setTimeout(() => setShowReplyBtn(true), 2500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl text-pink-300 mb-16"
      >
        Ye khash tumhare ley... 💝
      </motion.h2>

      <AnimatePresence mode="wait">
        {!giftOpened ? (
          <motion.div
            key="gift"
            onClick={openGift}
            className="cursor-pointer relative"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 w-56 h-56 bg-pink-400/30 rounded-full blur-2xl" />

            <motion.img
              src="/gifs/gift.gif"
              alt="Gift"
              className="w-56 h-56 relative z-10"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <p className="text-pink-200 mt-6 text-xl">
              Click to open..! 🎁✨
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            {/* Teddy */}
            <div className="relative">
              <div className="absolute inset-0 w-64 h-64 bg-pink-400/30 rounded-full blur-2xl" />
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
                  className="space-y-6 max-w-lg"
                >
                  <p className="text-2xl text-pink-300">
                    Ye Rose kabhi nhi murjhayega... 🌹
                  </p>

                  <p className="text-lg text-purple-200 leading-relaxed">
                    thik wyse hi jysa mera tumhare ley pyar hai.  
                    I promise ki tumhara khubsurat Dil phir kabhi nhi dukhaunga... 💖  
                    <br /><br />
                    Kudko kabhi akela mtt samjhna  
                    Ek bandar hai tumhare pass hmesha...  
                    <br />
                    (shiddat se 💫)
                  </p>

                  <p className="text-xl text-pink-200">
                    Ritu...! 💕
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💌 Reply Button */}
      {showReplyBtn && (
        <div
          className="fixed top-[73px] left-1/2 -translate-x-1/2 z-[999]"
          style={{ animation: "shootIn 2s ease forwards" }}
        >
          <a
            href="https://wa.me/919155150110"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              boxShadow:
                "0 0 8px rgba(255,255,255,0.6), 0 0 15px rgba(158,159,158,0.7)",
            }}
            className="inline-flex items-center px-3 py-2 rounded-full"
          >
            <span className="twinkle-emoji text-2xl">💌</span>
          </a>
        </div>
      )}

      {/* Global animations */}
      <style jsx global>{`
        @keyframes shootIn {
          30% {
            transform: translate(-300%, 100%) scale(1.1) rotate(180deg);
            opacity: 0;
          }
          60% {
            transform: translate(-50%, -30%) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) scale(3);
            opacity: 1;
          }
        }

        .twinkle-emoji {
          animation: twinkleEmoji 1.2s infinite alternate ease-in-out;
        }

        @keyframes twinkleEmoji {
          50% {
            transform: scale(1);
            filter: drop-shadow(0 0 2px #ec0606);
          }
          100% {
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px #e8ea40);
          }
        }
      `}</style>
    </div>
  )
}
