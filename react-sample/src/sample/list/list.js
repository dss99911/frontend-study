function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}


const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

//separate item component
function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
                  value={number} />

    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);

// key by id. if without key, index become key. but not recommended
//https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
const todoItems = todos.map((todo) =>
    <li key={todo.id}>
        {todo.text}
    </li>
);
