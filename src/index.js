import React from "react";
import ReactDOM from "react-dom";

import "../public/styles.css";

import App from "./app"

const Main = (props) => {
 return (
     <App />
 )
};

ReactDOM.render(<Main />, document.getElementById("root"));
