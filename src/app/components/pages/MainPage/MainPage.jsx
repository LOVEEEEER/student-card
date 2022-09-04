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
  console.log(userStorage);
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
                    {userStorage.birth} год
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
