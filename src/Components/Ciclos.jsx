import { Link } from "react-router-dom";

const Ciclos = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h1>Ejercicios con ciclos en node</h1>
      <div>
        <h3>Buscador de números</h3>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackblitz.com/edit/stackblitz-starters-eaz9uz?file=BuscarNumero.js"
          >
            Ver y ejecutar en StackBlitz
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
      <div>
        <h3>Buscador de números [con función recursiva]</h3>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackblitz.com/edit/stackblitz-starters-eaz9uz?file=BuscarNumeroFuncRecursiva.js"
          >
            Ver y ejecutar en StackBlitz
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
      <div>
        <h3>FizzBuzz</h3>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://stackblitz.com/edit/stackblitz-starters-eaz9uz?file=FizzBuzz.js"
          >
            Ver y ejecutar en StackBlitz
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
    </div>
  );
};

export default Ciclos;
