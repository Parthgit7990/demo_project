import React from "react";

const ExploreSection = () => {
  const items = [
    {
      title: "VOIP",
      img: "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-5.png",
    },
    {
      title: "IoT",
      img: "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-6.png",
    },
    {
      title: "Data",
      img: "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-7.png",
    },
    {
      title: "Unified Communications",
      img: "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-8.png",
    },
    {
      title: "Services",
      img: "https://princetonconnective.com/wp-content/uploads/2024/07/Mask-group-9.png",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#ffffff] to-[#d7dde9]">
      <div className="max-w-full mx-auto px-16">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="text-[#cc1d2e]">Explore</span> Princeton Connective
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white text-center">
                <h3 className="text-lg sm:text-xl font-semibold drop-shadow">
                  {item.title}
                </h3>
                <button
                  onClick={() => router.push("/contactUs")}
                  className="mt-4 inline-block px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-b from-[#CC1D2E] to-[#56101C]"
                >
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
