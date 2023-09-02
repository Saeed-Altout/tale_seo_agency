import { padding } from "@/app/styles";
import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const Wrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container w-full h-full px-6 mx-auto md:px-16"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default Wrapper;
