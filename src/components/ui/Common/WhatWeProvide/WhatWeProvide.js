import React from "react";

const WhatWeProvide = ({ isAbout = false }) => {
  const services = [
    {
      title: "Cellular",
      description:
        "We provide a variety of plans of voice & data, all from big name carriers you trust.",
      button: "See More",
    },
    {
      title: "VOIP",
      description:
        "Choose any of our plans to enhance your business' communication Infrastructure.",
      button: "See More",
    },
    {
      title: "IoT",
      description: "We provide wireless connection for your business anywhere.",
      button: "See More",
    },
    {
      title: "Data",
      description:
        "We provide data services for your business, Including Installing a dedicated T1 line.",
      button: "See More",
    },
    {
      title: "Services",
      description:
        "All the services we provide from security to racking & stacking",
      button: "See More",
    },
    {
      title: "Unified Communications",
      description:
        "We can provide your business with Microsoft 365 or Google Workspace.",
      button: "See More",
    },
  ];

  return (
    <div className="py-16 bg-[#ad1a2b]">
      <div className="max-w-full mx-auto px-12 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We Provide
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            With a rich history of innovation and reliability, we continue to
            excel in delivering top-tier solutions to our clients worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${isAbout ? "bg-white" : "bg-[#CC6A73]"}  rounded-lg p-6 shadow-[10px_10px_25px_rgba(0,0,0,0.4)] transition-all flex flex-col items-center`}
            >
              <h1
                className={`text-shadow-gray-600 text-2xl font-bold ${isAbout ? "text-black" : "text-white"} mb-3`}
              >
                {service.title}
              </h1>
              <p
                className={`${isAbout ? "text-black" : "text-white"} mb-4 text-center leading-relaxed fw-bold`}
              >
                {service.description}
              </p>
              <button
                className={`w-2/6 min-w-[120px] ${isAbout ? "bg-gradient-to-b from-[#CC1D2E] to-[#56101C]" : "bg-transparent hover:bg-[#0000000d] border-white"}  border-2 cursor-pointer  text-white px-4 py-2 rounded-full fw-bold transition-all duration-300 font-medium`}
              >
                {service.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
