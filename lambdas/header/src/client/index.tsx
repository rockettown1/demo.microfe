import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";

ReactDOM.hydrateRoot(document.getElementById("root") as HTMLElement, <Header />);
