import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { nombre, precio, id } = product;
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold"> $ {precio}</span>
      </td>
      <td className="acciones">
        <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button type="button" className="btn btn-danger">Eliminar</button>
      </td>
    </tr>
  );
};

export default Product;