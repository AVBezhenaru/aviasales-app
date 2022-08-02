import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

import classes from './Filter.module.scss';

const Filter = ({ filter, all, nonStop, oneStop, twoStop, threeStop }) => {
  return (
    <div className={classes.Filter}>
      <h3 className={classes.Filter__title}>Количество пересадок</h3>
      <ul className={classes.Filter__list}>
        <li className={classes.Filter__item}>
          <label>
            <input type="checkbox" onChange={all} checked={filter.all} />
            <span className={classes.Filter__checkbox__input}></span>
            <span className={classes.Filter__checkbox__text}>Все</span>
          </label>
        </li>
        <li className={classes.Filter__item}>
          <label>
            <input type="checkbox" onChange={nonStop} checked={filter.nonStop} />
            <span className={classes.Filter__checkbox__input}></span>
            <span className={classes.Filter__checkbox__text}>Без пересадок</span>
          </label>
        </li>
        <li className={classes.Filter__item}>
          <label>
            <input type="checkbox" onChange={oneStop} checked={filter.oneStop} />
            <span className={classes.Filter__checkbox__input}></span>
            <span className={classes.Filter__checkbox__text}>1 пересадка</span>
          </label>
        </li>
        <li className={classes.Filter__item}>
          <label>
            <input type="checkbox" onChange={twoStop} checked={filter.twoStop} />
            <span className={classes.Filter__checkbox__input}></span>
            <span className={classes.Filter__checkbox__text}>2 пересадки</span>
          </label>
        </li>
        <li className={classes.Filter__item}>
          <label>
            <input type="checkbox" onChange={threeStop} checked={filter.threeStop} />
            <span className={classes.Filter__checkbox__input}></span>
            <span className={classes.Filter__checkbox__text}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, actions)(Filter);
