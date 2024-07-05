import { useState } from "react";
import CounterWithFunctionalComponents from "./components/CounterWithFunctionalComponents";
import UserInfoWithuseReducer from "./components/UserInfoWithuseReducer";
import TodoProvider from "./context/TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [count, setCount] = useState(0); // hooks state

  return (
    <TodoProvider>
      <div>
        {/* <CounterWithClassComponents /> */}
        <CounterWithFunctionalComponents count={count} setCount={setCount} />
        <h2>app count: {count}</h2>
        <UserInfoWithuseReducer />
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
