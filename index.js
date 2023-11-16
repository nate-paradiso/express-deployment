const express = require("express");
const app = express();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
	res.send(`<h1>Welcome to my Nate's Express App</h1>`);
});
app.get("/nate", (req, res) => {
	res.send(`<h1>Welcome to Nate's pages</h1>`);
});

app.listen(PORT, () => {
	console.log(`app running on port ${PORT}`);
});
