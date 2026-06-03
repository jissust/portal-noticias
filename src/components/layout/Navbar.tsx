"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "@/components/ui/navigation/NavLink";
import { usePathname } from "next/navigation";
import { SocialNetworks } from "@/components/ui/socialNetworks/SocialNetworks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "es";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (method: string) => {
    console.log(method);
    //sendGTMEvent({ event: "contact_click", method, location: "footer" });
  };

  return (
    <nav
      className={`w-full text-white px-6 py-2 fixed top-0 z-50 transition-colors duration-300 ${scrolled || isOpen ? "bg-black" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3">
        <h1
          className="text-xl font-bold justify-self-start font-cormorant text-[60px]"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <Link href={`/${lang}`} className="hover:text-gray-300">
            LOGO
          </Link>
        </h1>

        <div
          className="hidden items-center md:flex gap-6 text-md justify-self-center"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <NavLinks />
        </div>

        <div
          className="hidden items-center md:flex gap-6 text-md justify-self-end"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <SocialNetworks />
        </div>

        <button
          className="md:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-center">
          <NavLinks />
          <SocialNetworks />
        </div>
      )}
    </nav>
  );
};
