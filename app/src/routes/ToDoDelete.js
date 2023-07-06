//makes items on the list able to be removed
export default function handleDelete(index, todos, setTodos) {
  //creates a copy of the todos array
  const updatedTodos = [...todos];
  //uses splice to modify the array at the given index and remove the item
  updatedTodos.splice(index, 1);
  //changes the state of the rendered list
  setTodos(updatedTodos);
}
