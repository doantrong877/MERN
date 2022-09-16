const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
require("./server/routes/person.route")(app);

app.listen(8000, ()=>{
    console.log("Listening to port 8000");
})