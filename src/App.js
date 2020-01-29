import React from 'react';
import { TodoProvider } from './TodoContext';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';

function App() {
  return (
    <div>
      <TodoProvider>
        <Navbar />
        <Todolist />
      </TodoProvider>
    </div>
  );
}

export default App;
