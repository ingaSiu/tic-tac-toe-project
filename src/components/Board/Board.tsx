import './Board.css';

import Square from '../Square/Square';

const Board = () => {
  const boardSize = 3;
  const boardRows = Array.from(Array(boardSize).keys());

  return (
    <div>
      {boardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="boardRow">
          {boardRows.map((col, colIndex) => {
            const squareIndex = rowIndex * boardSize + colIndex;
            return <Square key={squareIndex} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;
