// CADA REDUCER TIENE SU PROPIO ESTATE
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

const initialState = {
  products: [],
  error: false,
  loading: false,
  eliminateProduct: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload.products],
        loading: action.payload.loading,
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: action.payload.loading,
      };
    case START_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case PRODUCTS_DONWLOAD_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };
    case PRODUCTS_DONWLOAD_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
