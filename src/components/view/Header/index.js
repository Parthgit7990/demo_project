"use client";
import Button from "@/components/ui/Common/Button";
import React, { useEffect, useState } from "react";
import { Topbar } from "./topBar";
import { Navbar } from "./navBar";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar />
    </header>
  );
}
