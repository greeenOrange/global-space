import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ totalLaunches, launchesPerPage, currentPage, setCurrentPage }) => {
  if (totalLaunches === 0) {
    return <p>No launches found.</p>;
  }
  const totalPages = Math.ceil(totalLaunches / launchesPerPage);
   const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1); 
  };

  return (
    <nav className="d-flex align-item-center justify-content-center">
      <ReactPaginate
        breakLabel={"..."}
        nextLabel=""
        previousLabel=""
        pageCount={totalPages}
        pageRangeDisplayed={3} 
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
      />
    </nav>
  );
};

export default Pagination;
