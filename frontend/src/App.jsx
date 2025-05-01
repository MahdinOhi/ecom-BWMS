import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";  // Import LoginPage component
import SignUpPage from "./components/Signup/SignupPage";  // Import SignUpPage component
import LandingPage from "./components/Landing/LandingPage";  // Import the main app page
import ForgotPassPage from "./components/ForgotPass/ForgotPassPage";  // Import ForgotPassPage component

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />  {/* Route for the login page */}
      <Route path="/signup" element={<SignUpPage />} />  {/* Route for the sign-up page */}
      <Route path="/forgotpass" element={<ForgotPassPage />} />
      <Route path="/" element={<LandingPage />} />        {/* Main app page */}
    </Routes>
  </Router>
);

export default App;
