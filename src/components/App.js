import React from "react";

const App = props => {
  const { value, Inc, Dec } = props;
  return (
    <div className="container row bg-secondary rounded d-flex justify-content-center p-5 ml-5">
      <div className="container col-12 d-flex justify-content-center">
        <div className="d-box bg-dark rounded text-white col-5 d-flex align-items-center justify-content-center p-3">
          Counter: <span className="text-warning ml-3">{value}</span>
        </div>
      </div>
      <button
        type="button"
        onClick={Inc}
        className="btn btn-light text-dark m-3"
      >
        Increment
      </button>
      <button
        type="button"
        onClick={Dec}
        className="btn btn-light text-dark m-3"
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
