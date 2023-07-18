import { Link } from "react-router-dom";
import { useState } from "react";

const Functions = () => {
  const [posUser, setPosUser] = useState(4);
  const [posMaq, setPosMaq] = useState(4);
  const [posPelota, setPosPelota] = useState({ x: 4.3, y: -3 });

  const Maq = {
    count: 0,
  };
  const User = {
    count: 0,
  };

  const pongPunto = (player) => {};

  const pongJugar = () => {
    User.count = 0;
    Maq.count = 0;
    setPosUser(4);
    setPosMaq(4);
    let dirPelota = Math.floor(Math.random() * 7 + 1);
    console.log("Pelota hacia :", dirPelota);
    setPosPelota({ x: 7, y: 2 });
  };

  return (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <h1>Pong</h1>
      <div className="pong-container">
        <div className="pong-game-area">
          <div className="pong-display">
            <h2>15 : 0</h2>
          </div>
          {/* <div className="pong-red"></div> */}
          <div className="pong-positions-grid">
            <div className="posMaq1" style={{ color: posMaq === 1 ? "white" : "transparent" }}>
              ▓
            </div>
            <div>││</div>
            <div className="posUser1" style={{ color: posUser === 1 ? "white" : "transparent" }}>
              ▓
            </div>
            <div className="posMaq2" style={{ color: posMaq === 2 ? "white" : "transparent" }}>
              ▓
            </div>
            <div>││</div>
            <div className="posUser2" style={{ color: posUser === 2 ? "white" : "transparent" }}>
              ▓
            </div>
            <div className="posMaq3" style={{ color: posMaq === 3 ? "white" : "transparent" }}>
              ▓
            </div>
            <div>││</div>
            <div className="posUser3" style={{ color: posUser === 3 ? "white" : "transparent" }}>
              ▓
            </div>
            <div className="posMaq4" style={{ color: posMaq === 4 ? "white" : "transparent" }}>
              ▓
            </div>
            <div>││</div>
            <div className="posUser4" style={{ color: posUser === 4 ? "white" : "transparent" }}>
              ▓
            </div>
            <div className="posMaq5" style={{ color: posMaq === 5 ? "white" : "transparent" }}>
              ▓
            </div>
            <div>││</div>
            <div className="posUser5" style={{ color: posUser === 5 ? "white" : "transparent" }}>
              ▓
            </div>
            <div className="posMaq6" style={{ color: posMaq === 6 ? "white" : "transparent" }}>
              ▓
            </div>
            <div>││</div>
            <div className="posUser6" style={{ color: posUser === 6 ? "white" : "transparent" }}>
              ▓
            </div>
            <div className="posMaq7" style={{ color: posMaq === 7 ? "white" : "transparent" }}>
              ▓
            </div>
            <div>││</div>
            <div className="posUser7" style={{ color: posUser === 7 ? "white" : "transparent" }}>
              ▓
            </div>
            <div
              className="ball"
              style={{
                top: `${posPelota.y}rem`,
                left: `${posPelota.x}rem`,
                transform: `translate(${posPelota.x}rem,
                ${posPelota.y}rem)`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="pong-buttons">
        <button
          onClick={() => {
            if (posUser > 1) {
              setPosUser((posUser) => posUser - 1);
            }
          }}
        >
          🔼
        </button>
        <button
          onClick={() => {
            if (posUser < 7) {
              setPosUser((posUser) => posUser + 1);
            }
          }}
        >
          🔽
        </button>
        <button onClick={pongJugar}>🟢 START</button>
      </div>
      <h4>Ejercicios con Funciones en Node.js</h4>
    </>
  );
};

export default Functions;
