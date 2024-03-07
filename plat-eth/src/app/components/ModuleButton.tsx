import React from "react";
import Link from "next/link";

interface ModuleButtonProps {
  name: string;
}

const ModuleButton: React.FC<ModuleButtonProps> = ({
  name,
}) => {
  const lowercaseName = name.trim().toLowerCase();

  return (
    <>
      <Link
        href={`/${lowercaseName}`}
        className="inline-flex items-center justify-center bg-blue-500 text-white font-bold h-full py-2 px-4 rounded"
      >
        {name}
      </Link>
    </>
  );
};

export default ModuleButton;
