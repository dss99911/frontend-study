import React from 'react';
class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let visible = this.props.visible;
        if (visible != null && !visible) {
            return null
        }
        return this.onCreateView()
    }

    onCreateView(){

    }
}

export default BaseComponent