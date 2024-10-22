import './App.css';
import React, { useState, useEffect} from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(initialState);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <h1>Liste de taches</h1>
      <div>
        <TaskForm
        input={input} 
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
        editTask={editTask}
        setEditTask={setEditTask}
        />
      </div>
      <div>
        <TaskList tasks={tasks} setTasks={setTasks} setEditTask={setEditTask}/>
      </div>
    </div>
  );
}

export default App;
