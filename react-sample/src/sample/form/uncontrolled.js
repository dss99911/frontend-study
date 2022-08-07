/**
 * https://reactjs.org/docs/uncontrolled-components.html
 * default value : https://reactjs.org/docs/uncontrolled-components.html#default-values
 */
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" ref={this.input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

/**
 * https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
 */
class Form extends Component {
    handleSubmitClick = () => {
        const name = this._name.value;
        // do something with `name`
    }

    render() {
        return (
            <div>
                <input type="text" ref={input => this._name = input} />
                <button onClick={this.handleSubmitClick}>Sign up</button>
            </div>
        );
    }
}