import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "./components/Editor";
import "./userWorker";
import "./index.css";

// NOTE: createRoot を使うと 複数行選択時に delete key が効かなくなる
ReactDOM.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
  document.getElementById("root")
);
