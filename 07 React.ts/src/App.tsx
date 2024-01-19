import { Children } from 'react'
import Box from './components/Box'
function App() {

  return (
    <>
      <div>
        <Box heading={'Hello Welcome'}
         func1={(a:string)=>{alert(a)}}>
        {<><button>Click me</button></>
        }
        </Box>

      </div>
    </>
  )
}

export default App
