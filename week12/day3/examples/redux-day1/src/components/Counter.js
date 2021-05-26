import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const userName = useSelector((state) => state.userName);
  const poop = useSelector((state) => state.poop);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <p>{userName}</p>
      <p>{poop}</p>
      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
      <button onClick={() => dispatch({ type: "SUBTRACT" })}>Subtract</button>
    </div>
  );
}