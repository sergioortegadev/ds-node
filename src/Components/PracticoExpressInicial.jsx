import { Link } from "react-router-dom";
import CrudForm from "./PracticoExpressInicial/CrudForm";

const PracticoExpressInicial = () => {
  return (
    <>
      <h1>Practico Express inicial</h1>
      <button>
        <Link to="/" activeclassname="active">
          Home
        </Link>
      </button>
      <CrudForm />
    </>
  );
};

export default PracticoExpressInicial;
