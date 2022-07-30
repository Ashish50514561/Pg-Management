import React from "react";
import LoginRoute from "../Routes/LoginRoute";
import SnackBar from "../SnackBar/SnackBar";
// import Sidemenu from "./Sidemenu";
import "./homepage.css";
import Mainpage from "./Mainpage";

export default function Homepage() {
  return (
    <div className="homepage">
      {/* <Sidemenu /> */}

      <SnackBar />
      <Mainpage />
      {/* {LoginRoute()} */}
    </div>
  );
}
