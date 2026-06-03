"use client";
import Link from "next/link";
import { NavLinks } from "@/components/ui/navigation/NavLink";
import { SocialNetworks } from "@/components/ui/socialNetworks/SocialNetworks";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center text-lg  gap-2">
          <NavLinks />
        </div>

        <div className="flex justify-center h-full">
          <h2 className="text-2xl font-bold">
            <Link href={`/`} className="hover:text-gray-300">
              LOGO
            </Link>
          </h2>
        </div>

        <div>
          <h2 className="pb-4 font-semibold text-lg text-center">UBICACIÓN</h2>
          <SocialNetworks />
          <h2 className="pt-4 mt-8 font-semibold text-lg text-center border-t-1">
            UBICACIÓN
          </h2>
          <p className="text-sm text-center">DIRECCIÓN</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-t pt-6">
          {/* Columna izquierda */}
          <div className="text-sm text-center md:text-left font-semibold">
            © {new Date().getFullYear()} EMPRESA
          </div>

          {/* Columna derecha */}
          <div
            className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-4 
        text-sm 
        text-center 
        md:text-right
      "
          >
            <Link
              href={`/legal/aviso-legal`}
              className="hover:text-gray-300 font-semibold"
            >
              AVISO LEGAL
            </Link>
            <Link
              href={`/legal/politica-de-privacidad`}
              className="hover:text-gray-300 font-semibold"
            >
              POLÍTICA DE PRIVACIDAD
            </Link>

            <Link
              href={`/legal/politica-de-cookies`}
              className="hover:text-gray-300 font-semibold"
            >
              POLÍTICA DE COOKIES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
