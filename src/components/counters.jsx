import React, { useState } from "react";
import Counter from "./counter";

const Counters = (props) => {
  return (
    <div>
      <button onClick={props.onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
