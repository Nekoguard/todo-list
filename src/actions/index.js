const itemsRequested = () => {
  return {
    type: "FETCH_ITEMS_REQUEST"
  }
};

const itemsLoaded = (newItems) => {
  return {
    type: "FETCH_ITEMS_SUCCESS",
    payload: newItems
  };
};

const itemsError = (error) => {
  return {
    type: "FETCH_ITEMS_FAILURE",
    payload: error
  };
};

const itemCompleted = (itemId) => {
  return {
    type: "ITEM_MARKED_AS_COMPLETED",
    payload: itemId
  }
}

const itemAddedToList = (title) => {
  return {
    type: "ITEM_ADDED_TO_LIST",
    payload: title
  }
}

const itemDeletedFromList = (itemId) => {
  return {
    type: "ITEM_DELETED_FROM_LIST",
    payload: itemId
  }
}

const onTitleChange = (e) => {
  return {
    type: "CURRENT_TITLE_CHANGED",
    payload: e.target.value ? e.target.value : ""
  }
}

const fetchItems = (todoListService, dispatch) => {
  dispatch(itemsRequested());

  todoListService.getTodos()
    .then((data) => dispatch(itemsLoaded(data.reverse())))
    .catch((err) => dispatch(itemsError(err)));
};


const onItemToggleCompleted = (id) => {
  return {
    type: "ITEM_TOGGLED_COMPLETED",
    payload: id
  }
}

const onItemDeleted = (id) => {
  return {
    type: "ITEM_DELETED_FROM_LIST",
    payload: id
  }
}

const setCurrentPage = (page) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: page
  }
}

export {
  itemAddedToList,
  itemCompleted,
  itemDeletedFromList,
  itemsError,
  itemsLoaded,
  itemsRequested,
  fetchItems,
  onTitleChange,
  onItemToggleCompleted,
  onItemDeleted,
  setCurrentPage
}
