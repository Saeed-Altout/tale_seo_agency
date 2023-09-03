"use client";
import { Navbar } from "@/components";
import { About, Contact, Footer, Projects, Services, Hero } from "@/layouts";
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
