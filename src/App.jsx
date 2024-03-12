import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
