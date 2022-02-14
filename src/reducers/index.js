const initialState = {
  todoItems: [],
  loading: true,
  error: null,
  currentTitle: "",
  editedItem: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUEST":
      return {
        ...state,
        todoItems: [],
        loading: true,
        error: null
      };
    case "FETCH_ITEMS_SUCCESS":
      return {
        ...state,
        todoItems: [
          ...action.payload
        ],
        loading: false,
        error: null
      };
    case "FETCH_ITEMS_FAILURE":
      return {
        ...state,
        todoItems: [],
        loading: false,
        error: action.payload
      };
    case "ITEM_ADDED_TO_LIST":
      const newItem = {
        id: state.todoItems.length + 1,
        userId: Math.floor(state.todoItems.length / 20) + 1,
        title: `${action.payload}`,
        completed: false
      };

      return {
        ...state,
        todoItems: [
          newItem,
          ...state.todoItems
        ]
      };
    case "ITEM_DELETED_FROM_LIST":
      return state;
    case "CURRENT_TITLE_CHANGED":
      return {
        ...state,
        currentTitle: action.payload
      }
    case "ITEM_TOGGLED_COMPLETED":
      const reversedItems = state.todoItems.reverse();
      const idx = reversedItems.findIndex(item => item.id === Number(action.payload));
      const oldItem = reversedItems[idx];
      const value = !oldItem["completed"];
      const item = { ...reversedItems[idx], "completed": value } ;

      const updatedItems = [
        ...reversedItems.slice(0, idx),
        item,
        ...reversedItems.slice(idx + 1)
      ];

      updatedItems.reverse();

      return {
        ...state,
        todoItems: [
          ...updatedItems
        ]
      }
    default:
      return state;
  }
}

export default reducer;
