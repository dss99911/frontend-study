import React from "react";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    componentDidMount() {
        fetchPosts().then(response => {
            this.setState({
                posts: response.posts
            });
        });

        fetchComments().then(response => {
            this.setState({
                comments: response.comments
            });
        });
    }

    /**
     * if data is not changed, return false, so that no rendering again.
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.users !== this.props.users;
    }
}

