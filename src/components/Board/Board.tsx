import './Board.css';

import Square from '../Square/Square';

type BoardProps = {
  xIsNext: boolean;
  squares: string[];
  onPlay: () => void;
};

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {
    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    onPlay(nextSquares);
  };
  const isBoardFull = squares.every((square) => square !== null);

  const boardSize = 3;
  const boardRows = Array.from(Array(boardSize).keys());

  return (
    <>
      {boardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="boardRow">
          {boardRows.map((col, colIndex) => {
            const squareIndex = rowIndex * boardSize + colIndex;
            return <Square key={squareIndex} value={squares[squareIndex]} onSquareClick={handleClick(squareIndex)} />;
          })}
        </div>
      ))}
    </>
  );
};

export default Board;
