import { Cat } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Launcher({ onClick }) {
  return (
    <motion.div
      key="cat-wrapper"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex flex-col items-center justify-center gap-2 text-black"
    >
      <button
        onClick={onClick}
        className="flex flex-col items-center gap-2"
        aria-label="Open launcher"
      >
        {/* <Cat className="size-10" /> */}
        <div className="relative size-32">
          <Image
            src="/img/cat-gif.gif"
            alt="Cat GIF"
            fill
            unoptimized
          />
        </div>

        <span>Click the cat to open!</span>
      </button>
    </motion.div>
  );
}
