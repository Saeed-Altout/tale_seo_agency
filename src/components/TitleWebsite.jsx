"use client";
import { motion } from "framer-motion";
import { useStateContext } from "@/contexts/ContextProvider";
import { variantTitleWebsite } from "@/utils/motion";
const TitleWebsite = () => {
  const { scrolled } = useStateContext();
  return (
    <motion.div
      variants={variantTitleWebsite}
      initial="show"
      animate={scrolled ? "hidden" : "show"}
      className="fixed z-50 block w-full py-5 text-xl text-center text-white bg-secondary"
    >
      Website 2023
    </motion.div>
  );
};

export default TitleWebsite;
