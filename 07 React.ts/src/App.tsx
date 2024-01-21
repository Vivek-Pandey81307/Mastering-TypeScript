import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { StateType ,increment,decrement,incrementByValue } from "./redux";

function App(){
  const [val,setVal] = useState<number>(0);
   
  const dispatch = useDispatch()
  const count = useSelector ((state:StateType)=>state.count)
  const incrementByValueHandler = ()=>{
    dispatch(incrementByValue(val))
    setVal(0);
  };
  const incrementHandler = ()=>{
    dispatch(increment())
  }
  const decrementHandler =  ()=>{
    dispatch(decrement())
  }
  return (
    <div>
      <h1>Toolkit</h1>
      <h2>Count : {count}</h2>
      <button onClick={incrementHandler }>+</button>
      <button onClick={decrementHandler} disabled={count===0}>-</button>
      <input type='number'
       value={val}
      onChange={(e)=>setVal(Number(e.target.value))}/>
      <button disabled={val<0} onClick={incrementByValueHandler}>Add</button>
    </div>
  )
}
export default App;