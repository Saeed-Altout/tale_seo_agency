"use client";
import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href={"/"} className="w-16 h-16">
    <Image
      src={logo}
      alt="Logo"
      className="object-contain w-full h-full"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    />
  </Link>
);

export default Logo;
