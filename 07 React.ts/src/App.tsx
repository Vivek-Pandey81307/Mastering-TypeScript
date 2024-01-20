import { useReducer } from "react";
type StateType = {
  count :number
}
type ActionType = {type :"Increment",payload :number} |
{type : "Decrement",payload :number};

const reducer = (state:StateType,action:ActionType):StateType=>{
  switch(action.type){
    case "Increment":
      return {count:state.count+action.payload}
      case "Decrement":
        return {count:state.count-action.payload}
    default:
      return {count:state.count};  
  }
}
const  initialState : StateType ={
  count : 0
}
function App(){
  const [state,dispatch] = useReducer(reducer,initialState)
  const Increment = ():void=>{
    dispatch({
      type :'Increment',payload:1,
    })
  }
  const Decrement = ():void=>{
    dispatch({
      type:'Decrement',payload:1
    })
  }
  return <div >
    <h1>Count Change</h1>
    <p>Count: {state.count}</p>
    <section style={{display:"flex",gap:10}}>
    <button onClick={Increment}>+</button>
    <button style={{width:'12px'}} onClick={Decrement}>-</button>
    </section>
  </div>
}
export default App;