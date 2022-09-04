import React from "react";
import { TextField as TextFieldMui } from "@mui/material";

const TextField = ({ value, label, id, onChange, name, ...rest }) => {
  return (
    <TextFieldMui
      id={id}
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      name={name}
      {...rest}
    />
  );
};

export default TextField;
