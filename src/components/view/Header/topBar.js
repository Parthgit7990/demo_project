/* eslint-disable prettier/prettier */
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const Topbar = () => {
  return (
    <div className="bg-gray-900 text-white text-xs">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-28 py-2">
        <span>Cellular, Data, VOIP</span>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-blue-500">
            <FaFacebookF />
          </Link>
          <Link href="#" className="hover:text-pink-500">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <FaXTwitter />
          </Link>
          <span className="hidden sm:inline text-[#c4c4c4]">
            Call Us Today!
          </span>
          <div className="flex font-semibold">
            <img
              src="https://princetonconnective.com/wp-content/uploads/2024/10/united-states.webp"
              alt="Princeton Logo"
              className="h-3.5 mr-2"
            />{" "}
            <span className="text-[#c4c4c4]">732-TECH-365 (USA)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
