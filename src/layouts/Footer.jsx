import { styles } from "@/app/styles";
import React from "react";

const Footer = () => {
  const nowYear = new Date();
  return (
    <section className="py-10" id="contact">
      <div className="container w-full h-full px-6 mx-auto text-center md:px-16">
        <p className={`${styles.paragraph}`}>
          Copyright Ⓒ Tale SEO Agency {nowYear.getFullYear()},{" "}
          <span className="font-semibold text-secondary">Saeed Altout, </span>
          All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
