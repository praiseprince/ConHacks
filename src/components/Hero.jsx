import { motion } from "framer-motion";
import { styles } from "../styles";
import hoppingImage from "../assets/hopping-image.png";
import newBackgroundImage from "../assets/background.gif";
import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = [
    "Join us at Conestoga College, Waterloo, on October 22, 2023, for the first-ever official Hackathon by Conestoga College.",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    setFadeIn(true);

    const typeInterval = setInterval(() => {
      if (index < phrases.length) {
        const currentText = phrases[index];
        if (text.length < currentText.length) {
          setText(currentText.substring(0, text.length + 1));
        } else {
          clearInterval(typeInterval);
        }
      }
    }, 40);

    return () => {
      clearInterval(typeInterval);
    };
  }, [text, index, phrases]);

  useEffect(() => {
    // Calculate the height of the typewriter text and set it as the container's height
    if (containerRef.current) {
      containerRef.current.style.height = `${containerRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <section
      className={`relative w-full h-screen mx-auto flex flex-col justify-center items-center ${
        fadeIn ? "fade-in" : ""
      }`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${newBackgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col">
          {/* Title text centered horizontally and vertically */}
          <h1
            className={`${styles.heroHeadText} text-white flex justify-center items-center`}
            style={{
              height: "100%",
            }}
          >
            <span className="text-[#D4B9FC]">ConHacks</span>
          </h1>
          {/* Typewriter text container centered horizontally and vertically */}
          <div
            className="typewriter-text-container"
            ref={containerRef}
            style={{
              textAlign: "center",
              overflow: "hidden",
              width: "100%",
              height: "150px", // Adjust the height as needed
            }}
          >
            <p
              className={`${styles.heroSubText} mt-2`}
              style={{
                whiteSpace: "pre-line",
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>

      {/* Responsive image centered below the text */}
      <div className="mt-5">
        <motion.img
          src={hoppingImage}
          alt="Hopping Image"
          className="w-1/2 max-w-md mx-auto"
          initial={{ opacity: 1, y: 50 }}
          animate={{
            opacity: 1,
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </div>

      {/* Add margin to push the button below the image */}
      <div className="mt-5 text-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
