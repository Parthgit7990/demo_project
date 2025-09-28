import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTimes } from "react-icons/fa";

export default function Footer() {
  const ContactForm = () => (
    <div className="bg-[#0e335a] p-6 md:p-8 rounded border border-white/5 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold tracking-wide">CONTACT US</h3>
        <div className="flex justify-end gap-3">
          <button className="bg-[#0b5090] p-2 rounded-lg w-9 h-9 grid place-items-center">
            <FaFacebookF />
          </button>
          <button className="bg-[#0b5090] p-2 rounded-full w-9 h-9 grid place-items-center">
            <FaInstagram />
          </button>
          <button className="bg-[#0b5090] p-2 rounded-full w-9 h-9 grid place-items-center">
            <FaTimes />
          </button>
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="h-12 px-4 rounded-tl-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="h-12 px-4 rounded-tr-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company Name"
            className="h-12 px-4 rounded-tl-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
          />
          <input
            type="text"
            placeholder="Job Title"
            className="h-12 px-4 rounded-tr-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="h-12 px-4 rounded-tl-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
          />
          <input
            type="text"
            placeholder="State"
            className="h-12 px-4 rounded-tr-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Contact Number"
          className="h-12 px-4 rounded-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
        />
        <textarea
          placeholder="Message"
          rows="3"
          className="p-4 rounded-b-lg bg-white text-black w-full placeholder-gray-500 shadow-sm focus:outline-none"
        ></textarea>

        <button
          className="text-white font-semibold px-6 py-2 rounded 
                   bg-gradient-to-b from-[#CC1D2E] to-[#56101C]"
        >
          Contact Us
        </button>
      </form>
      <p className="mt-6 text-xl">
        500 Alexander Park, #301, Princeton, NJ 08540.
      </p>

      <div className="flex items-center gap-2 mt-3">
        <FaPhoneAlt className="text-xl" />
        <p className="font-bold">732-TECH-365</p>
      </div>
    </div>
  );

  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://princetonconnective.com/wp-content/uploads/2025/01/3645c20f59b95ce4cc7947bddf289cc1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-[#0a2a4d]/30"></div>
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="flex items-start max-sm:flex-col md:items-start gap-6 md:gap-8 justify-center py-8 md:py-12">
          <div className="w-full md:w-auto">
            <img
              src="https://princetonconnective.com/wp-content/uploads/2025/01/Frame.png"
              alt="Princeton Connective"
              className="h-14 md:h-14 w-auto"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-4 md:text-left text-center w-full">
            <div>
              <h3 className="font-bold mb-3 text-lg">Voice</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Cellular
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    VOIP
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-lg">Data</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/data" className="hover:underline">
                    Data
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-lg">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Mobile Device Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Network Cabling
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Racking & Stacking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Break-Fix
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-lg">Unified Communications</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/communications/microsoft-365"
                    className="hover:underline"
                  >
                    Microsoft 365
                  </Link>
                </li>
                <li>
                  <Link
                    href="/communications/microsoft-365"
                    className="hover:underline"
                  >
                    Google Workspace
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-auto self-start">
              <h3 className="font-bold mb-3 text-lg">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/company/aboutUs" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contactUs" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </footer>
  );
}
