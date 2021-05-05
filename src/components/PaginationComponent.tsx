import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { PaginationPropsType } from "./types";

const FinitePagination: React.FC<PaginationPropsType> = ({
  itemsPerPage,
  totalItems,
  onPageChanged,
  key,
}: PaginationPropsType) => {
  let totalPages = 0;

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    totalPages = totalPages + 1;
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [key]);

  let [currentPage, setCurrentPage] = useState<number>(1);
  let items = [];

  if (totalPages <= 1 ) {
    // Do nothing
  } else if (totalPages <= 5 || currentPage <= 2) {
    for (let number = 1; number <= 5 && number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => {
            setCurrentPage(number);
            if (currentPage !== number) {
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
        active={currentPage === totalPages}
        onClick={() => {
          setCurrentPage(totalPages);
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
          setCurrentPage(1);
          onPageChanged(0);
        }}
      >
        {1}
      </Pagination.Item>
    );
    items.push(<Pagination.Ellipsis />);
    for (let number = currentPage - 2; number < currentPage; number++) {
      if (number > 1) {
        items.push(
          <Pagination.Item
            key={number}
            onClick={() => {
              setCurrentPage(number);
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
        key={currentPage}
        active={true}
        onClick={() => {
          setCurrentPage(currentPage);
          onPageChanged(currentPage - 1);
        }}
      >
        {currentPage}
      </Pagination.Item>
    );
    for (let number = currentPage + 1; number <= currentPage + 2; number++) {
      if (number < totalPages) {
        items.push(
          <Pagination.Item
            key={number}
            onClick={() => {
              setCurrentPage(number);
              onPageChanged(number - 1);
            }}
          >
            {number}
          </Pagination.Item>
        );
      }
    }
    if (currentPage !== totalPages) {
      items.push(<Pagination.Ellipsis />);
      items.push(
        <Pagination.Item
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => {
            setCurrentPage(totalPages);
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
      <Pagination>{items}</Pagination>
    </div>
  );

  return paginationBasic;
};
export default FinitePagination;
