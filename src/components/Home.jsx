import React, { useEffect } from "react";
import axios from "axios";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
// import { Link } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then((result) => {
        console.log(result);
        if (result.data !== "Success");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
    <div>
      <nav>Get Ready to Complete Your Daily Goals</nav>
      <Header />
    </div>
  );
};
