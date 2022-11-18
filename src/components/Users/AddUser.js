import React, { useState } from "react";
import Card from "../UI/Card";

const AddUser = (props) => {
  let [userName, setUserName] = useState("");
  let [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const data = {
      userName: setUserName(event.target.value),
      age: setAge(event.target.value),
    };
    console.log(data);
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={addUserHandler}
          value={userName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" onChange={addUserHandler} value={age} />
        <button type="submit">submit</button>
      </form>
    </Card>
  );
};

export default AddUser;
