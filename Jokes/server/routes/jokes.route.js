const Joke = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes", Joke.findAllJokes);
    app.get("/api/jokes/:id", Joke.findOneJoke);
    app.get("/api/jokes/getone/random", Joke.randomJoke);
    app.post("/api/jokes/new", Joke.createNewJoke);
    app.put("/api/jokes/update/:id", Joke.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", Joke.deleteJoke);
};

