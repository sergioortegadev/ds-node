import { Link } from "react-router-dom";
import { useContext } from "react";
import NavContext from "./context/NavContext";

const CrudHeader = () => {
  const { openNav } = useContext(NavContext);
  return (
    <div className="crud-header">
      <h3> [ - Base de Datos Completa - ]</h3>
      <button className="add-btn" onClick={(e) => openNav("form")}>
        <Link activeclassname="active">➕ Product</Link>
      </button>
    </div>
  );
};

export default CrudHeader;
