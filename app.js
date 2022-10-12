const express = require("express");
const app = express();
const feedRoute = require("./routes/feed");

app.use("/feed", feedRoute);
app.listen(8080);
