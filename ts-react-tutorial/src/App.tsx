import React, {useState} from 'react';
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import Greetings from './Greetings';
import MyForm from './MyForm';

const App = () => {
  const onClick = (name:string) => {
    console.log(`${name} 안녕`); 
  }
  const onSubmit = (form:{name:string; description:string})=>{
    console.log(form); 
  } 

  const [count, setCount] = useState<number>(0); 
  return (
    <>
      <Greetings name='123' onClick={onClick} /> 
      <Counter count={count} setCount={setCount} />
      <MyForm onSubmit={onSubmit} />
      <CounterReducer />
    </>
  );
}

export default App;
