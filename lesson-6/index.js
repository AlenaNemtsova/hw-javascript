class DataHandler {
    constructor() {
        this.posts = [];
    }

    fetchPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.posts = data;
            })
    }

    listPosts() {
        this.posts = this.posts.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            }

            if (a.title < b.title) {
                return -1;
            }

            return 0;
        })

        return this.posts;
    };


    getPost(id) {
        if (!this.posts.some((elem) => elem.id === id)) {
            return `Post number ${id} does not exist`;
        }

        return this.posts.find((post) => post.id === id);
    }

    clearPosts() {
        this.posts = [];
    }
}

const dataHandler = new DataHandler();

dataHandler.fetchPosts()
    .then(() => {
        console.log(dataHandler.listPosts());
        console.log(dataHandler.getPost(0));
        console.log(dataHandler.getPost(70));
        dataHandler.clearPosts();
        console.log(dataHandler.listPosts());
    })
    .catch((err) => {
        console.log(err);
    });