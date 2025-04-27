"use client";

import { useTheme } from "@/components/ThemeProvider";
import { CiLight, CiDark } from "react-icons/ci";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-16 h-8 flex items-center rounded-full bg-gray-300 dark:bg-gray-700 p-1 relative"
    >
      {/* Sliding Circle */}
      <motion.div
        className="w-6 h-6 bg-white dark:bg-black rounded-full flex items-center justify-center absolute"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        style={{
          left: theme === "light" ? "4px" : "calc(100% - 28px)",
        }}
      >
        {theme === "light" ? (
          <CiLight className="text-yellow-400" size={16} />
        ) : (
          <CiDark className="text-blue-400" size={16} />
        )}
      </motion.div>
    </button>
  );
}
