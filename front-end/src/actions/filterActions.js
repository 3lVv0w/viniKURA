export const filterAdded = newFilter => ({
  type: 'FILTER_ADDED',
  payload: { newFilter },
});
export const filterRemoved = removedFilter => ({
  type: 'FILTER_REMOVED',
  payload: { removedFilter },
});
