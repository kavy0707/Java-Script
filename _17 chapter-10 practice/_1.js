fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
        return response.json();
})
.then((contests) => {
        let data = contests
        data.forEach(element => {
                console.log("user id : ", element.userId);
                console.log("id : ", element.id);
                console.log("title: ", element.title);

        });
})