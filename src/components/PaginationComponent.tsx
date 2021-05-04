import React, { useState } from "react";
import { Nav, Pagination } from "react-bootstrap";
import { PaginationPropsType } from "./types";

const FinitePagination: React.FC<PaginationPropsType> = ({
  itemsPerPage,
  totalItems,
  onPageChanged,
}: PaginationPropsType) => {
  let totalPages = 0;

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    totalPages = totalPages + 1;
  }

  let [active, setActive] = useState<number>(1);
  let items = [];

  if (totalPages <= 5 || active <= 2) {
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => {
            setActive(number);
            if (active !== number) {
              onPageChanged(number - 1);
            }
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
    items.push(<Pagination.Ellipsis />);
    items.push(
      <Pagination.Item
        key={totalPages}
        active={active === totalPages}
        onClick={() => {
          setActive(totalPages);
          onPageChanged(totalPages - 1);
        }}
      >
        {totalPages}
      </Pagination.Item>
    );
  } else {
    items.push(
      <Pagination.Item
        key={1}
        onClick={() => {
          setActive(1);
          onPageChanged(0);
        }}
      >
        {1}
      </Pagination.Item>
    );
    items.push(<Pagination.Ellipsis />);
    for (let number = active - 2; number < active; number++) {
      if (number > 1) {
        items.push(
          <Pagination.Item
            key={number}
            onClick={() => {
              setActive(number);
              onPageChanged(number - 1);
            }}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
    items.push(
      <Pagination.Item
        key={active}
        active={true}
        onClick={() => {
          setActive(active);
          onPageChanged(active - 1);
        }}
      >
        {active}
      </Pagination.Item>
    );
    for (let number = active + 1; number <= active + 2; number++) {
      if (number < totalPages) {
        items.push(
          <Pagination.Item
            key={number}
            onClick={() => {
              setActive(number);
              onPageChanged(number - 1);
            }}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
    if (active !== totalPages) {
      items.push(<Pagination.Ellipsis />);
      items.push(
        <Pagination.Item
          key={totalPages}
          active={active === totalPages}
          onClick={() => {
            setActive(totalPages);
            onPageChanged(totalPages - 1);
          }}
        >
          {totalPages}
        </Pagination.Item>
      );
    }
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
export default FinitePagination;
