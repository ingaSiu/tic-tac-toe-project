import './Square.css';

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  isWinning: boolean | null;
};

const Square = ({ value, onSquareClick, isWinning }: SquareProps) => {
  return (
    <button className={`square ${isWinning ? 'winning' : ''}`} onClick={onSquareClick}>
      {value}
    </button>
  );
};
export default Square;
