const defaultState = {
  box0000000001: {
    items: [
      'item0000000001',
      'item0000000002',
    ],
  },
  box0000000002: {
    items: [
      'item0000000003',
    ],
  },
};

const boxes = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default boxes;
