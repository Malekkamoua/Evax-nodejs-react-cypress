import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";

import App from "./App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

ReactDOM.render(
  <Suspense
    fallback={
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    }
  >
    <App />
  </Suspense>,
  document.getElementById("root")
);
