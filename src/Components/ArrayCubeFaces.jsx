import { Rubik } from "../08-Array/cuboRubik";

const ArrayCubeFaces = ({ face, cube }) => {
  const asignarColor = (cara, fila, col, cube) => {
    let color = Rubik[cara][fila][col];
    switch (color) {
      case "w":
        return <div className="cube-color-white"></div>;
      case "r":
        return <div className="cube-color-red"></div>;
      case "g":
        return <div className="cube-color-green"></div>;

      case "b":
        return <div className="cube-color-blue"></div>;

      case "o":
        return <div className="cube-color-orange"></div>;

      case "y":
        return <div className="cube-color-yellow"></div>;

      default:
        break;
    }
  };

  return (
    <>
      {asignarColor(face, 0, 0)}
      {asignarColor(face, 0, 1)}
      {asignarColor(face, 0, 2)}
      {asignarColor(face, 1, 0)}
      {asignarColor(face, 1, 1)}
      {asignarColor(face, 1, 2)}
      {asignarColor(face, 2, 0)}
      {asignarColor(face, 2, 1)}
      {asignarColor(face, 2, 2)}
    </>
  );
};

export default ArrayCubeFaces;
