"use client";

import { useTheme } from "@/components/ThemeProvider";
import { CiLight, CiDark } from "react-icons/ci";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-16 h-8 flex items-center rounded-full bg-accent dark:bg-highlight p-1 relative"
    >
      {/* Sliding Circle */}
      <motion.div
        className="w-6 h-6 bg-yellow-300 dark:bg-black/40 rounded-full flex items-center justify-center absolute"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          left: theme === "light" ? "4px" : "calc(100% - 28px)",
        }}
      >
        {theme === "light" ? (
          <CiLight className="text-black" size={20} />
        ) : (
          <CiDark className="text-white" size={20} />
        )}
      </motion.div>
    </button>
  );
}
