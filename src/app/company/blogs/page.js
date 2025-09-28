import WhatWeProvide from "@/components/ui/Common/WhatWeProvide/WhatWeProvide";
import React from "react";

const Blogs = () => {
  const FirstSection = () => (
    <section
      className="relative w-full min-h-[500px] h-[75vh] overflow-hidden"
      style={{
        backgroundImage:
          "url(https://princetonconnective.com/wp-content/uploads/2024/07/unsplash_qku9cbxdJRg-4.png)",
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
            <span className="text-[#CC1D2E]">Our</span>{" "}
            <span className="text-white">Blog</span>
          </h1>

          <p className="text-white text-lg leading-relaxed max-w-4xl mb-8">
            Stay in touch with the latest innovations in tech, we’ll keep you
            connected in all the latest trends and most recent events.
          </p>
        </div>
      </div>
    </section>
  );

  const BlogCardSection = () => (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <article className="md:col-span-1">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative aspect-[16/10]">
                <img
                  src="https://princetonconnective.com/wp-content/uploads/2024/07/dns-security.webp"
                  alt="DNS Security"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h2 className="text-slate-900 text-lg sm:text-xl font-semibold leading-snug mb-2">
                  What is a DNS Security Threat?
                </h2>
                <div className="flex items-center text-slate-500 text-xs sm:text-sm mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                  >
                    <path d="M6.75 3A2.25 2.25 0 004.5 5.25v13.5A2.25 2.25 0 006.75 21h10.5A2.25 2.25 0 0019.5 18.75V5.25A2.25 2.25 0 0017.25 3H6.75zm.75 2.25h9a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75zM6 10.5h12v7.125a.375.375 0 01-.375.375H6.375A.375.375 0 016 17.625V10.5z" />
                  </svg>
                  July 17, 2024
                </div>
                <p className="text-slate-700 leading-relaxed text-sm line-clamp-2">
                  In the vast expanse of the internet, the Domain Name System
                  (DNS) plays a crucial role in translating domain names into IP
                  addresses.
                </p>
              </div>
            </div>
          </article>
          <aside className="md:col-span-2 w-full">
            <div className="flex md:justify-end">
              <div className="flex gap-2 mb-6 w-full md:w-auto md:ml-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-56 border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <button className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-md text-sm whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>
            <div className="md:pl-4 md:ml-auto md:max-w-[330px]">
              <h3 className="text-slate-900 font-semibold text-base mb-1">
                Categories
              </h3>
              <hr className="border-slate-200 mb-2" />
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="text-red-600 hover:text-red-700">
                    Cybersecurity (1)
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
  return (
    <div>
      <FirstSection />
      <BlogCardSection />
      <WhatWeProvide isAbout={true} />
    </div>
  );
};

export default Blogs;
