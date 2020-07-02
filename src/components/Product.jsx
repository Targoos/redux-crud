import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteProductAction,
  getProductAction,
} from "../actions/productosActions";

const Product = ({ product }) => {
  const { nombre, precio, id } = product;
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectEdit = (product) => {
    history.push(`/products/edit/${id}`);

    dispatch(getProductAction(product));
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold"> $ {precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redirectEdit(product)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          onClick={() => dispatch(deleteProductAction(id))}
          type="button"
          className="btn btn-danger"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
