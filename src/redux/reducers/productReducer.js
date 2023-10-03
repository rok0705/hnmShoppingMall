import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
};

// 1. Redux
function productReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_PRODUCT_DETAIL_SUCCESS":
      console.log("reducer:", payload.data);
      return { ...state, selectedItem: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;

// 2. Redux tool kit
// const productSlice = createSlice({
//   name: "product",
//   initialState: initialState,
//   reducers: {
//     getAllProducts(state, action) {
//       state.productList = action.payload.data;
//     },
//     getSingleProduct(state, action) {
//       state.selectedItem = action.payload.data;
//     },
//   },
// });

// export const productActions = productSlice.actions;
// export default productSlice.reducer;
