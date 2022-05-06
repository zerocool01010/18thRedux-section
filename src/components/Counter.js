import { useState } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux' //el connect no lo usamos porque es para class based components
import { counterActions } from '../store/indexStore'; //esto trae nuestros reducer methods para ser utilizados directamente
import classes from './Counter.module.css';

const Counter = () => {
  const [increaseNumb, setIncreaseNumb] = useState(0)
  const [inputing, setInputing] = useState(false)
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counterRed.counter)
  const showCounter = useSelector(state => state.counterRed.showCounter)

  const incremHandler = (event) => {
    if (!inputing) {
      if (event.target.name === 'increase') {
        dispatch(counterActions.increment()) //con este method obtenemos automaticamente un object action creado aqui
      }
      if (event.target.name === 'decrease') {
        dispatch(counterActions.decrement())
      }
    }
    if (inputing) {
      const paramForSumOrSus = event.target.name === 'decrease' ? increaseNumb*(-1) : increaseNumb
      dispatch(counterActions.increase(paramForSumOrSus))
      setInputing(false)                                              
    } 
  }

  const inputHandler = (event) => {
    setInputing(true)
    setIncreaseNumb(Number(event.target.value))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter())
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
