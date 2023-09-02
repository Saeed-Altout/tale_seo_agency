import Image from "next/image";
import { leftInfos } from "@/assets/images";
import { WhiteSpace } from "@/components";
import { offers } from "@/constants";
import { flex, gradient, wrapper } from "@/app/styles";

const About = () => {
  return (
    <section className="relative py-40 about" id="infos">
      <div className={`${wrapper.section} flex-col lg:flex-row gap-20`}>
        <WhiteSpace styles="xl:flex-row">
          <div className="block w-full min-h-full">
            <Image
              src={leftInfos}
              alt="Info"
              className="object-cover w-full h-full"
            />
          </div>

          <div className={`${flex.startStart} flex-col gap-5 p-5`}>
            <h3 className="text-4xl font-medium text-black">
              More <span className="text-primary">About Us</span> &{" "}
              <span className="text-secondary">What We Offer </span>
            </h3>
            <span className={`${gradient.tale} block w-24 h-0.5`} />
            <p className="text-base text-gray">
              You are free to use this template for any purpose. You are not
              allowed to redistribute the downloadable ZIP file of Tale SEO
              Template on any other template website. Please contact us. Thank
              you.
            </p>

            <div className="flex flex-col w-full gap-2">
              {offers.map((offer) => (
                <div key={offer.id}>
                  <span className={flex.centerBetween}>
                    <h6 className="text-base font-medium ">{offer.title}</h6>
                    <p className="text-lg font-medium text-secondary">
                      {offer.percentg}
                    </p>
                  </span>

                  <span className={`bg-purple-100 h-3 block rounded-lg w-full`}>
                    <span
                      style={{
                        width: offer.percentg,
                      }}
                      className={`${gradient.taleProgress} h-3 block rounded-lg`}
                    />
                  </span>
                </div>
              ))}
            </div>

            <p className="text-base text-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
              eiusmod tempor incididunt ut labore et dolore dolor dolor sit
              amet, consectetur adipiscing elit, sed doers eiusmod.
            </p>
          </div>
        </WhiteSpace>
      </div>
    </section>
  );
};

export default About;
