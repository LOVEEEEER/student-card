export const validatorConfig = {
  name: {
    isRequired: {
      message: "Поле 'имя' обязательно для заполнения",
    },
  },
  birth: {
    isRequired: {
      message: "Поле 'год рождения' обязательно для заполнения",
    },
    isNumber: {
      message: "Поле 'год рождения' должно состоять из цифр",
    },
    isNotMore: {
      message: "Поле 'год рождения' не может быть больше текущего года",
      params: new Date().getFullYear(),
    },
    isNotLess: {
      message: "Чет не верю что ты старше 120 лет))",
      params: new Date().getFullYear() - 120,
    },
  },
  website: {
    isRequired: {
      message: "Поле 'личный сайт' обязательно для заполнения",
    },
    isUrl: {
      message: "Поле 'личный сайт' введено некоректно ",
    },
  },
  github: {
    isRequired: {
      message: "Поле 'github' обязательно для заполнения",
    },
    isCorrectGithub: {
      message: "Поле 'github' введено некоректно",
    },
  },
};
