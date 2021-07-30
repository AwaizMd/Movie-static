import { Component } from "react";
import "./Header.css";
import Logo from "./../assets/logo.svg"

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <img  src={Logo} alt="Movie Logo" className="svg-color" />
            </div>
        );
    }
}