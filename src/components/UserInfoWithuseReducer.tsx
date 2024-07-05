import React, { useReducer, ChangeEvent } from "react";

const initialState = {
  name: "",
  age: 0,
  hobbies: [] as string[],
};

type TAction =
  | { type: "addName"; payload: string }
  | { type: "addAge"; payload: number }
  | { type: "addHobbies"; payload: string };

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfoWithuseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission if needed
        }}
      >
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "addAge", payload: parseInt(e.target.value, 10) })
          }
          type="number"
          name="number"
          id="number"
          placeholder="number"
        />
        <input
          onBlur={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobbies"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserInfoWithuseReducer;
