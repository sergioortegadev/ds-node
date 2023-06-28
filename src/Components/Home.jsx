import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Curso Node Daniel Segovia</h1>
      <img className="logo" src="./assets/nodelogo.png" alt="node logo" />
      <h2 className="title">Sergio Ortega Dev</h2>
      <h3>Ejercicios</h3>
      <button>
        <Link to="regexp">RegExp</Link>
      </button>
      <button>
        <Link to="calc">Calculadora</Link>
      </button>
    </div>
  );
};

export default Home;
