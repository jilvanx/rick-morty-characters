import React from "react";
import { Pagination } from "@nextui-org/react";

type PaginationSectionProps = {
  page: number;
  totalPages: number;
  handleChangePage: (p: number) => void;
};

export const PaginationSection = ({
  page = 1,
  totalPages = 1,
  handleChangePage,
}: PaginationSectionProps) => {
  return (
    <section>
      <Pagination
        className="my-10"
        initialPage={1}
        total={totalPages}
        page={page}
        onChange={handleChangePage}
      />
    </section>
  );
};
