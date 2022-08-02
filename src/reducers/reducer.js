const initialState = {
  filter: {
    all: false,
    nonStop: false,
    oneStop: false,
    twoStop: false,
    threeStop: false,
  },
  sort: {
    sortCheap: false,
    sortFast: false,
    sortOptimal: true,
  },
};

const reducer = (state = initialState, action) => {
  const allCheckControl = () => {
    if (state.filter.nonStop && state.filter.oneStop && state.filter.twoStop && state.filter.threeStop) {
      return true;
    }
    return false;
  };

  if (action.type === 'ALL') {
    state.filter.all = !state.filter.all;
    if (state.filter.all) {
      return (state = {
        ...state,
        filter: {
          all: true,
          nonStop: true,
          oneStop: true,
          twoStop: true,
          threeStop: true,
        },
      });
    } else {
      return (state = {
        ...state,
        filter: {
          all: false,
          nonStop: false,
          oneStop: false,
          twoStop: false,
          threeStop: false,
        },
      });
    }
  }

  if (action.type === 'NON_STOP') {
    state.filter.nonStop = !state.filter.nonStop;
    return (state = { ...state, filter: { ...state.filter, all: allCheckControl() } });
  }
  if (action.type === 'ONE_STOP') {
    state.filter.oneStop = !state.filter.oneStop;
    return (state = { ...state, filter: { ...state.filter, all: allCheckControl() } });
  }
  if (action.type === 'TWO_STOP') {
    state.filter.twoStop = !state.filter.twoStop;
    return (state = { ...state, filter: { ...state.filter, all: allCheckControl() } });
  }
  if (action.type === 'THREE_STOP') {
    state.filter.threeStop = !state.filter.threeStop;
    return (state = { ...state, filter: { ...state.filter, all: allCheckControl() } });
  }

  if (action.type === 'SORT_CHEAP') {
    return (state = { ...state, sort: { sortCheap: true, sortFast: false, sortOptimal: false } });
  }

  if (action.type === 'SORT_FAST') {
    return (state = { ...state, sort: { sortCheap: false, sortFast: true, sortOptimal: false } });
  }

  if (action.type === 'SORT_OPTIMAL') {
    return (state = { ...state, sort: { sortCheap: false, sortFast: false, sortOptimal: true } });
  }

  return state;
};

export default reducer;
