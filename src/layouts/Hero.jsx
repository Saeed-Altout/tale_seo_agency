"use client";
import Link from "next/link";
import { flex, wrapper } from "@/app/styles";
import { Button, ButtonScroll } from "@/components";
const Hero = () => {
  return (
    <div className="relative h-screen hero">
      <div className={`${wrapper.section} relative`}>
        <div
          className={`${flex.centerCenter} lg:items-start flex-col gap-5 max-w-4xl px-5 py-10 text-center bg-white rounded-lg shadow-xl lg:mr-auto lg:shadow-none lg:bg-opacity-100 lg:bg-transparent bg-opacity-90 md:text-left`}
        >
          <h4 className="text-lg font-semibold text-primary">
            SEO DIGITAL AGENCY
          </h4>

          <h1 className="text-4xl font-black leading-tight text-black md:text-5xl lg:text-6xl">
            Dive <span className="text-secondary">Into The SEO</span> World{" "}
            <span className="text-primary">With Tale</span>
          </h1>

          <p className="text-sm leading-8 text-gray">
            Tale is the best SEO agency website template using Bootstrap v5.2.2
            CSS for your company. It is a free download provided by TemplateMo.
            There are 3 HTML pages,{" "}
            <Link href="/" className="text-primary">
              Home
            </Link>
            ,{" "}
            <Link href="/about-us" className="text-primary">
              About
            </Link>
            , and{" "}
            <Link href="/faqs" className="text-primary">
              FAQ
            </Link>
            .
          </p>

          <div
            className={`${flex.centerCenter} gap-1 md:justify-start md:gap-10`}
          >
            <Button
              text="Discover More"
              href={"/about-us"}
              styles="bg-primary text-white"
            />
            Or
            <Button
              text="Click Our FAQS"
              href={"/faqs"}
              styles="bg-secondary text-white"
            />
          </div>
        </div>
      </div>
      <ButtonScroll />
    </div>
  );
};

export default Hero;
