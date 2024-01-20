 import Box from './components/Box'
 import {useState} from 'react'
function App() {
  const [val,setVal]=useState<string>("")
  return (
    <>
      <div>
        <Box label='Search' value={val} setter={setVal}/>
      </div>
    </>
  )
}

export default App
