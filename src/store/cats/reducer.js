import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const catsAPI = "https://api.thecatapi.com/v1/images/search?limit=80";
// const APIKey = "d18e2f9a-a078-4abc-a2e2-d24e96a878a4";

export const fetchCats = createAsyncThunk(
  "cats/fetchCats",

  async function () {
    const catsResponse = await fetch(catsAPI);
    const catsData = catsResponse.json();
    return catsData;
  }
);

const catsSlice = createSlice({
  name: "cats",
  initialState: {
    catsItems: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCats.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCats.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.catsItems = action.payload;
    },
    [fetchCats.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default catsSlice.reducer;
