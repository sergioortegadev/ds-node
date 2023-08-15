import { useState } from "react";
import { Link } from "react-router-dom";
import { calcular, logsToFront } from "../13-Arquitectura/calcMVC/controller/calcular";

const CalcMVC = () => {
  const [display1, setDisplay1] = useState(0);
  const [display2, setDisplay2] = useState(0);
  const [oper, setOper] = useState("");
  const [registros, setRegistros] = useState("");

  const verLogs = () => setRegistros(logsToFront());

  const borrarLogs = () => {
    localStorage.clear();
    setRegistros("");
  };

  const equal = (op, n1, n2) => {
    setDisplay2(calcular(op, n1, n2));
  };

  const ce = () => setDisplay2(0);
  const c = () => {
    setOper("");
    setDisplay1(0);
    setDisplay2(0);
  };
  const bntNum = (num) => {
    if (display2 >= 1_000_000_000) return;
    let temp = display2 * 10 + num;
    setDisplay2(temp);
  };
  const bntOpe = (sign) => {
    setDisplay1(display2);
    switch (sign) {
      case "+":
        setOper("+");
        break;
      case "-":
        setOper("-");
        break;
      case "x":
        setOper("x");
        break;
      case "/":
        setOper("/");
        break;

      default:
        break;
    }
    setDisplay2(0);
  };

  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <div className="calc">
        <div className="calc-display">
          <div className="calc-display-1">
            <div>{display1}</div>
            <div className="calc-display-oper">{oper}</div>
          </div>
          <div className="calc-display-2">{display2}</div>
        </div>
        <div className="calc-keyboard">
          <div className="calc-keyboard-spaces"></div>
          <div className="calc-keyboard-spaces"></div>
          <div className="calc-keyboard-spaces">
            <div onClick={c} className="calc-keys">
              C
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={ce} className="calc-keys">
              CE
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(7)} className="calc-keys">
              7
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(8)} className="calc-keys">
              8
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(9)} className="calc-keys">
              9
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntOpe("/")} className="calc-keys">
              /
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(4)} className="calc-keys">
              4
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(5)} className="calc-keys">
              5
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(6)} className="calc-keys">
              6
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntOpe("x")} className="calc-keys">
              x
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(1)} className="calc-keys">
              1
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(2)} className="calc-keys">
              2
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(3)} className="calc-keys">
              3
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntOpe("-")} className="calc-keys">
              -
            </div>
          </div>
          <div className="calc-keyboard-spaces"></div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntNum(0)} className="calc-keys">
              0
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => equal(oper, display1, display2)} className="calc-keys">
              =
            </div>
          </div>
          <div className="calc-keyboard-spaces">
            <div onClick={() => bntOpe("+")} className="calc-keys">
              +
            </div>
          </div>
        </div>
      </div>
      <div className="logs">
        <div className="logs-buttons">
          <button onClick={verLogs}>Ver Logs</button>
          <button onClick={borrarLogs}>Borrar Logs</button>
        </div>
        <div className="logs-pad">{registros}</div>
      </div>
    </div>
  );
};

export default CalcMVC;
