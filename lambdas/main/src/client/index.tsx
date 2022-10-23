import React from "react";
import ReactDOM from "react-dom/client";
import Main from "../components/Main";

ReactDOM.hydrateRoot(document.getElementById("root") as HTMLElement, <Main />);
