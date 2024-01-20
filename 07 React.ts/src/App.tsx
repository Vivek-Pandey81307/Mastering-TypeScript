//  import Box from './components/Box'
 import {useState,FormEvent} from 'react'
 interface Person{
  name : string,
  age:number,
 }
function App() {
  const [user,setUser]=useState<Person>()
  const submitHandler =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
    // <>
    //   {/* <div>
    //     <Box label='Search' value={val} setter={setVal}/>
    //   </div> */}
    // </>

    <>
      <div>
        <form onSubmit={submitHandler}>
          <input placeholder={"Age"} type="number" value={user?.age || 0} onChange={(e)=>setUser(prev=>({...prev!,age:Number(e.target.value)}))} />
          <input type="text" placeholder={"Name"} value={user?.name || ""} onChange={(e)=>setUser(prev=>({...prev!,name:String(e.target.value)}))} />
          <button type='submit'>Register</button>
        </form>
      </div>
    </>
  )
}

export default App
