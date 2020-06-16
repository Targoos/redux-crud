import React from "react";

const EditProduct = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="cold-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar Producto
              </h2>
              <form>
                <div className="form-group">
                  <label>Nombre producto</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre Producto"
                    name="nombre"
                  />
                </div>
                <div className="form-group">
                  <label>Precio Producto</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Nombre Producto"
                    name="precio"
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
