import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import './Todo.css';


export default function Todo({ todo }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="item">
        <Button className="button" style={{ textDecoration: checked ? 'line-through' : 'none' }}>{todo.name}</Button>
        <Checkbox
          className="checkbox"
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </>
  );
}