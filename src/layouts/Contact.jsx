"use client";
import { flex, gradient, wrapper } from "@/app/styles";
import { WhiteSpace } from "@/components";
import { dataContant } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const Contact = () => {
  const { loading } = useStateContext();
  return (
    <section className="relative py-40 contact" id="contact">
      <div className={`${wrapper.section} flex-col lg:flex-row gap-20`}>
        <WhiteSpace styles="gap-10 p-10">
          <h3 className="text-3xl font-medium text-black md:text-4xl lg:text-5xl">
            <span className="text-primary">Contact Us</span> & Get In{" "}
            <span className="text-secondary">Touch </span>
          </h3>

          <form onSubmit={() => {}} className="flex flex-col w-full gap-5">
            <input
              onChange={() => {}}
              type="text"
              name="firstName"
              value={""}
              placeholder="Your First Name"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />
            <input
              onChange={() => {}}
              type="text"
              name="lastName"
              value={""}
              placeholder="Your Last Name"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />
            <input
              onChange={() => {}}
              type="email"
              name="email"
              value={""}
              placeholder="Your E-mail"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />
            <input
              onChange={() => {}}
              type="text"
              name="subject"
              value={""}
              placeholder="Subject"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />

            <textarea
              rows={5}
              onChange={() => {}}
              type="textarea"
              name="message"
              value={""}
              placeholder="Your Message"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />

            <input
              type="submit"
              value={loading ? "Sending..." : "Send Message Now"}
              className={`${gradient.tale} w-full px-5 py-3 rounded-lg outline-none cursor-pointer text-white font-medium`}
            />
          </form>

          <div className={`${flex.centerCenter} flex-wrap gap-10`}>
            {dataContant.map((info) => (
              <div
                key={info.id}
                className={`${flex.centerCenter} flex-col gap-5`}
              >
                <span className="text-2xl text-secondary">{info.icon}</span>
                <p className="text-base font-medium tracking-wide text-center">
                  {info.text}
                </p>
              </div>
            ))}
          </div>
        </WhiteSpace>
      </div>
    </section>
  );
};

export default Contact;
