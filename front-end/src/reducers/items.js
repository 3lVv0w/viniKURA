const defaultState = {};

const items = (state = defaultState, action) => {
  switch (action.type) {
    case 'ITEMS_ADDED': {
      const { items } = action.payload;
      return items;
    }
    case 'ITEM_SELECTED': {
      const { itemId, price } = action.payload;
      return {
        ...state,
        [itemId]: {
          ...state[itemId],
          isSelected: true,
          price,
        },
      };
    }
    case 'ITEM_UNSELECTED': {
      const { itemId } = action.payload;
      return {
        ...state,
        [itemId]: {
          ...state[itemId],
          isSelected: false,
          price: null,
        },
      };
    }
    default:
      return state;
  }
};

export default items;

export const getItemIds = state => (
  Object.keys(state)
);
export const getItem = (state, id) => (
  state[id]
);
export const getSelectedItemIds = state => (
  Object.keys(state).filter(id => (
    (state[id].isSelected)
  ))
);
export const getItemIdsByFilter = (state, filters) => {
  // check if item contains this tag
  const result = Object.keys(state)
    .filter((id) => {
      const { tags } = state[id];
      return filters.every(filterName => tags.includes(filterName));
    });
  return result;
};
