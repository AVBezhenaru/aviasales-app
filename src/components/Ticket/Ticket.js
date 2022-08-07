import React from 'react';

import { minutesToHours, formatTime, editStops } from '../../utilites/utilites';

import classes from './Ticket.module.scss';

const Ticket = ({ ticket }) => {
  return (
    <div className={classes.Ticket}>
      <div className={classes.Ticket__header}>
        <div className={classes.Ticket__price}>{`${ticket.price} Р`}</div>
        <div className={classes.Ticket__carrier}>
          <img className={classes.Ticket__carrier_logo} alt="logo" src={`//pics.avs.io/99/36/${ticket.carrier}.png`} />
        </div>
      </div>
      <div className={classes.Ticket_preview_segment}>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>
            {ticket.segments[0].destination} – {ticket.segments[0].origin}
          </p>
          <p className={classes.Ticket_preview_segment__value}>
            {formatTime(ticket.segments[0].date, ticket.segments[0].duration)}
          </p>
        </div>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>В пути</p>
          <p className={classes.Ticket_preview_segment__value}>{minutesToHours(ticket.segments[0].duration)}</p>
        </div>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>{editStops(ticket.segments[0].stops.length)}</p>
          <p className={classes.Ticket_preview_segment__value}>{ticket.segments[0].stops.join(', ')}</p>
        </div>
      </div>
      <div className={classes.Ticket_preview_segment}>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>
            {ticket.segments[1].destination} – {ticket.segments[1].origin}
          </p>
          <p className={classes.Ticket_preview_segment__value}>
            {formatTime(ticket.segments[1].date, ticket.segments[1].duration)}
          </p>
        </div>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>В пути</p>
          <p className={classes.Ticket_preview_segment__value}>{minutesToHours(ticket.segments[1].duration)}</p>
        </div>
        <div className={classes.Ticket_preview_segment__flight}>
          <p className={classes.Ticket_preview_segment__label}>{editStops(ticket.segments[1].stops.length)}</p>
          <p className={classes.Ticket_preview_segment__value}>{ticket.segments[1].stops.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
