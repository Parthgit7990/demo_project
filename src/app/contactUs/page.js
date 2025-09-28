import React from "react";

const ContactUs = () => {
  const ScheduleForm = () => (
    <section className="w-full bg-gradient-to-b from-[#f4f6f8] to-[#dfe6ee] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#2f3542]">
          SCHEDULE A MEETING
        </h2>
        <p className="mt-6 max-w-5xl text-[#2f3542]/80 text-base sm:text-lg leading-relaxed">
          Looking for some help with your database, software, cloud automation
          strategy, mobile application, or system security? We’ve got you
          covered! Fill out this form and get a FREE consultation to brainstorm
          with one of our experts. We will pair you with a technical expert that
          will work to provide the best possible solution for you and your
          company!
        </p>

        <form className="mt-10 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="email"
              placeholder="Business Email"
              className="w-full rounded-md border border-red-600/80 bg-white px-4 py-3 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/70"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md border border-red-600/80 bg-white px-4 py-3 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/70"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input
              type="text"
              placeholder="City"
              className="w-full rounded-md border border-red-600/80 bg-white px-4 py-3 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/70"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full rounded-md border border-red-600/80 bg-white px-4 py-3 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/70"
            />
          </div>

          <div>
            <textarea
              rows={7}
              placeholder="Tell us about your business and the products and/or services you need..."
              className="w-full rounded-md border border-red-600/80 bg-white px-4 py-3 text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-700/70"
            />
          </div>

          <div>
            <button
              type="button"
              className="text-white font-semibold px-10 py-2.5 rounded-lg 
                   bg-gradient-to-b from-[#CC1D2E] to-[#56101C]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );

  return (
    <>
      <section
        className="relative w-full h-[65vh] overflow-hidden"
        style={{
          backgroundImage:
            "url(https://princetonconnective.com/wp-content/uploads/2024/08/unsplash_QLqNalPe0RA.png)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0">
          <div className="h-full w-1/2 bg-gradient-to-r from-[#ad1a2bd9] via-[#ad1a2b80] to-transparent" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="2000"
          className="relative h-full w-full flex items-center"
        >
          <div className="px-6 sm:px-10 lg:px-16 xl:px-28 max-w-5xl">
            <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
              Have Any Questions?
            </h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl max-w-3xl">
              Our experts in Princeton Connective cater to clients across the
              globe, providing them with solutions with the latest technology.
            </p>
          </div>
        </div>
      </section>
      <ScheduleForm />
    </>
  );
};

export default ContactUs;
