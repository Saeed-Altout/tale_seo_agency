"use client";
import { Button } from "@/components";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-20">
      <p className="text-2xl font-semibold">Opps,The page not found yet</p>
      <Button
        href={"/"}
        text="Go back to home"
        styles="bg-primary text-white"
      />
      <p>Developed Now (^_^)</p>
    </div>
  );
};

export default About;
