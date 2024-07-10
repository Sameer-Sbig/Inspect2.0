import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPageMain from "./loginPage/LoginPage";
import Dashboard from "./dashBoard/Dashboard";
import Header from "./Header/Header";
import Sidebar from "./sidebar/Sidebar";

import "./App.css";
import ManageSurvey from "./manageSurvey/ManageSurvey";
import ManageSurveyMain from "./manageSurvey/ManageSurveyMain";
import Report from "./report/Report";

// Context to manage authentication state
export const AuthContext = createContext();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
     
        <Routes>
          <Route path="/" element={<LoginPageWrapper />} />
          <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          {/* <Route path="/manageSurvey" element={<PrivateRoute component={ManageSurveyMain} />} /> */}
          <Route path="/report" element={<PrivateRoute component={Report}></PrivateRoute>}></Route>
        </Routes>
      
    </AuthContext.Provider>
  );
};

// Component to conditionally render Header and Sidebar for authenticated pages
const PrivateRoute = ({ component: Component }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <>
      <Header />
      <div className="app-container">
        <Sidebar className="sidebar" />
        <div className="content">
          <Component />
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

// Component to render only the login page without Header and Sidebar
const LoginPageWrapper = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <LoginPageMain />;
};

export default App;
