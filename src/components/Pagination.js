import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <BootstrapPagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
        {number}
      </BootstrapPagination.Item>
    );
  }

  return (
    <BootstrapPagination>{items}</BootstrapPagination>
  );
};

export default Pagination;
