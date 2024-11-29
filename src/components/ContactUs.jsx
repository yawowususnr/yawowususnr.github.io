import { RiMailLine, RiMapPinLine, RiPhoneLine } from "@remixicon/react";

const ContactUs = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto">
      <div className="my-20">
        <h2 className="text-xl lg:text-5xl font-medium tracking-tight text-center uppercase mb-12">
          Contact Us
        </h2>
        <p className="max-w-2xl text-3xl mb-12 text-center mx-auto">
          Have questions or need more information? Get in touch with us and
          we'll be happy to assist you
        </p>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          <div className="flex mb-8 lg:mb-0">
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p className="text-3xl font-semibold">Phone</p>
              <p className="text-neutral-60 text-3xl"> (832) 720 3230</p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p className="text-3xl font-semibold">Email</p>
              <p className="text-neutral-600 text-3xl">
                events@mansapavallion.com
              </p>
            </div>
          </div>
          <div className="flex">
            <RiMapPinLine className="text-3xl mr-4" />
            <div>
              <p className="text-3xl font-semibold">Address</p>
              <p className="text-3xl text-neutral-600">508 Sunridge Dr</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
