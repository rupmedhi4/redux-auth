import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const toggleCounterHandler = () => {};
const counter=useSelector(state=>state.counter)
const dispatch=useDispatch();
function increamentHandler(){
    dispatch({type:'increament'})
}
function decreamentHandler(){
    dispatch({type:'decreament'})
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increamentHandler}>increament</button>
      <button onClick={decreamentHandler}>decreament</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;