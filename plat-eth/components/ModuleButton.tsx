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

  if (lowercaseName === "accounts") {
    console.log(lowercaseName);
  }
  return (
    <>
      <Link href={`../challenge1/${lowercaseName}`}>
        <div className="inline-flex mx-5 items-center justify-center bg-teal-200 text-gray-800 font-bold h-full py-2 px-4 rounded-2xl">
          {name}
        </div>
      </Link>
    </>
  );
};

export default ModuleButton;
