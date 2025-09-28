"use client";
import ExploreSection from "@/components/ui/Common/ExploreSection/ExploreSection";
import TrustedByTheBest from "@/components/ui/Common/TrustedByTheBest/TrustedByTheBest";
import { useRouter } from "next/navigation";
import React from "react";

const Data = () => {
  const router = useRouter();

  const DataDoneRight = () => (
    <div className="py-12 bg-white">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-400 overflow-hidden">
              <img
                src="https://princetonconnective.com/wp-content/uploads/2025/01/End-to-End-Data-Support.jpg"
                alt="Princeton Data"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Data Done <span className="text-red-600">Right</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Princeton Connective specializes in delivering comprehensive data
              connectivity solutions, offering a range of services that
              seamlessly integrate networks, enhance data transmission speeds,
              and ensure secure and reliable connections for businesses across
              various industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesSection = () => {
    const cardsData = [
      {
        title: "Cloud Connectivity",
        imgSrc:
          "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-14.png",
        description:
          "We offer both a T1 and fiber connection for your business.",
      },
      {
        title: "Data Center Connectivity",
        imgSrc:
          "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-15.png",
        description:
          "We offer both a T1 and fiber connection for your business.",
      },
      {
        title: "Office Connectivity",
        imgSrc:
          "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-16.png",
        description:
          "We offer both a T1 and fiber connection for your business.",
      },
    ];

    return (
      <section className="w-full py-16 bg-gradient-to-b from-[#c91d2e] to-[#57111d]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-6xl font-semibold text-white">
              Data Privacy <span className="text-[#1F2933]">Guaranteed</span>
            </h2>
            <p className="mt-3 text-white/90 max-w-3xl mx-auto text-xl">
              We’re the most trusted value added resellers with over 30 years of
              Industry track record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cardsData.map((card, index) => (
              <div className="bg-white rounded-xl shadow-xl shadow-black/10 p-5 sm:p-6 flex flex-col aitems-center text-center">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={card.imgSrc}
                    alt="Cloud Connectivity"
                    className="w-full h-72 min-h-52 object-cover"
                  />
                </div>
                <h3 className="mt-6 text-3xl font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="mt-3 text-base">{card.description}</p>
                <div className="mt-6">
                  <button
                    onClick={() => router.push("/contactUs")}
                    className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-b from-[#CC1D2E] to-[#56101C]"
                  >
                    Contact us
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

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
                src="https://princetonconnective.com/wp-content/uploads/2025/01/Best-Connectivity-Support-for-your-Success-for-data-page.jpg"
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
    <>
      <section
        className="relative w-full min-h-[500px] h-[65vh] overflow-hidden"
        style={{
          backgroundImage:
            "url(https://princetonconnective.com/wp-content/uploads/2024/08/unsplash_Q1p7bh3SHj8.png)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-[#2a2a2a8b] via-[#2a2a2a57] to-transparent" />
        </div>
        <div className="relative h-full w-full flex items-center">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="2000"
            className="px-24 max-w-4xl mt-16"
          >
            <h1 className="text-white font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-[#ad1a2b]">Data</span>{" "}
              <span className="text-white">with</span>
            </h1>

            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
              Princeton Connective
            </h2>

            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-8">
              Our experts can provide the data connectivity your business needs.
              Feel free to contact us if you have any questions.
            </p>

            <button
              className="text-white font-semibold px-10 py-2.5 rounded-full 
                   bg-gradient-to-b from-[#CC1D2E] to-[#56101C]"
              onClick={() => router.push("/contactUs")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <DataDoneRight />
      <ServicesSection />
      <BestConnectivitySupport />
      <TrustedByTheBest />
      <ExploreSection />
    </>
  );
};

export default Data;
