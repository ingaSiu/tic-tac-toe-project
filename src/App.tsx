import './App.css';

import Board from './components/Board/Board';
import Button from './components/Button/Button';
import { useState } from 'react';

const App = () => {
  const initialSquares = Array(9).fill(null);

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(initialSquares);

  const handlePlay = (nextSquares: string[]) => {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(initialSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="mainWrapper">
      <h1>Hello there</h1>
      <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      <Button onClick={handleReset}>Reset game!</Button>
    </div>
  );
};

export default App;

