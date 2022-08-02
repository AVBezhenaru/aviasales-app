import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

import classes from './Sort.module.scss';

function Sort({ sort, sortCheap, sortFast, sortOptimal }) {
  return (
    <div className={classes.Sort__btns}>
      <button className={`${classes.Sort__btn} ${sort.sortCheap ? classes.Sort__btn_active : ' '}`} onClick={sortCheap}>
        Самый дешевый
      </button>
      <button className={`${classes.Sort__btn} ${sort.sortFast ? classes.Sort__btn_active : ' '}`} onClick={sortFast}>
        Самый быстрый
      </button>
      <button
        className={`${classes.Sort__btn} ${sort.sortOptimal ? classes.Sort__btn_active : ' '}`}
        onClick={sortOptimal}
      >
        Оптимальный
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

export default connect(mapStateToProps, actions)(Sort);
