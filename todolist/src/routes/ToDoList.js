import React, { useState } from "react";
import AddItems from "./AddItems";
import CheckItems from "./CheckItems";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDoList() {
  //used to set my state
  const [toDos, setToDos] = React.useState(() => {
    //retreives the stored value in local storage
    const storedTodos = localStorage.getItem("todos");
    //checks to see if there is a value in local storage and returns the value
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  //controls if a completed item is shown or not
  const [showCompleted, setShowCompleted] = useState(true);

  //saves the current state into local storage
  React.useEffect(() => {
    //stores current state in local storage
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  //function to add new todo items onto the list
  function addItem(itemText, dueDate) {
    //creates an object with the below properties
    const newToDo = {
      //gives the todo a unique id based on the timestamp
      id: Date.now(),
      //this is the text content of the todo item
      text: itemText,
      //sets the completed property to false
      completed: false,
      //sets the inProgress property to false
      inProgress: false,
      //if there is a dueDate that is assigned to the newToDo it will appear here
      dueDate: dueDate,
    };

    //updates the state by appending the new todo to the array
    setToDos([...toDos, newToDo]);
  }

  //function that toggles completion status by id
  function toggleCompleted(id) {
    //updates state with the new array
    setToDos(
      //iterates over each item in the ToDos array
      toDos.map((toDo) => {
        //checks the completion status of the todo
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          //switches the completion status to true or false
          updatedToDo.completed = !toDo.completed;
          //returns the updatedToDo
          return updatedToDo;
        }
        return toDo;
      })
    );
  }

  //function that toggles the inProgress status of a todo
  function toggleInProgress(id) {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          const updatedToDo = { ...toDo };
          //switches the inProgress status to true or false
          updatedToDo.inProgress = !toDo.inProgress;
          return updatedToDo;
        }
        return toDo;
      })
    );
  }

  //clears all items completed items on the list
  function clearToDoItems() {
    //checks if the item is completed and updates the array
    const updatedToDos = toDos.filter((toDo) => !toDo.completed);
    setToDos(updatedToDos);
  }

  //clears all todo items
  function clearAllItems() {
    //updates the array to be empty
    setToDos([]);
  }

  //returns HTML to displayed on the DOM
  return (
    <div className="container text-center mt-5">
      <div>
        <h1 className="display-1 text-center">To-Do List</h1>
        <AddItems addItem={addItem} />
        <div className="row justify-content-center mt-4 mb-4">
          <button
            className="btn btn-primary btn-lg col-2"
            onClick={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted ? "Hide Completed" : "Show Completed"}
          </button>
          <button
            className="btn btn-primary btn-lg col-2 ms-3 me-3"
            onClick={clearToDoItems}
          >
            Clear Completed
          </button>
          <button
            className="btn btn-primary btn-lg col-2"
            onClick={clearAllItems}
          >
            Clear All
          </button>
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
