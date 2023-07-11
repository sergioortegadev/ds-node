import { useState } from "react";
import { Link } from "react-router-dom";
import ArrayCubeFaces from "./ArrayCubeFaces";
import { mover, Rubik } from "../08-Array/cuboRubik";

const Ciclos = () => {
  const [cube, setCube] = useState(Rubik);

  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h1>Ejercicios con Array en node</h1>
      <div>
        <div className="rubik">
          <div className="rubik-buttons">
            <button>left up ⬆</button>
            <button
              onClick={() => {
                mover("top", "left", cube);
              }}
            >
              ⬅ top left
            </button>
          </div>
          <div className="cube-faces">{<ArrayCubeFaces face={1} />}</div>
          <div className="rubik-buttons">
            <button>⬆ right up</button>
            <button>top right ➡</button>
          </div>
          <div className="cube-faces">{<ArrayCubeFaces face={4} />}</div>
          <div className="cube-faces front">{<ArrayCubeFaces face={0} cube={cube} setCube={setCube} />}</div>
          <div className="cube-faces">{<ArrayCubeFaces face={2} />}</div>
          <div className="rubik-buttons">
            <button>⬅ bottom left</button>
            <button>left down ⬇</button>
          </div>
          <div className="cube-faces">{<ArrayCubeFaces face={3} />}</div>
          <div className="rubik-buttons">
            <button>bottom right ➡</button>
            <button>⬇ right down</button>
          </div>
          <div></div>
          <div className="cube-faces">{<ArrayCubeFaces face={5} />}</div>
          <div></div>
        </div>

        {/* <h3>Cubo Rubik</h3>
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
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sergioortegadev/ds-node">
            Source & Doc in GitHub
          </a>
        </button> */}
      </div>
    </div>
  );
};

export default Ciclos;
