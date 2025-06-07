import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const text = "Hello! I'm Aqmarina Shabihah";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <div>
        <h1>
          <motion.span
            className="cursor-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayedText}
          </motion.span>
        </h1>

        <p className="text-xs text-gray-500">
          or you can just call me <span className="text-black font-semibold">Arina</span>.
        </p>
      </div>

      {/* about me */}
      <div className="space-y-2">
        <h1>About Me</h1>
        <p>
          I’m an Final-year Information Systems student at Universitas Singaperbangsa Karawang, who focuses mainly on frontend development, but also enjoys working with backend and cloud technologies. Currently, I’m working on my thesis,
          learning Go and PostgreSQL, and building side projects.
        </p>
        <p>
          Eventually, I want to grow into a <span className="font-semibold">Full-Stack Developer</span> who can bring ideas to life across both the frontend and backend.
        </p>
      </div>
    </div>
  );
}
