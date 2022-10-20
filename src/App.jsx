import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailDisplay from "./Page/DetailDisplay";
import DisplayImage from "./Page/DisplayImage";

import Login from "./Page/Login";
import Setting from "./Page/Setting";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="displayImage" element={<DisplayImage />} />
        <Route path="display/:id" element={<DetailDisplay />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
