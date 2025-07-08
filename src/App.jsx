// src/App.jsx
import React, { useState } from "react";
import Home from "./layouts/Home";
import Templates from "./layouts/Templates";
import Navbar from "./components/Navbar";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Navbar onNavigate={setActivePage} />
      {activePage === "home" && <Home />}
      {activePage === "templates" && <Templates />}
    </>
  );
}

export default App;
