"use client";

import TrustedByTheBest from "@/components/ui/Common/TrustedByTheBest/TrustedByTheBest";
import WhatWeProvide from "@/components/ui/Common/WhatWeProvide/WhatWeProvide";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import './utilities.css'

export default function Home() {
  const slides = [
    {
      image:
        "https://princetonconnective.com/wp-content/uploads/2025/07/rodeo-project-management-software-ONe-snuCaqQ-unsplash-1-1-scaled.jpg",
      title: "Welcome to Princeton Connective",
      description:
        "We offer small businesses affordability and accessibility in the realm of tech.Click “See More” to learn more about Princeton Connective.",
      button: "See More",
    },
    {
      image:
        "https://princetonconnective.com/wp-content/uploads/2025/07/linkedin-sales-solutions-46bom4lObsA-unsplash-scaled.jpg",
      title: "Your Voice, Your Plan",
      description:
        "We provide multiple cellular & VOIP options for your small business from big name carriers and trusted providers. Click “See More” to learn more.",
      button: "See More",
    },
    {
      image:
        "https://princetonconnective.com/wp-content/uploads/2025/07/tyler-franta-iusJ25iYu1c-unsplash-1-scaled.jpg",
      title: "Data Done Right",
      description:
        "From data center connectivity to a dedicated T1 Line, see what Princeton Connective can offer for your business.",
      button: "See More",
    },
    {
      image:
        "https://princetonconnective.com/wp-content/uploads/2025/07/camilo-jimenez-qZenO_gQ7QA-unsplash-scaled.jpg",
      title: "Stay Connected with Your Team",
      description:
        "Princeton Connective provides your small business with unified communications services. Click “See More” to learn more.",
      button: "See More",
    },
    {
      image:
        "https://princetonconnective.com/wp-content/uploads/2025/07/thisisengineering-IpTPp_aPbYE-unsplash-scaled.jpg",
      title: "From Hardware to Software, and Everything in Between",
      description:
        "Princeton Connective offers a multitude of tech services for your business. Click “See More” to learn more.",
      button: "See More",
    },
    {
      image:
        "https://princetonconnective.com/wp-content/uploads/2025/07/nasa-Q1p7bh3SHj8-unsplash-scaled.jpg",
      title: "Stay Connected Everywhere",
      description:
        "We offer small businesses reliable wireless connectivity everywhere. Click “See More” to learn more.",
      button: "See More",
    },
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, [current]);

  const partners = [
    {
      name: "AT&T",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/07/LinkTT-Logo-PNG-Pic-1-2.png",
      alt: "AT&T Logo",
    },
    {
      name: "Cisco",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/09/Meraki_Logo_2016_transparent-1-1.png",
      alt: "Cisco Logo",
    },
    {
      name: "RingCentral",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/07/image-58.png",
      alt: "RingCentral Logo",
    },
    {
      name: "T-Mobile",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/07/T-Mobile-Logo-2020-1-1.png",
      alt: "T-Mobile Logo",
    },
    {
      name: "Microsoft 365",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/07/logo_microsoft365-1-1.png",
      alt: "Microsoft 365 Logo",
    },
    {
      name: "Nextiva",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/07/image-56.png",
      alt: "Nextiva Logo",
    },
    {
      name: "Logitech",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/07/image-6.png",
      alt: "Logitech Logo",
    },
    {
      name: "Tech365",
      logo: "https://princetonconnective.com/wp-content/uploads/2024/07/imgpsh_fullsize_anim-2-1.png",
      alt: "Tech365 Logo",
    },
  ];

  const MainSlider = () => (
    <div className="relative w-full h-[80vh] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full relative list-none"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(45, 51, 44, 0.6) 0%, rgba(99, 109, 108, 0.62) 100%), url(${slide.image})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full flex items-center">
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="2000"
                className="text-white max-w-3xl px-8 lg:px-28"
              >
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="mb-6">{slide.description}</p>
                <button className="bg-red-700 px-6 py-3 rounded-full hover:bg-red-800">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white p-3 rounded-full transition z-20 opacity-0 group-hover:opacity-100"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white p-3 rounded-full transition z-20 opacity-0 group-hover:opacity-100"
      >
        <FaChevronRight />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-white scale-110"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );

  const OurPartners = () => (
    <div className="py-16 bg-white">
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Our Partners
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Our global partnerships, where innovation knows no boundaries.
        </p>
      </div>
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll">
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 h-20 sm:h-24 md:h-28 lg:h-32 mx-auto flex items-center justify-center transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-w-full max-h-full object-contain filter transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
            </div>
          ))}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 h-20 sm:h-24 md:h-28 lg:h-32 mx-auto flex items-center justify-center transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className="max-w-full max-h-full object-contain filter transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span
                className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 text-center px-2 hidden"
                style={{ display: "none" }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WhatIsPrincetonConnective = () => (
    <div className="py-12 bg-white">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-400 overflow-hidden">
              <img
                src="https://princetonconnective.com/wp-content/uploads/2025/01/Main-page-what-is-princeton-connective.jpg"
                alt="Princeton Connective Business Meeting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What <span className="text-red-600">is</span> Princeton
              Connective?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Princeton Connective is a division of Princeton IT Services, we
              provide network & data connectivity to all sides of business.
              Located in Princeton, New Jersey, we make it easy for businesses
              to find affordable and accessible services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const BestConnectivitySupport = () => (
    <div className="py-12 bg-white">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-1 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              Best <span className="text-red-600">Connectivity Support</span>{" "}
              for your <span className="text-red-600">Success</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
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
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
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
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
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
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
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
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
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
                src="https://princetonconnective.com/wp-content/uploads/2025/07/business-9664473_1280.webp"
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
      <MainSlider />
      <OurPartners />
      <WhatWeProvide />
      <WhatIsPrincetonConnective />
      <BestConnectivitySupport />
      <TrustedByTheBest />
    </div>
  );
}
