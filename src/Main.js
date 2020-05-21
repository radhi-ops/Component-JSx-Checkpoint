import React from "react";
import "./Main.css";
import FullName from "./Profile/FullName";
import ProfilPhoto from "./Profile/ProfilPhoto";
import Address from "./Profile/Address";

function App() {
  return (
    <div className="container">
      <ProfilPhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
