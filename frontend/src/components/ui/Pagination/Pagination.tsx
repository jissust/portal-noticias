"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  currentPage: number;
  totalPages: number;
};

export const Pagination = ({
  currentPage,
  totalPages,
}: Props) => {
  const searchParams = useSearchParams();

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set("page", String(page));

    return `?${params.toString()}`;
  };

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];

    const start = Math.max(
      1,
      currentPage - 2
    );

    const end = Math.min(
      totalPages,
      currentPage + 2
    );

    // Primera página
    if (start > 1) {
      pages.push(1);

      if (start > 2) {
        pages.push("...");
      }
    }

    // Páginas visibles
    for (
      let i = start;
      i <= end;
      i++
    ) {
      pages.push(i);
    }

    // Última página
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getVisiblePages();

  return (
    <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">

      {/* Anterior */}
      {currentPage > 1 && (
        <Link
          href={createPageLink(
            currentPage - 1
          )}
          className="px-4 py-2 rounded bg-gray-100"
        >
          <FaChevronLeft />
        </Link>
      )}

      {/* Números */}
      {pages.map(
        (page, index) => {
          if (page === "...") {
            return (
              <span
                key={`dots-${index}`}
                className="px-2"
              >
                ...
              </span>
            );
          }

          return (
            <Link
              key={page}
              href={createPageLink(
                page as number
              )}
              className={`
                px-4 py-2 rounded
                ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-gray-100"
                }
              `}
            >
              {page}
            </Link>
          );
        }
      )}

      {/* Siguiente */}
      {currentPage < totalPages && (
        <Link
          href={createPageLink(
            currentPage + 1
          )}
          className="px-4 py-2 rounded bg-gray-100"
        >
          <FaChevronRight />
        </Link>
      )}
    </div>
  );
};