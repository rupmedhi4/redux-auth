import { counterAction } from '../store';
import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };
const counter=useSelector((state)=>state.counter.counter);
const show=useSelector((state)=>state.counter.showCounter)
const dispatch=useDispatch();
function increamentHandler(){
    dispatch(counterAction.increament())
}
function increaseHandler(){
  dispatch(counterAction.increase(10))
}
function decreamentHandler(){
    dispatch(counterAction.decreamemt())
}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show &&<div className={classes.value}>{counter}</div>}
      <button onClick={increamentHandler}>Increment</button>
      <button onClick={increaseHandler}>IncreaseBy10</button>
      <button onClick={decreamentHandler}>Decremenenby</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;