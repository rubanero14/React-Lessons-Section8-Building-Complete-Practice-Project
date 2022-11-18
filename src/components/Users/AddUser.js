import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // onChange event handlers
  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  // onSubmit event handler =>
  const addUserHandler = (event) => {
    // Prevent page from refreshing upon submit evnt fired
    event.preventDefault();

    // Gatekeeping function to bar submitting empty data
    if (enteredUserName === "" || enteredAge === "") {
      return console.log("Fill up up the inputs");
    } else if (parseInt(enteredAge) < 1) {
      return console.log("Invalid age");
    }

    // Storing user input data into an object
    const data = {
      userName: enteredUserName,
      age: enteredAge,
    };

    console.log(data);

    // Garbage collection section => Emptying inputs after data collected
    setEnteredUserName("");
    setEnteredAge("");
  };

  /* 
    className can be renamed anything like classes or styles, and passed down into child Card component and access there using 
    props."whatever key name you set here on props", but im choosing className just to be semanctically correct
  */
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
