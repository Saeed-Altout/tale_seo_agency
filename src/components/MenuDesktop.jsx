"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import { FaSortDown } from "react-icons/fa";
import { useStateContext } from "@/contexts/ContextProvider";
import { component, flex } from "@/app/styles";
const MenuDesktop = () => {
  const { activeDropDown, setActiveDropDown } = useStateContext();
  return (
    <ul className={component.ulDesktop}>
      {navLinks.map((link) =>
        link.name === "pages" ? (
          <ul className="relative" key={link.id}>
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
                className={`${flex.centerCenter} absolute flex-col gap-5 p-5 rounded-lg shadow-xl top-14 -left-[50%] bg-secondary whitespace-nowrap`}
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
        ) : (
          <li
            key={link.id}
            onClick={() => setActiveDropDown((prev) => (prev = false))}
          >
            <Link
              href={link.name === "home" ? "/" : `/#${link.name}`}
              className={component.liNavbar}
            >
              {link.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default MenuDesktop;
