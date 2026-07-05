"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";

type BreadcrumbProps = {
  labels?: Record<string, string>;
};

export const Breadcrumb = ({
  labels = {},
}: BreadcrumbProps) => {
  const pathname = usePathname();

  const paths = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-2 text-sm text-gray-500 pb-5"
    >
      <Link
        href="/"
        className="hover:text-black transition-colors"
      >
        Inicio
      </Link>

      {paths.map((path, index) => {
        const href =
          "/" + paths.slice(0, index + 1).join("/");

        const isLast =
          index === paths.length - 1;

        const label =
          labels[path] ??
          path.charAt(0).toUpperCase() +
            path.slice(1);

        return (
          <div
            key={href}
            className="flex items-center gap-2"
          >
            <FaChevronRight size={10} />

            {isLast ? (
              <span className="font-semibold text-black">
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="hover:text-black transition-colors"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};