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
