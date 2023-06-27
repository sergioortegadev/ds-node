import React from "react";

const CodeRegExp1 = () => {
  return (
    <div className="codes">
      <h3>Código Expresiones Regulares Utilizadas</h3>
      <h4>Para las contraseñas seguridad baja</h4>
      <p>/^(?=.*[0-9])(?=.*[a-zA-ZñÑ])[a-zA-Z0-9\s_+*@#ñÑáéíóúÁÉÍÓÚ]+$/</p>
      <h4>Para las contraseñas seguridad media</h4>
      <p>
        /^(?=.*[0-9])(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[A-ZÑ])[\w\s_\-+*@#ñÑáéíóúÁÉÍÓÚ]+$/
      </p>
      <h4>Para las contraseñas seguridad alta</h4>
      <p>
        /^(?=.*[0-9])(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*[A-ZÑ])(?=.*[_\-+*@#])[\w\s_\-+*@#ñÑáéíóúÁÉÍÓÚ]+$/
      </p>
    </div>
  );
};

export default CodeRegExp1;
