import Dashboard from "./dashBoard/Dashboard";
import "./App.css";
import React from "react";

import LoginPageMain from "./loginPage/LoginPage";
import { Route, Routes } from "react-router";
import Sidebar from "./sidebar/Sidebar";
import Header from "./Header/Header";

function App() {
  // note that github variable is get to inspect in place of origin
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPageMain></LoginPageMain>}></Route>
       <React.Fragment> <Header></Header>
        <Sidebar></Sidebar>
        </React.Fragment>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} >
        </Route>
      </Routes>
    </>
  );
}

export default App;





// ChatGPT
// To achieve your goal in a React application, you'll set up a map containing usernames as keys and passwords as values. Then, you'll implement a login form where users can input their username and password. Upon successful validation, you'll navigate to a new page using the useNavigate hook from react-router-dom and pass the username to the next page.

// Here’s a step-by-step guide on how to implement this:

// Setting Up User Credentials:
// Define a map that contains usernames as keys and passwords as values. This map will simulate your user database.

// Implementing the Login Component:
// Create a login form where users can input their username and password. Use state to manage the input values and handle form submission.

// Navigating to the Next Page:
// Utilize the useNavigate hook from react-router-dom to navigate to a new page upon successful login. Pass the username as a parameter to the next page.

// Let's go through the implementation:

// Step 1: Setting Up User Credentials
// Define your user credentials map in the App.js or Login.js file:

// javascript
// Copy code
// // App.js or Login.js (where you manage your user credentials)
// import React from 'react';

// const userCredentials = {
//   user1: 'password1',
//   user2: 'password2',
//   user3: 'password3',
//   user4: 'password4',
// };

// export default userCredentials;
// Step 2: Implementing the Login Component
// Create a Login component where users can input their username and password. Use state to manage the input fields and handle form submission:

// javascript
// Copy code
// // Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import userCredentials from './App'; // Adjust the import path as necessary

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Check if username exists in userCredentials map and if the password matches
//     if (userCredentials.hasOwnProperty(username) && userCredentials[username] === password) {
//       // Navigate to next page with username as parameter
//       navigate('/next-page', { state: { username } });
//     } else {
//       alert('Invalid username or password');
//       // Optionally, clear input fields on failed login attempt
//       setUsername('');
//       setPassword('');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// Step 3: Navigating to the Next Page
// After successful login, use useNavigate to navigate to the next page ('/next-page') and pass the username as a parameter using the state object.

// Setting Up Next Page to Receive Username
// To receive and display the username on the next page (NextPage.js):

// javascript
// Copy code
// // NextPage.js
// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const NextPage = () => {
//   const location = useLocation();
//   const username = location.state.username;

//   return (
//     <div>
//       <h2>Welcome, {username}!</h2>
//       {/* Add content for the next page */}
//     </div>
//   );
// };

// export default NextPage;
// Integrating Login and NextPage Components in App.js
// Finally, integrate your Login and NextPage components in App.js:

// javascript
// Copy code
// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import NextPage from './NextPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/next-page" element={<NextPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// Explanation:
// User Credentials: userCredentials is a map where keys are usernames and values are passwords. This simulates your user database.

// Login Component: Handles user input for username and password. On form submission, it checks if the entered username exists in userCredentials and if the password matches. If so, it navigates to /next-page with the username passed as state.

// NextPage Component: Receives the username from the state object via useLocation() hook and displays a welcome message.

// App Component: Sets up routing using react-router-dom, rendering Login component initially and NextPage component upon successful login.

// Make sure you have react-router-dom installed:

// bash
// Copy code
// npm install react-router-dom
// This setup should now allow you to create a simple login functionality in your React application, where users can log in with predefined usernames and passwords and navigate to a new page displaying a personalized welcome message based on the username. Adjust styling and additional functionality as per your project requirements.