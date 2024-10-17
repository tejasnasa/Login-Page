import React, { useState, useRef } from "react";
import { TextField, Box, Button } from "@mui/material";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// ValidatedTextField.js
const ValidatedTextField = ({ label, validator, onChange }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue);
    setValue(newValue);
    setError(errorMessage);
    onChange(!errorMessage);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
    />
  );
};

// validators.js
const nameValidator = (value) => {
  if (value.length < 3) return "Name must be at least 3 characters long";
  if (value.length > 20) return "Name must be less than 20 characters long";
  if (!/^[a-zA-Z ]+$/.test(value))
    return "Name must contain only letters and spaces";
  return false;
};

const emailValidator = (value) => {
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
    return "Invalid email address";
  return false;
};

const passwordValidator = (value) => {
  if (value.length <= 3) return "Password must be more than 3 characters long";
  if (!/[A-Z]/.test(value))
    return "Password must contain at least one uppercase letter";
  if (!/[0-9]/.test(value)) return "Password must contain at least one number";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
    return "Password must contain at least one special character";
  return false;
};

// FormValidation.js
const SignupCard = () => {
  const formValid = useRef({ name: false, email: false });

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const auth = getAuth();
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formValid.current).every((isValid) => isValid)) {
      createUserWithEmailAndPassword(auth, data.name, data.email, data.password)
        .then((response) => {
          console.log(response.user);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col w-2/6"
    > 
      <ValidatedTextField
        label="Name"
        validator={nameValidator}
        onChange={(isValid) => (formValid.current.name = isValid)}
      />
      <ValidatedTextField
        label="Email"
        validator={emailValidator}
        onChange={(isValid) => (formValid.current.email = isValid)}
      />
      <ValidatedTextField
        label="Password"
        validator={passwordValidator}
        onChange={(isValid) => (formValid.current.password = isValid)}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default SignupCard;
