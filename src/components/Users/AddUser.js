import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [inputValid, setInputValid] = useState({
    title: "",
    message: "",
    error: false,
  });

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
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return setInputValid({
        title: "Invalid input!",
        message: "Please fill up the inputs and dont leave them empty.",
        error: true,
      });
    }

    if (+enteredAge < 1) {
      return setInputValid({
        title: "Invalid age!",
        message: "Please input valid age.",
        error: true,
      });
    }

    // Sending new user data using props function to parent component to update new list or array of users whenever add use button is clicked
    props.onAddUser(enteredUserName, enteredAge);

    // Garbage collection section => Emptying inputs after data collected
    setEnteredUserName("");
    setEnteredAge("");
  };

  // Close modal
  const closeModal = () => {
    setInputValid({
      title: "",
      message: "",
      error: false,
    });
  };

  /* 
    className can be renamed anything like classes or styles, and passed down into child Card component and access there using 
    props."whatever key name you set here on props", but im choosing className just to be semanctically correct
  */
  return (
    <div>
      {
        // This is how to render conditionally using JSX without need to use css display method
        /* 
          inputValid.error && (
          <ErrorModal
            showModal={inputValid.error}
            closeModal={closeModal}
            title={inputValid.title}
            message={inputValid.message}
          />)
      */
      }
      <ErrorModal
        showModal={inputValid.error}
        closeModal={closeModal}
        title={inputValid.title}
        message={inputValid.message}
      />
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
            style={{ display: inputValid ? "block" : "none" }}
          >
            {inputValid.message}
          </p>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
