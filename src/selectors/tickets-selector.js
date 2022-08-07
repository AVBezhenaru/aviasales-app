export const sortFilterTickets = (state) => {
  const tickets = state.tickets;

  const sortTickets = (tickets) => {
    if (state.sort.sortCheap) {
      return tickets.sort((ticket1, ticket2) => (ticket1.price > ticket2.price ? 1 : -1));
    }

    if (state.sort.sortFast) {
      return tickets.sort((ticket1, ticket2) => (ticket1.duration > ticket2.duration ? 1 : -1));
    }

    if (state.sort.sortOptimal) {
      return tickets.sort((ticket1, ticket2) => (ticket1.optimalValue > ticket2.optimalValue ? 1 : -1));
    }
  };

  const filterTickets = (tickets) => {
    let result = [];

    if (state.filter.nonStop) {
      const nonStopTickets = tickets.filter((ticket) => ticket.stops === 0);
      result = [...result, ...nonStopTickets];
    }

    if (state.filter.oneStop) {
      const oneStopTickets = tickets.filter((ticket) => ticket.stops === 1);
      result = [...result, ...oneStopTickets];
    }

    if (state.filter.twoStop) {
      const twoStopTickets = tickets.filter((ticket) => ticket.stops === 2);
      result = [...result, ...twoStopTickets];
    }

    if (state.filter.threeStop) {
      const threeStopTickets = tickets.filter((ticket) => ticket.stops >= 3);
      result = [...result, ...threeStopTickets];
    }
    return result;
  };

  sortTickets(tickets);
  return filterTickets(tickets);
};
