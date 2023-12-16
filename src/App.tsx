import './App.css';

import Board from './components/Board/Board';
import { useState } from 'react';

const App = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handlePlay = (nextSquares: string[]) => {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="mainWrapper">
      <h1>Hello there</h1>
      <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
    </div>
  );
};

export default App;

