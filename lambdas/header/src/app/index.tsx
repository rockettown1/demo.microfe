import React from "react";
import fs from "fs";
import path from "path";
import { renderToString } from "react-dom/server";
import Header from "../components/Header";

const App = {
  loadApp: async () => {
    try {
      const data = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
      const app = renderToString(<Header />);
      const html = data.replace(`div id="root"></div>`, `div id="root">${app}</div>`);

      return {
        statusCode: 200,
        body: html,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: `<div id="root">Sorry an error occured</div>`,
      };
    }
  },
};

export default App;
