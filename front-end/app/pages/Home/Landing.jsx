import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Scene from "@/app/components/scenes/MainScene";
import { Cinzel_Decorative } from "next/font/google";

const font = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// Hieroglyphic characters (Egyptian Unicode symbols)
const HIEROGLYPHS = ["𓀀", "𓀁", "𓀂", "𓀃", "𓀄", "𓀅", "𓀆", "𓀇"];

const Landing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1.2 },
    }),
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      ref={containerRef}
    >
      {/* Animated Sandstorm Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#d4a017] rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [`${Math.random() * 100}vw`, `${Math.random() * -100}vw`],
              y: [`${Math.random() * 100}vh`, `${Math.random() * -100}vh`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Hieroglyphics */}
      {isMounted &&
        HIEROGLYPHS.map((glyph, i) => (
          <motion.div
            key={i}
            className="absolute text-[#FFD70050] text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [`${Math.random() * -100}vh`, `${Math.random() * 100}vh`],
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {glyph}
          </motion.div>
        ))}

      {/* Animated Papyrus Scroll Effect */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#5e2c0433_50%,transparent_100%)]"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 3D Scene */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Scene scale={1.7} />
      </motion.div>

      {/* Text Content */}
      <div className={`absolute w-full h-full ${font.className}`}>
        <motion.h1
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-[#FFD700] text-6xl md:text-8xl absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]"
        >
          Grand
        </motion.h1>

        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-[#FFD700] text-6xl md:text-8xl absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]"
        >
          Egyptian
        </motion.h1>

        <motion.h1
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-[#FFD700] text-6xl md:text-8xl absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]"
        >
          Museum
        </motion.h1>
      </div>

      {/* Golden Light Rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "conic-gradient(from 45deg, transparent, rgba(255,215,0,0.1), transparent)",
            "conic-gradient(from 225deg, transparent, rgba(255,215,0,0.1), transparent)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Landing;
// 6/10
