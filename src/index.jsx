import ReactDOM from "react-dom/client";
import App  from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
);
