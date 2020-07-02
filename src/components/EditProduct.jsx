import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/productosActions";
import { useHistory } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    nombre: "",
    precio: "",
  });

  const productEdit = useSelector((state) => state.products.productSelected);

  useEffect(() => {
    setProduct(productEdit);
  }, [productEdit]);

  const onChangeForm = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = productEdit;
  const dispatch = useDispatch();
  const history = useHistory();

  const submitEditProduct = (e) => {
    e.preventDefault();

    dispatch(editProductAction(product));
    history.push("/");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar Producto
              </h2>
              <form onSubmit={submitEditProduct}>
                <div className="form-group">
                  <label>Nombre producto</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre Producto"
                    name="nombre"
                    value={product.nombre}
                    onChange={onChangeForm}
                  />
                </div>
                <div className="form-group">
                  <label>Precio Producto</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Nombre Producto"
                    name="precio"
                    value={product.precio}
                    onChange={onChangeForm}
                  />
                </div>
                <button
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  type="submit"
                  placeholder="agregar"
                >
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
