import { Cat } from "lucide-react";
import { motion } from "framer-motion";

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
      >
        <Cat className="size-10" />
        <span>Click to open!</span>
      </button>
    </motion.div>
  );
}
