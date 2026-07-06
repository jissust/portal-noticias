"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { categoryType } from "@/types/category";
import { NavLinks } from "../Navigation/NavLink";

type Props = {
  categories: categoryType[];
};

export const NavbarClient = ({
  categories,
}: Props) => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <nav className="w-full text-white px-6 py-2 top-0 z-50 bg-black fixed">
      <div className="max-w-7xl mx-auto grid grid-cols-2 py-8">

        <h1 className="text-xl font-bold">
          <Link href="/">
            LOGO
          </Link>
        </h1>

        <div className="hidden md:flex gap-6 justify-self-end">
          <NavLinks
            categories={categories}
          />
        </div>

        <button
          className="md:hidden justify-self-end"
          onClick={() =>
            setIsOpen(!isOpen)
          }
        >
          {isOpen
            ? <FaTimes />
            : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-center">
          <NavLinks
            categories={categories}
          />
        </div>
      )}
    </nav>
  );
};