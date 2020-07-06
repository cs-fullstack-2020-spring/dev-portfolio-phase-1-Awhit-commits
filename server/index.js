// import express
let express = require("express");
// define server
let app = express();

// render react when backend runs
app.use(express.static('../temp-app/build'));
// send react app
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../temp-app/build/index.html'));
});
// server listening on port
let port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});