import { flex, gradient, wrapper } from "@/app/styles";
import { WhiteSpace } from "@/components";
import { dataContant } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const Contact = () => {
  const { loading, form, formRef, handleSubmit, handleChange } =
    useStateContext();
  return (
    <section className="relative py-40 contact" id="contact">
      <div className={`${wrapper.section} flex-col lg:flex-row gap-20`}>
        <WhiteSpace styles="gap-10 p-10">
          <h3 className="text-3xl font-medium text-black md:text-4xl lg:text-5xl">
            <span className="text-primary">Contact Us</span> & Get In{" "}
            <span className="text-secondary">Touch </span>
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-5"
          >
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              value={form.name}
              placeholder="Your First Name"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              value={form.surname}
              placeholder="Your Last Name"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={form.email}
              placeholder="Your E-mail"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />
            <input
              onChange={handleChange}
              type="text"
              name="subject"
              value={form.subject}
              placeholder="Subject"
              className="w-full px-5 py-3 bg-purple-100 rounded-lg outline-none"
            />

            <textarea
              rows={5}
              onChange={handleChange}
              type="textarea"
              name="message"
              value={form.message}
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
