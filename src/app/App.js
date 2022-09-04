import { Route } from "react-router-dom";
import EditPage from "./components/pages/EditPage";
import MainPage from "./components/pages/MainPage/MainPage";

const App = () => {
  return (
    <>
      <Route path="/edit" component={EditPage} />
      <Route path="/" exact component={MainPage} />
    </>
  );
};

export default App;
