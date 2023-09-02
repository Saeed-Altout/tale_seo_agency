import { cards, flex, gradient, wrapper } from "@/app/styles";
import { services } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section className="relative py-40 service" id="services">
      <div className={`${wrapper.section} flex-col lg:flex-row gap-20`}>
        <div className={`${flex.startStart} flex-col gap-5 lg:max-w-md`}>
          <h3 className="text-3xl font-medium text-black md:text-4xl lg:text-5xl">
            We Provide <span className="text-primary">Different Services</span>{" "}
            & <span className="text-secondary">Features</span> For Your Agency
          </h3>
          <span className={`${gradient.tale} block w-24 h-0.5`} />
          <p className="text-base text-gray lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
            eiusmod.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className={cards.service}>
              <div className="mx-auto my-5 overflow-hidden w-14 h-14">
                <Image
                  src={service.icon}
                  alt="Icon Services"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <p className="py-5 text-lg font-medium tracking-wide">
                {service.descr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
