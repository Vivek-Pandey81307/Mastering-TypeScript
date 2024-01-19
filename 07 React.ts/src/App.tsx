import { Children } from 'react'
import Box from './components/Box'
function App() {

  return (
    <>
      <div>
        <Box heading={'Hello Welcome'}
        count={34} func1={(a:string)=>{alert(a)}}>
        {<>Wow World!</>}
        </Box>

      </div>
    </>
  )
}

export default App
