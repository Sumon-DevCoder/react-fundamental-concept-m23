import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { dispatch, state } = useContext(TodoContext);
  const [task, setTask] = useState("");

  console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (dispatch) {
      const todo = {
        id: Math.random().toString(36).substring(2, 7),
        title: task,
        isCompleted: false,
      };

      dispatch({ type: "addTodo", payload: todo });
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          id="todo"
          name="todo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
