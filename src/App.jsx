import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protected from "./Components/Protected";
import DetailDisplay from "./Page/DetailDisplay";
import DisplayImage from "./Page/DisplayImage";

import Login from "./Page/Login";
import Setting from "./Page/Setting";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route
          path="displayimage/:total"
          element={
            <Protected>
              <DisplayImage />
            </Protected>
          }
        />
        <Route
          path="display/:id"
          element={
            <Protected>
              <DetailDisplay />
            </Protected>
          }
        />
        <Route
          path="setting"
          element={
            <Protected>
              <Setting />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
