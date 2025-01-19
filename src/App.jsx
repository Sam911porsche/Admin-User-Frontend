import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileShop from "./Components/MobileShop";
import MobileUser from "./Components/MobileUser";
import MobileAdmin from "./Components/MobileAdmin";
import Login from "./Components/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MobileShop />} />
        <Route exact path="/user" element={<MobileUser />} />
        <Route exact path="/admin" element={<MobileAdmin />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
