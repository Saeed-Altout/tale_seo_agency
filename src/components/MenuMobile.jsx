"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";
import { variantMenuMobile } from "@/utils/motion";
import { component, flex, gradient } from "@/app/styles";
import { FaSortDown } from "react-icons/fa";

const MenuMobile = () => {
  const { setActiveMenu, setActiveDropDown, activeDropDown } =
    useStateContext();

  return (
    <motion.ul
      variants={variantMenuMobile}
      initial="hidden"
      animate="show"
      className={`${flex.centerCenter} absolute flex-col gap-5 p-10 rounded-lg top-24 md:hidden ${gradient.tale} w-full left-0 right-0`}
    >
      {navLinks.map((link) =>
        link.name === "pages" ? (
          <ul key={link.id}>
            <li
              className={`${component.liNavbar} ${flex.startCenter} gap-1 cursor-pointer`}
              onClick={() => {
                setActiveDropDown((prev) => !prev);
              }}
            >
              {link.name}
              <FaSortDown />
            </li>
            {activeDropDown && (
              <div className={`${flex.centerCenter} pt-5 flex-col gap-5 `}>
                {link.pageLinks.map((page) => (
                  <li
                    key={page.id}
                    onClick={() => setActiveDropDown((prev) => !prev)}
                  >
                    <Link href={`/${page.href}`} className={component.liNavbar}>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </ul>
        ) : (
          <li key={link.id}>
            <Link
              href={`/#${link.name}`}
              className={component.liNavbar}
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              {link.name}
            </Link>
          </li>
        )
      )}
    </motion.ul>
  );
};

export default MenuMobile;
