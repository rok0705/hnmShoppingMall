import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/rok0705/hnmShoppingMall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    // dispatch(productActions.getAllProducts(data));
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/rok0705/hnmShoppingMall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
    // dispatch(productActions.getSingleProduct(data));
  };
}

export const productAction = { getProducts, getProductDetail };
