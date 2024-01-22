import { AppBar, Container, Toolbar, Typography,Stack, TextField,Button} from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useState } from "react"
const App = () => {
  const [todos,setTodos] = useState<TodoItemType[]>([{title:"vikram",isCompleted:false,id:"01"},{title:"madhuma",isCompleted:false,id:"02"}])
  
  const completeHandler =(id:TodoItemType["id"]):void=>{alert(id)};
  const deleteHandler = (id:TodoItemType["id"]):void=>{alert(id)}
  return <Container maxWidth="sm" sx={{height : "100vh"}}>
    <AppBar position="static">
      <Toolbar>
        <Typography>Todo App</Typography>
      </Toolbar>
    </AppBar>
    <Stack  height ={"70%"} direction= {"column"} spacing={"1rem"} p={"1rem"}>
    {todos.map((i)=>(
      <TodoItem  
      deleteHandler={deleteHandler}  
      completeHandler={completeHandler} 
      key={ i.id} todo={i}/>
    ))}
    </Stack>
    <TextField fullWidth label={"NewTask"}/>
    <Button    sx={{margin:"1rem 0"}} fullWidth variant="contained">ADD</Button>
  </Container> 
}

export default App