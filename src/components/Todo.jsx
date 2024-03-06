import "./Todo.css";

function Todo({ todoTitle,  onTodoDelete}) {
  return (
    <div className="todo">
      <p>{todoTitle}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
