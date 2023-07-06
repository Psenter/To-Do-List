import React from "react";
import { useState } from 'react';

//exports the function to be displayed
export default function ToDoList() {
  //sets state
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  //updates state to make the input match what is entered in
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //adds the ToDo item to the list
  //resets the input field for the next submission
  const handleSubmit = (e) => {
    //stops the page from refreshing
    e.preventDefault();
    //removes and extra spaces in the input
    if (inputValue.trim() !== '') {
      //updates state and addes the next item entered into the list
      setTodos([...todos, inputValue]);
      //resets the input field
      setInputValue('');
    }
  };

  //how the remove button works
  const handleRemove = (index) => {
    //copies the 'todos' array
    const updatedTodos = [...todos];
    //removes the item at the index where the remove button is pressed
    updatedTodos.splice(index, 1);
    //changes the state of setTodos to match the new list
    setTodos(updatedTodos);
  };

  //returns the list to be displayed
  return (
    <div className="text-center">
      <h1 className="mt-3">To-Do List</h1>
      {/* When something is submitted it runs the handleSumbit function */}
      <form className="mt-5" onSubmit={handleSubmit}>
        {/* Sets the input type to text */}
        {/* Updates inputValue's state with the user input */}
        <input type="text" value={inputValue} onChange={handleInputChange} />
        {/* Adds a button where users can also submit what they put into the field */}
        <button type="submit">Add</button>
      </form>
      <ul className="justify-content-center" style={{listStyleType:"none"}}>
        {/* Maps over tods's array and generates the list */}
        {/* key is set to index to add an identifier to each item */}
        {todos.map((todo, index) => (
          <li key={index} className="mt-3">
            {/* Renders the To-Do list */}
            {todo}
            {/* Adds a button where the user can remove the itme */}
            {/* Calls the handleRemove function with the index it is clicked at to remove item */}
            <button className="ms-3" onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};