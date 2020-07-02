import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProductAction } from "../actions/productosActions";

const NewProduct = ({history}) => {
  const [nombre, setName] = useState("");
  const [precio, setPrice] = useState(0);

  const dispatch = useDispatch();
  const addNewProduct = (product) => dispatch(createNewProductAction(product));

  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const submitNewProduct = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    addNewProduct({
      nombre,
      precio,
    });

    history.push('/')
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Agregar Nuevo Producto
              </h2>
              <form onSubmit={submitNewProduct}>
                <div className="form-group">
                  <label>Nombre producto</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre Producto"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Precio Producto</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Precio Producto"
                    name="precio"
                    value={precio === 0 ? "" : precio}
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  type="submit"
                  placeholder="agregar"
                >
                  Agregar
                </button>
              </form>
              {loading && <p>...Cargando</p>}
              {error && (
                <p className="alert alert-danger p2 mt-4 text-center">
                  Hubo un error
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
