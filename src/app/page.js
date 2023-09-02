"use client";
import { About, Contact, Footer, Projects, Services, Hero } from "@/layouts";
const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
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
