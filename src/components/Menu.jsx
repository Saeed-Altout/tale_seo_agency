"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import { FaSortDown } from "react-icons/fa";
import { useStateContext } from "@/contexts/ContextProvider";
import { component, flex } from "@/app/styles";
import { motion } from "framer-motion";
import { variantMenuMobile } from "@/utils/motion";
const MenuDesktop = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        <motion.ul
          variants={variantMenuMobile}
          initial="hidden"
          animate="show"
          className={component.ulMobile}
        >
          {navLinks.map((link, index) =>
            link.name === "pages" ? (
              <DropDown key={index} link={link} isMobile={true} />
            ) : (
              <Links link={link} key={index} />
            )
          )}
        </motion.ul>
      ) : (
        <ul className={component.ulDesktop}>
          {navLinks.map((link, index) =>
            link.name === "pages" ? (
              <DropDown key={index} link={link} isMobile={false} />
            ) : (
              <Links link={link} key={index} />
            )
          )}
        </ul>
      )}
    </>
  );
};

const DropDown = ({ link, isMobile }) => {
  const { activeDropDown, setActiveDropDown } = useStateContext();
  return (
    <ul key={link.id} className="relative">
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
        <div
          className={`${flex.centerCenter} pt-5 flex-col gap-5 ${
            !isMobile &&
            "absolute p-5 rounded-lg shadow-xl top-[65px] -left-[50%] bg-secondary whitespace-nowrap"
          }`}
        >
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
  );
};

const Links = ({ link }) => {
  const { setActiveDropDown } = useStateContext();

  return (
    <li key={link.id} onClick={() => setActiveDropDown(false)}>
      <Link
        href={link.name === "home" ? "/" : `/#${link.name}`}
        className={component.liNavbar}
      >
        {link.name}
      </Link>
    </li>
  );
};
export default MenuDesktop;
