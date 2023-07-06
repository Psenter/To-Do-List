//lets list items be able to be checked off
export default function handleCheck(index, todos, setTodos) {
  //creates a copy of todos array stored in updatedTodos
  const updatedTodos = [...todos];
  //uses NOT operator to be able to toggle if an item is checked or not
  updatedTodos[index].checked = !updatedTodos[index].checked;
  //updates the state of what is rendered
  setTodos(updatedTodos);
}
