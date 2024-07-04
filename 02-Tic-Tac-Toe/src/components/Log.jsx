export default function Log({ gameTurnsArr }) {
  return (
    <ol id="log">
      {gameTurnsArr.map((turn) => {
        return (
          <li key={`${turn.sqare.row}${turn.sqare.col}`}>
            {turn.player} selected {turn.sqare.row}, {turn.sqare.col}
          </li>
        );
      })}
    </ol>
  );
}
