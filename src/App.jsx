import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
