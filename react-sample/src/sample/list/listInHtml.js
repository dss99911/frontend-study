function Blog(props) {
    return (
        <div>
            <ul><!--it's possible to map in html-->
                {props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
);