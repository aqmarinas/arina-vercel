import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jetbrains } from "../../pages/fonts/jetbrains";
import Launcher from "../Launcher";
import ActionBar from "../ActionBar";

export default function Container({ children }) {
  const [isHidden, setIsHidden] = useState(true);
  const [isFullWidth, setIsFullWidth] = useState(false);

  return (
    <main className={`min-h-screen bg-stone-100 p-4 md:p-8 flex justify-center items-center ${jetbrains.className}`}>
      <AnimatePresence>
        {!isHidden && (
          <motion.div
            key="container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`bg-white border border-black max-h-[80vh] flex flex-col overflow-hidden ${isFullWidth ? "w-full" : "w-[640px]"}`}
          >
            <ActionBar
              onMinimize={() => setIsHidden(true)}
              onMaximize={() => setIsFullWidth((prev) => !prev)}
              onClose={() => setIsHidden(true)}
            />
            {/* content */}
            <div className="pt-6 px-4 pb-4 space-y-4 text-justify overflow-y-auto">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{isHidden && <Launcher onClick={() => setIsHidden(false)} />}</AnimatePresence>
    </main>
  );
}
