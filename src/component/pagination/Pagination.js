import React from "react";
import ReactPagination from "react-paginate";

function Pagination({pageCount, onPageChange, currentPage }) {
    return(
        <ReactPagination
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={<a href="#!">...</a>}
            pageCount={pageCount}
            onPageChange={onPageChange}
            forcePage={currentPage}
            pageRangeDisplayed={10}
            marginPagesDisplayed={0}
            containerClassName={"pagination"}
            pageLinkClassName={"pagination_link"}
            activeClassName={"pagination_active_link"}
        />
    );
}

export default Pagination;