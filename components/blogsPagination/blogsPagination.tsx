"use client";
import { useState } from "react";

interface PaginationProps {
  totalPages: number;
}

export default function BlogsPagination({ totalPages }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const getVisiblePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="flex justify-center items-center space-x-2 py-6">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="lg:text-[27px] lg:w-[27px] pb-1 pr-4 text-black hover:opacity-70 disabled:opacity-30"
            disabled={currentPage === 1}
          >
            &laquo;
          </button>

          {getVisiblePages().map((item, index) =>
            item === "..." ? (
              <span key={`dots-${index}`} className="px- text-sm text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={item}
                onClick={() => goToPage(Number(item))}
                className={`w-7 h-7  rounded-full text-sm flex items-center justify-center ${
                  currentPage === item
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            className="lg:text-[27px] pb-1 pl-4 lg:w-[27px] text-black hover:opacity-70 disabled:opacity-30"
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden">
        <div className="flex justify-center items-center space-x-2 py-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="text-[27px] w-[27px] pb-1 pr-4 text-black hover:opacity-70 disabled:opacity-30"
            disabled={currentPage === 1}
          >
            &laquo;
          </button>

          {getVisiblePages().map((item, index) =>
            item === "..." ? (
              <span key={`dots-${index}`} className="px- text-sm text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={item}
                onClick={() => goToPage(Number(item))}
                className={`w-7 h-7  rounded-full text-sm flex items-center justify-center ${
                  currentPage === item
                    ? "bg-black text-white"
                    : "text-black hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            className="text-[27px] pb-1 pl-4 w-[27px] text-black hover:opacity-70 disabled:opacity-30"
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </>
  );
}
