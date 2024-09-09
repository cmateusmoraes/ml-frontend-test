import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

if (process.env.NODE_ENV !== "production") {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  root.render(<App />);
}
