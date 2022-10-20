import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailDisplay from "./Page/DetailDisplay";
import Display from "./Page/Display";
import Login from "./Page/Login";
import Setting from "./Page/Setting";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="display" element={<Display />} />
        <Route path="display/:id" element={<DetailDisplay />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
