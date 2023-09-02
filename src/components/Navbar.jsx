"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { Logo, MenuDesktop, MenuMobile, TitleWebsite, Toggle } from "./index";
import { component, gradient, transition } from "@/app/styles";

const Navbar = () => {
  const { activeMenu, scrolled } = useStateContext();

  return (
    <>
      <TitleWebsite />
      <nav
        className={`${transition.normal} transition-transform ${
          scrolled ? "translate-y-[68px]" : "translate-y-0 top-0"
        } ${gradient.taleNavbar} ${component.navbar}`}
      >
        <div className={`${component.navbarWrapper} px-6 md:px-16 mx-auto`}>
          <Logo />
          <MenuDesktop />
          <Toggle />
          {activeMenu && <MenuMobile />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
