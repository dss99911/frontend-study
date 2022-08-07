import React from 'react';
import BaseComponent from "./base/BaseComponent";
import logo from "./logo.svg";

class VisibleImage extends BaseComponent {
    onCreateView() {
        return (
            <img src={logo} className="App-logo" alt="logo" />
        );
    }
}

export default VisibleImage