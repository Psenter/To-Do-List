import React from "react";
import { useState } from "react";
import handleCheck from "./ToDoCheck";
import handleDelete from "./ToDoDelete";

//exports everthing to rendered
export default function TodoList() {
  //sets state for everything
  //makes todos an array
  const [todos, setTodos] = useState([]);
  //stores the values of the input field
  const [inputValue, setInputValue] = useState("");

  //event listener that waits for change in the input field
  function handleInput(event) {
    //updates state of setInputValue with the input from the field
    setInputValue(event.target.value);
  }

  //function that is called when something is submitted the the input field
  function handleSubmit(event) {
    //stops page from refreshing on submission to the form
    event.preventDefault();
    //if there is an extra space at the start or end it removes it
    if (inputValue.trim() !== "") {
      //adds the object to the end of the todos array
      //makes item default to not completed
      setTodos([...todos, { title: inputValue, checked: false }]);
      //sets the input field back to empty
      setInputValue("");
    }
  }

  return (
    <div>
      <h1 className="text-center mt-5">To-do List</h1>
      {/* when something is submitted to the page it calls the handlesubmit function */}
      <form className="text-center" onSubmit={handleSubmit}>
        {/* sets the type of input to text */}
        {/* sets the value of the input to "inputValue" */}
        {/* any change in the input field calls on the handleInput function */}
        {/* placeholder just adds text while there is no user input */}
        <input
          className="text-center"
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Add a To-do to the list"
        />
        {/* adds a button where if clicked, acts as if enter is hit */}
        <button type="submit">Add</button>
      </form>
      <ul className="text-center">
        {/* maps through the todo array rendering it all on the screen */}
        {todos.map((todo, index) => (
          /* key makes sure that each item has a unique ID so nothing get mixed up */
          <li key={index} className="mt-3">
            {/* adds a checkbox to each item */}
            <input
              className="me-3"
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheck(index, todos, setTodos)}
            />
            {/* checks to see if the checkbox is checked off or not */}
            {/* if a checkbox is checked it marks the box and puts a line through it */}
            <span
              style={{ textDecoration: todo.checked ? "line-through" : "none" }}
            >
              {todo.title}
            </span>
            {/* Button to remove items */}
            <button
              className="ms-3"
              onClick={() => handleDelete(index, todos, setTodos)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
