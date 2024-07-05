import "./App.css";

import LoginPageMain from "./loginPage/LoginPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPageMain></LoginPageMain>}></Route>
      </Routes>
    </>
  );
}

export default App;
