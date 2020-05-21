import React from "react";
const show = () => { document.getElementById("adr").innerHTML = "My Address : Ariana" }

function Address() {
  return (
    <div>
      <button className="myBtn" onClick={show}>
        Show Address
      </button>
      <p id="adr" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "2em", color: "grey" }}></p>
    </div>
  );
}

export default Address;