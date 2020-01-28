import React from 'react';
import Todo from './Todo';
import { findAllByTestId } from '@testing-library/react';

export default function Todolist() {
  const todos = [
    {
      id: Date.now(),
      value: 'Buy Milk',
      done: false
    },
    {
      id: Date.now() + 1,
      value: 'Play with doggie',
      done: true
    }
  ];

  return (
    <div>
      <div className='hero is-info'>
        <div className='hero-body has-text-centered'>
          <p className='title is-1'>Todos</p>
        </div>
      </div>

      <section className='section'>
        <div className='container'>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </section>
    </div>
  );
}
