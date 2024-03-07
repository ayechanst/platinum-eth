"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ModuleButtonProps {
  name: string;
}

const ModuleButton: React.FC<ModuleButtonProps> = ({
  name,
}) => {
  const lowercaseName = name.trim().toLowerCase();

  return (
    <>
      <Link href={`/${lowercaseName}`}>
        <motion.a
          className="inline-flex mx-5 items-center justify-center bg-teal-200 text-gray-800 font-bold h-full py-2 px-4 rounded-2xl"
          whileHover={{
            scale: 0.95,
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.a>
      </Link>
    </>
  );
};

export default ModuleButton;
