// CADA REDUCER TIENE SU PROPIO ESTATE
import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_PRODUCTS_DOWNLOAD,
  PRODUCTS_DONWLOAD_SUCCESS,
  PRODUCTS_DONWLOAD_ERROR,
  INIT_PRODUCT_ELIMINATE,
  PRODUCT_ELIMINATED_SUCCESS,
  PRODUCT_ELIMINATED_ERROR,
  GET_EDIT_PRODUCT,
  INIT_EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";

const initialState = {
  products: [],
  error: false,
  loading: false,
  productSelected: null,
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
    case INIT_PRODUCT_ELIMINATE:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case PRODUCT_ELIMINATED_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
        loading: action.payload.loading,
      };
    case PRODUCT_ELIMINATED_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case GET_EDIT_PRODUCT:
      return {
        ...state,
        productSelected: action.payload.product,
      };
    case INIT_EDIT_PRODUCT:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: action.payload.loading,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload.product)
            : product
        ),
        productSelected: null,
      };
    case EDIT_PRODUCT_ERROR:
      return {
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
