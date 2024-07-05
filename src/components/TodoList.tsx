import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>
      {state?.map((item) => (
        <p onClick={() => dispatch({ type: "taskComplete", payload: item.id })}>
          {item?.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
