import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ProductGridNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function ProductGridNavigation({
  currentPage,
  totalPages,
  onPageChange,
}: ProductGridNavigationProps) {
  const renderPageButton = (pageNumber: number) => (
    <Button
      key={pageNumber}
      variant={currentPage === pageNumber ? "secondary" : "outline"}
      size="icon"
      onClick={() => onPageChange(pageNumber)}
      className={`h-10 w-10 ${
        currentPage === pageNumber
          ? "bg-[#4A6741] text-[#E8F3E0] hover:bg-[#5A7B50]"
          : "bg-[#3D4F33] text-[#B8E0A2] hover:bg-[#4A6741] hover:text-[#E8F3E0]"
      }`}
    >
      {pageNumber}
    </Button>
  );

  return (
    <div className="flex items-center justify-center space-x-2 rounded-lg bg-[#2C3A24] p-4">
      {renderPageButton(1)}
      {currentPage > 3 && <span className="text-[#B8E0A2]">...</span>}

      {currentPage > 2 && renderPageButton(currentPage - 1)}
      {currentPage > 1 &&
        currentPage < totalPages &&
        renderPageButton(currentPage)}
      {currentPage < totalPages - 1 && renderPageButton(currentPage + 1)}

      {currentPage < totalPages - 2 && (
        <span className="text-[#B8E0A2]">...</span>
      )}
      {totalPages > 1 && renderPageButton(totalPages)}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="h-10 w-10 bg-[#3D4F33] text-[#B8E0A2] hover:bg-[#4A6741] hover:text-[#E8F3E0] disabled:opacity-50"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Go to last page</span>
      </Button>
    </div>
  );
}
