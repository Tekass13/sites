import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import React from "react";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <React.Routes>
        <React.Route path="/" element={<Home />} />
      </React.Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>
);
