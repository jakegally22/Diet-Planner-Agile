import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../stylesheets/progresscircle.css";

const DataItem = (props) => {
  const font1 = {
    fontSize: `${Math.round(Number(props.circleSize) / 5)}px`,
  };
  const font2 = {
    fontSize: `${Math.round(Number(props.circleSize) / 12)}px`,
  };

  return (
    <div className="progresscircle">
      <CircularProgress
        variant="determinate"
        value={props.progress}
        size={`${props.circleSize}px`}
        color="inherit"
        thickness={1.2}
      />
      <div className="progresscircle-text">
        <h2 style={font1}>{props.calories}</h2>
        <h3 style={font2}>{props.message}</h3>
      </div>
    </div>
  );
};

export default DataItem;
