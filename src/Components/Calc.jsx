import { Link } from "react-router-dom";

const Calc = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/sergioortegadev/ds-node"
        >
          Source & Doc in GitHub
        </a>
      </button>
    </div>
  );
};

export default Calc;
