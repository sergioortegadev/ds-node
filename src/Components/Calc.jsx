import React from "react";
import { Link } from "react-router-dom";

const Calc = () => {
  return (
    <div>
      <h1>Calculadora node en CLI</h1>
      <button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://stackblitz.com/edit/stackblitz-starters-eaz9uz?embed=1&file=calc.js&theme=dark&view=editor"
        >
          Ver en StackBlitz
        </a>
      </button>

      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Calc;
