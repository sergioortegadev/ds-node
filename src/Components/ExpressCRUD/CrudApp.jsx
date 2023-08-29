import { useState, useEffect } from "react";
import CrudForm from "./CrudForm";
import CrudFormEdit from "./CrudFormEdit";
import CrudTable from "./CrudTable";
import { useContext } from "react";
import NavContext from "./context/NavContext";
//import db from "./db/db.json";
import "./CrudApp.css";
import { helpHttp } from "./helpersRest/helpHTTP.js";

let product = []; // La DB de productos es un arreglo de objetos

const CrudApp = () => {
  // Esta var de estado envía los datos del producto mediante props al componente FigureModal que se abre como una ventana modal
  const [data, setData] = useState({});

  const { openForm, openFormEdit, openTable } = useContext(NavContext);

  const [db, setDb] = useState(product);

  const [dataToEdit, setDataToEdit] = useState(null);

  // Datos de Conexión con Servidor Node - Express, a través del "helper" y variable de entorno:
  let api = helpHttp();
  let url = "http://192.168.100.140:5566/v1/product";

  // UseEffect que traerá los datos de la DB
  useEffect(() => {
    api.get(url).then((res) => {
      // console.log(res.product);
      product = res.product;
      setDb(product);
    });
  }, []);

  const createData = (form) => {
    console.log(form);
    /*  // Nuevo id: se recorre la db y se busca el sigiente número
    let idMayor = 1;
    db.forEach((el) => {
      if (el.id >= idMayor) {
        idMayor = el.id;
      }
    });
    idMayor++;
    form.id = idMayor; */

    api.post(url, { body: form }).then((res) => {
      console.log(res);
      try {
        api.get(url).then((res) => setDb(res.product));
        // Tomamos la db y le agregamos data
        //setDb([...db, res]);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const updateData = (form) => {
    // Busco en la base (db) el id del dato a modificar que viene en "form" (form.id, cuando coincida que le asigne todo lo que viene en "form" a la var newData y la guarde en la base.)
    let newData = db.map((el) => (el.id === form.id ? form : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(`Confirmar eliminación`);

    if (isDelete) {
      // en el siguiente newData filtro la base para guardar todos los registros menos el que tiene el id que quiero eliminar.
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      {openForm && (
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      )}
      {openFormEdit && <CrudFormEdit updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />}
      {openTable && <CrudTable key={db.id} data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />}
    </>
  );
};

export default CrudApp;
