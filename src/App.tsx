import React, { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodo: AddTodo = (text: string) => {
    const newTodo: Todo = { text, complete: false};
    setTodos([...todos, newTodo]);
    console.log('hej där');
  }

  return (
   <>
   <h1>Hello world</h1>
   <Input addTodo={addTodo}/>
   <List/>
   </>
  );
}

export default App;
