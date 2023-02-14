import React from "react";

const Pagination = ({ handlePreviousPage, handleNextPage, page }) => {
  return (
    <div className="col-md-12">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;