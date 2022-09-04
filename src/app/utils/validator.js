export const validator = (data, config) => {
  const errors = {};
  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case "isRequired":
        if (data === "") return config.message;
        break;
      case "isNumber":
        if (!Number(data)) return config.message;
        break;
      case "isNotMore":
        if (data > config.params) return config.message;
        break;
      case "isNotLess":
        if (data < config.params) return config.message;
        break;
      case "isUrl":
        if (!/^(https:\/\/)?\S+\.\S+$/g.test(data)) return config.message;
        break;
      case "isCorrectGithub":
        if (!/^(https:\/\/)?github\.com\/\S+$/g.test(data))
          return config.message;
        break;
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
};
