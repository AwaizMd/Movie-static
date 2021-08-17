import { Component } from "react";
import "./Header.css";
import Logo from "./../assets/logo.svg";
import { Button } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <img src={Logo} alt="Movie Logo" className="svg-color" />
        </div>
        <div>
            <Button variant="contained" id="login-btn">Login</Button>
        </div>
      </div>
    );
  }
}
