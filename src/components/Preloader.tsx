import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1.5"
              />
              <motion.circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="339.292"
                initial={{ strokeDashoffset: 339.292 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <motion.text
                x="60"
                y="60"
                textAnchor="middle"
                dominantBaseline="central"
                className="font-display"
                fontSize="38"
                fontWeight="600"
                fill="var(--color-foreground)"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                SS
              </motion.text>
            </motion.svg>
            <motion.p
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Sandeep Sharma
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
