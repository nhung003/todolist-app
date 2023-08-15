import './App.css';
import TodoList from './components/TodoList';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value)
  },[])

  const onAddBtnClick = useCallback(
    (e) => {
    // them text input vao danh sach todolist
    setTodoList([
      { id: v4(), name: textInput, isCompleted: false },
      ...todoList,
    ]);
    setTextInput("");
  },
   [textInput, todoList]
   );
  return (
    <>
      <div className='main'>
        <div className='title'>
          <h2>Danh sách cần làm</h2>
        </div>
        <div className='list-item'>
          <TextField id="outlined-basic" label="Thêm những việc cần làm..." variant="outlined"
            name='add-todo'
            value={textInput}
            onChange={onTextInputChange}
          />
          <Button
            variant="contained"
            disabled={textInput.length > 0 ? false : true}
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        </div>
        <div className='todolist'>
          <TodoList todoList={todoList}></TodoList>
        </div>
      </div>


    </>
  );
}

export default App;
