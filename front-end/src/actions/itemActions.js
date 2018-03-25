export const itemSelected = (itemId, price) => ({
  type: 'ITEM_SELECTED',
  payload: { itemId, price },
});

export const itemUnselected = itemId => ({
  type: 'ITEM_UNSELECTED',
  payload: { itemId },
});

export const itemsAdded = items => ({
  type: 'ITEMS_ADDED',
  payload: { items },
});

export const loadItems = () => async (dispatch) => {
  const response = await fetch('https://d6415d7f.ngrok.io/api/v1/products/');
  const data = await response.json();
  const curated = data.map(item => item.data);
  const dictionary = curated.reduce((acc, cur) => {
    acc[cur.uuid] = { ...cur };
    return acc;
  }, {});
  dispatch(itemsAdded(dictionary));
};
