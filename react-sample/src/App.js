import React from 'react';
import Clock from "./sample/state/Clock";
import VisibleImage from "./VisibleImage";
import BaseComponent from "./base/BaseComponent";


class App extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {imgVisible : true}
    }

    toggleImageVisible = () => {
        this.setState((prevState) => ({
            imgVisible : !prevState.imgVisible
        }))
    }


    render() {
        return (
            <div className="App">
                <button onClick={this.toggleImageVisible}>show Image</button>
                <VisibleImage visible={this.state.imgVisible}/>
                <Clock />
            </div>
        )
    }


}
/*function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Clock />
    </div>
  );
}*/


export default App;
