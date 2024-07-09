// import Dashboard from "./dashBoard/Dashboard";
// import "./App.css";
// import React from "react";

// import LoginPageMain from "./loginPage/LoginPage";
// import { Route, Routes } from "react-router";
// import Sidebar from "./sidebar/Sidebar";
// import Header from "./Header/Header";

// function App() {
//   // note that github variable is get to inspect in place of origin
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<LoginPageMain></LoginPageMain>}></Route>
//         <Route path="/dashboard" element={<Dashboard></Dashboard>} >
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;


// *******************************************************************8//
// import React, { useState, createContext, useContext } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import LoginPageMain from "./loginPage/LoginPage";
// import Dashboard from "./dashBoard/Dashboard";
// import Header from "./Header/Header";
// import Sidebar from "./sidebar/Sidebar";

// import "./App.css";

// // Context to manage authentication state
// export const AuthContext = createContext();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = () => {
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      
//         <Routes>
//           <Route path="/" element={<LoginPageWrapper />} />
//           <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
//           {/* <Route path="/dummy1" element={<PrivateRoute component={DummyPage1} />} />
//           <Route path="/dummy2" element={<PrivateRoute component={DummyPage2} />} />
//           <Route path="/dummy3" element={<PrivateRoute component={DummyPage3} />} />
//           <Route path="/dummy4" element={<PrivateRoute component={DummyPage4} />} /> */}
//         </Routes>
      
//     </AuthContext.Provider>
//   );
// };

// // Component to conditionally render Header and Sidebar for authenticated pages
// const PrivateRoute = ({ component: Component }) => {
//   const { isLoggedIn } = useContext(AuthContext);

//   return isLoggedIn ? (
//     <>
//       <Header />
//       <div className="app-container" style={{
//         display:'flex'
//       }}>
//         <Sidebar />
//         <div className="content" >
//           <Component />
//         </div>
//       </div>
//     </>
//   ) : (
//     <Navigate to="/" replace />
//   );
// };

// // Component to render only the login page without Header and Sidebar
// const LoginPageWrapper = () => {
//   const { isLoggedIn } = useContext(AuthContext);

//   return isLoggedIn ? <Navigate to="/dashboard" replace /> : <LoginPageMain />;
// };

// export default App;



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
