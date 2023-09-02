"use client";
import { flex, gradient, transition, wrapper } from "@/app/styles";
import { Button } from "@/components";
import { projects } from "@/constants";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="relative py-40 " id="projetcs">
      <div className={`${wrapper.section} flex-col gap-10`}>
        <div className={`${flex.startStart} flex-col gap-5`}>
          <h3 className="text-3xl font-medium text-black md:text-4xl lg:text-5xl">
            Discover Our <span className="text-primary">Work</span> &{" "}
            <span className="text-secondary">Projects</span>
          </h3>
          <span className={`${gradient.tale} block w-24 h-0.5 lg:mx-auto`} />
          <p className="text-base text-gray lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
            eiusmod.
          </p>
        </div>

        <div className={`${flex.centerCenter} gap-5`}>
          <Button
            text={<FiArrowLeft className="text-2xl" />}
            styles="text-white bg-secondary"
          />
          <Button
            text={<FiArrowRight className="text-2xl" />}
            styles="text-white bg-secondary "
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((service) => (
            <div
              key={service.id}
              className={`overflow-hidden text-center ${transition.normal} bg-white shadow-md cursor-pointer rounded-lg hover:shadow-xl`}
            >
              <div className="w-full">
                <Image
                  src={service.icon}
                  alt="Icon Services"
                  className="object-contain w-full h-full "
                />
              </div>
              <div className={`${flex.centerCenter} py-10 flex-col relative`}>
                <span
                  className={`${flex.centerCenter} absolute top-[-20px] bg-secondary w-12 h-12 rounded-full`}
                >
                  <FiLink className="text-2xl text-white" />
                </span>
                <p className="text-lg font-medium tracking-wide ">
                  {service.descr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
