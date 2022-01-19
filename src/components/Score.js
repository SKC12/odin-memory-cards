export const Score = (props) => {
  return (
    <div className="Score">
      <p>Current Score: {props.current}</p>
      <p>Max Score: {props.max}</p>
    </div>
  );
};
