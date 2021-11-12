// Dependencies
// =============================================================
const express = require("express");
const fs = require("fs");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});