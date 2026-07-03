"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

type SelectOption = {
  id: number | string;
  slug: string;
  name: string;
};

type CustomSelectProps = {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (option: SelectOption | null) => void;
};

export const CustomSelect = ({
  options,
  placeholder = "Seleccionar opción",
  value,
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((item) => item.slug === value) || null;

  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [options, search]);

  const handleSelect = (option: SelectOption | null) => {
    onChange?.(option);

    setIsOpen(false);
    setSearch("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-12 border rounded-lg px-4 flex items-center justify-between bg-white"
      >
        <span>{selectedOption?.name || placeholder}</span>

        <FaChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`
          absolute left-0 top-full mt-2 w-full bg-white border rounded-lg shadow-lg overflow-hidden z-50
          transition-all duration-300 origin-top
          ${
            isOpen
              ? "opacity-100 scale-y-100 visible"
              : "opacity-0 scale-y-95 invisible"
          }
        `}
      >
        <div className="p-3 border-b">
          <div className="relative">
            <FaSearch size={16} className="absolute left-3 top-3" />

            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded"
            />
          </div>
        </div>

        <ul className="max-h-60 overflow-y-auto">
          <li
            className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect(null)}
          >
            {placeholder}
          </li>

          {filteredOptions.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
            >
              {option.name}
            </li>
          ))}

          {filteredOptions.length === 0 && (
            <li className="px-4 py-3 text-gray-400">Sin resultados</li>
          )}
        </ul>
      </div>
    </div>
  );
};
