import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      let index = state.product.findIndex((x) => x._id === payload._id);
      if (index === -1) {
        state.product.push({ ...payload, qty: 1 });
      }
      // else {
      //   state.product[index].qty = state.product[index].qty + 1;
      // }
      localStorage.setItem("m-product", JSON.stringify(state.product));
    },
    removeProduct: (state, action) => {
      const { payload } = action;
      let index = state.product.findIndex((x) => x._id === payload);
      state.product.splice(index, 1);
      localStorage.setItem("m-product", JSON.stringify(state.product));
    },
    decQty: (state, action) => {
      const { payload } = action;
      let index = state.product.findIndex((x) => x._id === payload._id);
      if (index !== -1) {
        let qty = state.product[index].qty;
        if (qty === 0) {
          state.product.splice(index, 1);
        } else {
          state.product[index].qty = qty - 1;
        }
      }
      localStorage.setItem("m-product", JSON.stringify(state.product));
    },
    setCart: (state, action) => {
      const { payload } = action;
      state.product = payload;
      localStorage.setItem("m-product", JSON.stringify(state.product));
    },
    emptyCart: (state) => {
      state.product = [];
      localStorage.setItem("m-product", JSON.stringify(state.product));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, decQty, emptyCart, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
