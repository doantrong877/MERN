const express = require('express');
const app = express();


require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));


const AllJokesRoutes = require("./server/routes/jokes.route");
AllJokesRoutes(app);

app.listen(8000, () => console.log("Server is running on port 8000"));