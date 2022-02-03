import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('unHandled');
  }
}

const CounterReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({type:'INCREASE'}); 
    const onDecrease = () => dispatch({type:'DECREASE'}); 

    return (<>
        <h1>{count}</h1>
        <button onClick={onDecrease}>-</button> 
        <button onClick={onIncrease}>+</button> 
    </>);
};

export default CounterReducer;
