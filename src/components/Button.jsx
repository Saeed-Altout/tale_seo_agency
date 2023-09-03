"use client";
import { transition } from "@/app/styles";
import Link from "next/link";
const Button = ({ text, styles, href }) => {
  return (
    <button
      className={`${styles} block px-5 py-2.5 text-sm font-medium text-center ${transition.normal} rounded-full hover:bg-opacity-80 w-fit hover:shadow-md`}
    >
      <Link href={`${href}`}>{text}</Link>
    </button>
  );
};

export default Button;
