import React from 'react';
import inProgressImage from './work-in-progress.png';

function CheckItems({ toDo, toggleCompleted, toggleInProgress }) {
  return (
    <li className='mt-3 mb-3 border-bottom border-dark' style={{ display: 'flex', alignItems: 'center' }}>
      <label>
        <input
          type="checkbox"
          style = {{width:'20px', height:'15px', cursor:'pointer',  borderRadius: '20px'}}
          checked={toDo.inProgress}
          onChange={() => toggleInProgress(toDo.id)}
        />
        In Progress
      </label>
      <label>
        <input
          type="checkbox"
          style = {{width:'20px', height:'15px', cursor:'pointer',  borderRadius: '20px', marginLeft: '20px'}}

          checked={toDo.completed}
          onChange={() => toggleCompleted(toDo.id)}
        />
        Completed
      </label>
      <span style={{ marginLeft: '50px', textDecoration: toDo.completed ? 'line-through' : 'none' }}>
        {toDo.text}
        {toDo.inProgress && <img src={inProgressImage} alt="currently working on this."style={{ width: '60px', height: '60px', marginLeft: '20px' }}></img>}
        {toDo.dueDate && <div style={{ fontFamily: 'Arial !important' }}>Due Date: {toDo.dueDate} </div>}

      </span>
    </li>
  );
}

export default CheckItems;