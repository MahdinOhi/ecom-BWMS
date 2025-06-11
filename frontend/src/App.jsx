// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/Landing/LandingPage';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/Signup/SignUpPage';
import ForgotPassPage from './components/ForgotPass/ForgotPassPage';
import ContactPage from './components/Contact/ContactPage';
import AboutPage from './components/About/AboutPage';
import ShopPage from './components/Shop/ShopPage';
import ProductPage from './components/Product/ProductPage';
import PolicySection from './components/Landing/PolicySection';
import EmptyCart from './components/Cart/EmptyCart';
import WishList from './components/WishList/WishlistPage';
import Error404 from './components/Error404/Error404Page';
import AccountPage from './components/UserProfile/AccountPage';
import './App.css'; // Assuming you have a CSS file for global styles

const App = () => (
  <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/category/:categoryId" element={<ProductPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgotpass" element={<ForgotPassPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PolicySection />} />
        <Route path="/empty-cart" element={<EmptyCart />} />
        <Route path="/useracc" element={<AccountPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
