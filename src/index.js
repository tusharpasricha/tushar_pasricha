import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Post from "./components/pages/post";
import Project from "./components/pages/project";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project" element={<Project />} />
      <Route path={"/post"} element={<Post />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
