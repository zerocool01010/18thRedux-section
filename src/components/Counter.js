import { useState } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux' //el connect no lo usamos porque es para class based components
import classes from './Counter.module.css';

const Counter = () => {
  const [increaseNumb, setIncreaseNumb] = useState(0)
  const [inputing, setInputing] = useState(false)
  /* const [showCounter, setShowCounter] = useState(true) */
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)

  const incremHandler = (event) => {
    if (!inputing) {
      if (event.target.name === 'increase') {
        dispatch({type: 'increment'})
      }
      if (event.target.name === 'decrease') {
        dispatch({type: 'decrement'})
      }
    }
    if (inputing) {
      dispatch({type: event.target.name, amount: increaseNumb})
      setInputing(false)
    } 
  }

  const inputHandler = (event) => {
    setInputing(true)
    setIncreaseNumb(Number(event.target.value))
  }

  const toggleCounterHandler = () => {
    /* setShowCounter(!showCounter) */
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <input onChange={inputHandler}></input>
      <button name='increase' onClick={incremHandler}>Increment</button>
      <button name='decrease' onClick={incremHandler}>Decrement</button>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
