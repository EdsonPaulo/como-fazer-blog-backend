"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { BASE_URL } = require("../config/environment.js");

//loading models
const Article = require("./models/article.js");

//loading routes
const ArticleRoutes = require("./routes/article.js");

const app = express();

// Encoding urls & Transform req body to json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "5mb" }));

app.use(cors());

//redirectioning routes
app.use(`${BASE_URL}/articles`, ArticleRoutes);

module.exports = app;
