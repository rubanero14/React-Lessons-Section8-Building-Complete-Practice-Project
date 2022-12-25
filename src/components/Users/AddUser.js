import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [inputValid, setInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // onChange event handlers
  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  // onSubmit event handler =>
  const addUserHandler = (event) => {
    // Resetting validation
    setInputValid(false);
    setErrorMessage("");

    // Prevent page from refreshing upon submit evnt fired
    event.preventDefault();

    // Gatekeeping function to bar submitting empty data
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setInputValid(false);
      setErrorMessage("Fill up up the inputs!");
      return console.log(inputValid, errorMessage);
    } else if (+enteredAge < 1) {
      setInputValid(false);
      setErrorMessage("Invalid age!");
      return console.log(inputValid, errorMessage);
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
        <Button type="submit" style={{ marginBotttom: "10px" }}>
          Add User
        </Button>
        <p
          className={styles.alert}
          style={{ display: inputValid ? "none" : "block" }}
        >
          {errorMessage}
        </p>
      </form>
    </Card>
  );
};

export default AddUser;
