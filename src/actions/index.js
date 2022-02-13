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

const itemAddedToList = (itemId) => {
  return {
    type: "ITEM_ADDED_TO_LIST",
     payload: itemId
  }
}

const itemDeletedFromList = (itemId) => {
  return {
    type: "ITEM_DELETED_FROM_LIST",
    payload: itemId
  }
}

const fetchItems = (todoListService, dispatch) => {
  dispatch(itemsRequested());

  todoListService.getTodos()
    .then((data) => dispatch(itemsLoaded(data)))
    .catch((err) => dispatch(itemsError(err)));
};

export {
  itemAddedToList,
  itemCompleted,
  itemDeletedFromList,
  itemsError,
  itemsLoaded,
  itemsRequested,
  fetchItems
}
