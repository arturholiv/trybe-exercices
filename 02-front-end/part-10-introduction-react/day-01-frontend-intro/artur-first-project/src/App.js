import React from 'react';
import './App.css';

const tarefas = ['acordar', 'Tomar banho', 'tomar café', 'Estudar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <h3>O que fazer pela manha</h3>
    <ul>
      {tarefas.map((value) => Task(value))}
    </ul>
    </div>
  );
}

export default App;
