import React from "react";
import ReactDOM from "react-dom";
import DinoList from './DinoList'

const Index = () => {
  return (
    <div>
      <DinoList />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));