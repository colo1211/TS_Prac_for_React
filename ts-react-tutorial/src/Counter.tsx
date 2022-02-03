import React, { useState } from 'react';

type CounterProps = {
    count : number; 
    setCount : (count:number) => void; 
};

const Counter = ({count, setCount} : CounterProps) => {
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <>
      <div>{count}</div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
    </>
  );
};

export default Counter;
