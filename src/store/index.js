import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./cats/reducer";
import favouritesCatsReducer from "./favouritesCats/reducer";

export const store = configureStore({
  reducer: {
    cats: catsReducer,
    favouritesCats: favouritesCatsReducer,
  },
});
