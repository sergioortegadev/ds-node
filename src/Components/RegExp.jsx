import React from "react";
import { useState } from "react";
import ExpresionesRegulares from "../03-RegExp/ExpresionesRegulares";
import CodeRegExp1 from "../03-RegExp/CodeRegExp1";
import { Link } from "react-router-dom";

let initialPassword = "";

const RegExp = () => {
  //const [count, setCount] = useState(0);
  //const [resultado, setResultado] = useState(false);
  const [password, setPassword] = useState(initialPassword);
  const [codes, setCodes] = useState(false);

  const onOffCodes = () => {
    if (codes) setCodes(false);
    else setCodes(true);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const enviar = (e) => {
    e.preventDefault();
    setPassword(document.querySelector(".input").value);
    //setResultado(true);
  };

  /* const limpiar = (e) => {
    e.preventDefault();
    setPassword("");
    setResultado(false);
  }; */

  return (
    <>
      <div>
        <h1 className="title">Password Tester</h1>
        <form className="form-regexp">
          <label className="input-label">
            Escriba aquí su password a testear. Letras y números
            <input
              className="input"
              type="text"
              name="password"
              placeholder="ingrese contraseña"
              onChange={handleChange}
            />
          </label>
          {/*<div className="buttons">
            <button onClick={enviar} className="button">
              Verificar
            </button>
             <button onClick={limpiar} className="button">
              Limpiar
            </button> 
          </div>*/}
        </form>
      </div>
      <ExpresionesRegulares password={password} />

      {/* <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div> */}
      <div className="buttons">
        <button className="button" onClick={() => onOffCodes()}>
          Ver códigos RegExp
        </button>
      </div>
      {codes && <CodeRegExp1 />}
      <button>
        <Link to="/">Home</Link>
      </button>
    </>
  );
};

export default RegExp;
