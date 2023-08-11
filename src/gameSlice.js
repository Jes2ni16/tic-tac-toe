import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStart: false,
  mode: 1,
  rounds: 5,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    playGame: (state, action) => {
      state.isStart = action.payload;
    },
    selectMode: (state, action) => {
      state.mode = action.payload;
    },
    selectRounds: (state, action) => {
      state.rounds = action.payload;
    },
  },
});
console.log(gameSlice);

console.log(gameSlice.reducer);
export const { playGame, selectMode, selectRounds } = gameSlice.actions;

export default gameSlice.reducer;
