import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesNames: null,
    movieResults:null,
  },
  reducers: {
    toggleShowGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResults: (state, action) => {
        const { moviesNames, movieResults } = action.payload;
        state.movieResults = movieResults;
        state.moviesNames = moviesNames;
    },
  },
});

export const { toggleShowGptSearch, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;