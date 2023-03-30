import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, decrementBy, increase, incrementBy } from './features/counter/counterSlice';
import { useEffect, useState } from 'react';
import { getTodos } from './features/todos/todo';

function App() {

  const [value,setValue]=useState("")

  const counter=useSelector((store)=>store.counter.counter)
  console.log(counter);
  const dispatch=useDispatch()

  const store=useSelector(store=>store)
  console.log(store);

  useEffect(()=>{
    dispatch(getTodos())
  },[])

  return (
    <div className="App">
      <h2>Counter:{counter}</h2>
      <input onChange={(e)=>setValue(Number(e.target.value))} value={value} placeholder='value' />
      <br/>
      <button onClick={()=>dispatch(increase())}>INCREMENT</button>
      <button onClick={()=>dispatch(decrease())}>DECREMENT</button>
      <br/>
      <button onClick={()=>dispatch(incrementBy(value))}>INCREMENT BY {value?value:"VALUE"}</button>
      <button onClick={()=>dispatch(decrementBy(value))}>DECREMENT BY {value?value:"VALUE"}</button>
    </div>
  );
}

export default App;
