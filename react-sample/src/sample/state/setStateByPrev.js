// comparing to lambda syntax. this include ( and ) on both side of {}.
// reason to add () on side of {} is that
// it's not function's {}. but object's {}. so, return value should be wrapped by ()
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));