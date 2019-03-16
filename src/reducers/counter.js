import createReducer from '../utils/createReducer';

const reducer = createReducer(0, {
  'COUNTER/INCREMENT': state => state + 1,
  'COUNTER/DECREMENT': state => state - 1,
});

export const increment = () => ({
  type: 'COUNTER/INCREMENT',
});

export const decrement = () => ({
  type: 'COUNTER/INCREMENT',
});

export const asyncIncrementStart = () => ({
  type: 'COUNTER/ASYNC/INCREMENT/START',
});

export default reducer;
