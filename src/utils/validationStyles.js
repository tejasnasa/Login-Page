export const validationStyles = (field, errors) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "2px",
        borderColor: errors[field] ? "red" : "black",
      },
      "&:hover fieldset": {
        borderColor: errors[field] ? "red" : "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: errors[field] ? "red" : "blue",
      },
    },
    "& .MuiInputLabel-root": {
      color: errors[field] ? "red" : "inherit",
    },
  });
  