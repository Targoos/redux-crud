import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_PRODUCTS_DOWNLOAD,
  PRODUCTS_DONWLOAD_SUCCESS,
  PRODUCTS_DONWLOAD_ERROR,
  GET_PRODUCT_ELIMINATE,
  PRODUCT_ELIMINATED_SUCCESS,
  PRODUCT_ELIMINATED_ERROR,
} from "../types";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

export const createNewProductAction = (product) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: {
      loading: true,
    },
  });
  try {
    await clientAxios.post("/productos", product);
    dispatch({
      type: ADD_PRODUCT_SUCCESS,
      payload: {
        products: product,
        loading: false,
      },
    });
    Swal.fire("Correcto", "El producto se agrego correctamente", "success");
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_PRODUCT_ERROR,
      payload: {
        error: true,
        loading: false,
      },
    });
    Swal.fire({
      icon: "error",
      tittle: "Error",
      text: "El producto no se pudo añadir",
    });
  }
};

export const getProductsAction = () => async (dispatch) => {
  dispatch({
    type: START_PRODUCTS_DOWNLOAD,
    payload: {
      loading: true,
    },
  });
  try {
    const response = await clientAxios.get("/productos");
    dispatch({
      type: PRODUCTS_DONWLOAD_SUCCESS,
      payload: {
        products: response.data,
        loading: false,
      },
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_DONWLOAD_ERROR,
      payload: {
        error: true,
      },
    });
  }
};

export const deleteProductAction = () => (dispatch) => {
  dispatch({
      type: GET_PRODUCT_ELIMINATE,
      payload: 
  });
};
