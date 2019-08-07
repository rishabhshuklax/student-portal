import React, { Component } from "react";
import Header from "../UI Components/Header/Header";

class Error404 extends Component {
  render() {
    return (
      <>
        <Header />
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1 style={{ color: "rgba(0,0,0,0.6)" }}>
            Error 404!!
            <br />
            Page Not Found
          </h1>
        </div>
      </>
    );
  }
}

export default Error404;
