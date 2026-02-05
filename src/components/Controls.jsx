const Controls = ({ running, onToggle, onClear }) => (
  <div className="controls">
    <button
      className={`btn ${running ? 'stop' : 'start'}`}
      onClick={onToggle}
    >
      {running ? 'Stop' : 'Start'}
    </button>

    <button className="btn clear" onClick={onClear}>
      Clear
    </button>
  </div>
);

export default Controls;
