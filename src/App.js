import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import Home from "./page/Home";
import CustomHookPage from "./page/CustomHookPage";
function App() {
  return (
    <>
      <CustomHookPage />
      <Home />
    </>
  );
}

export default App;
