const initialState = {
  todoItems: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUEST":
      return {
        todoItems: [],
        loading: true,
        error: null
      };
    case "FETCH_ITEMS_SUCCESS":
      return {
        todoItems: [
          ...action.payload
        ],
        loading: false,
        error: null
      };
    case "FETCH_ITEMS_FAILURE":
      return {
        todoItems: [],
        loading: false,
        error: action.payload
      };
    case "ITEM_MARKED_AS_COMPLETED":
      return state;
    case "ITEM_ADDED_TO_LIST":
      return {
        ...state,
        todoItems: action.payload
      };
    case "ITEM_DELETED_FROM_LIST":
      return state;
    default:
      return state;
  }
}

export default reducer;
