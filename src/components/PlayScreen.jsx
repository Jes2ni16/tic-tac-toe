import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playGame } from "../gameSlice";

const PlayScreen = () => {
  const { mode, rounds, isStart } = useSelector((state) => state.starter);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [draw, setDraw] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [winner, setWinner] = useState(false);
  const [gameWinner, setGameWinner] = useState("");
  console.log(mode);

  function checkWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combination of winningPattern) {
      const [a, b, c] = combination;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(true);
        return [a, b, c];
      }
    }
    return false;
  }

  function handleRestart() {
    setWinner(false);
    setDraw(false);
    setBoard(Array(9).fill(""));
    setTurn("X");
  }

  function handleClick(num) {
    if (board[num] !== "") {
      alert("It's Already Filled");
      return;
    }
    let squares = [...board];
    if (mode === 2 || 1) {
      if (turn === "X") {
        squares[num] = "X";
        setTurn("O");
      } else {
        squares[num] = "O";
        setTurn("X");
      }

      setBoard(squares);
      console.log(checkWinner(squares));
      if (checkDraw(squares)) {
        setDraw(true);
      }
      if (checkWinner(squares)) {
        if (turn === "X") {
          if (player1Score === rounds - 1) {
            alert("player1 Wins");
            window.location.reload();
          }
          setGameWinner("X");
          addScore(setPlayer1Score(player1Score + 1));
          return;
        }
        if (turn === "O") {
          if (player2Score === rounds - 1) {
            alert("player2 Wins");
            window.location.reload();
          }
          addScore(setPlayer2Score(player2Score + 1));
          setGameWinner("O");
          return;
        }
      }
      if (checkDraw(squares)) {
        setDraw(true);
      }
    }
  }

  function checkDraw(num) {
    let isEvery = num.every((item) => item !== "");
    return isEvery;
  }

  function addScore(player) {
    return (player += 1);
  }

  function Cells({ num }) {
    return (
      <td
        className="border-2 text-xl border-gray-200 h-32 w-32 mr-6 text-center"
        disabled={winner}
        onClick={() => handleClick(num)}
      >
        <strong>{board[num]}</strong>
      </td>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <p className="text-3xl my-10">Tic-Tac-Toe Game!</p>
      <div className="flex w-4/6 mx-auto justify-evenly mb-5">
        <p className="flex-2">
          Player 1 Score: <strong>{player1Score}</strong>
        </p>
        <p className="flex-2">{rounds} Rounds Game</p>
        <p className="flex-2">
          Player 2 Score: <strong>{player2Score}</strong>
        </p>
      </div>
      <p className="text-center">
        <strong>{turn} </strong> Turn
      </p>
      <table>
        {!winner && (
          <tbody>
            <tr>
              <Cells num={0} />
              <Cells num={1} />
              <Cells num={2} />
            </tr>
            <tr>
              <Cells num={3} />
              <Cells num={4} />
              <Cells num={5} />
            </tr>
            <tr>
              <Cells num={6} />
              <Cells num={7} />
              <Cells num={8} />
            </tr>
          </tbody>
        )}
      </table>
      <div className="flex flex-col justify-center items-center">
        {winner && (
          <>
            <p className="text-2xl">{gameWinner} is the Winner</p>
            <button
              onClick={handleRestart}
              className="text-white mt-7 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Restart
            </button>
          </>
        )}
        {!winner && draw && (
          <>
            <p>It's a Draw</p>
            <button
              onClick={handleRestart}
              className="text-white mt-7 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
            >
              Restart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayScreen;
