import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import Home from "./routes/Home";
import Job from "./routes/Job";
import JobList from "./routes/JobList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="" element={<Home />} />
      <Route path="job" element={<Job />} />
      <Route path="jobList" element={<JobList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);