import TrustedByTheBest from "@/components/ui/Common/TrustedByTheBest/TrustedByTheBest";
import WhatWeProvide from "@/components/ui/Common/WhatWeProvide/WhatWeProvide";
import React from "react";

const AboutUs = () => {
  const FirstSection = () => (
    <section
      className="relative w-full min-h-[500px] h-[75vh] overflow-hidden"
      style={{
        backgroundImage:
          "url(	https://princetonconnective.com/wp-content/uploads/2024/07/image-2-4.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-r from-[#2a2a2a8b] via-[#2a2a2a57] to-transparent" />
      </div>
      <div className="relative h-full w-full px-16 flex items-center">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="2000"
          className="px-24 max-w-4xl mt-16"
        >
          <h1 className="text-white font-bold w-3/6 leading-tight text-xl sm:text-3xl md:text-4xl lg:text-4xl mb-6">
            <span className="text-white">Get to Know </span>
            <span className="text-[#CC1D2E]">Us</span>{" "}
          </h1>

          <p className="text-white w-3/4 text-lg leading-relaxed max-w-4xl mb-8">
            Our experts in Princeton Connective cater to clients across the
            globe, providing them with solutions with the latest technology.
          </p>
        </div>
      </div>
    </section>
  );

  const HowWeOperate = () => (
    <div className="py-24 bg-gradient-to-b from-[#ffffff] to-[#d7dde9]">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-400 overflow-hidden">
              <img
                src="https://princetonconnective.com/wp-content/uploads/2025/01/princeton-connective-3.jpg"
                alt="Princeton Data"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="order-1 px-16 py-5 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
              How <span className="text-red-600">We</span> Operate
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Princeton Connective operates with a client-centric approach,
              prioritizing the betterment of our clients at every step. We begin
              by understanding our clients’ unique needs and challenges, then
              tailor our connectivity solutions to address them effectively. Our
              team of skilled professionals leverages the latest technologies
              and best practices to deliver innovative and reliable services
              that enhance efficiency, productivity, and growth. With proactive
              monitoring, timely support, and continuous improvement, we strive
              to exceed client expectations, fostering long-term partnerships
              built on trust, collaboration, and mutual success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const BestConnectivitySupport = () => (
    <div className="py-28 bg-gradient-to-b from-[#ffffff] to-[#d7dde9]">
      <div className="max-w-5/6 mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="lg:text-5xl xl:text-5xl md:text-5xl 2xl:text-5xl text-3xl sm:text-5xl font-bold text-gray-800 mb-8">
              Best <span className="text-red-800">Connectivity Support</span>{" "}
              for your Success
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  Device Enrollment
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  Mobile Device Management
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  Remote Monitoring
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  Office 365 Migration
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-lg text-gray-700 font-medium">
                  Network Security
                </span>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-400 overflow-hidden">
              <img
                src="https://princetonconnective.com/wp-content/uploads/2025/01/main-page-support-section.jpg"
                alt="Best Connectivity Support for your Success"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <FirstSection />
      <HowWeOperate />
      <BestConnectivitySupport />
      <WhatWeProvide isAbout={true} />
      <TrustedByTheBest />
    </div>
  );
};

export default AboutUs;
