import {useSelector, useDispatch, connect} from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  const incremHandler = () => {
    dispatch({type: 'increment'})
  }

  const decremHandler = () => {
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <button onClick={incremHandler}>Increment</button>
      <button onClick={decremHandler}>Decrement</button>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
