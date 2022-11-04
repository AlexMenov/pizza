import { createSlice } from "@reduxjs/toolkit";
import { initialStateProps, orderProps } from "./orderSliceProps";

const products: orderProps[] = [];

const initialState: initialStateProps = {
  products,
  quantity: 0
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity++;
    }
    , reset: (state) => {
      state.products = [];
      state.quantity = 0;
    }
  }
});

export const { addProduct, reset } = ordersSlice.actions;
export default ordersSlice.reducer;
