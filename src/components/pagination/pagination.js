import React from "react";
import "./pagination.css";
import { connect } from "react-redux";
import {setCurrentPage} from "../../actions";

const Pagination = ({currentPage, totalPages, setCurrentPage}) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {
        pages.map((page, idx) => {
          return (
            <div key={idx} className={currentPage === page ? "pagination-page current" : "pagination-page"}
                 onClick={() => setCurrentPage(page)}>
              <span>{page}</span>
            </div>
          )
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    totalPages: state.totalPages
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
