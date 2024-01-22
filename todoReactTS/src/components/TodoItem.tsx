import { Paper, Typography, Checkbox, Button, Stack } from "@mui/material";
import React from "react";
import { Delete ,Edit} from "@mui/icons-material";
type PropsType = {
  todo: TodoItemType;
  deleteHandler : (id:TodoItemType["id"])=>void
  completeHandler :  (id : TodoItemType["id"])=>void;
};
const TodoItem = ({ todo,completeHandler,deleteHandler }: PropsType) => {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox />
        <Typography marginRight={"auto"}>{todo.title}</Typography>
        <Button onClick={()=>completeHandler(todo.id)} sx={{fontWeight:"600"}}><Edit /></Button>
        <Button onClick={()=>deleteHandler(todo.id)} sx={{opacity:0.5,color:"black"}}><Delete /></Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
