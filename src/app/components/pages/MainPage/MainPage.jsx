import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import { fromStorage } from "../../../utils/fromStorage";

const MainPage = () => {
  const history = useHistory();
  const handleToggleEditPage = () => {
    history.push("/edit");
  };
  const userStorage = fromStorage("userInfo");
  const handleCorrentAges = (year) => {
    const ageCount = new Date().getFullYear() - year;
    const lastOne = Number(ageCount.toString().slice(-1));
    console.log(lastOne);
    if (ageCount > 4 && ageCount < 15) return `${ageCount} лет`;
    if (lastOne === 1) return `${ageCount} год`;
    if ([2, 3, 4].indexOf(lastOne) > -1) {
      return `${ageCount} года`;
    }
    return `${ageCount} лет`;
  };
  return (
    <>
      <main className="main">
        <section className="main-content">
          <div className="container main-content__container">
            <h1>Карточка студента</h1>
            {!userStorage ? (
              <>
                <p>нет данных</p>
                <Button variant="contained" onClick={handleToggleEditPage}>
                  Добавить
                </Button>
              </>
            ) : (
              <>
                <ul className="main-content__list">
                  <li className="main-content__item">
                    <strong>Имя: </strong>
                    {userStorage.name}
                  </li>
                  <li className="main-content__item">
                    <strong>Год рождения: </strong>
                    {userStorage.birth} год (
                    {handleCorrentAges(userStorage.birth)})
                  </li>
                  <li className="main-content__item">
                    <strong>Вебсайт: </strong>
                    {userStorage.website}
                  </li>
                  <li className="main-content__item">
                    <strong>GitHub: </strong>
                    <a href={userStorage.github}>{userStorage.github}</a>
                  </li>
                </ul>
                <Button variant="contained" onClick={handleToggleEditPage}>
                  Редактировать
                </Button>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
