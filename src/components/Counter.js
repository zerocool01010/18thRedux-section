import { useState } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux' //el connect no lo usamos porque es para class based components
import { counterActions } from '../store/indexStore'; //esto trae nuestros reducer methods para ser utilizados directamente
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
        dispatch(/* {type: 'increment'} */ counterActions.increment()) //con este method obtenemos automaticamente un object action creado aqui
      }
      if (event.target.name === 'decrease') {
        dispatch(/* {type: 'decrement'} */counterActions.decrement())
      }
    }
    if (inputing) {
      dispatch(/* {type: event.target.name, amount: increaseNumb} */ counterActions.increase(event.target.name === 'decrease' ? increaseNumb*(-1) : increaseNumb)) // el action object tiene esta forma:
      setInputing(false)                                              // {type: id-unico-automaticamente-generado, payload: numeroQuePasamosComoParam} //el numeroQuepasamosComoParam = increaseNumb
                                                                      //el attr payload es default, lo asigna redux toolkit, no lo ponemos nosotros, entonces debemos
                                                                      //modificar esto en nuestro indexStore file donde tenemos el global reducer con estos metodos definidos
    } 
  }

  const inputHandler = (event) => {
    setInputing(true)
    setIncreaseNumb(Number(event.target.value))
  }

  const toggleCounterHandler = () => {
    /* setShowCounter(!showCounter) */
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
