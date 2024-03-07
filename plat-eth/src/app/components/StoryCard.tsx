"use client";
import { motion } from "framer-motion";

interface StoryCardProps {
  title: string;
  subTitle: string;
  text: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  subTitle,
  text,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.1 }}
      className="card bg-neutral text-neutral-content"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{subTitle}</p>
        <div>{text}</div>
      </div>
    </motion.div>
  );
};
export default StoryCard;
