import { createSlice } from "@reduxjs/toolkit";

const favouritesCatsSlice = createSlice({
  name: "favouritesCats",
  initialState: {
    favouritesCatsItems: [],
  },
  reducers: {
    setItemInState: (state, action) => {
      state.favouritesCatsItems.push(action.payload);
    },
    dontAddItemInState: (state, action) => {
      state.favouritesCatsItems = state.favouritesCatsItems.filter(
        (cat) => cat.id !== action.payload
      );
    },
  },
});

export const { setItemInState, dontAddItemInState } =
  favouritesCatsSlice.actions;
export default favouritesCatsSlice.reducer;
