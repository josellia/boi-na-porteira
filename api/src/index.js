const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost/bois");

app.use(cors());
app.use(express.json());
app.use(routes);
app.set("PORT", PORT);

// static files
app.use(express.static(path.join(__dirname, "/upload")));

module.exports = app;
