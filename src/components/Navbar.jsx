"use client";
import { Logo, Menu, Toggle } from "./index";
import { useStateContext } from "@/contexts/ContextProvider";

const Navbar = () => {
  const { activeMenu } = useStateContext();

  return (
    <nav className="bg-gradient-to-l from-[#5b03e4] to-[#c03afe] w-full fixed top-0 z-[1000]">
      <div className="container flex items-center justify-between px-6 py-2 mx-auto">
        <Logo />
        <Menu isMobile={false} />

        <Toggle />
        {activeMenu && <Menu isMobile={true} />}
      </div>
    </nav>
  );
};

export default Navbar;
