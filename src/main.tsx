import $ from "jquery";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

window.jQuery = $;
window.$ = $;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<>...Loading..</>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
