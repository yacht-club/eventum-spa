import React from 'react';
import Button from './common/Button';

const CounterContainer = ({ count, onClickIncrement, onClickAsyncIncrement }) => (
  <div>
    {count}
    <br />
    <Button onClick={onClickIncrement}>Increment</Button>
    <Button onClick={onClickAsyncIncrement}>Async Increment</Button>
  </div>
);

export default CounterContainer;
