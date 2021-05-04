import React, { useState } from "react";
import { Nav, Pagination } from "react-bootstrap";
import { PaginationPropsType } from "./types";

const PaginationProp: React.FC<PaginationPropsType> = ({
  hospitalsPerPage,
  totalHospitals,
  changePage,
}: PaginationPropsType) => {
  let totalPages = 0;

  for (let i = 1; i <= Math.ceil(totalHospitals / hospitalsPerPage); i++) {
    totalPages = totalPages + 1;
  }

  let [active, setActive] = useState<number>(1);
  let items = [];

 
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {
            setActive(number);
            if (active !== number) {
              changePage(number - 1);
            }
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
  

  const paginationBasic = (
    <div>
      <Nav
        className="m-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Pagination>{items}</Pagination>
      </Nav>
    </div>
  );

  return paginationBasic;
};
export default PaginationProp;
