import { generateNavElementId } from "@helpers";
import { motion } from "framer-motion";

export default function NavItem({
  title,
  sectionId,
  isActive,
  scrollToSection,
  setActiveSectionId,
  handleItemClick,
}: {
  title: string;
  sectionId: string;
  isActive: boolean;
  scrollToSection: (sectionId: string) => void;
  setActiveSectionId: React.Dispatch<React.SetStateAction<string>>;
  handleItemClick: (sectionId: string) => void;
}) {
  return (
    <li
      id={generateNavElementId({ sectionId })}
      className="flex justify-end items-center w-full"
      style={{
        cursor: "pointer",
        marginBottom: "10px",
      }}
      onClick={() => handleItemClick(sectionId)}
    >
      <motion.div
        className="flex justify-end items-center w-full"
        style={{
          color: isActive ? "#4b5563" : "#818181",
          transform: `scale(${isActive ? 1.2 : 1})`,
          transition: "transform .3s ease",
          transformOrigin: "right",
        }}
        whileHover={{
          color: isActive ? "#4b5563" : "#afafaf",
        }}
        animate={{
          color: isActive ? "#4b5563" : "#818181",
        }}
        transition={{ duration: 0.1 }}
      >
        {title}
      </motion.div>
    </li>
  );
}
