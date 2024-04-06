const express = require("express");
const app = express();
const port = process.env.PORT || 3500;
const { readFile } = require('fs').promises;


let counter = 0;

// app.get("/api", async (req, res) => {
//     res.send(await readFile('./data/data.json', 'utf8'));
// });
app.get("/api", (req, res) => {
    res.send({message: "Hello from Mr. P " + counter + " times!!"});
    console.log("response sent!")
    counter++;
});

app.listen(port, () => console.log(`Listening on port ${port}`));