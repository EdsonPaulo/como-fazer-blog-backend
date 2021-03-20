"use strict";
const { Router } = require("express");
const {
  getArticles,
  getArticleById,
  getArticleBySlug,
  updateArticle,
  createArticle,
  deleteArticle,
} = require("../controllers/article.js");

const router = Router();

router.get("/", getArticles);
router.get("/:slug", getArticleBySlug);
router.get("/:id", getArticleById);

router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;
