import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const toggleCounterHandler = () => {};
const counter=useSelector(state=>state.counter)
const dispatch=useDispatch();
function increamentHandler(){
    dispatch({type:'INCREMENTBY5'})
}
function decreamentHandler(){
    dispatch({type:'DECREMENTBY5'})
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increamentHandler}>IncrementBy5</button>
      <button onClick={decreamentHandler}>Decremenenby5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;