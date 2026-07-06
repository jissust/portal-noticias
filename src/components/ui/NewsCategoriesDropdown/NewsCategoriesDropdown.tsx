"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { categoryType } from "@/types/category";

type Props = {
  categories: categoryType[];
};

export const NewsCategoriesDropdown = ({
  categories,
}: Props) => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <div className="relative"
      onMouseEnter={() =>
        setIsOpen(true)
      }
      onMouseLeave={() =>
        setIsOpen(false)
      }
    >
      <button
        type="button"
        onClick={() =>
          setIsOpen((prev) => !prev)
        }
        className="
          flex
          items-center
          gap-2
          font-semibold
          text-white
          hover:text-gold
          transition-colors
        "
      >
        Noticias

        <FaChevronDown
          size={12}
          className={`
            transition-transform
            duration-300
            ${
              isOpen
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      <div
        className={`
          absolute
          top-full
          left-0
          mt-4
          w-64
          bg-black
          rounded-lg
          shadow-xl
          overflow-hidden
          z-50
          transition-all
          duration-300
          origin-top
          ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }
        `}
      >
        <Link
          href="/noticias"
          className="
            block
            px-5
            py-3
            hover:bg-gray-100
            hover:text-black
            font-semibold
            border-b
          "
        >
          Todas las noticias
        </Link>

        {categories.map(
          (category) => (
            <Link
              key={category.id}
              href={`/noticias/${category.slug}`}
              className="
                block
                px-5
                py-3
                hover:bg-gray-100
                hover:text-black
                transition-colors
                font-semibold
              "
            >
              {category.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
};