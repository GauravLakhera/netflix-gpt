import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    populerMovies: null,
  },
  reducers: {
    addPopulerMovies: (state, action) => {
      state.populerMovies = action.payload;
    },
  },
});
export const { addPopulerMovies } = movieSlice.actions;
export default movieSlice.reducer;
