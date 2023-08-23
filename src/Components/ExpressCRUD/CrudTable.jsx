import CrudTableRow from "./CrudTableRow";
import CrudHeader from "./CrudHeader";

const CrudTable = ({ data, setDataToEdit, deleteData, openModal }) => {
  return (
    <>
      <CrudHeader />
      <table className="table">
        <thead className="thead">
          <tr>
            <th>{/* Foto */}</th>
            {/*<th>Category</th>
             <th>Tags</th> */}
            <th>Nombre Producto</th>
            {/* <th>Descripción</th> */}
            <th>Precio</th>
            <th>Peso</th>
            <th>Dimensiones</th>
            <th>Stock</th>
            <th>{/* Acciones */}</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr className="sin-datos">
              <td colSpan="8"> - Sin Datos - </td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                datosElemento={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                openModal={openModal}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
