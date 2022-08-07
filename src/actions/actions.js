import { getSessionId, getTickets } from '../services/AviasalesService';

//filter
export const all = () => ({ type: 'ALL' });
export const nonStop = () => ({ type: 'NON_STOP' });
export const oneStop = () => ({ type: 'ONE_STOP' });
export const twoStop = () => ({ type: 'TWO_STOP' });
export const threeStop = () => ({ type: 'THREE_STOP' });

//sort
export const sortCheap = () => ({ type: 'SORT_CHEAP' });
export const sortFast = () => ({ type: 'SORT_FAST' });
export const sortOptimal = () => ({ type: 'SORT_OPTIMAL' });

//get tickets
export const sessionIdRecived = (sessionId) => ({
  type: 'SESSION_ID_RECIVED',
  payload: {
    sessionId,
  },
});

export const fetchSessionId = () => {
  return function (dispatch) {
    getSessionId().then((DataId) => {
      dispatch(sessionIdRecived(DataId.searchId));
    });
  };
};

export const fetchTickets = (id) => {
  return function (dispatch) {
    // eslint-disable-next-line no-undef
    getTickets(id).then((dataTickets) => {
      dispatch(ticketsRecived(dataTickets.tickets, dataTickets.stop));
    });
  };
};
export const ticketsRecived = (tickets, stop) => ({
  type: 'TICKETS_RECIVED',
  payload: {
    tickets,
    stop,
  },
});

export const showMoreTickets = () => ({
  type: 'SHOW_MORE_TICKETS',
});
