import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const IntroLoader = () => {
  const [done, setDone] = useState(false);
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    let alive = true;
    document.fonts
      .load('64px "Tan Paradiso"')
      .then(() => alive && setFontReady(true))
      .catch(() => alive && setFontReady(true));
    return () => {
      alive = false;
    };
  }, []);

  if (done) return null;

  return (
    <motion.div
      data-testid="intro-loader"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.7, delay: 1.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
    >
      {fontReady && (
        <svg viewBox="0 0 360 120" className="w-[280px] sm:w-[360px]" aria-label="Shyara">
          <motion.text
            x="180"
            y="60"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Tan Paradiso', serif"
            fontSize="58"
            strokeWidth="1"
            initial={{ strokeDashoffset: 1200, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1 }}
            transition={{
              strokeDashoffset: { duration: 1.5, ease: "easeInOut" },
              fillOpacity: { duration: 0.5, delay: 1.2 },
            }}
            style={{ strokeDasharray: 1200 }}
          >
            <tspan fill="#FFFFFF" stroke="#FFFFFF">
              SHYARA
            </tspan>
            <tspan fill="#FF3333" stroke="#FF3333">
              .
            </tspan>
          </motion.text>
        </svg>
      )}
    </motion.div>
  );
};
