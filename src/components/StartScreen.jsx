import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playGame } from "../gameSlice";
import { selectMode, selectRounds } from "../gameSlice";

const StartScreen = () => {
  const dispatch = useDispatch();
  const { mode, rounds } = useSelector((state) => state.starter);
  console.log(mode, rounds);
  console.log();

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-3xl font-bold">Welcome to Tic-tac-Toe Game!</p>
      <SelectPlayers />
      <SelectRounds />
      <button
        type="button"
        className="text-white mt-7 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => dispatch(playGame(true))}
      >
        Play Game
      </button>
    </div>
  );
};

function SelectPlayers() {
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <button
        onClick={() => dispatch(selectMode(1))}
        className="text-white mt-7 mr-10 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"
      >
        Single Player
      </button>
      <button
        onClick={() => dispatch(selectMode(2))}
        className="text-white mt-7 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
      >
        Multi-Player
      </button>
    </div>
  );
}

function SelectRounds() {
  const dispatch = useDispatch();

  return (
    <div className="flex my-10 ">
      <div class="flex items-center mr-10">
        <input
          id="inline-radio"
          type="radio"
          value={5}
          onClick={() => dispatch(selectRounds(5))}
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="inline-radio"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          5 Rounds
        </label>
      </div>
      <div className="flex items-center mrl-10">
        <input
          id="inline-2-radio"
          type="radio"
          onClick={() => dispatch(selectRounds(10))}
          name="inline-radio-group"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="inline-2-radio"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          10 Rounds
        </label>
      </div>
    </div>
  );
}

export default StartScreen;
