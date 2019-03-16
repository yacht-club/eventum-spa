import createReducer from '../utils/createReducer';

export const INCREMENT = 'COUNTER/INCREMENT';
export const increment = () => ({ type: INCREMENT });

export const DECREMENT = 'COUNTER/DECREMENT';
export const decrement = () => ({ type: DECREMENT });

export const ASYNC_INCREMENT_START = 'COUNTER/ASYNC_INCREMENT_START';
export const asyncIncrementStart = () => ({ type: ASYNC_INCREMENT_START });

export const reducer = createReducer(0, {
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state - 1,
});
