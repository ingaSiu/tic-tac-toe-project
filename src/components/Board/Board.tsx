import './Board.css';

import Square from '../Square/Square';
import { calculateWinner } from '../../utils/calculateWinner';

type BoardProps = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
};

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = (i: number) => {
    console.log(i);
    makeMove(squares, i, false);
  };

  const makeMove = (moveSquares: string[], i: number, isAiMove: boolean) => {
    console.log('move squares');
    console.log(moveSquares);
    if (moveSquares[i] || calculateWinner(moveSquares)) {
      return;
    }

    const nextSquares = moveSquares.slice();

    nextSquares[i] = xIsNext ? 'X' : 'O';

    console.log(isAiMove);
    if (!isAiMove) {
      const availableSquares = moveSquares
        .map((square, index) => {
          return square !== null ? index : null;
        })
        .filter((square) => square !== null);

      const availableIndex = getRandomInt(0, availableSquares.length - 1);
      console.log(nextSquares);
      makeMove(nextSquares, Number(availableSquares[availableIndex]), true);
    }
    console.log(nextSquares);
    onPlay(nextSquares);
  };
  const isBoardFull = squares.every((square) => square !== null);

  const winnerInfo = calculateWinner(squares);
  const winningLine = winnerInfo ? winnerInfo.winningLine : null;

  let status;
  if (winnerInfo) {
    status = `Winner: ${winnerInfo.winner}!`;
  } else if (isBoardFull) {
    status = 'Draw! The game is a tie!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const boardSize = 3;
  const boardRows = Array.from(Array(boardSize).keys());

  return (
    <>
      <div className="status">{status}</div>
      {boardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="boardRow">
          {boardRows.map((col, colIndex) => {
            const squareIndex = rowIndex * boardSize + colIndex;
            const isWinningSquare = winningLine && winningLine.includes(squareIndex);

            return (
              <Square
                key={squareIndex}
                value={squares[squareIndex]}
                onSquareClick={() => handleClick(squareIndex)}
                isWinning={isWinningSquare}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Board;
