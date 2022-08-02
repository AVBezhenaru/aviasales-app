import React from 'react';

import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';
import TicketList from '../TicketList/TicketList';

import logo from './logo.svg';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <img src={logo} />
      </header>
      <aside>
        <Filter />
      </aside>
      <main>
        <Sort />
        <TicketList />
      </main>
    </div>
  );
}

export default App;
