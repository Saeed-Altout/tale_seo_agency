"use client";
import { FiMenu, FiX } from "react-icons/fi";
import { useStateContext } from "@/contexts/ContextProvider";
const Toggle = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <button
      type="button"
      className="block cursor-pointer w-fit md:hidden"
      onClick={() => setActiveMenu((prev) => !prev)}
    >
      {activeMenu ? (
        <FiX className="object-contain w-8 h-8 text-white" />
      ) : (
        <FiMenu className="object-contain w-8 h-8 text-white" />
      )}
    </button>
  );
};

export default Toggle;
