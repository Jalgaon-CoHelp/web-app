import React from "react";
import { PaginationPropsType } from "./types";

const Pagination: React.FC<PaginationPropsType> = ({
  hospitalsPerPage,
  totalHospitals,
  changePage,
}: PaginationPropsType) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalHospitals / hospitalsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <ul className="pagination pagination-sm flex-wrap">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item pagination-page-item">
            <button onClick={() => changePage(number - 1)} className="page-link pagination-page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
