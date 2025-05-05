import {  decrement, increase, increment, toggleCounter} from '../store/CounterSlice';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase(10)); 
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
