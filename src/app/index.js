"use strict";
import express from "express";
import cors from "cors";
import { urlencoded, json } from "body-parser";
import { BASE_URL } from "../config/environment";

//loading routes
import ArticleRoutes from "./routes/article";

const app = express();

// Encoding urls & Transform req body to json
app.use(urlencoded({ extended: true }));
app.use(json({ limit: "5mb" }));

app.use(cors());

//redirecionamento de rotas
app.use(`${BASE_URL}/articles`, ArticleRoutes);

export default app;
