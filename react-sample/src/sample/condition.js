function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}

class a {
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
            </div>
        );
    }
}

class b {
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                    <LoginButton onClick={this.handleLoginClick} />
                )}
            </div>
        );
    }
}