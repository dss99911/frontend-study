import React from 'react';
import logo from "../logo.svg";
import Clock from "./state/Clock";

class Square extends React.Component {
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

//this is same with the above. if there is only render method. this is more simple
function Square2(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

//this may be more straight forward.
let Square3 = (props) => (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
)

//constructor
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
}

//todo lambda way with state and props