import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PuffLoader } from 'react-spinners';

import { fetchSessionId, fetchTickets, showMoreTickets } from '../../actions/actions';
import Ticket from '../Ticket/Ticket';
import { sortFilterTickets } from '../../selectors/tickets-selector';

import classes from './TicketList.module.scss';
const TicketList = ({
  state,
  tickets,
  id,
  stopLoad,
  visibleTicketsCount,
  fetchSessionId,
  fetchTickets,
  showMoreTickets,
}) => {
  // console.log(tickets);
  useEffect(() => {
    fetchSessionId();
  }, []);

  useEffect(() => {
    if (!stopLoad && id) {
      fetchTickets(id);
    }
  });

  useEffect(() => {}, [state]);

  let index = 0;
  const elements = tickets.map((ticket, i) => {
    if (i >= visibleTicketsCount) {
      return;
    }
    return <Ticket key={index++} ticket={ticket} />;
  });

  const message = <div className={classes.msg}>{state.message}</div>;

  const moreBtn = (
    <button className={classes.more_btn} onClick={showMoreTickets}>
      Показать еще 5 билетов!
    </button>
  );

  return (
    <div>
      <PuffLoader
        color={'#2196F3'}
        cssOverride={{ left: '50%', marginBottom: '20px', marginLeft: '-30px' }}
        loading={!stopLoad}
      />
      {elements}
      {!tickets.length && stopLoad ? message : ''}
      {tickets.length ? moreBtn : ''}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    tickets: sortFilterTickets(state),
    id: state.sessionId,
    stopLoad: state.stopLoad,
    visibleTicketsCount: state.visibleTicketsCount,
  };
};

const mapDispatchToProps = {
  fetchSessionId: fetchSessionId,
  fetchTickets: fetchTickets,
  showMoreTickets: showMoreTickets,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
