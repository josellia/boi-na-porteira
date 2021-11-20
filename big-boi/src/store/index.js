import { configureStore } from "@reduxjs/toolkit";

import boisReducer from "./ducks/bois";
import messageReducer from "./ducks/Layout";
import cartReducer from "./ducks/cart";

export default configureStore({
  reducer: {
    bois: boisReducer,
    layout: messageReducer,
    cart: cartReducer,
  },
});
