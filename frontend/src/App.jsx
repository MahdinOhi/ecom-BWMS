// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/Signup/SignUpPage';
import ForgotPassPage from './components/ForgotPass/ForgotPassPage';

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpass" element={<ForgotPassPage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
