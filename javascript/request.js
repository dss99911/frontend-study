


function requestPost(url, data) {

    fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => {
        console.log("Request complete! response:", res);
    });
}

requestPost("/post/data/here", {element: "barium"})