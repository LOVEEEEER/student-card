import React, { useState, useEffect } from "react";
import TextField from "../../common/TextField";
import { validator } from "../../../utils/validator";
import { validatorConfig } from "./validatorConfig";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { toStorage } from "../../../utils/toStorage";
import { fromStorage } from "../../../utils/fromStorage";

const EditForm = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(
    fromStorage("userInfo")
      ? {
          name: fromStorage("userInfo").name,
          birth: fromStorage("userInfo").birth,
          website: fromStorage("userInfo").website,
          github: fromStorage("userInfo").github,
        }
      : {
          name: "",
          birth: "",
          website: "",
          github: "",
        }
  );
  const history = useHistory();
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    history.replace("/");
    toStorage("userInfo", data);
  };
  const isValid = Object.keys(errors).length === 0;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        error={Boolean(errors.name)}
        label="Имя"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
        helperText={errors.name}
        className="form-text-field"
      />
      <br />
      <TextField
        error={Boolean(errors.birth)}
        label="Год рождения"
        id="birth"
        name="birth"
        value={data.birth}
        onChange={handleChange}
        helperText={errors.birth}
        className="form-text-field"
      />
      <br />
      <TextField
        error={Boolean(errors.website)}
        label="Личный сайт"
        id="website"
        name="website"
        value={data.website}
        onChange={handleChange}
        helperText={errors.website}
        className="form-text-field"
      />
      <br />
      <TextField
        error={Boolean(errors.github)}
        label="Ссылка на GitHub"
        id="github"
        name="github"
        value={data.github}
        onChange={handleChange}
        helperText={errors.github}
        className="form-text-field"
      />
      <br />
      <Button disabled={!isValid} type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default EditForm;
