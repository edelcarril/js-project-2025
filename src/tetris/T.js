// T.js
import React from "react";

const T = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-32 h-32">
      <div className="col-start-2 row-start-1 w-7 h-7 bg-purple-500" />
      <div className="col-start-1 row-start-2 w-7 h-7 bg-purple-500" />
      <div className="col-start-2 row-start-2 w-7 h-7 bg-purple-500" />
      <div className="col-start-3 row-start-2 w-7 h-7 bg-purple-500" />
    </div>
  );
};

export default T;
