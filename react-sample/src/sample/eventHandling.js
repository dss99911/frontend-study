class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }


    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    };

    //if there is at least one parameter. in this case no need ()
    handleLoginClick = id => {
        this.setState({isLoggedIn: true});
    };

    handleLogoutClick (id) {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            // this is not straightforward. but stable.
            button = <LogoutButton onClick={this.handleLogoutClick.bind(this, id)} />;
            button = <LogoutButton onClick={(e) => this.handleLogoutClick(id, e)} />;
        } else {
            // this is simplest way. but experimental
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
