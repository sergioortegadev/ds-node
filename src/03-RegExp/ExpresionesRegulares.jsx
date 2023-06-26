import React from "react";
import { useState, useEffect } from "react";
import { check } from "./logicaExpReg";

const ExpresionesRegulares = ({ password }) => {
  const [resultado, setResultado] = useState(false);
  const [pass, setPass] = useState("");

  const verificado = (res) => {
    /*  if (res === 3) {
      setPass("ALTA");
      console.log("Contraseña Seguridad ALTA");
    } else if (res === 2) {
      setPass("MEDIA");
      console.log("Contraseña Seguridad MEDIA");
    } else if (res === 1) {
      setPass("BAJA");
      console.log("Contraseña Seguridad BAJA");
    } else console.log("Rechazada: debe tener al menos letras y números"); */

    switch (res) {
      case 3:
        setResultado(true);
        setPass("ALTA");
        console.log("Contraseña Seguridad ALTA");
        break;

      case 2:
        setResultado(true);
        setPass("MEDIA");
        console.log("Contraseña Seguridad MEDIA");
        break;

      case 1:
        setResultado(true);
        setPass("BAJA");
        console.log("Contraseña Seguridad BAJA");
        break;

      case 0:
        setPass("");
        console.log("Rechazada: debe tener al menos letras y números");
        break;

      default:
        console.log("error");
        break;
    }

    console.log("verificado respuesta nº: " + res);
  };
  useEffect(() => {
    check(password, verificado);
  }, [password]);

  return (
    <>
      {resultado && (
        <div className="test-result">
          {pass === "ALTA" && (
            <>
              <div className="semaforo">
                <img src="./assets/pass3.png" alt="verde" />
              </div>
              <h3>Contraseña Segura</h3>
            </>
          )}
          {pass === "MEDIA" && (
            <>
              <div className="semaforo">
                <img src="./assets/pass2.png" alt="amarillo" />
              </div>
              <h3>
                Contraseña de Media Seguridad. Agregar alguno de estos signos
                _-+*@#
              </h3>
            </>
          )}
          {pass === "BAJA" && (
            <>
              <div className="semaforo">
                <img src="./assets/pass1.png" alt="amarillo" />
              </div>
              <h3>
                Contraseña de BAJA Seguridad. Agregar minúsculas y mayúsculas
              </h3>
            </>
          )}
          {pass === "" && (
            <>
              <div className="semaforo"></div>
              <h3 className="test-result-red">Contraseña no válida:</h3>
              <h3>Letras, números, y sólo estos signos _-+*@#</h3>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ExpresionesRegulares;
