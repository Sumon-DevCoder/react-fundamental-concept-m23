## Class & functional Components

**Class components by default has state. But functional components is stateless. hooks create a state in functional component and it make statefull components**

**hooks only work inside of functional and when state change that time this functional components its will re-render**

**Summary: functional components is a stateless but using by hook make a statefull components and this hoook works only inside of components when state will be change that time this components will be re-render**

### one way data binding...

we can send data from parent components to child components. but we can't sent data from child to parent.

### state lifting...

we can hold functional component in central place and from this place we can access. like: App.tsx --> another child components using theory one way data binding

## Prop Drilling in React

#### Introduction

Prop drilling refers to the process of passing data from a parent component to a deeply nested child component through several intermediate components in React or other component-based libraries. This method can lead to various issues such as redundant code, tight coupling, and maintenance difficulties.

#### Issues with Prop Drilling

1. **Redundant Code**: Intermediate components have to include props they don't use, which leads to redundant and potentially confusing code.
2. **Tight Coupling**: Intermediate components become tightly coupled to the specific data being passed through them, reducing their reusability.
3. **Maintenance Difficulty**: Adding or removing data to be passed down requires modifications to multiple components, making the application harder to maintain.

## Solutions to Prop Drilling

### Context API

The Context API in React allows you to create global data that can be accessed by any component in the component tree without the need to pass props through every level.

### State Management Libraries

Libraries such as Redux, MobX, or Recoil provide sophisticated state management solutions, enabling components to subscribe to and modify global state directly.

### Component Composition

Structuring components to minimize deep nesting and promote flatter hierarchies can reduce the need for extensive prop drilling.

## Example

```jsx
// Prop Drilling Example

const ParentComponent = () => {
  const data = "some data";
  return <IntermediateComponent1 data={data} />;
};

const IntermediateComponent1 = ({ data }) => {
  return <IntermediateComponent2 data={data} />;
};

const IntermediateComponent2 = ({ data }) => {
  return <TargetComponent data={data} />;
};

const TargetComponent = ({ data }) => {
  return <div>{data}</div>;
};
```

# Reducers in State Management

Reducers play a crucial role in managing application state, especially in frameworks like Redux, which follows a predictable state container pattern. This document outlines what reducers are, how they work, and their importance in maintaining application state.

## What is a Reducer?

A reducer is a pure function responsible for handling multiple state and changes to a specific slice of state. It takes the current state and an action as arguments, computes the new state based on the action, and returns the updated state. Reducers are central to the concept of unidirectional data flow in Redux and similar architectures.

## Key Concepts

- **Pure Function**: Reducers are pure functions because they produce the same output for the same input and do not modify the state directly.
- **State Mutation**: Reducers should never mutate the original state. Instead, they create and return a new state object with the updated values.
- **Action**: An object describing the type of action to perform, often including payload data for the state update.

## How Reducers Work

1. **Initialization**: Define initial state for the reducer.
2. **Action Dispatch**: Actions are dispatched to the reducer with information about what operation to perform.
3. **State Update**: The reducer evaluates the action type and payload to compute and return a new state.
4. **Store Update**: The Redux store updates its state based on the returned value from the reducer.

## Example

```import React, { useReducer, ChangeEvent } from "react";

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
```
