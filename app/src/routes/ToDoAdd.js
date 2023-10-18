import React, { useState } from "react";

function ToDoAdd({addItem}) {
    const [inputValue, setInputValue] = useState('');
    const [dueDate, setDueDate] = useState('');

    function toDoSubmit(event) {
        event.preventDefault();
        addItem(inputValue, dueDate);
        setInputValue('');
        setDueDate('');
    }

    function inputSubmit(event) {
        setInputValue(event.target.value);
    }

    return (
        <div className='additems'>
          <form onSubmit={toDoSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={inputSubmit}
              placeholder="What else to do?"
            />
            <input
              type="date"
              value={dueDate}
              onChange={dueDateSubmit}
            />
            <button className="btn btn-primary btn-lg fw-bold" style={{ fontWeight: 'bold', fontStyle: 'italic' }} type="submit">Add Item</button>
          </form>
        </div>
    );
}

export default ToDoAdd;