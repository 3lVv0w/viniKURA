const defaultState = [];

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_ADDED': {
      const { newFilter } = action.payload;
      return [newFilter].concat(state.filter(filterName => (
        filterName !== newFilter
      )));
    }
    case 'FILTER_REMOVED': {
      const { removedFilter } = action.payload;
      return state.filter(filterName => (
        filterName !== removedFilter
      ));
    }
    default:
      return state;
  }
};

export default filters;
