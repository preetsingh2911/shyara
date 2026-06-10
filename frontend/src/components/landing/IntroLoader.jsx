import { useState } from "react";
import { motion } from "framer-motion";

export const IntroLoader = () => {
  const [done, setDone] = useState(false);
  if (done) return null;

  return (
    <motion.div
      data-testid="intro-loader"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.7, delay: 0.95, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
    >
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-logo text-4xl tracking-wide text-white sm:text-5xl"
        >
          SHYARA<span className="text-[#FF3333]">.</span>
        </motion.p>
      </div>
    </motion.div>
  );
};
