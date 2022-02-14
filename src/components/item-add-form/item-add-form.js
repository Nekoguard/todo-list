import React from "react";
import { connect } from "react-redux";
import "./item-add-form.css";
import { itemAddedToList, onTitleChange } from "../../actions";

const ItemAddForm = ({currentTitle, onTitleChange, onItemAdded}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const title = currentTitle;

    onTitleChange(e)

    const cb = onItemAdded || (() => {});

    if (title.length > 0) cb(title);
  };

  return (
    <form className="item-add-form" onSubmit={onSubmit}>
      <input type="text" className="item-add-input" placeholder="What needs to be done?"
             onChange={onTitleChange} value={currentTitle} />

      <button type="submit" className="item-add-btn">Add</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currentTitle: state.currentTitle
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleChange: (e) => dispatch(onTitleChange(e)),
    onItemAdded: (title) => dispatch(itemAddedToList(title))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm);
