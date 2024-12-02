import { useState } from "react";
export default function UserInput({ label, onInputChange, objectKey }) {
  function inputChangeHandler(event) {
    onInputChange(objectKey, event.target.value);
  }

  return (
    <p>
      <label>{label}</label>
      <input onChange={inputChangeHandler} type="number" />
    </p>
  );
}
