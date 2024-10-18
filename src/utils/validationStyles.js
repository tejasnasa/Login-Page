export const validationStyles = (field, errors) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderWidth: "2px", // Default border thickness
        borderColor: errors[field] ? "red" : "black", // Set border color based on error
      },
      "&:hover fieldset": {
        borderColor: errors[field] ? "red" : "black", // Maintain border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: errors[field] ? "red" : "blue", // Change color on focus; use blue or other color if no error
      },
    },
    "& .MuiInputLabel-root": {
      color: errors[field] ? "red" : "inherit", // Optional: Change label color on error
    },
  });
  