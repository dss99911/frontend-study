import React from 'react';

//if just one line. () is not required
const element = <h1>Hello, world!</h1>;
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

//choose either "" or {}. don't use both
const element = <img src={user.avatarUrl}></img>;
const element = <div tabIndex="0"></div>;


//multiple elements
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);