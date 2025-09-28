"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);
  const router = useRouter();

  const handleSubmenuEnter = (submenuId) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setSubmenuOpen(submenuId);
  };

  const handleSubmenuLeave = () => {
    const timeout = setTimeout(() => {
      setSubmenuOpen(null);
    }, 200);
    setLeaveTimeout(timeout);
  };

  const handleNestedSubmenuEnter = (nestedId) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setSubmenuOpen(nestedId);
  };

  useEffect(() => {
    return () => {
      if (leaveTimeout) {
        clearTimeout(leaveTimeout);
      }
    };
  }, [leaveTimeout]);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-20 xl:px-28 py-2">
        <div className="flex items-center">
          <img
            src="https://princetonconnective.com/wp-content/uploads/2024/09/princeton-logo1.png"
            alt="Princeton Logo"
            className="h-12 sm:h-12 mr-2"
          />
        </div>
        <ul className="hidden xl:flex items-center gap-6 font-medium text-black">
          <li
            className="relative group"
            onMouseEnter={() => handleSubmenuEnter("voice")}
            onMouseLeave={handleSubmenuLeave}
          >
            <button className="hover:text-red-600 flex items-center gap-1">
              VOICE <MdKeyboardArrowDown />
            </button>
            <div
              className={`absolute left-0 top-full bg-white shadow-md rounded z-20 min-w-[200px] ${
                submenuOpen === "voice" ? "block" : "hidden"
              }`}
              onMouseEnter={() => handleSubmenuEnter("voice")}
              onMouseLeave={handleSubmenuLeave}
            >
              <ul className="py-2">
                <li
                  className="relative submenu-group"
                  onMouseEnter={() => handleNestedSubmenuEnter("cellular")}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                  >
                    CELLULAR <MdKeyboardArrowDown />
                  </Link>
                  <ul
                    className={`absolute left-full top-0 bg-white shadow-md rounded ml-0 min-w-[200px]
                       ${submenuOpen === "cellular" ? "block" : "hidden"}
                    `}
                    onMouseEnter={() => handleNestedSubmenuEnter("cellular")}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                      >
                        AT&T
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                      >
                        T-Mobile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                      >
                        Verizon
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="relative submenu-group"
                  onMouseEnter={() => handleNestedSubmenuEnter("voip")}
                >
                  <Link
                    href="#"
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                  >
                    VOIP <MdKeyboardArrowDown />
                  </Link>
                  <ul
                    className={`absolute left-full top-0 bg-white shadow-md rounded ml-0 min-w-[200px] ${
                      submenuOpen === "voip" ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => handleNestedSubmenuEnter("voip")}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                      >
                        RingCentral
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                      >
                        Nextiva
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                      >
                        8x8
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleSubmenuEnter("services")}
            onMouseLeave={handleSubmenuLeave}
          >
            <button className="hover:text-red-600 flex items-center gap-1">
              SERVICES <MdKeyboardArrowDown />
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white shadow-md rounded z-20 min-w-[200px] ${
                submenuOpen === "services" ? "block" : "hidden"
              }`}
              onMouseEnter={() => handleSubmenuEnter("services")}
              onMouseLeave={handleSubmenuLeave}
            >
              <li
                className="relative submenu-group"
                onMouseEnter={() =>
                  handleNestedSubmenuEnter("services-cellular")
                }
              >
                <Link
                  href="#"
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  CELLULAR <MdKeyboardArrowDown />
                </Link>
                <ul
                  className={`absolute left-full top-0 bg-white shadow-md rounded ml-0 min-w-[200px] ${
                    submenuOpen === "services-cellular" ? "block" : "hidden"
                  }`}
                  onMouseEnter={() =>
                    handleNestedSubmenuEnter("services-cellular")
                  }
                  onMouseLeave={handleSubmenuLeave}
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                    >
                      Business Plans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                    >
                      Device Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="relative submenu-group"
                onMouseEnter={() => handleNestedSubmenuEnter("services-voip")}
              >
                <Link
                  href="#"
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  VOIP <MdKeyboardArrowDown />
                </Link>
                <ul
                  className={`absolute left-full top-0 bg-white shadow-md rounded ml-0 min-w-[200px] ${
                    submenuOpen === "services-voip" ? "block" : "hidden"
                  }`}
                  onMouseEnter={() => handleNestedSubmenuEnter("services-voip")}
                  onMouseLeave={handleSubmenuLeave}
                >
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                    >
                      Setup & Installation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                    >
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                    >
                      Training
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/data" className="hover:text-red-600">
              DATA
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleSubmenuEnter("communications")}
            onMouseLeave={handleSubmenuLeave}
          >
            <button className="hover:text-red-600 flex items-center gap-1">
              COMMUNICATIONS <MdKeyboardArrowDown />
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white shadow-md rounded z-20 min-w-[200px] ${
                submenuOpen === "communications" ? "block" : "hidden"
              }`}
              onMouseEnter={() => handleSubmenuEnter("communications")}
              onMouseLeave={handleSubmenuLeave}
            >
              <li>
                <Link
                  href="/communications/microsoft-365"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Microsoft 365
                </Link>
              </li>{" "}
              <li>
                <Link
                  href="/communications/microsoft-365"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Google Workspace
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleSubmenuEnter("company")}
            onMouseLeave={handleSubmenuLeave}
          >
            <button className="hover:text-red-600 flex items-center gap-1">
              COMPANY <MdKeyboardArrowDown />
            </button>
            <ul
              className={`absolute left-0 mt-2 bg-white shadow-md rounded z-20 min-w-[200px] ${
                submenuOpen === "company" ? "block" : "hidden"
              }`}
              onMouseEnter={() => handleSubmenuEnter("company")}
              onMouseLeave={handleSubmenuLeave}
            >
              <li>
                <Link
                  href="/company/aboutUs"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/company/blogs"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  BLOGS
                </Link>
              </li>
              <li>
                <Link
                  href="/contactUs"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="bg-red-700 text-white px-5 py-2 rounded-full hover:bg-red-800 cursor-pointer"
            onClick={() => {
              router.push("/contactUs");
            }}
          >
            CONTACT US
          </button>
          <div className="hidden xl:flex items-center relative border rounded-full px-3 py-2">
            <IoIosSearch />
            <input
              type="text"
              placeholder="Search.."
              className="pl-1 outline-none border-none focus:ring-0 text-sm w-full"
            />
          </div>
          <button
            className="xl:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="xl:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 gap-2 font-medium">
            <li>
              <Link href="#">VOICE</Link>
            </li>
            <li>
              <Link href="#">SERVICES</Link>
            </li>
            <li>
              <Link href="#">DATA</Link>
            </li>
            <li>
              <Link href="#">COMMUNICATIONS</Link>
            </li>
            <li>
              <Link href="#">COMPANY</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
