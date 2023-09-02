import { flex } from "@/app/styles";
import { motion } from "framer-motion";
import Link from "next/link";
const ButtonScroll = () => {
  return (
    <div className={`absolute ${flex.centerCenter} w-full bottom-10`}>
      <Link href="#services">
        <div
          className={`${flex.startCenter} h-16 p-2 border-2 w-10 rounded-full border-secondary`}
        >
          <motion.div
            animate={{
              y: [0, 25, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary"
          />
        </div>
      </Link>
    </div>
  );
};

export default ButtonScroll;
