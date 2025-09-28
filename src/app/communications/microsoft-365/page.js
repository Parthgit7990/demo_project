"use client";
import ExploreSection from "@/components/ui/Common/ExploreSection/ExploreSection";
import TrustedByTheBest from "@/components/ui/Common/TrustedByTheBest/TrustedByTheBest";
import { useRouter } from "next/navigation";
import React from "react";

const Microsoft = () => {
  const router = useRouter();

  const FirstSection = () => (
    <section
      className="relative w-full min-h-[500px] h-[75vh] overflow-hidden"
      style={{
        backgroundImage:
          "url(https://princetonconnective.com/wp-content/uploads/2024/07/unsplash_me4HT8AX4Ls.png)",
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
            <span className="text-[#CC1D2E]">Microsoft 365</span>{" "}
            <span className="text-white">with Princeton Connective</span>
          </h1>

          <p className="text-white w-3/4 text-lg leading-relaxed max-w-4xl mb-8">
            We provide quality services for your business all around the realm
            of tech. Feel free to contact us if you have any questions.
          </p>
        </div>
      </div>
    </section>
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
                src="https://princetonconnective.com/wp-content/uploads/2025/01/Best-Connectivity-Support-for-your-Success-Microsoft-365.jpg"
                alt="Best Connectivity Support for your Success"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SecondSection = () => (
    <div className="py-20 bg-gradient-to-b from-[#ffffff] to-[#d7dde9]">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-400 overflow-hidden">
              <img
                src="https://princetonconnective.com/wp-content/uploads/2025/01/Benefits-for-Enterprises-Private-cellular-networks-offer-Microsoft365.jpg"
                alt="Princeton Data"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 px-16">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              We offer a comprehensive business package featuring Microsoft 365
              services designed to streamline and optimize your organization’s
              productivity and collaboration. Our Microsoft 365 package includes
              expert setup, configuration, and ongoing management of your
              Microsoft 365 environment, ensuring that your team has access to
              the latest tools and features to work more efficiently.
            </p>
            <button
              className="text-white font-semibold px-10 py-2.5 rounded-2xl
                   bg-gradient-to-b from-[#CC1D2E] to-[#56101C]"
              onClick={() => router.push("/contactUs")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Quality = () => (
    <div className="py-24 bg-gradient-to-t from-[#ffffff] to-[#d7dde9]">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-400 overflow-hidden">
              <img
                src="https://princetonconnective.com/wp-content/uploads/2025/01/Quality-Assured-with-Princeton-Connective-Microsoft-365.jpg"
                alt="Princeton Data"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Quality Assured <span className="text-red-600">Right</span>{" "}
              Princeton Connective
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We stand behind our work and promise to exceed expectations,
              delivering reliable and high-performance IT services that drive
              success for your business. Your satisfaction is our priority, and
              we’re dedicated to maintaining the highest standards of quality in
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <FirstSection />
      <SecondSection />
      <BestConnectivitySupport />
      <TrustedByTheBest />
      <Quality />
      <ExploreSection />
    </div>
  );
};

export default Microsoft;
