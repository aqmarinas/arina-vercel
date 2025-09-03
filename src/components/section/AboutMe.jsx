import { aboutData } from "@/src/constant/about";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const styles = {
  callMeText: "text-xs text-gray-500",
  nickname: "text-black font-semibold",
};

const animationConfig = {
  typingSpeed: 50,
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
};

const renderTextWithBold = (text, index) => {
  const parts = text.split("**");

  return <p key={index}>{parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>))}</p>;
};

export default function AboutMe() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(aboutData.greeting.slice(0, i + 1));
      i++;
      if (i === aboutData.greeting.length) clearInterval(interval);
    }, animationConfig.typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <div>
        <h1>
          <motion.span
            className="cursor-auto"
            initial={animationConfig.fadeIn.initial}
            animate={animationConfig.fadeIn.animate}
            transition={animationConfig.fadeIn.transition}
          >
            {displayedText}
          </motion.span>
        </h1>

        <p className={styles.callMeText}>
          {aboutData.callMeText.prefix}
          <span className={styles.nickname}>{aboutData.nickname}</span>
          {aboutData.callMeText.suffix}
        </p>
      </div>

      {/* About me section */}
      <div className="space-y-2">
        <h1>{aboutData.title}</h1>
        {aboutData.paragraphs.map((paragraph, index) =>
          // <p key={index}>{paragraph}</p>
          renderTextWithBold(paragraph, index)
        )}
      </div>
    </div>
  );
}
