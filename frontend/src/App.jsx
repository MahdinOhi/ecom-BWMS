import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/Signup/SignupPage";
import LandingPage from "./components/Landing/LandingPage";
import ForgotPassPage from "./components/ForgotPass/ForgotPassPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Show LandingPage on root */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgotpass" element={<ForgotPassPage />} />
      <Route path="*" element={<LandingPage />} /> {/* Catch-all for other routes */}
    </Routes>
  </Router>
);

export default App;
