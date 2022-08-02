import React from 'react';

import classes from './Ticket.module.scss';

const Ticket = () => {
  return (
    <div className={classes.Ticket}>
      <div className={classes.Ticket__header}>
        <div className={classes.Ticket__price}>13400</div>
        <div className={classes.Ticket__carrier}>
          <div className={classes.Ticket__carrier_logo}></div>
          <div className={classes.Ticket__carrier_name}>Airline</div>
        </div>
      </div>
      <div className={classes.Ticket_preview_segment}>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>AER – OVB</p>
          <p className={classes.Ticket_preview_segment__value}>20:50 – 06:50</p>
        </div>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>В пути</p>
          <p className={classes.Ticket_preview_segment__value}>1д 6ч</p>
        </div>

        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>Пересадки</p>
          <p className={classes.Ticket_preview_segment__value}>DME</p>
        </div>
      </div>
      <div className={classes.Ticket_preview_segment}>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>AER – OVB</p>
          <p className={classes.Ticket_preview_segment__value}>20:50 – 06:50</p>
        </div>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>В пути</p>
          <p className={classes.Ticket_preview_segment__value}>1д 6ч</p>
        </div>

        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>Пересадки</p>
          <p className={classes.Ticket_preview_segment__value}>DME</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
