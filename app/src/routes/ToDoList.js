import React, { useState } from 'react';
import AddItems from './AddItems';
import CheckItems from './CheckItems';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDoList() {
  const [toDos, setToDos] = React.useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [showCompleted, setShowCompleted] = useState(true); // Step 1

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDos));
    console.log('Data saved to localStorage:', toDos);
  }, [toDos]);

  function addItem(itemText,dueDate) {
    const newToDo = {
      id: Date.now(),
      text: itemText,
      completed: false,
      inProgress: false,
      dueDate: dueDate,
    };

    setToDos([...toDos, newToDo]);
  }

  function toggleCompleted(id) {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          updatedToDo.completed = !toDo.completed;
          return updatedToDo;
        }
        return toDo;
      })
    );
  }

  function toggleInProgress(id) {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          updatedToDo.inProgress = !toDo.inProgress;
          return updatedToDo;
        }
        return toDo;
      })
    );
  }

  function clearToDoItems() {
    const updatedToDos = toDos.filter((toDo) => !toDo.completed);
    setToDos(updatedToDos);
  }

  function clearAllItems() {
    setToDos([]);
  }

  return (
<div className="container text-center mt-5">
  <div>
    <h1 className="display-1 text-center">To-Do List</h1>
    <AddItems addItem={addItem} />
    <div className='row justify-content-center mt-4 mb-4'> 
      <button className="btn btn-primary btn-lg col-2" onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? 'Hide Completed' : 'Show Completed'}
      </button>
      <button className="btn btn-primary btn-lg col-2 ms-3 me-3" onClick={clearToDoItems}>Clear Completed</button>
      <button className="btn btn-primary btn-lg col-2" onClick={clearAllItems}>Clear All</button>
    </div>
    <div>
    <ul style={{}}>
      {toDos.map((toDo) =>
        !toDo.completed || showCompleted ? (
          <CheckItems
            toggleCompleted={() => toggleCompleted(toDo.id)}
            toggleInProgress={() => toggleInProgress(toDo.id)}
            key={toDo.id}
            toDo={toDo}
          />
        ) : null
      )}
    </ul>
    </div>
  </div>
</div>
  );
}

export default ToDoList;