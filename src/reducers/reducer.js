const initialState = {
  filter: {
    all: true,
    nonStop: true,
    oneStop: true,
    twoStop: true,
    threeStop: true,
  },
  sort: {
    sortCheap: false,
    sortFast: false,
    sortOptimal: true,
  },
  sessionId: '',
  tickets: [],
  visibleTicketsCount: 5,
  stopLoad: false,
  message: 'Рейсов, подходящих под заданные фильтры, не найдено',
};

const reducer = (state = initialState, action) => {
  const allCheckControl = () => {
    if (state.filter.nonStop && state.filter.oneStop && state.filter.twoStop && state.filter.threeStop) {
      return true;
    }
    return false;
  };
  const addValueToTicket = (tickets) => {
    const newTickets = [];
    tickets.map((ticket) => {
      const duration = ticket.segments[0].duration + ticket.segments[1].duration;
      const stops =
        ticket.segments[0].stops.length > ticket.segments[1].stops.length
          ? ticket.segments[0].stops.length
          : ticket.segments[1].stops.length;
      const optimalValue = Math.ceil((ticket.price + duration * 10 + stops * 1000) / 3);
      const updateTicket = {
        ...ticket,
        duration: duration,
        stops: stops,
        optimalValue: optimalValue,
      };
      newTickets.push(updateTicket);
    });

    return newTickets;
  };

  //filter
  if (action.type === 'ALL') {
    state.filter.all = !state.filter.all;
    if (state.filter.all) {
      return {
        ...state,
        filter: {
          all: true,
          nonStop: true,
          oneStop: true,
          twoStop: true,
          threeStop: true,
        },
      };
    } else {
      return {
        ...state,
        filter: {
          all: false,
          nonStop: false,
          oneStop: false,
          twoStop: false,
          threeStop: false,
        },
      };
    }
  }
  if (action.type === 'NON_STOP') {
    state.filter.nonStop = !state.filter.nonStop;
    return {
      ...state,
      filter: { ...state.filter, all: allCheckControl() },
    };
  }
  if (action.type === 'ONE_STOP') {
    state.filter.oneStop = !state.filter.oneStop;
    return {
      ...state,
      filter: {
        ...state.filter,
        all: allCheckControl(),
      },
    };
  }
  if (action.type === 'TWO_STOP') {
    state.filter.twoStop = !state.filter.twoStop;
    return { ...state, filter: { ...state.filter, all: allCheckControl() } };
  }
  if (action.type === 'THREE_STOP') {
    state.filter.threeStop = !state.filter.threeStop;
    return { ...state, filter: { ...state.filter, all: allCheckControl() } };
  }

  //sort
  if (action.type === 'SORT_CHEAP') {
    return {
      ...state,
      sort: { sortCheap: true, sortFast: false, sortOptimal: false },
    };
  }
  if (action.type === 'SORT_FAST') {
    return {
      ...state,
      sort: { sortCheap: false, sortFast: true, sortOptimal: false },
    };
  }
  if (action.type === 'SORT_OPTIMAL') {
    return {
      ...state,
      sort: { sortCheap: false, sortFast: false, sortOptimal: true },
    };
  }

  //tickets
  if (action.type === 'SESSION_ID_RECIVED') {
    return {
      ...state,
      sessionId: action.payload.sessionId,
    };
  }

  if (action.type === 'TICKETS_RECIVED') {
    return {
      ...state,
      tickets: [...state.tickets, ...addValueToTicket(action.payload.tickets)],
      stopLoad: action.payload.stop,
    };
  }

  if (action.type === 'SHOW_MORE_TICKETS') {
    return {
      ...state,
      visibleTicketsCount: state.visibleTicketsCount + 5,
    };
  }

  return state;
};

export default reducer;
