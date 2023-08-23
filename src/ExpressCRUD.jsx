//import { useState } from "react";
import { Link } from "react-router-dom";
import CrudApp from "./Components/ExpressCRUD/CrudApp";
import { useContext } from "react";
import NavContext from "./Components/ExpressCRUD/context/NavContext";

const ExpressCRUD = () => {
  const { openForm, openFormEdit, openTable, openNav } = useContext(NavContext);

  return (
    <div>
      <h1>Operaciones CRUD con Express</h1>
      <nav className="nav">
        <button className="nav-btn" onClick={(e) => openNav("home")}>
          <Link to="/" activeclassname="active">
            Home
          </Link>
        </button>
        <button className="nav-btn" onClick={(e) => openNav("table")}>
          <Link activeclassname="active">Traer DB Completa</Link>
        </button>
      </nav>
      <CrudApp openForm={openForm} openFormEdit={openFormEdit} openTable={openTable} />
    </div>
  );
};

export default ExpressCRUD;
