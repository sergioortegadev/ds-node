import { useContext } from "react";
import NavContext from "./context/NavContext";

const CrudTableRow = ({ datosElemento, setDataToEdit, deleteData, openModal }) => {
  let { id, category, tags, prodName, description, price, stock } = datosElemento;

  const { openNav } = useContext(NavContext);
  return (
    <>
      <tr className="figure-table-row">
        <td onClick={(e) => openModal(id)} className="foto-td">
          {datosElemento.images[0] ? (
            <img src={datosElemento.images[0]} alt={datosElemento.prodName} />
          ) : (
            <img src="../src/Components/ExpressCRUD/assets/no-fotos.png" alt="" />
          )}
        </td>
        {/*<td onClick={(e) => openModal(id)}>{datosElemento.category}</td>
         <td>{datosElemento.tags}</td> */}
        <td onClick={(e) => openModal(id)} className="nombre-td">
          {datosElemento.prodName}
        </td>
        {/* <td>{datosElemento.description}</td> */}
        <td onClick={(e) => openModal(id)} className="precio-td">
          {"$ " + datosElemento.price}
        </td>
        <td onClick={(e) => openModal(id)}>{datosElemento.ItemWeight}</td>
        <td onClick={(e) => openModal(id)}>{datosElemento.ItemDimensionsLxWxH}</td>
        <td onClick={(e) => openModal(id)}>{datosElemento.stock}</td>
        <td className="btn-td">
          <button
            onClick={() => {
              setDataToEdit(datosElemento);
              openNav("edit");
            }}
          >
            ✏️
          </button>
          <button onClick={() => deleteData(id)}>❌ </button>
        </td>
      </tr>
    </>
  );
};

export default CrudTableRow;
