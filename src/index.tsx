import React from "react";
import { render } from "react-dom";
import Head from "./head";
const App = () => {
  return <Head />;
};

render(<App />, document.querySelector("#root"));
