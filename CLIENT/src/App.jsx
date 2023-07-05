import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import { LoginButton } from "./components/Login/Login";
// import LogoutButton from "./components/Login/Logout.jsx";
import FormCreate from "./components/FormCreate/form";
import About from "./components/About/about";
import Contacto from "./components/Contacto/contacto";
import NavBar from "./components/NavBar/NavBar";
import { Profile } from "./components/Login/Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DetailBook from "./components/DetailBook/DetailBook";
import CartPayPage from "./components/CartPayPage/CartPayPage";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<DetailBook />} />
        {/* <Route path="/buy/:id" element={<Buy />} /> */}
        <Route exact path="/login" element={<LoginButton />} />
        {/* <Route path="/logout" element={<LogoutButton />} /> */}
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/create" element={<FormCreate />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exactpath="/cart_pay" element={<CartPayPage />} />
      </Routes>
    </div>
  );
}
